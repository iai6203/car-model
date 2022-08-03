import React from 'react'

// styling
import cn from 'classnames'

// components
import Link from 'next/link'

// ts
interface Props {
  title: string
}

const Index = ({ title }: Props) => {
  return (
    <li
      className={cn(
        'group w-full h-48 border-black/10 border-[1px] rounded overflow-hidden shadow transition-colors duration-200',
        'hover:cursor-pointer hover:border-black',
      )}
    >
      <Link href={`/cars/${title}`} passHref>
        <a className={cn('w-full h-full flex justify-center items-center')}>
          <h2
            className={cn(
              'text-black/40 text-5xl font-bold uppercase transition-colors duration-200',
              'group-hover:text-black',
            )}
          >
            {title}
          </h2>
        </a>
      </Link>
    </li>
  )
}

export default Index
