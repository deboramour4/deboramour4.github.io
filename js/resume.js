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
          "id": "bikestyle",
          "type": "app",
          "name": "BikeStyle",
          "link": {
            "type": "App Store",
            "src": "https://apps.apple.com/us/app/bikestyle/id1455587148"
          },
          "tags": ["iOS development","Bikes","Swift", "MapKit", "REST API", "Dark mode"],
          "textSmall": {
            "en": "App that shows all the cities of the world that have bike shared networks.",
            "pt": "App que mostra centenas de cidades do mundo que têm rede de bicicleta compartilhadas.",
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
          "prints": 5
        },
        {
          "id": "clin",
          "type": "app",
          "name": "Clin Lavagens",
          "link": {
            "type": "App Store",
            "src": "https://apps.apple.com/us/app/clin-lavagem-de-roupas/id1478623968"
          },
          "tags": ["iOS development","Swift", "View Code", "MapKit", "MVVM", "RXSwift"],
          "textSmall": {
            "en": "App that shows all the cities of the world that have bike shared networks.",
            "pt": "App que mostra centenas de cidades do mundo que têm rede de bicicleta compartilhadas.",
            "es": "App que muestra todas las ciudades del mundo que poseen redes compartidas en bicicleta."
          },
          "textBig": {
            "en": "<p>Clin is an iOS app that offers laundry services at an affordable price. In Clin the user can request a wash and the platform selects a registered washer to provide the service. The washers are ordinary people who want to make extra income with their idle washing machine.</p>",
            "pt": "<p>Clin é um aplicativo iOS que oferece serviços de lavagem de roupas por um preço acessível. No Clin o usuário pode solicitar uma lavagem e a plataforma seleciona um lavador cadastrado para prestar o serviço. Os lavadores são pessoas comuns que querem fazer renda extra com sua máquina de lavar.</p>",
            "es": "<p>Clin es una aplicación para iOS que ofrece servicios de lavandería a un precio asequible. En Clin, el usuario puede solicitar un lavado y la plataforma selecciona una lavadora registrada para proporcionar el servicio. Las lavadoras son personas comunes que desean obtener ingresos adicionales de su lavadora.</p>"
          },
          "prints": 5
        },
        {
          "id": "kinoa",
          "type": "app",
          "name": "Kinoa",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/jullynobre/SlowNutrition"
          },
          "tags": ["iOS development","Nutrition", "Xibs", "Custom components", "Swift Lint", "Travis CI"],
          "textSmall": {
            "en": "Kinoa helps you organize your week's eating plan to encourage healthy eating.",
            "pt": "Kinoa ajuda a organizar o plano alimentar da semana, para estimular a alimentação saudável.",
            "es": "Kinoa ayuda a organizar el plan de alimentación de la semana para fomentar una alimentación saludable."
          },
          "textBig": {
            "en": "<p>Kinoa is an iOS app that seeks to help people organize their routine so they can have better eating habits. You can create eating plans, categorized dishes, and shopping lists.</p>" +
                  "<p>It has reliable information from the Brazilian Ministry of Health about nutrition. Available for testing on TestFlight. </p>",
            "pt": "<p>Kinoa é um aplicativo iOS que busca ajudar as pessoas a organizarem sua rotina de forma que consigam ter melhores hábitos alimentares. Pode-se criar planos alimentares, pratos categorizados e listas de compras.</p>"+ 
                  "<p>Possui informações do Ministério da Saúde do Brasil sobre nutrição.  Disponível para teste no TestFlight.</p>",
            "es": "<p>Kinoa es una aplicación para iOS que busca ayudar a las personas a organizar su rutina para que puedan tener mejores hábitos alimenticios. Puede crear planes de alimentación, platos categorizados y listas de compras.</p>" +
                  "<p>Tiene información del Ministerio de Salud de Brasil sobre nutrición. Disponible para pruebas en TestFlight. </p>",
          },
          "prints": 7
        },
        {
          "id": "dressupp",
          "type": "app",
          "name": "Dressupp",
          "link": {
            "type": "GitHub",
            "src": ""
          },
          "tags": ["iOS development", "CoreML", "CreateML"],
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
          "id": "4champs",
          "type": "app",
          "name": "4Champs",
          "link": {
            "type": "GitHub",
            "src": ""
          },
          "tags": ["ARKit 2.0","Games", "MultipeerSession", "iOS development"],
          "textSmall": {
            "en": "An augmented reality party game for iOS devices.",
            "pt": "Um party game em realidade aumentada para dispositivos iOS.",
            "es": "Un juego de realidad aumentada para dispositivos iOS."
          },
          "textBig": {
            "en": "<p>In 4Champs each player is represented by a race car. Up to 4 players can be entered in the same match. The host of the match must scan a real-world plan and position the game map to start the match. </p> "+
                  "<p>The first car that pick up the flag in the center of the map and safely back to its base wins. But be careful, because if the car falls off the map the player loses the flag! The game is still under development and will be available soon on the AppStore. </p> ",
            "pt": "<p>No 4Champs cada jogador é representado por um carrinho de corrida. É possível entrar até 4 jogadores na mesma partida. O host da partida deve escanear um plano, do mundo real, e posicionar o mapa do jogo para iniciar a partida.</p>"+
                  "<p>Ganha a partida o primeiro carrinho que conseguir pegar a bandeira que fica no centro do mapa e voltar a salvo para a sua base. Porém é preciso ter cuidado, pois caso o carrinho caia do mapa o jogador perde a bandeira! O jogo ainda está em desenvolvimento e em breve estará na AppStore.</p>",
            "es": "<p>En 4Champs cada jugador está representado por un coche de carreras. Se pueden ingresar hasta 4 jugadores en el mismo partido. El anfitrión del partido debe escanear un plan del mundo real y colocar el mapa del juego para comenzar el partido. </p> "+
                  "<p>El primer coche que puede levantar la bandera en el centro del mapa y volver a su base de forma segura gana. Pero ten cuidado, porque si el coche se cae del mapa, ¡el jugador pierde la bandera! El juego todavía está en desarrollo y pronto estará en la AppStore. </p> ",
          },
          "prints": 4
        },
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
          "id": "goodquote",
          "type": "app",
          "name": "Good Quote",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/good-quote-app"
          },
          "tags": ["iOS development", "Objective-C","UIKit", "REST API"],
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
          "id": "petsite",
          "type": "site",
          "name": "Site PET Computação",
          "link": {
            "type": "Website",
            "src": "http://www.petcomp.ufc.br"
          },
          "tags": ["HTML", "CSS", "Materialize CSS","JS", "Jquery", "PHP", "MySQL"],
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
          "prints": 5
        },
        {
          "id": "tomsparty",
          "type": "game",
          "name": "Festa no Tom",
          "link": {
            "type": "GitHub",
            "src": "https://github.com/deboramour4/toms-party-unity"
          },
          "tags": ["Unity", "C#", "Games","Kids", "Music"],
          "textSmall": {
            "en": "",
            "pt": "",
            "es":""
          },
          "textBig": {
            "en":"A game to introduce Musical Theory for children. Research was carried out to better understand the interaction of children, between 4 and 6 years old, with smartphones and tablets, in order to achieve greater immersion in the game and achieve the educational objectives proposed in it. Information was also sought about what draws their attention, what colors to use, the best narrative strategies to be incorporated into the game, the interface layout most familiar to children.",
            "pt":"Um jogo de introdução à Teoria Musical para crianças. Foram realizadas pesquisas para compreender melhor a interação de crianças, entre 4 e 6 anos, com smartphones e tablets, a fim de alcançar maior imersão no jogo e  atingir os objetivos pedagógicos nele propostos. Buscou-se também informações sobre o que as chama a atenção, quais cores utilizar, as melhores estratégias de narrativa a serem incorporadas no jogo, layout da interface mais familiar para as crianças.",
            "es":"Un juego de introducción a la teoría de la música para niños. Se llevó a cabo una investigación para comprender mejor la interacción de los niños, entre 4 y 6 años, con teléfonos inteligentes y tabletas, con el fin de lograr una mayor inmersión en el juego y alcanzar los objetivos educativos propuestos en él. También se buscó información sobre qué les llama la atención, qué colores usar, las mejores estrategias narrativas para incorporar al juego, el diseño de la interfaz más familiar para los niños."
          },
          "prints": 14
        },
        {
          "id": "alencarino",
          "type": "game",
          "name": "Alencarino",
          "link": {
            "type": "Website",
            "src": "http://horadocodigo.ufc.br/alencarino/appengine/index.html"
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
                    "<div class='lightbox md-trigger' id='"+project["id"]+"'>"+
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

