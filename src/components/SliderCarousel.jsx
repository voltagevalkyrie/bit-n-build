import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { PortalDetail } from '../Detail/PortalDetail';

function SliderCarousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ "delay": 3000, }}
    >
      {PortalDetail.map(img => <SwiperSlide key={img.id}><img src={img.image} alt="" /></SwiperSlide>)}
    </Swiper>
  );
}

export default SliderCarousel;