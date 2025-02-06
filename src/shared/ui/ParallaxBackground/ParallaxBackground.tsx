import { MouseEventHandler, ReactNode, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}

export const ParallaxBackground = ({ children }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = event => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const xOffset = (clientX / innerWidth - 0.5) * 10;
    const yOffset = (clientY / innerHeight - 0.5) * 10;

    console.log(xOffset);

    containerRef.current?.querySelectorAll<HTMLElement>('.parallax-item').forEach((item, index) => {
      const oddIndex = index % 2 === 1;

      const depth = index * 3 + 10;
      const translateX = (oddIndex ? xOffset : -xOffset) * depth;
      const translateY = (oddIndex ? yOffset : -yOffset) * depth;

      item.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    });
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} style={{ position: 'relative' }}>
      <MainContentFlashImage className='parallax-item' />
      <MainContentAwpImage className='parallax-item' />
      <MainContentPachkaImage className='parallax-item' />

      {children}
    </div>
  );
};

const MainContentFlashImage = styled.div`
  position: absolute;
  top: 123px;
  left: 130px;
  background-image: url(/images/FlashImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 420px;
  height: 420px;
  z-index: 1;

  will-change: transform;
  transition: transform 0.1 ease-in-out;

  @media (max-width: 1024px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 440px) {
    left: 30px;
    width: 180px;
    height: 180px;
  }
`;
const MainContentAwpImage = styled.div`
  position: absolute;
  top: 621px;
  right: 28px;
  background-image: url(/images/AWPImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
  z-index: 1;

  will-change: transform;
  transition: transform 0.1 ease-in-out;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const MainContentPachkaImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url(/images/PachkaImage.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 654px;
  height: 623px;
  z-index: 1;

  will-change: transform;
  transition: transform 0.1 ease-in-out;

  @media (max-width: 1024px) {
    width: 454px;
    height: 423px;
  }

  @media (max-width: 440px) {
    left: 115px;
    width: 254px;
    height: 223px;
  }
`;
