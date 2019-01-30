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
    var index = $(".md-trigger").index(this);
    showProject(index)

    $('.md-modal').addClass('md-show');
  });
  
  $('.md-close').on('click', function() {
    $('.md-modal').removeClass('md-show');
  });

  // Project modal -----------------------
  var all_projects = [{
          "id": "ideabuilder",
          "name": "IdeaBuilder",
          "link": "https://github.com/PowerPaloma/Bloco-de-Ideias/",
          "tags": ["iOS development","Swift", "CoreData"],
          "textSmall": "Um aplicativo que mantém ideias e orienta o usuário a evoluí-las por meio de processos criativos.",
          "textBig": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
          "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
          "prints": 7},
          {
          "id": "veehome",
          "name": "VeeHome",
          "link": "https://github.com/MartonioJunior/RuleOfThumb",
          "tags": ["iOS development","UI/UX Design","Swift", "CloudKit", "watchOS"],
          "textSmall": "Um aplicativo que mantém ideias e orienta o usuário a evoluí-las por meio de processos criativos.",
          "textBig": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
          "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
          "prints": 11},
          {
          "id": "arretadas",
          "name": "ArretadasFGC",
          "link": "https://github.com/jessicalewinter/ArretadasFGC",
          "tags": ["iOS development","Design","Swift"],
          "textSmall": "Um aplicativo que mantém ideias e orienta o usuário a evoluí-las por meio de processos criativos.",
          "textBig": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
          "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
          "prints": 3},
          {
          "id": "bikestyle",
          "name": "BikeStyle",
          "link": "https://github.com/deboramour4/bikestyle-app",
          "tags": ["iOS development","Bikes","Swift"],
          "textSmall": "Um aplicativo que mantém ideias e orienta o usuário a evoluí-las por meio de processos criativos.",
          "textBig": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
          "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
          "prints": 2}
          ]


  function showProject(index) {
    for (var i in all_projects) {
      if (i == index){ 
        var project = all_projects[i]
        var projectID = project["id"]

        $("#project-name").text(project["name"])
        $("#project-link").attr("href", project["link"])
        $("#project-img").attr("src", "img/projects/"+project["id"]+"-logo.png")
        $("#project-textBig").html(project["textBig"])

        var tagsHTML = ""
        for (var t in project["tags"]) {
          var tag = project["tags"][t]
          tagsHTML += "<span>"+tag+"</span>" 
        }
        $("#project-tags").html(tagsHTML)

        var printsHTML = ""
        for (var p = 1; p <= project["prints"]; p++) {
          printsHTML += "<div class='col-sm-6 col-md-3'>"+
                            "<a class='lightbox' href='img/projects/"+projectID+"-"+p+".png'>"+
                                "<img src='img/projects/"+projectID+"-"+p+".png'>"+
                            "</a>"+
                        "</div>" 
        }
        $("#project-prints").html(printsHTML)

        // Run carrousel
        baguetteBox.run('.tz-gallery');
    
      }
    }
    
  }


  
})(jQuery); // End of use strict

