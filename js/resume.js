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
  // keep this json sorted in the same way of site
  var all_projects = [
        {
          "id": "ideabuilder",
          "type": "app",
          "name": "IdeaBuilder",
          "link": {
            "type": "git",
            "src": "https://github.com/PowerPaloma/Bloco-de-Ideias/"
          },
          "tags": ["iOS development","Swift", "CoreData"],
          "textSmall": "Um aplicativo que mantém ideias e orienta o usuário a evoluí-las por meio de processos criativos.",
          "textBig": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
          "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
          "prints": 7
        },
        {
          "id": "veehome",
          "type": "app",
          "name": "VeeHome",
          "link": {
            "type": "git",
            "src": "https://github.com/MartonioJunior/RuleOfThumb"
          },
          "tags": ["iOS development","UI/UX Design","Swift", "CloudKit", "watchOS"],
          "textSmall": "App that will help those people to define rules and manage meetings in their home.",
          "textBig": "<p>Living together is about harmony. We want to encourage people sharing the same house to live in an atmosphere of respect for the individuality of each other, turning every house into a home.</p>"+
          "<p>We want to promote dialogues between those people that share a home and will give them support to come to a agreement about rule which will help them to better understand each other space</p>"+
          "<p>VeeHome is an iOS app with WatchOS support that will help those people to define rules and manage meetings in their home.</p>",
          "prints": 11
        },
        {
          "id": "arretadas",
          "type": "app",
          "name": "ArretadasFGC",
          "link": {
            "type": "git",
            "src": "https://github.com/jessicalewinter/ArretadasFGC"
          },
          "tags": ["iOS development","Design","Swift"],
          "textSmall": "Rede social para mulheres compartilharem suas experiências e fortalecerem-se umas as outras.",
          "textBig": "<p>Baseado no livro de Jessica Bennett “Clube da Luta Feminista” o app Arretadas se torna uma ferramenta de suporte para as reuniões de tais clubes.</p>"+
          "<p>Nele é possível criar um usuário; criar Clubes da Luta; postar atualizações fotos e mensagens sobre os Clubes; participar de Clubes; pesquisar por Clubes perto em cidades específicas.</p>",
          "prints": 0
        },
        {
          "id": "bikestyle",
          "type": "app",
          "name": "BikeStyle",
          "link": {
            "type": "git",
            "src": "https://github.com/deboramour4/bikestyle-app"
          },
          "tags": ["iOS development","Bikes","Swift"],
          "textSmall": "App that shows all the cities of the world that have bike shared networks.",
          "textBig": "<p>People all over the world love to visit new cities and explore it. Those people love to learn more about the culture, culinary and history of a city.</p>"+
          "<p>BikeStyle it's an iOS app that shows all the cities of the world that have bike shared networks. It's gonna help both local residents and tourists to discover the beauty of their city by bike.</p>",
          "prints": 0
        // },
        // {
        //   "id": "",
        //   "type": "app",
        //   "name": "",
        //   "link": "",
        //   "link": {
        //     "type": "git",
        //     "src": ""
        //   },
        //   "tags": ["iOS development","",""],
        //   "textSmall": "",
        //   "textBig":
        //   "<p></p>"+
        //   "<p></p>",
        //   "prints": 0
        // },
        // {
        //   "id": "",
        //   "type": "app",
        //   "name": "",
        //   "link": "",
        //   "link": {
        //     "type": "git",
        //     "src": ""
        //   },
        //   "tags": ["iOS development","",""],
        //   "textSmall": "",
        //   "textBig":
        //   "<p></p>"+
        //   "<p></p>",
        //   "prints": 0
        }]


  // Create project cards in section
  for (var p in all_projects) {
    var project = all_projects[p]
    createCard(project["type"], project)
  }
  function createCard(type, project) {
      var projectsHTML = $("#"+type+"s-projects").html()
      projectsHTML += "<div class='col-sm-6 col-md-4'>"+
                  "<div class='lightbox md-trigger'>"+
                    "<img src='img/projects/"+project["id"]+"-logo.png' class='image-logo'>"+
                    "<h4>"+project["name"]+"</h4>"+
                    "<div class='chips'></div>"+
                    "<p>"+project["textSmall"]+"</p>"+
                    "<button>Details</button>"+
                  "</div>"+
              "</div>" 
      $("#"+type+"s-projects").html(projectsHTML)
    }
  
  // Create project modal trigger
  $('.md-trigger').on('click', function() {
    var index = $(".md-trigger").index(this);
    showProject(index)

    $('.md-modal').addClass('md-show');
  });
  
  $('.md-close').on('click', function() {
    $('.md-modal').removeClass('md-show');
  });


  // Project modal -----------------------
  function showProject(index) {
    for (var i in all_projects) {
      if (i == index){ 
        var project = all_projects[i]
        var projectID = project["id"]

        setProjectName(project)
        setProjectLink(project)
        setProjectLogo(project)
        setProjectDescription(project)
        setProjectTags(project)  
        setProjectPrints(project)

        // Run carrousel
        baguetteBox.run('.tz-gallery');
    
      }
    }

    function setProjectName(project) {
      $("#project-name").text(project["name"])
    }
    function setProjectLogo(project) {
      $("#project-img").attr("src", "img/projects/"+project["id"]+"-logo.png")
    }
    function setProjectDescription(project) {
      $("#project-textBig").html(project["textBig"])
    }

    function setProjectLink(project) {
      $("#project-link").attr("href", project["link"]["src"])
        switch(project["link"]["type"]) {
          case "git":
            //console.log("git")
            break;
          case "app store":
            //console.log("app store")
            break;
          case "site":
            //console.log("site")
            break;
          default:
            console.log("Error! on link type.")
        }
    }

    function setProjectTags(project) {
      var tagsHTML = ""
      for (var t in project["tags"]) {
        var tag = project["tags"][t]
        tagsHTML += "<span>"+tag+"</span>" 
      }
      $("#project-tags").html(tagsHTML)
    }

    function setProjectPrints(project) {
      var printsHTML = ""
      for (var p = 1; p <= project["prints"]; p++) {
        printsHTML += "<div class='col-sm-6 col-md-3'>"+
                          "<a class='lightbox' href='img/projects/"+projectID+"-"+p+".png'>"+
                              "<img src='img/projects/"+projectID+"-"+p+".png'>"+
                          "</a>"+
                      "</div>" 
      }
      $("#project-prints").html(printsHTML)
    }
    
  }


  
})(jQuery); // End of use strict

