import { MouseEventHandler, ReactNode, useRef } from 'react';

interface IProps {
  children: ReactNode;
}

export const ParallaxEffect = ({ children }: IProps) => {
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
    <div ref={containerRef} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
};
