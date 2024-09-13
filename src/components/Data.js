import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@carbon/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import a from '../assets/pics/a.jpg';
import b from '../assets/pics/b.jpg';
import c from '../assets/pics/c.jpg';
import d from '../assets/pics/d.jpg';
import e from '../assets/pics/e.jpg';
import f from '../assets/pics/f.jpg';
import g from '../assets/pics/g.jpg';
import h from '../assets/pics/h.jpg';
import j from '../assets/pics/j.jpg';
import k from '../assets/pics/k.jpg';
import l from '../assets/pics/l.jpg';
import m from '../assets/pics/m.jpg';
import n from '../assets/pics/n.jpg';
import o from '../assets/pics/o.jpg';
import p from '../assets/pics/p.jpg';
import q from '../assets/pics/q.jpg';
import r from '../assets/pics/r.jpg';
import s from '../assets/pics/s.jpg';
import t from '../assets/pics/t.jpg';
import v from '../assets/pics/v.jpg';
import w from '../assets/pics/w.jpg';
import x from '../assets/pics/x.jpg';
import y from '../assets/pics/y.jpg';
import z from '../assets/pics/z.jpg';
import aa from '../assets/pics/aa.jpg';
import ab from '../assets/pics/ab.jpg';
import ac from '../assets/pics/ac.jpg';
import ad from '../assets/pics/ad.jpg';
import ae from '../assets/pics/ae.jpg';
import af from '../assets/pics/af.jpg';
import ag from '../assets/pics/ag.jpg';
import ah from '../assets/pics/ah.jpg';
import ai from '../assets/pics/ai.jpg';
import aj from '../assets/pics/aj.jpg';
import ak from '../assets/pics/ak.jpg';
import al from '../assets/pics/al.jpg';
import am from '../assets/pics/am.jpg';
import an from '../assets/pics/an.jpg';
import ao from '../assets/pics/ao.jpg';
import ap from '../assets/pics/ap.jpg';
import aq from '../assets/pics/aq.jpg';
import ar from '../assets/pics/ar.jpg';
import as from '../assets/pics/as.jpg';
import at from '../assets/pics/at.jpg';
import au from '../assets/pics/au.jpg';
import av from '../assets/pics/av.jpg';
import aw from '../assets/pics/aw.jpg';
import ax from '../assets/pics/ax.jpg';

function Data() {
  // State with image data
  const images = [
    { id: 1, name: 'a', src: a },
    { id: 2, name: 'b', src: b },
    { id: 3, name: 'c', src: c },
    { id: 4, name: 'd', src: d },
    { id: 5, name: 'e', src: e },
    { id: 6, name: 'f', src: f },
    { id: 7, name: 'g', src: g },
    { id: 8, name: 'h', src: h },
    { id: 10, name: 'j', src: j },
    { id: 11, name: 'k', src: k },
    { id: 12, name: 'l', src: l },
    { id: 13, name: 'm', src: m },
    { id: 14, name: 'n', src: n },
    { id: 15, name: 'o', src: o },
    { id: 16, name: 'p', src: p },
    { id: 17, name: 'q', src: q },
    { id: 18, name: 'r', src: r },
    { id: 19, name: 's', src: s },
    { id: 20, name: 't', src: t },
    { id: 22, name: 'v', src: v },
    { id: 23, name: 'w', src: w },
    { id: 24, name: 'x', src: x },
    { id: 25, name: 'y', src: y },
    { id: 26, name: 'z', src: z },
    { id: 27, name: 'aa', src: aa },
    { id: 28, name: 'ab', src: ab },
    { id: 29, name: 'ac', src: ac },
    { id: 30, name: 'ad', src: ad },
    { id: 31, name: 'ae', src: ae },
    { id: 32, name: 'af', src: af },
    { id: 33, name: 'ag', src: ag },
    { id: 34, name: 'ah', src: ah },
    { id: 35, name: 'ai', src: ai },
    { id: 36, name: 'aj', src: aj },
    { id: 37, name: 'ak', src: ak },
    { id: 38, name: 'al', src: al },
    { id: 39, name: 'am', src: am },
    { id: 40, name: 'an', src: an },
    { id: 41, name: 'ao', src: ao },
    { id: 42, name: 'ap', src: ap },
    { id: 43, name: 'aq', src: aq },
    { id: 44, name: 'ar', src: ar },
    { id: 45, name: 'as', src: as },
    { id: 46, name: 'at', src: at },
    { id: 47, name: 'au', src: au },
    { id: 48, name: 'av', src: av },
    { id: 49, name: 'aw', src: aw },
    { id: 50, name: 'ax', src: ax }
  ];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='images'>
      <h2 style={{ color: "#ddd", marginLeft: "3%" }}>SOME OF OUR PRETTIED CUSTOMERS</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className='image'>
            <img
              src={image.src}
              height={300}
              width={380}
              alt={image.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <center>
      <div className='button-group'>
      <Button  style={{marginRight:"30%"}}  onClick={handlePrevSlide} >Previous</Button>
      <Button onClick={handleNextSlide} >Next</Button>
      </div>
      </center>
      
      
    </div>
  );
}

export default Data;
