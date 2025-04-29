import * as THREE from 'three'

export default class Experience {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private particles: THREE.Points
  private particleSystem: {
    positions: Float32Array
    velocities: Float32Array
    count: number
  }

  constructor(canvas: HTMLCanvasElement) {
    // Scene
    this.scene = new THREE.Scene()

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.z = 15

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particle system
    this.particleSystem = this.createParticleSystem()
    this.particles = this.createParticles()
    this.scene.add(this.particles)

    // Handle resize
    window.addEventListener('resize', this.onResize)

    // Start animation
    this.animate()
  }

  private createParticleSystem() {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const spread = 20

    for (let i = 0; i < count * 3; i += 3) {
      // Position in a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const radius = Math.pow(Math.random(), 0.5) * spread

      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)

      // Random velocities
      velocities[i] = (Math.random() - 0.5) * 0.02
      velocities[i + 1] = (Math.random() - 0.5) * 0.02
      velocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    return { positions, velocities, count }
  }

  private createParticles() {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(this.particleSystem.positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      color: 0x5865F2, // Discord blue color
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    return new THREE.Points(geometry, material)
  }

  private updateParticles() {
    const positions = this.particles.geometry.attributes.position.array as Float32Array
    const { velocities, count } = this.particleSystem

    for (let i = 0; i < count * 3; i += 3) {
      // Update positions based on velocities
      positions[i] += velocities[i]
      positions[i + 1] += velocities[i + 1]
      positions[i + 2] += velocities[i + 2]

      // Boundary check and bounce
      for (let j = 0; j < 3; j++) {
        const idx = i + j
        if (Math.abs(positions[idx]) > 10) {
          positions[idx] *= -0.9
          velocities[idx] *= -0.9
        }
      }
    }

    this.particles.geometry.attributes.position.needsUpdate = true
  }

  private onResize = () => {
    // Update sizes
    const width = window.innerWidth
    const height = window.innerHeight

    // Update camera
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    // Update renderer
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  private animate = () => {
    requestAnimationFrame(this.animate)

    // Update particles
    this.updateParticles()

    // Slowly rotate the entire particle system
    if (this.particles) {
      this.particles.rotation.y += 0.001
      this.particles.rotation.x += 0.0005
    }

    // Render
    this.renderer.render(this.scene, this.camera)
  }

  destroy() {
    // Remove event listeners
    window.removeEventListener('resize', this.onResize)

    // Dispose of resources
    this.scene.remove(this.particles)
    this.particles.geometry.dispose()
    ;(this.particles.material as THREE.Material).dispose()
    this.renderer.dispose()
  }
} 