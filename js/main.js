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

      const bcgdImagesMobile = Array.prototype.slice.call(
        document.querySelectorAll('div.slideshow-project.mobile')
      );

      bcgdImages.reverse();
      bcgdImagesMobile.reverse();

      const bcgdImage = bcgdImages[currentSlide];
      const bcgdImageMobile = bcgdImagesMobile[currentSlide];

      if (currentSlide >= maxSlides) {
        $(slides).fadeIn();
        $(slides).css('z-index', '-1');
        $(slide).css('z-index', currentSlide);

        $(bcgdImages).addClass('scaled');
        $(bcgdImagesMobile).addClass('scaled');

        currentSlide = 0;
      }

      slides.forEach(function(slides, index) {
        $(slide).fadeIn();
        $(slide).css('z-index', currentSlide);
        $(prevSlide).fadeOut();
      });

      bcgdImages.forEach(function(bcgdImages, index) {
        $(bcgdImage).removeClass('scaled');
        $(bcgdImageMobile).removeClass('scaled');
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

    if ($('div.content-area').is('.work-template')) {
      $('svg.logo path').css('fill', '#e66065');
      $('.main-navigation li a').css('color', '#e66065');
      $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '#000');
      $('.menu-trigger-svg line').css('stroke', '#e66065');
    }

    if ($('div.content-area').is('.home, .about-template, .project-template')) {
      if (
        $(window).width() <= 480 &&
        $('div.content-area').is('.about-template, .project-template')
      ) {
        $('svg.logo path').css('fill', '');
        $('.menu-trigger-svg line').css('stroke', '');
        $('.header-inner').css('background-color', '');
        // $('.header-inner').css('box-shadow', 'rgb(153, 153, 153) 0px 0px 4px');
      }

      $(document).on('scroll', function() {
        var currentScroll = $(document).scrollTop();
        var currentScrollOffset = currentScroll + 140;
        var colorTrigger = $('#project-waypoint').offset().top;

        console.log(currentScrollOffset);
        console.log(colorTrigger);

        if ($(window).width() >= 768 && currentScrollOffset > colorTrigger) {
          $('svg.logo path').css('fill', '#e66065');
          $('.main-navigation li a').css('color', '#e66065');
          $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '#000');
        } else if ($(window).width() >= 768 && currentScrollOffset < colorTrigger) {
          $('svg.logo path').css('fill', '');
          $('.main-navigation li a').css('color', '');
          $('.breadcrumbs-inner h4, .breadcrumbs-inner a').css('color', '');
        }

        if ($(window).width() <= 480 && colorTrigger < currentScrollOffset) {
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

    if ($(window).width() < 768 && $('div.content-area').is('work-template')) {
      $(document).on('scroll', function() {
        var currentScroll = $(document).scrollTop();
        var currentScrollOffset = currentScroll + 140;
        var colorTrigger = $('#project-waypoint').offset().top;

        $('svg.logo path').css('fill', '#e66065');
        $('.menu-trigger-svg line').css('stroke', '#e66065');
        $('.header-inner').css('background-color', '#fff');
      });
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
      $('svg.logo path').css('fill', '#e66065');
      $('.main-navigation li a').css('color', '#e66065');
      $('.menu-trigger-svg line').css('stroke', '#e66065');

      const projects = document.querySelectorAll('.is-project');
      const firstProject = projects[0];

      const workTitles = document.querySelector('.work-titles');

      firstProject.classList.add('animate-inview');
      workTitles.classList.add('animate-inview');
    }
  }

  function openNav() {
    $(document).ready(function() {
      const trigger = document.querySelector('svg.menu-trigger-svg');
      const menuMobile = document.querySelector('.menu-mobile-container');
      const menuLinkContainer = document.querySelectorAll('.menu-mobile-container ul li');
      const menuLinkContainerLinks = document.querySelectorAll('.menu-mobile-container ul li a');

      $(trigger).on('click', function() {
        $('.header-inner').css('background-color', '');
        $(menuMobile).toggleClass('active-trigger');
        $(menuLinkContainer).toggleClass('animateUp50');
        $(menuLinkContainerLinks).toggleClass('animateUpLinks');
        $(menuMobile).toggleClass('pointer-all');
        $('header').toggleClass('no-background');

        $('svg.logo path').toggleClass('white-fill');
        $(trigger).toggleClass('white-line');
      });
    });
  }

  function closeNav() {
    $(document).ready(function() {
      const trigger = document.querySelector('svg.menu-trigger-svg');
      const menuMobile = document.querySelector('.menu-mobile-container');
      const menuLinkContainer = document.querySelectorAll('.menu-mobile-container ul li');
      const menuLinkContainerLinks = document.querySelectorAll('.menu-mobile-container ul li a');

      $('.header-inner').css('background-color', '');
      $(menuMobile).removeClass('active-trigger');
      $(menuLinkContainer).removeClass('animateUp50');
      $(menuLinkContainerLinks).removeClass('animateUpLinks');
      $(menuMobile).removeClass('pointer-all');
      $('header').removeClass('no-background');

      $('svg.logo path').removeClass('white-fill');
      $(trigger).removeClass('white-line');
    });
  }

  function scrollTitles() {
    if ($('div.content-area').hasClass('project-template')) {
      // $('.site-content').addClass('smooth-container');
      $('.site-content').addClass('relative');

      $(document).on('scroll', () => {
        var pixels = $(document).scrollTop();
        // $('.smooth-container').css('top', pixels * 0.2);

        if ($('body').hasClass('post-template-default')) {
          $('.smooth-titles').css('top', pixels * -0.15);
        }
      });
    }
  }

  function projectLoad() {
    setTimeout(function() {
      $('.slideshow-inside').removeClass('scaled');
      $('.project-info-name h1, p.project-intro').addClass('animateUp');
    }, 300);
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

  function smoothTrigers() {
    const mobileTriggerLinks = document.querySelectorAll('.menu-mobile-nav ul li a');

    const mobileFirstTrigger = mobileTriggerLinks[1];
    const mobileSecondTrigger = mobileTriggerLinks[2];

    mobileFirstTrigger.classList.add('smooth-trigger');
    mobileSecondTrigger.classList.add('smooth-trigger');

    const triggerLinks = document.querySelectorAll('.main-navigation ul li a');

    const firstTrigger = triggerLinks[1];
    const secondTrigger = triggerLinks[2];

    firstTrigger.classList.add('smooth-trigger');
    secondTrigger.classList.add('smooth-trigger');
  }

  function justOnceFunctions() {
    $(document).ready(function() {
      setInterval(mainSlider, 7000);
      setInterval(mainSliderTitles, 7000);
      setInterval(circleLoader, 7000);
      smoothTrigers();

      reRunFunctions();
    });
  }

  function reRunFunctions() {
    $(document).ready(function() {
      useInView();
      firstProjectAnimate();
      progressBar();
      playVideoCursor();
      scrollTitles();
      changeHeaderColor();
      projectLoad();
      openNav();
    });
  }

  $('.main-navigation li a.smooth-trigger, .menu-mobile-nav ul li a.smooth-trigger').click(function(
    e
  ) {
    e.preventDefault();

    var href = $(this).attr('href');

    var settings = {
      anchors: 'a:not(.blacklist)',
      debug: true,
      cacheLength: 4,
      onStart: {
        duration: 700, // Duration of our animation
        render: function($container) {
          closeNav();
          $container.fadeOut(600);
          $('svg.logo path').css('fill', '#e66065');
          $('.main-navigation li a').css('color', '#e66065');
          $('.menu-trigger-svg line').css('stroke', '#e66065');
        }
      },
      onProgress: {
        duration: 1000,
        render: function() {
          console.log('progressing');
        }
      },
      onReady: {
        duration: 1000,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          content.restartCSSAnimations();
          console.log('ready');

          $container.html($newContent);
          console.log('newcontent');

          projectLoad();
          $container.fadeIn();
        }
      },
      onAfter: function() {
        reRunFunctions();
      }
    };

    var content = $('#page')
      .smoothState(settings)
      .data('smoothState');
    content.load(href);
  });

  justOnceFunctions();
});
