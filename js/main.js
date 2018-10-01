jQuery(function($) {
  currentSlide = 1;

  function mainSlider() {
    if ($('div.content-area').hasClass('home')) {
      // General Slides
      const slides = Array.prototype.slice.call(
        document.querySelectorAll('div.slideshow-project-container')
      );
      const maxSlides = slides.length;

      slides.reverse();

      const slide = slides[currentSlide];

      const prevSlide = slides[currentSlide - 1];

      const bcgdImages = Array.prototype.slice.call(
        document.querySelectorAll('div.slideshow-project.desktop')
      );

      bcgdImages.reverse();

      const bcgdImage = bcgdImages[currentSlide];

      if (currentSlide >= maxSlides) {
        $(slides).fadeIn();
        $(slides).css('z-index', '-1');
        $(slide).css('z-index', currentSlide);

        $(bcgdImages).addClass('scaled');

        currentSlide = 0;
      }

      slides.forEach(function(slides, index) {
        $(slide).fadeIn();
        $(slide).css('z-index', currentSlide);
        $(prevSlide).fadeOut();
      });

      bcgdImages.forEach(function(bcgdImages, index) {
        $(bcgdImage).removeClass('scaled');
      });

      currentSlide = currentSlide + 1;
    }
  }

  currentTitle = 1;

  function mainSliderTitles() {
    if ($('div.content-area').hasClass('home')) {
      // H1 Titles
      const titles = Array.prototype.slice.call(document.querySelectorAll('h1.info-featured-h'));

      titles.reverse();

      const title = titles[currentTitle];
      const maxTitles = Object.keys(titles).length;

      // const prevTitle = titles[currentTitle - 1];
      // const nextTitle = titles[currentTitle + 1];

      const titlesContainer = Array.prototype.slice.call(
        document.querySelectorAll('.project-info-name')
      );

      titlesContainer.reverse();

      const titleContainer = titlesContainer[currentTitle];

      const sliderCTAS = Array.prototype.slice.call(document.querySelectorAll('.project-info-cta'));

      sliderCTAS.reverse();

      const sliderCTA = sliderCTAS[currentTitle];

      if (currentTitle >= maxTitles) {
        $(titles).removeClass('animateUp');
        $(titlesContainer).removeClass('animateUp50');
        $(sliderCTAS).removeClass('animateUpCTA');

        currentTitle = 0;

        $(title).addClass('animateUp');

        $(titleContainer).addClass('animateUp50');

        $(sliderCTA).addClass('animateUpCTA');
      }

      titles.forEach(function(titles, index) {
        $(title).addClass('animateUp');
      });

      titlesContainer.forEach(function(titlesContainer, index) {
        $(titleContainer).addClass('animateUp50');
      });

      sliderCTAS.forEach(function(sliderCTAS, index) {
        $(sliderCTA).addClass('animateUpCTA');
      });

      currentTitle = currentTitle + 1;
    }
  }

  function circleLoader() {
    if ($('div.content-area').hasClass('home')) {
      var circleLoader = document.querySelector('.main-slider-circle path');

      var circleOffset = anime.setDashoffset(circleLoader);

      circleLoader.setAttribute('stroke-dashoffset', circleOffset);
      anime({
        targets: circleLoader,
        strokeDashoffset: [circleOffset, 0],
        easing: 'easeInOutSine',
        duration: 7000,
        direction: 'alternate',
        loop: true
      });
    }
  }

  function changeHeaderColor() {
    if ($('div.content-area').is('.home, .about-template, .project-template')) {
      $('svg.logo path').css('fill', '');
      $('.main-navigation li a').css('color', '');
      $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '');
    }

    if ($('div.content-area').is('.home, .about-template, .project-template')) {
      $(document).on('scroll', function() {
        var currentScroll = $(document).scrollTop();
        var currentScrollOffset = currentScroll + 140;
        var colorTrigger = $('#project-waypoint').offset().top;

        if ($(window).width() >= 768 && currentScrollOffset > colorTrigger) {
          $('svg.logo path').css('fill', '#e66065');
          $('.main-navigation li a').css('color', '#e66065');
          $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '#000');
        } else if ($(window).width() >= 768 && currentScrollOffset < colorTrigger) {
          $('svg.logo path').css('fill', '');
          $('.main-navigation li a').css('color', '');
          $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '');
        }

        if ($(window).width() <= 480 && currentScrollOffset > colorTrigger) {
          $('svg.logo path').css('fill', '#e66065');
          $('.menu-trigger-svg line').css('stroke', '#e66065');
          $('.header-inner').css('background-color', '#fff');
          // $('.header-inner').css('box-shadow', 'rgb(153, 153, 153) 0px 0px 4px');
        } else if ($(window).width() <= 480 && currentScrollOffset < colorTrigger) {
          $('svg.logo path').css('fill', '');
          $('.header-inner').css('background-color', '');
          $('.menu-trigger-svg line').css('stroke', '');
          $('.header-inner').css('box-shadow', '');
        }
      });
    }

    if ($(window).width() > 480 && $('div.content-area').is('about-template')) {
    }
  }

  function headerOnWhite() {
    if ($('div.content-area').hasClass('work-template')) {
      $(document).ready(function() {
        $('svg.logo path').css('fill', '#e66065');
        $('.main-navigation li a').css('color', '#e66065');
        $('.menu-trigger-svg line').css('stroke', '#e66065');

        $(document).on('scroll', function() {
          var currentScroll = $(document).scrollTop();

          if ($(window).width() <= 480 && currentScroll > 0) {
            $('svg.logo path').css('fill', '#e66065');
            $('.menu-trigger-svg line').css('stroke', '#e66065');
            $('.header-inner').css('background-color', '#fff');
            // $('.header-inner').css('box-shadow', 'rgb(153, 153, 153) 0px 0px 4px');
          }
        });
      });
    }
  }

  function playVideoCursor() {
    if ($('div.content-area').hasClass('project-template')) {
      $('.video-container')
        .mouseover(function() {
          const videoContainer = document.querySelector('.video-container');

          videoContainer.addEventListener('mousemove', function(event) {
            const mouseX = event.pageX;
            const pageY = event.pageY;

            const videoY = $('.video-container').offset().top;

            mouseY = pageY - videoY;

            const cursor = document.querySelector('.play-video-cursor');

            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
            cursor.style.transition = '';
          });
        })
        .mouseout(function() {
          const cursor = document.querySelector('.play-video-cursor');

          cursor.style.left = 50 + '%';
          cursor.style.top = 50 + '%';
          cursor.style.transition = 'all .6s cubic-bezier(.23,1,.32,1)';

          console.log('off');
        });
    }
  }

  function progressBar() {
    $(document).on('ready newPageReady', function() {
      if ($('div.content-area').hasClass('project-template')) {
        const bodyTag = document.querySelector('body');
        const progressBarWidth = document.querySelector('div.progress');

        document.addEventListener('scroll', function() {
          const pixels = window.pageYOffset;
          const pageHeight = bodyTag.getBoundingClientRect().height;
          const totalScrollableDistance = pageHeight - window.innerHeight;

          const percentage = pixels / totalScrollableDistance;

          progressBarWidth.style.width = `${100 * percentage}%`;
        });
      }
    });
  }

  function useInView() {
    inView('.gallery-image, .inview-animate, .project-micellaneous div, .project-text, .xd-embed')
      .on('enter', elements => {
        elements.classList.add('animate-inview');
      })
      .on('exit', elements => {});

    inView.threshold(0.2);
  }

  function firstProjectAnimate() {
    if ($('div.content-area').hasClass('work-template')) {
      const projects = document.querySelectorAll('.is-project');
      const firstProject = projects[0];

      const workTitles = document.querySelector('.work-titles');

      firstProject.classList.add('animate-inview');
      workTitles.classList.add('animate-inview');
    }
  }

  function openNav() {
    const trigger = document.querySelector('svg.menu-trigger-svg');
    const menuMobile = document.querySelector('.menu-mobile-container');
    const menuLinkContainer = document.querySelectorAll('.menu-mobile-container ul li');
    const menuLinkContainerLinks = document.querySelectorAll('.menu-mobile-container ul li a');

    $(trigger).on('click', function() {
      $(menuMobile).toggleClass('active-trigger');
      $(menuLinkContainer).toggleClass('animateUp50');
      $(menuLinkContainerLinks).toggleClass('animateUp');
      $(menuMobile).toggleClass('pointer-all');
      $('header').toggleClass('no-background');

      $('svg.logo path').toggleClass('white-fill');
      $(trigger).toggleClass('white-line');
    });
  }

  function scrollTitles() {
    if ($('div.content-area').hasClass('project-template')) {
      $('.site-content').addClass('smooth-container');
      $('.site-content').addClass('relative');

      $(document).on('scroll', () => {
        var pixels = $(document).scrollTop();
        $('.smooth-container').css('top', pixels * 0.2);

        if ($('body').hasClass('post-template-default')) {
          // $('.smooth-titles').css('top', pixels * -0.15);
        }
      });
    }
  }

  function projectLoad() {
    if ($('div.content-area').hasClass('project-template')) {
      setTimeout(function() {
        $('.slideshow-project').removeClass('scaled');
      }, 500);
    }
  }

  function preloaderColor() {
    if ($('div.content-area').hasClass('work-template')) {
      $('.preloader-animate').css('background-color', '#fff');
    } else if ($('div.content-area').hasClass('about-template')) {
      $('.preloader-animate').css('background-color', '#e66065');
    } else if ($('div.content-area').hasClass('home')) {
      $('.preloader-animate').css('background-color', '#fff');
    } else if ($('div.content-area').hasClass('project-template')) {
      $('.preloader-animate').css('background-color', '#fff');
    }
  }

  function pageColor() {
    if ($('div.content-area').hasClass('about-template')) {
      $('.site').css('background-color', '#e66065');
    } else if ($('div.content-area').hasClass('work-template')) {
      $('.site').css('background-color', '#fff');
    }
  }

  function preloaderChange() {
    if ($('.preloader-animate').hasClass('preloader-animated')) {
      $('.preloader-animate').removeClass('preloader-animated');
    } else {
      $('.preloader-animate').addClass('preloader-animated');
    }
  }

  function justOnceFunctions() {
    $(document).ready(function() {
      setInterval(mainSlider, 7000);
      setInterval(mainSliderTitles, 7000);
      setInterval(circleLoader, 7000);

      reRunFunctions();
      openNav();
      useInView();
      changeHeaderColor();
    });
  }

  function reRunFunctions() {
    $(document).ready(function() {
      headerOnWhite();
      firstProjectAnimate();
      progressBar();
      playVideoCursor();
      projectLoad();
      scrollTitles();
    });
  }

  $('.site-branding a, .main-navigation li a, .menu-mobile-nav ul li a').click(function(e) {
    e.preventDefault();

    var href = $(this).attr('href');

    var settings = {
      anchors: 'a',
      debug: true,
      onStart: {
        duration: 500, // Duration of our animation
        render: function($container) {
          $('svg.logo path').css('fill', '#e66065');
          $('.main-navigation li a').css('color', '#e66065');
          $('.menu-trigger-svg line').css('stroke', '#e66065');

          $container.fadeOut();
        }
      },
      onReady: {
        duration: 1000,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.html($newContent);
          $container.fadeIn();
        }
      },
      onAfter: function() {
        reRunFunctions();
      }
    };

    var content = $('.site-content')
      .smoothState(settings)
      .data('smoothState');
    content.load(href);
  });

  justOnceFunctions();
});
