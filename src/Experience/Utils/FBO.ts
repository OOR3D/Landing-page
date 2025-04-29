import * as THREE from 'three'

export default class FBO {
  private width: number
  private height: number
  private renderer: THREE.WebGLRenderer
  private simulationMaterial: THREE.ShaderMaterial
  private renderMaterial: THREE.ShaderMaterial
  private gl: WebGLRenderingContext
  public particles?: THREE.Points

  private fboScene: THREE.Scene = new THREE.Scene()
  private fboCamera: THREE.OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private fboMesh: THREE.Mesh = new THREE.Mesh()
  private renderTargetA: THREE.WebGLRenderTarget = new THREE.WebGLRenderTarget(1, 1)
  private renderTargetB: THREE.WebGLRenderTarget = new THREE.WebGLRenderTarget(1, 1)
  private currentRenderTarget: THREE.WebGLRenderTarget

  constructor(
    width: number,
    height: number,
    renderer: THREE.WebGLRenderer,
    simulationMaterial: THREE.ShaderMaterial,
    renderMaterial: THREE.ShaderMaterial
  ) {
    this.width = width
    this.height = height
    this.renderer = renderer
    this.simulationMaterial = simulationMaterial
    this.renderMaterial = renderMaterial
    this.gl = this.renderer.getContext()
    this.currentRenderTarget = this.renderTargetA

    this.init()
  }

  private init() {
    // Create data textures
    const dataTextureA = this.createDataTexture()
    const dataTextureB = this.createDataTexture()

    // Create FBO scene and camera
    this.fboScene = new THREE.Scene()
    this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.fboMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.simulationMaterial)
    this.fboScene.add(this.fboMesh)

    // Create render targets with proper settings
    const renderTargetSettings = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      stencilBuffer: false,
      depthBuffer: false
    }

    this.renderTargetA = new THREE.WebGLRenderTarget(this.width, this.height, renderTargetSettings)
    this.renderTargetB = this.renderTargetA.clone()
    this.currentRenderTarget = this.renderTargetA

    // Set initial textures
    this.simulationMaterial.uniforms.uTextureA.value = dataTextureA
    this.simulationMaterial.uniforms.uTextureB.value = dataTextureB

    // Create particles
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(this.width * this.height * 3)
    const uvs = new Float32Array(this.width * this.height * 2)

    for (let i = 0; i < this.width * this.height; i++) {
      const i3 = i * 3
      const i2 = i * 2

      // Initial positions in a sphere
      const radius = 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // UVs
      uvs[i2] = (i % this.width) / this.width
      uvs[i2 + 1] = Math.floor(i / this.width) / this.height
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

    // Create particles with render material
    this.particles = new THREE.Points(geometry, this.renderMaterial)
    
    // Set initial position texture
    this.renderMaterial.uniforms.uPositions.value = this.currentRenderTarget.texture
  }

  private createDataTexture() {
    const data = new Float32Array(this.width * this.height * 4)
    for (let i = 0; i < data.length; i += 4) {
      // Initial positions in a sphere
      const radius = 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      data[i] = radius * Math.sin(phi) * Math.cos(theta)
      data[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      data[i + 2] = radius * Math.cos(phi)
      data[i + 3] = 1.0
    }

    const texture = new THREE.DataTexture(
      data,
      this.width,
      this.height,
      THREE.RGBAFormat,
      THREE.FloatType
    )
    texture.needsUpdate = true
    return texture
  }

  update() {
    // Update simulation uniforms
    this.simulationMaterial.uniforms.uTime.value = performance.now() * 0.001

    const prevRenderTarget = this.currentRenderTarget
    this.currentRenderTarget = this.currentRenderTarget === this.renderTargetA 
      ? this.renderTargetB 
      : this.renderTargetA

    // Update simulation
    this.renderer.setRenderTarget(this.currentRenderTarget)
    this.renderer.render(this.fboScene, this.fboCamera)
    this.renderer.setRenderTarget(null)

    // Update render material with new positions
    this.renderMaterial.uniforms.uPositions.value = this.currentRenderTarget.texture
  }

  destroy() {
    this.renderTargetA.dispose()
    this.renderTargetB.dispose()
    this.fboMesh.geometry.dispose()
    if (this.particles) {
      this.particles.geometry.dispose()
      ;(this.particles.material as THREE.Material).dispose()
    }
  }
} 