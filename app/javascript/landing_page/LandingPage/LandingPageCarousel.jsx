import React from 'react'
import SlideImage1 from './images/carousel-slide-1.jpg'
import SlideImage2 from './images/carousel-slide-2.jpg'
import SlideImage3 from './images/carousel-slide-3.jpg'

const prevSlideProps = {  }
const nextSlideProps = { href: "#landing-page-carousel", role: "button", data: {slide: "next"} }
const slideControlProps = {'aria-hidden': true }

const LandingPageCarousel = (props) => (~
  <div id='landing-page-carousel' className='carousel slide' data-ride='carousel'>
    .carousel-inner
      .carousel-item.active
        %img.d-block.w-100(src={SlideImage1})
        .carousel-caption.text-black.d-none.d-md-block
          %h1 Quality over quantity
          %p Our applications are made with the utmost care - you can be sure of their quality
      .carousel-item
        %img.d-block.w-100(src={SlideImage2})
        .carousel-caption.d-none.d-md-block
          %h1 Your goal is ours too!
          %p We are fully committed to your project - we care about its success as much as you
      .carousel-item
        %img.d-block.w-100(src={SlideImage3})
        .carousel-caption.text-black.d-none.d-md-block
          %h1 Innovative solutions
          %p We think about each problem individually and uniquely, we also try to provide interesting alternatives and ideas

    <a className='carousel-control-prev' href="#landing-page-carousel" role="button" data-slide="prev">
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      %span.sr-only Previous
    </a>
    <a className='carousel-control-next' href="#landing-page-carousel" role="button" data-slide="next">
      <span class='carousel-control-next-icon' aria-hidden='true'></span>
      %span.sr-only Next
    </a>
  </div>
~)

export default LandingPageCarousel;