(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Translation ---------------------------------------------------------
  var all_langs = ["pt", "es", "en"]
  var lang = "en"

  //Initial configuration of text and flag icons
  selectLang(lang)

  function selectLang(language) {
    console.log("Language changed to "+language)
    for (var l in all_langs) {
      var actual_lang = all_langs[l]
      if (actual_lang == language){ 
        $("."+actual_lang).show()
        $("#"+actual_lang).css('opacity','1')
      } else {
        $("."+actual_lang).hide()
        $("#"+actual_lang).css('opacity','0.3')
      }
    }
  }

  // Hover flag icons
  $("#pt,#es,#en").mouseover(function () {
    fade($(this)[0].id, 1)
  })
  $("#pt,#es,#en").mouseout(function () {
    fade($(this)[0].id, 0.3)
  })
  function fade(actual_lang,scale) {
    if ( actual_lang != lang){ 
      $("#"+actual_lang).css('opacity',scale)
    }
  }

  //Select flag icon
  $("#pt,#es,#en").click(function () {
    var actual_lang = $(this)[0].id

    if (actual_lang != lang) {
      lang = actual_lang
      fade(lang, 1)
      selectLang(actual_lang)
    }
  })

  // Project Gallery ----------------------------------------------
  $('.md-trigger').on('click', function() {
    $('.md-modal').addClass('md-show');
  });
  
  $('.md-close').on('click', function() {
    $('.md-modal').removeClass('md-show');
  });

  
})(jQuery); // End of use strict

