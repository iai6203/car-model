import type { NextPage } from 'next'

// styling
import cn from 'classnames'

// components
import CarItem from '../components/CarItem'

const Home: NextPage = () => {
  return (
    <section className={cn('w-screen h-screen')}>
      <h1 className={cn('mt-32 text-8xl text-center font-bold')}>CARS</h1>
      <ul className={cn('mt-16 px-32 grid gap-4 grid-cols-3')}>
        <CarItem title="porsche" />
        <CarItem title="fiat" />
        <CarItem title="gmc" />
      </ul>
    </section>
  )
}

export default Home
