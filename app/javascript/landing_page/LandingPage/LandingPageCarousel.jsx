import React from 'react'
import SlideImage1 from './images/carousel-slide-1.jpg'
import SlideImage2 from './images/carousel-slide-2.jpg'
import SlideImage3 from './images/carousel-slide-3.jpg'

const carouselProps = { 'data-ride': "carousel"}
const prevSlideProps = { href: "#landing-page-carousel", role: "button", data: {slide: "prev"} }
const nextSlideProps = { href: "#landing-page-carousel", role: "button", data: {slide: "next"} }
const slideControlProps = {'aria-hidden': true }

const LandingPageCarousel = (props) => (~
  #landing-page-carousel.carousel.slide({...carouselProps})
    .carousel-inner
      .carousel-item.active
        %img.d-block.w-100(scr={SlideImage1})
        .carousel-caption.text-black.d-none.d-md-block
          %h1 Quality over quantity
          %p Our applications are made with the utmost care - you can be sure of their quality
      .carousel-item
        %img.d-block.w-100(scr={SlideImage2})
        .carousel-caption.d-none.d-md-block
          %h1 Your goal is ours too!
          %p We are fully committed to your project - we care about its success as much as you
      .carousel-item
        %img.d-block.w-100(scr={SlideImage3})
        .carousel-caption.text-black.d-none.d-md-block
          %h1 Innovative solutions
          %p We think about each problem individually and uniquely, we also try to provide interesting alternatives and ideas

    %a.carousel-control-prev({...prevSlideProps})
      %span.carousel-control-prev-icon({...slideControlProps})
      %span.sr-only Previous
    %a.carousel-control-next({...nextSlideProps})
      %span.carousel-control-next-icon({...slideControlProps})
      %span.sr-only Next
~)

export default LandingPageCarousel;