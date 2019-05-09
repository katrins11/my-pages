/* *** *** *** *** *** GOING BETWEEN PAGES *** *** *** *** *** */
var aBtnShowPage = document.getElementsByClassName("btnSwitchPage");
for (var i = 0; i < aBtnShowPage.length; i++) {
  aBtnShowPage[i].addEventListener("click", function(){
    var aPages = document.getElementsByClassName("page");
    for (var j = 0; j < aPages.length; j++) {
      aPages[j].style.display = "none";
    }
    //Go To top
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }

    var sDataAttibute = this.getAttribute("data-showThisPage");
    localStorage.sPage = sDataAttibute;
    var showPage = localStorage.sPage;
    //console.log(sDataAttibute);
    document.getElementById(showPage).style.display = "block";
  });
}


/* *** *** *** *** *** Checking the localStorage *** *** *** *** *** */
if (localStorage.getItem("sPage") === null) {
  //console.log("Nopage!");
  localStorage.sPage = "front_page";
}


/* *** *** *** *** *** SHOW USER INFO IN RELOAD *** *** *** *** *** */
window.addEventListener("load", function(){
  //console.log("reload!!");
  if( localStorage.sPage ){
    var aBtnShowPage = document.getElementsByClassName("btnSwitchPage");
    for (var i = 0; i < aBtnShowPage.length; i++) {
      var aPages = document.getElementsByClassName("page");
      for (var j = 0; j < aPages.length; j++) {
        aPages[j].style.display = "none";
      }

      var showPage = localStorage.sPage;
      if(showPage == "about_page"){
        var imgH = document.querySelector('.middle img').width;
        //console.log(imgH);
        if(screen.width >= 480){
          var theHight = document.querySelector('.left,.right,.section');
          theHight.style.height = imgH;
        }
        else{
          var theHight = document.querySelector('.left,.right,.section');
          theHight.style.height = 'auto';
        }
      }
    }
    //console.log(showPage);
    document.getElementById(showPage).style.display = "block";
  }
}, false);

/* *** *** *** *** *** Info *** *** *** *** *** */
$(document).ready(function() {
  //PRELOADER
  $('body').toggleClass('loaded');
  setTimeout(function(){
    $('body').addClass('loaded');

  }, 2000);

  //$("#front_page").css("display", "block").delay(4000);
  // $(".header_info_title").sleep(4000);


});
$(document).ready(function() {
  $(".header_info_title").lettering();
}).delay(4000);


/* *** *** *** *** *** 3 Lines in front *** *** *** *** *** */
$(document).ready(function() {
  animation();
}, 1000);
function animation() {
  var title1 = new TimelineMax();
  title1.staggerFromTo(".header_info_title span", 0.5,
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}

/* *** *** *** *** *** For the button *** *** *** *** *** */
$(document).ready(function(){
  $('.button').each(function() {
    $(this).append('<span></span><span></span>')
  });
});


/* *** *** *** *** *** Projects *** *** *** *** *** */
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}


/* *** *** *** *** *** Eventos teclado *** *** *** *** *** */
$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
    moveToSelected('prev');
    break;
    case 39: // right
    moveToSelected('next');
    break;
    default: return;
  }
  e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});
$('#prev').click(function() {
  moveToSelected('prev');
});
$('#next').click(function() {
  moveToSelected('next');
});


/* *** *** *** *** *** INSTAGRAM *** *** *** *** *** */
$(document).ready(function(){
  var width = 400;
  height = 400;
  var numberOfBlinds = 12;
  var margin = 1;
  var colorBlack = '#222222';
  var colorWhite = '#fff';
  gapHeight = 100;

  var container = $('#container');

  container.width(width).height(height);
  var blindWidth = width / numberOfBlinds;

  images = new Array();
  $('ul li', container).each(function() {
    images.push($(this));
  });

  images[0].addClass('active');
  activeImage = 0;

  for (var i = 0; i < numberOfBlinds; i++) {
    var tempEl = $(document.createElement('span'));
    var borders = calculateBorders();

    tempEl.css({
      'left': i * blindWidth,
      border: margin + 'px solid ' + colorBlack,
      borderTop: borders.borderWidthTop + 'px solid ' + colorBlack,
      borderBottom: borders.borderWidthBottom + 'px solid ' + colorWhite,
      'height': height,
      'width': blindWidth
    });

    container.prepend(tempEl);
  };

  blinds = $('span', container);
  setTimeout(animateBorders, 1000);
});

function calculateBorders() {
  var random = Math.floor((Math.random()*9)+1);
  var borderWidthTop = (random / 10) * gapHeight;
  var borderWidthBottom = gapHeight - borderWidthTop;

  return {borderWidthTop: borderWidthTop, borderWidthBottom: borderWidthBottom};
}

function animateBorders() {
  var changeOccuredOnce = false;

  blinds.animate({
    borderTopWidth: height / 1.33,
    borderBottomWidth: height / 4
  }, 1000, function() {
    if(!changeOccuredOnce) {
      images[activeImage].removeClass('active');
      activeImage = (activeImage + 1) % images.length;
      images[activeImage].addClass('active');
      setTimeout(animateBorders, 3000);
      changeOccuredOnce = true;
    }

    var borders = calculateBorders();

    $(this).delay(300).animate({
      borderTopWidth: borders.borderWidthTop,
      borderBottomWidth: borders.borderWidthBottom
    }, 1000);
  });
}


/* *** *** *** *** *** WORD TICKER *** *** *** *** *** */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


/* *** *** *** *** *** OWL CAROUSEL *** *** *** *** *** */
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  items: 3,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
    0:{
        items:1,
        margin:10,
    },
    600:{
        items:2,
        margin:10,
    },
    1000:{
        items:3,
        margin:10,
    }
  }
});


/* *** *** *** *** *** ABOUT PAGE *** *** *** *** *** */
$(document).ready(function(){
  var $sm = 480;
  var $md = 768;

  function resizeThis() {
    $imgH = $('.middle img').width();
    if ($(window).width() >= $sm) {
      $('.left,.right,.section').css('height', $imgH);
    } else {
      $('.left,.right,.section').css('height', 'auto');
    }
  }

  resizeThis();
  $(window).on('load',function(){
     resizeThis();
  });

  $(window).resize(function(){
    resizeThis();
  });

  $(window).scroll(function() {
    $('.section').each(function(){
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();

      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = (($h/2)-($sectionH/4));

      if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
        $(this).addClass('animate');
      } else {
        $(this).removeClass('animate');
      }
    });
  });

  $('.btn-primary').click(function(){
    alert('I lied');
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* *** *** *** *** *** Button to top *** *** *** *** *** */
$('#link').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


/* *** *** *** *** *** Lines *** *** *** *** *** */
