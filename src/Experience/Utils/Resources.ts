import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import EventEmitter from './EventEmitter'

export default class Resources extends EventEmitter {
    sources: any[]
    items: { [key: string]: any }
    toLoad: number
    loaded: number
    loaders: {
        gltfLoader: GLTFLoader
        textureLoader: THREE.TextureLoader
        cubeTextureLoader: THREE.CubeTextureLoader
    }

    constructor(sources: any[]) {
        super()

        this.sources = sources

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        this.loaders = {
            gltfLoader: new GLTFLoader().setDRACOLoader(dracoLoader),
            textureLoader: new THREE.TextureLoader(),
            cubeTextureLoader: new THREE.CubeTextureLoader()
        }
    }

    startLoading() {
        // Load each source
        for(const source of this.sources) {
            if(source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'texture') {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'cubeTexture') {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source: any, file: any) {
        this.items[source.name] = file

        this.loaded++

        this.trigger('progress')

        if(this.loaded === this.toLoad) {
            this.trigger('ready')
        }
    }
} 