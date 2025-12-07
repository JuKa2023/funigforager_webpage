<template>
  <div ref="containerRef" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps<{
  modelPath: string
}>()

const containerRef = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let animationFrameId: number | null = null
let currentModel: THREE.Group | null = null

const initScene = () => {
  if (!containerRef.value) return

  // Scene setup
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf5f5f5)

  // Camera setup
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.set(0, 1, 3)

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  containerRef.value.appendChild(renderer.domElement)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 10, 7.5)
  directionalLight.castShadow = true
  directionalLight.shadow.camera.near = 0.1
  directionalLight.shadow.camera.far = 50
  scene.add(directionalLight)

  // Add a subtle fill light from the opposite side
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3)
  fillLight.position.set(-5, 5, -5)
  scene.add(fillLight)

  // Controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 1
  controls.maxDistance = 10
  controls.target.set(0, 0.5, 0)
  controls.update()

  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    if (controls) controls.update()
    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    }
  }
  animate()

  // Handle window resize
  const handleResize = () => {
    if (!containerRef.value || !camera || !renderer) return
    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', handleResize)
}

const loadModel = (path: string) => {
  if (!scene || !path) return

  // Remove existing model
  if (currentModel) {
    scene.remove(currentModel)
    currentModel = null
  }

  // Construct the full path to the GLB file in the public folder
  const modelUrl = `/mushroom/${path}`

  const loader = new GLTFLoader()
  loader.load(
    modelUrl,
    (gltf) => {
      currentModel = gltf.scene

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(currentModel)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Center the model
      currentModel.position.sub(center)

      // Scale to fit in view (adjust this value as needed)
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      currentModel.scale.multiplyScalar(scale)

      // Enable shadows
      currentModel.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          node.castShadow = true
          node.receiveShadow = true
        }
      })

      if (scene) {
        scene.add(currentModel)
      }

      // Adjust camera and controls target
      if (controls) {
        controls.target.set(0, 0, 0)
        controls.update()
      }
    },
    (progress) => {
      // Optional: handle loading progress
      console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
    },
    (error) => {
      console.error('Error loading model:', error)
      console.log('Model URL:', modelUrl)
      console.log('Path:', path)
    }
  )
}

const cleanup = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (controls) {
    controls.dispose()
  }
  if (renderer) {
    renderer.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }
  scene = null
  camera = null
  renderer = null
  controls = null
  currentModel = null
}

onMounted(() => {
  initScene()
  if (props.modelPath) {
    loadModel(props.modelPath)
  }
})

onUnmounted(() => {
  cleanup()
})

// Watch for model path changes
watch(() => props.modelPath, (newPath) => {
  if (newPath) {
    loadModel(newPath)
  }
})
</script>

<style scoped>
div {
  position: relative;
}
</style>
