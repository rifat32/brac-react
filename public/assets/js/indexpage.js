window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-64W9W75RV9');

/*


function removedLoader() {
  let load = document.querySelector("#loading");
  load.style.display='none';
}*/
var BRACITS = {};    
(function ($) {
    "use strict";
    BRACITS.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (THEMEMASCOT.isMobile.Android() || THEMEMASCOT.isMobile.BlackBerry() || THEMEMASCOT.isMobile.iOS() || THEMEMASCOT.isMobile.Opera() || THEMEMASCOT.isMobile.Windows());
        }
    };

    BRACITS.isRTL = {
        check: function() {
            if( $( "html" ).attr("dir") == "rtl" ) {
                return true;
            } else {
                return false;
            }
        }
    };

    BRACITS.urlParameter = {
        get: function(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        }
    };
  var tpj=jQuery;
  var $ = jQuery.noConflict();
  tpj(document).ready(function() {
  tpj('.owl-carousel-3col').each(function() {
                var data_dots = ( tpj(this).data("dots") === undefined ) ? false: tpj(this).data("dots");
                var data_nav = ( tpj(this).data("nav")=== undefined ) ? false: tpj(this).data("nav");
                var data_duration = ( tpj(this).data("duration") === undefined ) ? 4000: tpj(this).data("duration");
                tpj(this).owlCarousel({
                    rtl: BRACITS.isRTL.check(),
                    autoPlay: true,
                    autoplayTimeout: data_duration,
                    loop: true,
                    items: 3,
                    margin: 15,
                    dots: data_dots,
                    navigation: data_nav,
                    navigationText: ["<i class='bi'><img src='assets/img/arrowleft.svg'/></i></i>","<i class='bi '><img src='assets/img/arrow-20@2x.svg'/></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        480: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        750: {
                            items: 2,
                            center: false
                        },
                        960: {
                            items: 2
                        },
                        1170: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        }
                    }
                });
            });

});


tpj(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   //$('#preloader').fadeOut();
});

})(jQuery);