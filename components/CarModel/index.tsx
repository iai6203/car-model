import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// ts
interface Props {
  url: string
  scale: number
  rotation: number[]
}

const CarDetail = ({ url, scale, rotation }: Props) => {
  const model = React.useRef<any>(null)

  const { scene } = useGLTF(url, true)

  useFrame(() => {
    if (model.current) {
      model.current.rotation.y += 0.0025
    }
  })

  return (
    <React.Suspense fallback={null}>
      <primitive ref={model} object={scene} scale={scale} rotation={rotation} />
    </React.Suspense>
  )
}

export default CarDetail
