'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export const HeaderTilt = () => {
  return (
    <div className="p-5" draggable={false}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        scale={1.2}
        // glareColor={'#9089fc'}
      >
        <div className="lg:w-[420px] lg:h-[420px] rounded-md bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] shrink-0 cursor-grab">
          <Image
            draggable={false}
            src={'/images/header.jpg'}
            alt="header image"
            width={800}
            height={800}
            className="object-cover w-full h-full p-2 overflow-hidden rounded-md"
          />
        </div>
      </Tilt>
    </div>
  );
};
