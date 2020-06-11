$(window).on('scroll', function(){
	if($(document).scrollTop() > 60) {
		$('header').addClass('navShadow');
	}
	else {
		$('header').removeClass('navShadow');
	}		
});	

$(document).ready(function () {

  "use strict";

  $('.gnb > ul > li > div:not(:has(div))').addClass('normal-sub');
  $(".gnb > ul > li").hover(
    function (e) {
      if ($(window).width() > 543) {
        $(this).children("div").fadeIn(150);
        e.preventDefault();
      }
    },
    function (e) {
      if ($(window).width() > 543) {
        $(this).children("div").fadeOut(150);
        e.preventDefault();
      }
    }
  );

  $(".gnb > ul > li").click(function () {
    var thisMenu = $(this).children("ul");
    var prevState = thisMenu.css('display');
    $(".gnb > ul > li > ul").fadeOut();
    if ($(window).width() < 543) {
      if (prevState !== 'block')
        thisMenu.fadeIn(150);
    }
  });

});

$(function () {
  //check styling
  $(".iCheck").iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red'
  });
  $('ul.item-list a, ul.color-type a').on('click', function () {
    return $(this).toggleClass('active');
  });
  //imgLiquid
  $(".imgLiquidFill").imgLiquid({
      fill: true,
      horizontalAlign: "center",
      verticalAlign: "top"
  });
  $(".imgLiquidNoFill").imgLiquid({
      fill: false,
      horizontalAlign: "center",
      verticalAlign: "50%"
  });
  
  // tab 메뉴
  $('.tabList a').click(function (e) {
    e.preventDefault();
    $('.tabList a, .tabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });
  
  // scroll top
  $('#movetop').bind('click', function () {
    $('html, body').animate({
      scrollTop: '0'
    }, 300);
  });  
  
  var swiper = new Swiper('.main-visual', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main-visual-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  var swiper = new Swiper('.best-product-list', {
    slidesPerView: 2,
    spaceBetween: 60,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.best-button-next',
      prevEl: '.best-button-prev',
    },
    simulateTouch: false,
  });  
  
  var swiper = new Swiper('.product-type-list', {
    //effect: 'fade',
    navigation: {
      nextEl: '.type-button-next',
      prevEl: '.type-button-prev',
    },
  });
  
  var swiper = new Swiper('.event-list', {
    slidesPerView: 2,
    spaceBetween: 80,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.event-button-next',
      prevEl: '.event-button-prev',
    },
    simulateTouch: false,
  });    
  
  var swiper = new Swiper('.ranking-store-list', {
    navigation: {
      nextEl: '.store-button-next',
      prevEl: '.store-button-prev',
    },
  });  
  
});

$(function () {
  // Slide In Panel - by CodyHouse.co
  var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
  if (panelTriggers.length > 0) {
    for (var i = 0; i < panelTriggers.length; i++) {
      (function (i) {
        var panelClass = 'js-cd-panel-' + panelTriggers[i].getAttribute('data-panel'),
          panel = document.getElementsByClassName(panelClass)[0];
        // open panel when clicking on trigger btn
        panelTriggers[i].addEventListener('click', function (event) {
          event.preventDefault();
          addClass(panel, 'cd-panel--is-visible');
        });
        //close panel when clicking on 'x' or outside the panel
        panel.addEventListener('click', function (event) {
          if (hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
            event.preventDefault();
            removeClass(panel, 'cd-panel--is-visible');
          }
        });
      })(i);
    }
  }

  //class manipulations - needed if classList is not supported
  //https://jaketrent.com/post/addremove-classes-raw-javascript/
  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
  }

  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }
})();