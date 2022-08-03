import React from 'react'
import type { GetServerSidePropsContext } from 'next'
import { Canvas } from '@react-three/fiber'
import type * as AppTypes from '../../ts/interfaces'

// styling
import cn from 'classnames'
import { ChevronLeftIcon } from '@heroicons/react/solid'

// components
import CarModel from '../../components/CarModel'
import Link from 'next/link'

// ts
interface Props {
  model: AppTypes.CarModel
}

// misc
const car: { [key: string]: AppTypes.CarModel } = {
  fiat: {
    dir: 'fiat',
    scale: 1.1,
    rotation: [0.5, 0.75, 0.125],
  },
  gmc: {
    dir: 'gmc',
    scale: 0.6,
    rotation: [0.3, 0.6, 0.125],
  },
  porsche: {
    dir: 'porsche',
    scale: 1,
    rotation: [0.5, 0.75, 0.125],
  },
}

const CarDetail = ({ model }: Props) => {
  const { dir, scale, rotation } = model

  return (
    <>
      <Link href="/" passHref>
        <a
          className={cn(
            'fixed top-0 left-0 mt-6 ml-6 px-5 py-4 flex gap-2 items-center bg-black rounded shadow z-50',
            'hover:cursor-pointer',
          )}
        >
          <ChevronLeftIcon className={cn('w-5 h-5 text-white')} />
          <span className={cn('text-white text-sm')}>목록</span>
        </a>
      </Link>
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight intensity={2} />
        <CarModel
          url="/assets/cars/${dir}/scene.gltf"
          scale={scale}
          rotation={rotation}
        />
      </Canvas>
      <div
        className={cn(
          'fixed right-0 bottom-0 left-0 mb-20 flex justify-center',
        )}
      >
        <h6 className={cn('text-black/50 text-base font-bold tracking-wider')}>
          3D 모델을 불러오는 데 시간이 소요될 수 있습니다.
        </h6>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.query

  return {
    props: {
      model: typeof slug === 'string' ? car[slug] : null,
    },
  }
}

export default CarDetail
