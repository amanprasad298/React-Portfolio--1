import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'





const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis vero illo repudiandae eaque veniam quibusdam inventore, exercitationem ipsa autem ex nostrum, sint asperiores pariatur fugiat ipsam tempore blanditiis officia.'
  },
  {
    avatar: AVTR2,
    name: 'Stuart Little',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis vero illo repudiandae eaque veniam quibusdam inventore, exercitationem ipsa autem ex nostrum, sint asperiores pariatur fugiat ipsam tempore blanditiis officia.'
  },
  {
    avatar: AVTR3,
    name: 'Crazy dogg',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis vero illo repudiandae eaque veniam quibusdam inventore, exercitationem ipsa autem ex nostrum, sint asperiores pariatur fugiat ipsam tempore blanditiis officia.'
  },
  {
    avatar: AVTR4,
    name: 'Bad Bitch',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis vero illo repudiandae eaque veniam quibusdam inventore, exercitationem ipsa autem ex nostrum, sint asperiores pariatur fugiat ipsam tempore blanditiis officia.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" spaceBetween={40}
      slidesPerView={1}
      centeredSlides>

        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className="client_review">
                {review}
              </small>  
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>

    </section>
  )
}

export default Testimonials