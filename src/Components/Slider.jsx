
'use client'
import autoPlay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselItem,
  CarouselSlides,
} from 'keep-react'
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
export const CarouselComponent = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
      <CarouselSlides>
        {[p1, p2, p3, p4].map((slide) => (
          <CarouselItem key={slide}>
            <div className="flex items-center justify-center rounded-xl border h-[500px] ">
              <img src={slide} className=" w-full " />
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
    </Carousel>
  )
}
