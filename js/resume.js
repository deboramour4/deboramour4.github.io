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

  // Project Gallery ----------------------------------------------
  // keep this json sorted in the same way of site
  var all_projects = [
        {
          "id": "ideabuilder",
          "type": "app",
          "name": "IdeaBuilder",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/PowerPaloma/Bloco-de-Ideias/"
          },
          "tags": ["iOS development","Swift", "CoreData"],
          "textSmall": {
            "en": "An app that keep ideas and help user to improve them.",
            "pt": "Um aplicativo que guarda ideias e ajuda o usuário a melhorá-las.",
            "es": "Una aplicación que mantiene las ideas y ayuda al usuario a mejorarlas."
          },
          "textBig": {
            "en": "<p>We are all able to be creative. We have creative ideas all the time, some of them have the power to change the world. It is common to have ideas at unexpected times, like in the bus that goes to the school. When we got home, we do not remember the idea anymore.</p>"+
                  "<p> Thinking about these people, we've created IdeaBuilder, which is an iOS app that keeps your great ideas saved. You can create custom topics for an idea such as images, text, and drawing. You can also get some suggestions to improve your idea. </p>",
            "pt": "<p>Somos todos capazes de ser criativos. E nós temos ideias criativas o tempo todo. E alguns deles têm o poder de mudar o mundo. É comum ter idéias em nosso tempo livre, como no ônibus que vai para a faculdade. Quando chegamos em casa, não nos lembramos mais da ideia.</p>"+
                  "<p>Pensando nessas pessoas criamos o IdeaBuilder, que é um aplicativo para iOS que mantém suas ideias incríveis salvas. Você pode criar tópicos personalizados para uma ideia, como imagens, texto e desenho. Você também pode obter algumas sugestões para desenvolver melhor sua ideia.</p>",
            "es": "<p> Todos somos capaces de ser creativos. Tenemos ideas creativas todo el tiempo, algunas de ellas tienen el poder de cambiar el mundo. Es común tener ideas en momentos inesperados, como en el autobús que va a la escuela. Cuando llegamos a casa, ya no recordamos la idea. </p> "+
                  "<p> Pensando en estas personas, hemos creado IdeaBuilder, que es una aplicación de iOS que mantiene tus grandes ideas guardadas. Puedes crear temas personalizados para una idea como imágenes, texto y dibujos. También puedes obtener algunas sugerencias para mejorar tu idea. </p> "
          },
          "prints": 7
        },
        {
          "id": "veehome",
          "type": "app",
          "name": "VeeHome",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/MartonioJunior/RuleOfThumb"
          },
          "tags": ["iOS development","UI/UX Design","Swift", "CloudKit", "watchOS"],
          "textSmall": {
            "en": "App that will help people to define rules and manage meetings in their home.",
            "pt": "App que ajudará essas pessoas a definir regras e gerenciar reuniões em sua casa.",
            "es": "App que ayudará a las personas a definir reglas y administrar reuniones en su casa."
          },
          "textBig": {
            "en": "<p>Living together is about harmony. We want to encourage people sharing the same house to live in an atmosphere of respect for the individuality of each other, turning every house into a home.</p>"+
                  "<p>We want to promote dialogues between those people that share a home and will give them support to come to a agreement about rule which will help them to better understand each other space</p>"+
                  "<p>VeeHome is an iOS app with WatchOS support that will help those people to define rules and manage meetings in their home.</p>",
            "pt": "<p>Conviver é sobre harmonia. Queremos encorajar as pessoas que compartilham a mesma casa a viver em uma atmosfera de respeito pela individualidade de cada uma, transformando cada casa em um lar.</p>" +
                  "<p>Queremos promover diálogos entre as pessoas que compartilham uma casa e dar-lhes apoio para chegar a um acordo sobre a regra que os ajudará a entender melhor o espaço uns dos outros.</p>" +
                  "<p>O VeeHome é um aplicativo para iOS com suporte a WatchOS que ajudará essas pessoas a definir regras e gerenciar reuniões em sua casa. </p>",
            "es": "<p> Vivir juntos se trata de armonía. Queremos animar a las personas que comparten la misma casa a vivir en una atmósfera de respeto por la individualidad de cada uno. </p>" +
                  "<p> Queremos promover diálogos entre aquellas personas que comparten una casa y les daremos apoyo para llegar a un acuerdo sobre las reglas que les ayudarán a entenderse mejor el espacio entre ellas </p>" +
                  "<p> VeeHome es una aplicación de iOS con soporte de WatchOS que ayudará a esas personas a definir reglas y administrar reuniones en su casa. </p>"
          },
          "prints": 11
        },
        {
          "id": "arretadas",
          "type": "app",
          "name": "ArretadasFGC",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/jessicalewinter/ArretadasFGC"
          },
          "tags": ["iOS development","Design","Swift"],
          "textSmall": {
            "en": "Social network for women to share their experiences and strengthen each other. ",
            "pt": "Rede social para mulheres compartilharem suas experiências e fortalecerem-se umas as outras.",
            "es": "Red social para que las mujeres compartan sus experiencias y se fortalezcan mutuamente."
          },
          "textBig": {
            "en": "<p>Based on Jessica Bennett's book 'Feminist Fight Club' the Arretadas app becomes a support tool for the meetings of such clubs. </p>" +
                  "<p>It is possible to create a user, create Fight Clubs, post updates photos and messages about clubs, participate in clubs, search for nearby clubs in specific cities.</p>",
            "pt": "<p>Baseado no livro de Jessica Bennett “Clube da Luta Feminista” o app Arretadas se torna uma ferramenta de suporte para as reuniões de tais clubes.</p>"+
                  "<p>Nele é possível criar um usuário; criar Clubes da Luta; postar atualizações fotos e mensagens sobre os Clubes; participar de Clubes; pesquisar por Clubes perto em cidades específicas.</p>",
            "es": "<p> Basado en el libro de Jessica Bennett \"Club de la Lucha Feminista\" el app Arretadas se convierte en una herramienta de soporte para las reuniones de tales clubes. </p>" +
                  "<p> En él es posible crear un usuario, crear Clubes de la Lucha, publicar actualizaciones fotos y mensajes sobre los Clubes, participar en Clubes, buscar por Clubes cerca en ciudades específicas.</p>"
          },
          "prints": 6
        },
        {
          "id": "bikestyle",
          "type": "app",
          "name": "BikeStyle",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/bikestyle-app"
          },
          "tags": ["iOS development","Bikes","Swift"],
          "textSmall": {
            "en": "App that shows all the cities of the world that have bike shared networks.",
            "pt": "App que mostra todas as cidades do mundo que possuem redes compartilhadas de bicicleta.",
            "es": "App que muestra todas las ciudades del mundo que poseen redes compartidas en bicicleta."
          },
          "textBig": {
            "en": "<p>People all over the world love to visit new cities and explore it. Those people love to learn more about the culture, culinary and history of a city.</p>"+
                  "<p>BikeStyle it's an iOS app that shows all the cities of the world that have bike shared networks. It's gonna help both local residents and tourists to discover the beauty of their city by bike.</p>",
            "pt": "<p>Pessoas de todo o mundo adoram visitar novas cidades e explorá-las. Essas pessoas adoram aprender mais sobre a cultura, a culinária e a história de uma cidade.</ p>" +
                  "<p>BikeStyle é um aplicativo para iOS que mostra todas as cidades do mundo que possuem redes compartilhadas de bicicletas. Ajudará moradores e turistas a descobrir a beleza de sua cidade de bicicleta.</p>",
            "es": "<p>Las personas de todo el mundo adoran visitar nuevas ciudades y explotarlas. Estas personas adoran aprender más sobre la cultura, la cocina y la historia de una ciudad. </p>" +
                  "<p>BikeStyle es una aplicación para iOS que muestra todas las ciudades del mundo que poseen redes compartidas de bicicletas. Ayudará a los residentes y turistas a descubrir la belleza de su ciudad en bicicleta.</p>"
          },
          "prints": 8
        },
        {
          "id": "dressupp",
          "type": "app",
          "name": "Dressupp",
          "link": {
            "type": "App Store",
            "src": ""
          },
          "tags": ["iOS development"],
          "textSmall": {
            "en": "App to help people manage their clothes and create outfits.",
            "pt": "Aplicativo para ajudar as pessoas a administrar suas roupas e criar outfits.",
            "es": "Aplicación para ayudar a las personas a administrar su ropa y crear outfits."
          },
          "textBig": {
            "en": "<p>For many people its difficult to remember all the clothes they have in the wardrobe. With that, they stop using several clothes or even buy an identical piece because they don't remember that already had one. Look at the wardrobe and think about all possible outfits can be tiring.</p>"+
                  "<p>Dressupp is an app that helps you catalog all your clothes and make combinations in a simple and practical way. You can save each piece of clothing, separate by color, create new outfits just by sliding left or right and save your favorite outfits.</p>"+
                  "<p>With the help of Dressupp you will discover the potential of each one of your clothes and you will see that it doesnt take much to have several unique outfits.</p>",
            "pt": "<p>Para muitas pessoas é dificil lembrar todas as peças de roupa que possui no guarda-roupas. Com isso, elas deixam de usar várias roupas ou até mesmo comprar uma peça idêntica, por não lembrar que já tinha uma. Olhar para o guarda-roupas e pensar em todos os outfits possíveis pode ser um trabalhoso.</p>"+ 
                  "<p>O Dressupp é um app que te ajuda a catalogar todas as suas roupas e fazer combinações de uma forma simples e prática. Você pode salvar cada peça de roupa, separar por cor, criar novos outfits apenas deslizando para esquerda ou direita e salvar os seus outfits favoritos.</p>"+
                  "<p>Com a ajuda do Dressupp é você descobrirá potencial de uma de suas roupas e verá que não é preciso muito para ter vários outfits únicos.</p>",
            "es": "<p>Para muchas personas es difícil recordar todas las piezas de ropa que tiene en el guardarropa. Con eso, dejan de usar varias prendas o incluso comprar una pieza idéntica, por no recordar que ya tenía una.</p> "+
                  "<p>Dressupp es una aplicación que te ayuda a catalogar toda su ropa y hacer combinaciones de una forma sencilla y práctica. Usted puede guardar cada prenda, separar por color, crear nuevos outfits apenas deslizándose hacia la izquierda o derecha y guardar sus outfits favoritos. </ p> "+
                  "<p>Con la ayuda de Dressupp es usted descubrirá potencial de una de sus ropas y verá que no es necesario mucho para tener varios outfits únicos. </ p>",
          },
          "prints": 4
        },
        {
          "id": "goodquote",
          "type": "app",
          "name": "Good Quote",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/good-quote-app"
          },
          "tags": ["iOS development"],
          "textSmall": {
            "en": "Find a quote from artists and writers.",
            "pt": "Encontre uma citação de artistas e escritores.",
            "es": "Encuentre una cita de artistas y escritores."
          },
          "textBig": {
            "en": "<p>GoodQuote it's a simple iOS App that has a large collection of quotes. Here you can find a quote to use in a post at a social media or wherever you want.</p>"+
                  "<p>It was created as a study tool about Objective-C and UIKit</p>",
            "pt": "<p>GoodQuote é um simples aplicativo para iOS que tem uma grande coleção de citações. Aqui você pode encontrar uma citação para usar em um post em uma mídia social ou onde quiser. </p>" +
                  "<p>Foi criado como uma ferramenta de estudo sobre Objective-C e UIKit </ p>",
            "es": "<p>GoodQuote es una simple aplicación para iOS que tiene una gran colección de citas. Aquí usted puede encontrar una cita para usar en un post en un medio social o donde quiera. </p>" +
                  "<p>Fue creado como una herramienta de estudio sobre Objective-C y UIKit </ p>",
          },
          "prints": 6
        },
        {
          "id": "keepcalm",
          "type": "app",
          "name": "KeepCalm",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/keepcalm"
          },
          "tags": ["WWDC Scholarship", "Swift playgrounds", "Winner"],
          "textSmall": {
            "en": "Keep Calm and draw a mandala. WWDC Scholarship 2018 playground winner!",
            "pt": "\"Keep Calm\" e desenhe uma mandala. Playground ganhador da WWDC Scholarship 2018!",
            "es": "\"Keep Calm\" y dibuja una mandala. Playground ganador de la WWDC Scholarship 2018!",
          },
          "textBig": {
            "en": "<p>This is my Swift playground to the WWDC Scholarship 2018 [I won the ticket 🎉].</p>"+
                  "<p>It shows a little more about Mandalas which are a great way to relieve stress and graphically represent complex personalities.</p>"+
                  "<iframe width='560' height='315' src='https://www.youtube.com/embed/Z-cjsfjlDfQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen'></iframe>",
            "pt": "<p> Este é o meu Swift playground para a WWDC Scholarship 2018 [Eu ganhei o ticket 🎉]. </ p>" +
                  "<p>Mostra um pouco mais sobre Mandalas, que são uma ótima maneira de aliviar o estresse e representar graficamente personalidades complexas.</p>"+
                  "<iframe width='560' height='315' src='https://www.youtube.com/embed/Z-cjsfjlDfQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>",
            "es": "<p> Este es mi Swift playground para la WWDC Scholarship 2018 [Gané el ticket 🎉]. </ p>" +
                  "<p> Muestra un poco más sobre Mandalas, que son una gran manera de aliviar el estrés y representar gráficamente personalidades complejas. </ p>" +
                  "<iframe width='560' height='315' src='https://www.youtube.com/embed/Z-cjsfjlDfQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"
          },
          "prints": 7
        },
        {
          "id": "tomsparty",
          "type": "game",
          "name": "Festa no Tom",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/toms-party-unity"
          },
          "tags": ["Unity", "C#", "Game for kids"],
          "textSmall": {
            "en": "",
            "pt": "",
            "es":""
          },
          "textBig": {
            "en":"",
            "pt":"",
            "es":""
          },
          "prints": 14
        },
        {
          "id": "alencarino",
          "type": "game",
          "name": "Alencarino",
          "link": {
            "type": "GitHub",
            "src": ""
          },
          "tags": ["Google Blockly","Javascript","HTML", "CSS"],
          "textSmall": {
            "en":"",
            "pt": "",
            "es":""
          },
          "textBig": {
            "en":"",
            "pt":"",
            "es":""
          },
          "prints": 6
        // },
//         {
//           "id": "",
//           "type": "app",
//           "name": "",
//           "link": "",
//           "link": {
//             "type": "GitHub",
//             "src": ""
//           },
//           "tags": ["iOS development","",""],
//           "textSmall": {
//             "en": "<p></p>"+
//                   "<p></p>",
//             "pt": "<p></p>"+
//                   "<p></p>",
//             "es": "<p></p>"+
//                   "<p></p>",
//           }
//           "textBig": {
//             "en": "<p></p>"+
//                   "<p></p>",
//             "pt": "<p></p>"+
//                   "<p></p>",
//             "es": "<p></p>"+
//                   "<p></p>",
//           }
//           "prints": 0
        }]

   // Translation ---------------------------------------------------------
  var all_langs = ["pt", "es", "en"]
  var lang = "en"

  //Initial configuration of text and flag icons
  selectLang(lang)

  function selectLang(language) {
    console.log("Language changed to "+language)
    //Recreate all project cards with correct language
    createAllCards()

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

  // Create project cards in section ------------------------------------

  function createAllCards() {
    
    $("#apps-projects").html("")
    $("#sites-projects").html("")
    $("#games-projects").html("")

    for (var p in all_projects) {
      var project = all_projects[p]
      createCard(project["type"], project)
    }

    function createCard(type, project) {
        var projectsHTML = $("#"+type+"s-projects").html()
        projectsHTML += "<div class='col-sm-6 col-md-4'>"+
                    "<div class='lightbox md-trigger'>"+
                      "<img src='img/projects/"+project["id"]+"/logo.png' class='image-logo'>"+
                      "<h4>"+project["name"]+"</h4>"+
                      "<div class='chips'></div>"+
                      "<p>"+project["textSmall"][lang]+"</p>"+
                      "<button class='en'>See details</button>"+
                      "<button class='pt'>Ver detalhes</button>"+
                      "<button class='es'>Ver detalles</button>"+
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
}

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
      $("#project-img").attr("src", "img/projects/"+project["id"]+"/logo.png")
    }
    function setProjectDescription(project) {
      $("#project-textBig").html(project["textBig"][lang])
    }

    function setProjectLink(project) {
      $("#project-link").text("View on "+project["link"]["type"])
      $("#project-link").attr("href", project["link"]["src"])
      $("#link-img").attr("src", "img/icons/"+project["link"]["type"]+".png")
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
                          "<a class='lightbox' href='img/projects/"+projectID+"/"+p+".png'>"+
                              "<img src='img/projects/"+projectID+"/"+p+".png'>"+
                          "</a>"+
                      "</div>" 
      }
      $("#project-prints").html(printsHTML)
    }
    
  }

  // Click in flags ----------------------------------------------------

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


  
})(jQuery); // End of use strict

