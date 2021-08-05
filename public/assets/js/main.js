(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
     
    select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

/********************** toggle navigation********************/

   let doc = document.documentElement;
   let w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  let header = document.getElementById('header');

  const checkScroll = () => {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };
   const toggleHeader = (direction, curScroll) => {
  // let toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) {       
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  window.addEventListener('scroll', checkScroll);

/*************** end navigation toglr ************/


/********* page loadinf ****/
/*
let loader = select('#loading');
const goLoader = () => {
   loader.style.display = 'none';
  }
window.addEventListener ("load", goLoader);
*/
/*/ loader.style.opacity = 0;
    loader.style.transform = 'scale(0)';
    window.setTimeout(function(){
      loader.style.display = 'none';
    },700);*/

let loader = select('#loading');
let anlogo = select('#preloader');    
let siteUse = 'Yes';
// Set a Cookie
const setCookie = (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}


const goLoader = () => {

 anlogo.style.display = 'none';
 loader.classList.add('h-hide');
 }
 window.addEventListener ("load", goLoader);


/*
let myCookie = getCookie("usebefore");

    if (myCookie == null) {
      // Apply setCookie
     setCookie('usebefore', siteUse, 1);
     window.addEventListener ("load", goLoader);
    }
    else {     
       anlogo.style.display = 'none';
       loader.style.display = 'none';
    } 
*/
/*

window.addEventListener('load', () => {
  const Preloader = () => {        
           // var preloader = $ ('.loader');
            anlogo.delay(1000) .fadeOut (500);
           // var preloader = $('.preloader');
            loader.delay (1500) .slideUp(500);
        }
        if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
            sessionStorage.setItem( 'doNotShow', true );
            Preloader();
        } else {
           $ ('#loading, #preloader').hide();
        }
    });


*/
















//hide("slide", { direction: "up"}, 2000);

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });



let slidercontanier = select('.swiper-container-home');
 window.addEventListener('load', () => {
   let html = document.documentElement;
  let windoheight = html.clientHeight; 
  let acheight = (windoheight - 85) + "px"
  // alert(acheight);
  // ddddddddddd
  //  slidercontanier.style.height = acheight;
  });





/************* slider new banner ************/
//$('.slider')

// var swiper = new Swiper('.swiper-container-home', {
//     speed: 1200,
//     parallax: true,
//     loop: true,
//     autoplay: {
//       delay: 10000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },

//     // If we need pagination
//      /* navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },*/
//     runCallbacksOnInit: true,
//     on: {
//     init: function () {
//      // zoomImage(this.$el);
//       moveDownText(this.$el);
//     },
//     slideNextTransitionStart: function () {
//      // zoomImage(this.$el);
//       moveDownText(this.$el);
//     },
//     slidePrevTransitionStart: function () {
//      // zoomImage(this.$el);
//       moveDownText(this.$el);
//     } 
//   }
//     });
function zoomImage(sliderDOM) {
  const slideActive = sliderDOM.find('.swiper-slide-active, .swiper-slide-duplicate-active');
  const imageSlide = slideActive.find('.slide-inner--image'); 
  
  const otherImages = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');
  const notActiveImage = otherImages.find('.slide-inner--image');  
  
  gsap.to(notActiveImage, .3, {x: 0, y: 0, opacity: 0, skewX: 0});
  
  gsap.set(imageSlide, {x: 100, y: 50, opacity: 0, skewX: 30});
  gsap.to(imageSlide, {duration: 0, x: 300, y: 0, opacity: 1});
}

function moveDownText(sliderDOM) {
  const slideActive = sliderDOM.find('.swiper-slide-active');
  const slideCaption = slideActive.find('.slide-inner--info');

  const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-prev');
  const oldCaption = oldActive.find('.slide-inner--info');

  // out
  gsap.to(oldCaption, .3, {
    ease: Power2.easeOut,
    startAt: {
      autoAlpha: 1 },

    autoAlpha: 0 });


  // in
  gsap.set(slideCaption, { autoAlpha: 0 });
  gsap.to(slideCaption, 3, {
    ease: Power4.easeOut,
    startAt: {
      autoAlpha: 0,
      y: "-150%" },

    autoAlpha: 1,
    y: "4%",
    display: "block" });

}


  /**
   * Clients Slider
   */
  // new Swiper('.clients-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 40
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 60
  //     },
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 80
  //     },
  //     992: {
  //       slidesPerView: 6,
  //       spaceBetween: 120
  //     }
  //   }
  // });


 /**
   * home Slider
   */
  // new Swiper('.slider', {
  //   speed: 2000,
  //   loop: true,
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'arrow',
  //     clickable: true
  //   }
  // });





  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });




  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-slider', {
  //   speed: 600,
  //   loop: false,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 40
  //     },

  //     1200: {
  //       slidesPerView: 1,
  //     }
  //   }
  // });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();