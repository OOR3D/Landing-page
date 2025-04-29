declare module '*.glsl' {
  const content: string
  export default content
}

declare module '*.vert' {
  const content: string
  export default content
}

declare module '*.frag' {
  const content: string
  export default content
}

declare module 'three/examples/jsm/postprocessing/EffectComposer.js' {
  import { WebGLRenderer, Scene, Camera, WebGLRenderTarget } from 'three'
  export class Pass {
    enabled: boolean
    needsSwap: boolean
    clear: boolean
    renderToScreen: boolean
  }
  export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget)
    addPass(pass: Pass): void
    render(deltaTime?: number): void
    setSize(width: number, height: number): void
  }
}

declare module 'three/examples/jsm/postprocessing/RenderPass.js' {
  import { Scene, Camera } from 'three'
  import { Pass } from 'three/examples/jsm/postprocessing/EffectComposer.js'
  export class RenderPass extends Pass {
    constructor(scene: Scene, camera: Camera)
  }
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass.js' {
  import { Vector2 } from 'three'
  import { Pass } from 'three/examples/jsm/postprocessing/EffectComposer.js'
  export class UnrealBloomPass extends Pass {
    constructor(resolution: Vector2, strength: number, radius: number, threshold: number)
  }
} 