import * as THREE from 'three'
import Experience from './Experience'
import FBO from './Utils/FBO'

// Import shaders as raw text
const simVertex = `
attribute vec2 uv;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`

const simFragment = `
uniform float uTime;
uniform sampler2D uTextureA;
uniform sampler2D uTextureB;
varying vec2 vUv;

void main() {
    vec4 positionInfo = texture2D(uTextureA, vUv);
    vec3 position = positionInfo.xyz;
    
    // Simple particle movement
    position.x += sin(uTime * 0.5 + position.y * 2.0) * 0.01;
    position.y += cos(uTime * 0.5 + position.x * 2.0) * 0.01;
    position.z += sin(uTime * 0.3) * 0.01;
    
    gl_FragColor = vec4(position, 1.0);
}`

const particlesVertex = `
uniform sampler2D uPositions;
uniform float uSize;
uniform float uTime;
uniform float uPixelRatio;
attribute vec2 uv;

void main() {
    vec4 positionInfo = texture2D(uPositions, uv);
    vec3 position = positionInfo.xyz;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = uSize * uPixelRatio * (1.0 / -viewPosition.z);
}`

const particlesFragment = `
void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 3.0);

    vec3 color = vec3(0.8, 0.2, 1.0);
    gl_FragColor = vec4(color, strength);
}`

export default class World {
  private experience: Experience
  private scene: THREE.Scene
  private fbo?: FBO

  constructor(experience: Experience) {
    this.experience = experience
    this.scene = this.experience.scene

    this.setupLights()
    this.setupParticles()
  }

  private setupLights() {
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
    directionalLight.position.set(1, 1, 1)
    this.scene.add(directionalLight)
  }

  private setupParticles() {
    const width = 128
    const height = 128

    // Simulation material
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTextureA: { value: null },
        uTextureB: { value: null },
      },
      vertexShader: simVertex,
      fragmentShader: simFragment,
    })

    // Render material
    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPositions: { value: null },
        uSize: { value: 3 },
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: particlesVertex,
      fragmentShader: particlesFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    // Initialize FBO
    this.fbo = new FBO(width, height, this.experience.renderer, simMaterial, renderMaterial)
    if (this.fbo.particles) {
      this.scene.add(this.fbo.particles)
    }
  }

  update() {
    if (this.fbo) {
      // Update simulation uniforms
      const simMaterial = this.fbo.particles?.material as THREE.ShaderMaterial
      if (simMaterial?.uniforms.uTime) {
        simMaterial.uniforms.uTime.value = this.experience.time.elapsed * 0.001
      }

      // Update FBO simulation
      this.fbo.update()
    }
  }

  destroy() {
    this.fbo?.destroy()
  }
} 