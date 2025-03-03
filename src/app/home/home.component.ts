import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('counterSection') counterSection!: ElementRef;

  counters = [
    { currentValue: 0, targetValue: 500, speed: 2000, suffix: '+', label: 'Research Projects' },
    { currentValue: 0, targetValue: 100, speed: 3000, suffix: '+', label: 'Training Sessions' },
    { currentValue: 0, targetValue: 85, speed: 3500, suffix: '%', label: 'Client Score' },
    { currentValue: 0, targetValue: 800, speed: 500, suffix: '+', label: 'Meetings' }
  ];

  private animated = false;

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    if (!this.animated && this.isElementInViewport(this.counterSection.nativeElement)) {
      this.animated = true;
      this.startCounter();
    }
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }

  startCounter() {
    this.counters.forEach((counter, index) => {
      let count = 0;
      let increment = counter.targetValue / 100; // Adjust for smoothness

      let interval = setInterval(() => {
        count += increment;
        this.counters[index].currentValue = Math.floor(count);

        if (count >= counter.targetValue) {
          this.counters[index].currentValue = counter.targetValue;
          clearInterval(interval);
        }
      }, counter.speed / 100);
    });
  }

  slides = [
    { image: 'assets/images/close-up-colleagues-learning-work-3.png', alt: 'Slide 1' },
    { image: 'assets/images/close-up-colleagues-learning-work-3.png', alt: 'Slide 1' },
    { image: 'assets/images/close-up-colleagues-learning-work-3.png', alt: 'Slide 1' },
    { image: 'assets/images/close-up-colleagues-learning-work-3.png', alt: 'Slide 1' },
    { image: 'assets/images/close-up-colleagues-learning-work-3.png', alt: 'Slide 1' }
  ];

  testimonials = [
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' },
    { text: '“Exceptional Service and Expertise”', textTwo: 'OVAST transformed our business strategy with their innovative solutions. Their teams expertise and dedication are unmatched.We saw immediate improvements in our operations and growth.', textThree: '- Sarah Johnson, CEO of TechSolutions' }
  ];

  ngAfterViewInit() {
    this.onWindowScroll();

    const video = this.videoRef.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(error => console.error('Autoplay blocked:', error));
    }

    new Swiper('.swiper-slider', {
      modules: [Navigation, EffectCoverflow, Pagination, Autoplay],
      autoplay: false,
      slidesPerGroup: 1,
      effect: "coverflow",
      loop: true,
      centeredSlides: true,
      spaceBetween: 60,
      slideToClickedSlide: true,
      allowTouchMove: false,
      grabCursor: false,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 2,
        slideShadows: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

    new Swiper('.swiper-testimonial', {
      modules: [Autoplay, Navigation, Pagination],
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      slidesPerGroup: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 2,
        slideShadows: true
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  }
}
