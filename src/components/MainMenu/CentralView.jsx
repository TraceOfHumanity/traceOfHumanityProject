import React from 'react'
import { sideMenuImages } from 'utils/imagesHelper'


export const CentralView = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between pointer-events-none'>
      {sideMenuImages.map((image, index) => (
        <div
          key={index}
          className='h-full bg-no-repeat bg-contain bg-center aspect-[2/15]'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
    </div>
  )
}
