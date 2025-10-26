<script setup>
import { ref } from 'vue'
import PageHeading from './PageHeading.vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

// thumnail Images
import lbc from '../assets/image/LBC.png'
import clinicwebsite from '../assets/image/ClinicWebsite.png'
import gbpaving from '../assets/image/gbPaving.png'
import newsletter from '../assets/image/newsletter.png'
import Screen4 from '../assets/image/screen1 (4).png'
import greenbrier from '../assets/image/greenbrier.png'
import dashboard1 from '../assets/image/dashboard sceren 1.png'
import martcart from '../assets/image/martcart.png'
import itech from '../assets/image/itech.png'
import hybridbatteries from '../assets/image/screencapture-localhost-63342-HybridBatteries-index-html-2023-03-31-17_24_16.png'
import todoapp from '../assets/image/todoapp.png'

// popup images
import LBC1 from '../assets/image/lbc1.png'
import LBC2 from '../assets/image/LBC2.png'
import accepted from '../assets/image/accepted.png'
import appointment from '../assets/image/appointment (1).png'

import todoapp2 from '../assets/image/todoapp2.png'
import todoapp1 from '../assets/image/todoapp1.png'

import clinic1 from '../assets/image/clinic1.png'
import clinic2 from '../assets/image/clinic2.png'
import clinic3 from '../assets/image/clinic3.png'

import dashboard2 from '../assets/image/dashboard screen 2.png'

import greenbrier2 from '../assets/image/greenbrier2.png'
import greenbrier3 from '../assets/image/greenbrier3.png'

import newsletter1 from '../assets/image/newsletter1.png'
import newsletter2 from '../assets/image/newsletter2.png'

import hybridbatteries1 from '../assets/image/hybridbatteries1.png'

import gbpaving1 from '../assets/image/gbpaving1.png'
import gbpaving2 from '../assets/image/gbpaving2.png'
import gbpaving3 from '../assets/image/gbpaving3.png'
import gbpaving4 from '../assets/image/gbpaving4.png'

import Screen1 from '../assets/image/screencapture-file-C-Users-JIN-IdeaProjects-Screens-screen1-html-2023-10-11-15_26_47.png'
import Screen2 from '../assets/image/screencapture-file-C-Users-JIN-IdeaProjects-Screens-screen2-html-2023-10-11-15_27_14.png'
// import Screen3 from '../assets/image/screencapture-file-C-Users-JIN-IdeaProjects-Screens-screen-3-html-2023-10-11-15_27_38.png'
import Screen5 from '../assets/image/screencapture-file-C-Users-JIN-IdeaProjects-Screens-screen-5-html-2023-10-11-15_29_37.png'
import Screen6 from '../assets/image/screencapture-file-C-Users-hp-IdeaProjects-Screens-screen-6-html-2025-08-03-13_13_33.png'
import Screen7 from '../assets/image/screencapture-file-C-Users-hp-IdeaProjects-Screens-Screen-7-html-2025-08-03-13_12_45.png'
import Screen8 from '../assets/image/screencapture-file-C-Users-JIN-IdeaProjects-Screens-screen-8-html-2023-10-11-15_30_29.png'

import home from '../assets/image/home.png'
import Deliveryareas from '../assets/image/Delivery areas.png'
import contactus from '../assets/image/contact us.png'
import becomemerchant from '../assets/image/become a merchant.png'
import becomerider from '../assets/image/become a rider.png'
import blog from '../assets/image/blog.png'
import blogdescription from '../assets/image/blog description.png'
import FAQ from '../assets/image/FAQ.png'
import privacypolicy from '../assets/image/privacy policy.png'



// Image gallery data
const images = [
  { src: lbc, alt: 'Liberty Pain Care', fullImages: [LBC1, LBC2, accepted, appointment], link: ' https://aimansajjad.github.io/Liberty-Pain-Care/' },
  { src: martcart, alt: 'Martcart', fullImages: [home, Deliveryareas, contactus, becomemerchant, becomerider, blog, blogdescription, FAQ, privacypolicy], link: 'https://martcart.pk/' },
  { src: clinicwebsite, alt: 'Physiotherapy Clinic', fullImages: [clinic1, clinic2, clinic3]  },
  { src: gbpaving, alt: 'GB Paving', fullImages: [gbpaving1, gbpaving2, gbpaving3, gbpaving4] },
  { src: newsletter, alt: 'Newsletters', fullImages: [newsletter1, newsletter2] },
  { src: greenbrier, alt: 'Greenbrier', fullImages: [greenbrier2, greenbrier3] },
  { src: dashboard1, alt: 'Desktop Dashboard', fullImages: [dashboard1, dashboard2] },
  { src: itech, alt: 'Itech', fullImages: [itech] },
  { src: hybridbatteries, alt: 'Hybrid batteries', fullImages: [hybridbatteries1] },
  { src: Screen4, alt: 'Desktop Application', fullImages: [Screen1, Screen2, Screen4, Screen5, Screen6, Screen7, Screen8] },
  { src: todoapp1, alt: 'To-Do App', fullImages: [todoapp2, todoapp] }
]

// 💡 Updated Swiper-enabled popup
function showPopup(image) {
  // Check if fullImages exist
  if (!image.fullImages || image.fullImages.length === 0) {//yeh line bta rhi hai k agr thumnail img ki full img nai ha to slider open nai ho ga or agr fullimages hain to slider open ho jaye ga
    return
  }

  const slidesHtml = image.fullImages
    .map(
      img => `
      
      <div class="swiper-slide flex justify-center">
        <div class="overflow-auto max-h-[80vh]">
          <img src="${img}" class="max-w-full h-auto mx-auto" />
        </div>
      </div>`
    )
    .join('')

  Swal.fire({
    title: image.alt,
    html: `
    ${image.link ? `
      <div class="mb-4 text-center">
        <a href="${image.link}" target="_blank" class="text-yellow-600 underline hover:text-yellow-800">
          Visit Live Site
        </a>
      </div>` : ''}
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          ${slidesHtml}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <style>
      .swiper-button-prev{
        color: black;
      }
      .swiper-button-next{
        color: black;
      }
      </style>
      
    `,
    showCloseButton: true,
    showConfirmButton: false,
    width: '90%',
    background: '#111',
    customClass: {
      popup: 'rounded-lg animate__animated animate__fadeInDown'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    didOpen: () => {
      new Swiper('.mySwiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  })
}
</script>


<template>

            <PageHeading fadedname="Proejcts" pagename="My Projects"/>

            <section class="w-full bg-black text-white pt-10">

                  <div class="w-full text-center bg-black">
                <p class="text-gray-300 pb-7 italic text-lg" data-aos="fade-up">
                    Explore a selection of projects from my portfolio that showcase my skills,
                     creativity, and hands-on experience.
                </p>
        </div>


                <div class="container mx-auto pt-6">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-9 space-y-3">

                        <div v-for="image in images" :key="image.src" class="relative group rounded-lg shadow-md overflow-hidden" data-aos="fade-up">

                            <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105">

                             <!-- Overlay -->
                              <div class="absolute inset-0 bg-yellow-500/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h1 class="text-white text-xl font-bold text-center px-4 font-poppins">{{ image.alt }}</h1>
                                <svg @click="showPopup(image)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 cursor-pointer" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                </svg>

                                <!-- <h3 class="text-white text-lg font-semibold text-center px-4">{{ image.alt }}</h3> -->
                            </div>

                        </div>

                    </div> <!-- grid grid-cols-1-->


                </div>

            </section>

</template>