import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';


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

import unheart from '../assets/pics/unheart.svg';


function Data() {
  // State with image data
  const [images]=useState( [
    { id: 1, name: 'a', src: a , like: unheart, isLiked: false},
    { id: 2, name: 'b', src: b , like: unheart, isLiked: false},
    { id: 3, name: 'c', src: c , like: unheart, isLiked: false},
    { id: 4, name: 'd', src: d , like: unheart, isLiked: false},
    { id: 5, name: 'e', src: e , like: unheart, isLiked: false },
    { id: 6, name: 'f', src: f , like: unheart, isLiked: false},
    { id: 7, name: 'g', src: g , like: unheart, isLiked: false},
    { id: 8, name: 'h', src: h , like: unheart, isLiked: false},
    { id: 10, name: 'j', src: j , like: unheart, isLiked: false},
    { id: 11, name: 'k', src: k , like: unheart, isLiked: false},
    { id: 12, name: 'l', src: l , like: unheart, isLiked: false},
    { id: 13, name: 'm', src: m , like: unheart, isLiked: false},
    { id: 14, name: 'n', src: n , like: unheart, isLiked: false},
    { id: 15, name: 'o', src: o , like: unheart, isLiked: false},
    { id: 16, name: 'p', src: p , like: unheart, isLiked: false},
    { id: 17, name: 'q', src: q , like: unheart, isLiked: false},
    { id: 18, name: 'r', src: r , like: unheart, isLiked: false},
    { id: 19, name: 's', src: s , like: unheart, isLiked: false},
    { id: 20, name: 't', src: t , like: unheart, isLiked: false},
    { id: 22, name: 'v', src: v , like: unheart, isLiked: false},
    { id: 23, name: 'w', src: w , like: unheart, isLiked: false},
    { id: 24, name: 'x', src: x , like: unheart, isLiked: false},
    { id: 25, name: 'y', src: y , like: unheart, isLiked: false},
    { id: 26, name: 'z', src: z , like: unheart, isLiked: false},
    { id: 27, name: 'aa', src: aa , like: unheart, isLiked: false},
    { id: 28, name: 'ab', src: ab , like: unheart, isLiked: false},
    { id: 29, name: 'ac', src: ac , like: unheart, isLiked: false},
    { id: 30, name: 'ad', src: ad , like: unheart, isLiked: false},
    { id: 31, name: 'ae', src: ae , like: unheart, isLiked: false},
    { id: 32, name: 'af', src: af , like: unheart, isLiked: false},
    { id: 33, name: 'ag', src: ag , like: unheart, isLiked: false},
    { id: 34, name: 'ah', src: ah , like: unheart, isLiked: false},
    { id: 35, name: 'ai', src: ai , like: unheart, isLiked: false},
    { id: 36, name: 'aj', src: aj , like: unheart, isLiked: false},
    { id: 37, name: 'ak', src: ak , like: unheart, isLiked: false},
    { id: 38, name: 'al', src: al , like: unheart, isLiked: false},
    { id: 39, name: 'am', src: am , like: unheart, isLiked: false},
    { id: 40, name: 'an', src: an , like: unheart, isLiked: false},
    { id: 41, name: 'ao', src: ao , like: unheart, isLiked: false},
    { id: 42, name: 'ap', src: ap , like: unheart, isLiked: false},
    { id: 43, name: 'aq', src: aq , like: unheart, isLiked: false},
    { id: 44, name: 'ar', src: ar , like: unheart, isLiked: false},
    { id: 45, name: 'as', src: as , like: unheart, isLiked: false},
    { id: 46, name: 'at', src: at , like: unheart, isLiked: false},
    { id: 47, name: 'au', src: au , like: unheart, isLiked: false},
    { id: 48, name: 'av', src: av , like: unheart, isLiked: false},
    { id: 49, name: 'aw', src: aw , like: unheart, isLiked: false},
    { id: 50, name: 'ax', src: ax , like: unheart, isLiked: false}
  ]);

  
  const swiperRef = useRef(null);
 
  
  
  return (
    <div className='images mb-5  bg-dark p-2 shadow rounded  container '>
    <center>  <h2 class="h-3 p-2 text-white ">We Have Evidence For The Activities Here.</h2></center>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className=''>
            <div className="image-container">
              <img

                src={image.src}
                height="100%"
                width="100%"
                alt={image.name}
                style={{objectFit:"cover"}}
                class="rounded"
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Toast notification container */}
      
    </div>
  );
}

export default Data;