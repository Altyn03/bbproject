import { cardsData } from '@/shared/constants/cardsMockData';
import { Card } from '@/shared/ui/SwiperUI';
import SwiperNextButton from '@public/images/SwiperNextButton.svg';
import SwiperPrevButton from '@public/images/SwiperPrevButton.svg';
import { useRef } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CardSwiper = () => {
  const sliderRef = useRef<any>(null);

  const onClickButtonPrevHandler = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const onClickButtonNextHandler = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <SwiperContainer>
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}>
        {cardsData.map(card => (
          <SwiperSlide key={card.id}>
            <Card cardData={card} />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationButtonPrev onClick={onClickButtonPrevHandler}>
        <SwiperPrevButton />
      </NavigationButtonPrev>

      <NavigationButtonNext onClick={onClickButtonNextHandler}>
        <SwiperNextButton />
      </NavigationButtonNext>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  position: relative;
  max-width: 1240px;

  @media (max-width: 1440px) {
    max-width: 930px;
  }
  @media (max-width: 1024px) {
    max-width: 620px;
  }
  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 42%;
  cursor: pointer;
  width: 54px;
  height: 54px;
  z-index: 2;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

const NavigationButtonPrev = styled(NavigationButton)`
  left: -28px;
`;
const NavigationButtonNext = styled(NavigationButton)`
  right: -28px;
`;
