(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{178:function(e,a,t){},179:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(46),s=t.n(c),i=(t(76),t(5)),l=t(6),o=t(8),m=t(7),u=t(9),d=t(14),p=t(23),g=(t(77),t(78),t(19)),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderLink=function(){return t.props.clicked?r.a.createElement(d.c,{to:t.props.url,className:"nav-link clicked-nav-link",onClick:t.props.click.bind(Object(g.a)(t),t.props.pageNumber)},r.a.createElement("div",{className:"nav-link-content"},t.props.name)):r.a.createElement(d.c,{to:t.props.url,className:"nav-link ",onClick:t.props.click.bind(Object(g.a)(t),t.props.pageNumber)},r.a.createElement("div",{className:"nav-link-content"},t.props.name))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.renderLink()}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderButtons=function(){return"portuguese"===t.props.language?r.a.createElement("div",{id:"language-switch"},r.a.createElement("div",{className:"language clicked-language",onClick:t.props.changeLanguage.bind(Object(g.a)(t),"english")},r.a.createElement("div",{className:"language-name"},"Pt-BR")),r.a.createElement("div",{className:"language",onClick:t.props.changeLanguage.bind(Object(g.a)(t),"english")},r.a.createElement("div",{className:"language-name"},"En"))):r.a.createElement("div",{id:"language-switch"},r.a.createElement("div",{className:"language",onClick:t.props.changeLanguage.bind(Object(g.a)(t),"portuguese")},r.a.createElement("div",{className:"language-name"},"Pt-BR")),r.a.createElement("div",{className:"language clicked-language",onClick:t.props.changeLanguage.bind(Object(g.a)(t),"portuguese")},r.a.createElement("div",{className:"language-name"},"En")))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.renderButtons()}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"header-nav"},this.props.links.map((function(a){return a.pageNumber===e.props.currentPage?r.a.createElement(h,{name:a.name,pageNumber:a.pageNumber,url:a.path,clicked:!0,click:e.props.changePage,key:a.name}):r.a.createElement(h,{name:a.name,pageNumber:a.pageNumber,url:a.path,clicked:!1,click:e.props.changePage,key:a.name})})),r.a.createElement(E,{language:this.props.language,changeLanguage:this.props.changeLanguage}))}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={currentPage:1},t.changePage=function(e){t.setState({currentPage:e})},t.changeLanguage=function(){},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){"/"===window.location.pathname?this.setState({currentPage:1}):this.setState({currentPage:2})}},{key:"render",value:function(){return r.a.createElement("div",{id:"header-component"},r.a.createElement("div",{id:"header-container"},r.a.createElement("div",{id:"header-title"},r.a.createElement(d.b,{to:"/",id:"header-title-link"},"Rodrigo Rocha")),r.a.createElement(v,{links:this.props.texts.links,currentPage:this.state.currentPage,changePage:this.changePage,language:this.props.language,changeLanguage:this.props.changeLanguage})))}}]),a}(n.Component),f=(t(83),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer-content"},r.a.createElement("p",{className:"center-paragraph",id:"footer-paragraph"},"Rodrigo Rocha"),r.a.createElement("p",{className:"center-paragraph",id:"footer-paragraph"},"2020"))}}]),a}(n.Component)),N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"footer-top-strip"}),r.a.createElement("div",{id:"footer-bottom-strip"},r.a.createElement(f,null)))}}]),a}(n.Component),j=(t(84),t(85),t(49)),k=t.n(j),O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderText=function(){return"portuguese"===t.props.language?r.a.createElement("div",{className:"center",id:"profile-picture"},r.a.createElement("div",{className:"picture-circle center"},r.a.createElement("img",{id:"profile-image",src:k.a,alt:"author"})),r.a.createElement("div",{className:"center",id:"contact-holder"},r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"E-mail: "),"rocha.rodrigogomes@gmail.com"),r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"Github: "),r.a.createElement("a",{className:"simple-link contact-link",href:"https://github.com/rodrigogomesrc"},"rodrigogomesrc")),r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"Telegram: "),r.a.createElement("a",{className:"simple-link contact-link",href:"https://t.me/rodrigogomesrc"},"rodrigogomesrc")))):r.a.createElement("div",{className:"center",id:"profile-picture"},r.a.createElement("div",{className:"picture-circle center"},r.a.createElement("img",{id:"profile-image",src:k.a,alt:"author"})),r.a.createElement("div",{className:"center",id:"contact-holder"},r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"Email: "),"rocha.rodrigogomes@gmail.com"),r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"Github: "),r.a.createElement("a",{className:"simple-link contact-link",href:"https://github.com/rodrigogomesrc"},"rodrigogomesrc")),r.a.createElement("div",{className:"contact-line"},r.a.createElement("b",null,"Telegram: "),r.a.createElement("a",{className:"simple-link contact-link",href:"https://t.me/rodrigogomesrc"},"rodrigogomesrc"))))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.renderText()}}]),a}(n.Component),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderText=function(){return"portuguese"===t.props.language?r.a.createElement("div",{className:"center",id:"profile-text-area"},r.a.createElement("div",{id:"profile-text"},r.a.createElement("div",{id:"first-text"},"Ol\xe1! Meu nome \xe9 ",r.a.createElement("span",{className:"blue-text"},"Rodrigo")),r.a.createElement("div",null,"Tenho 20 anos, sou",r.a.createElement("span",{className:"blue-text"}," T\xe9cnico em Inform\xe1tica")," e Estudante de",r.a.createElement("span",{className:"blue-text"}," Tecnologia da Informa\xe7\xe3o")))):r.a.createElement("div",{className:"center",id:"profile-text-area"},r.a.createElement("div",{id:"profile-text"},r.a.createElement("div",{id:"first-text"},"Hi! My name is ",r.a.createElement("span",{className:"blue-text"},"Rodrigo")),r.a.createElement("div",null,"I'm 20 years old",r.a.createElement("span",{className:"blue-text"}," Computer Technician")," and",r.a.createElement("span",{className:"blue-text"}," Programming")," student")))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.renderText()}}]),a}(n.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-cover-holder"},r.a.createElement("div",{className:"page-cover-container",id:"page-cover-content"},r.a.createElement(O,{language:this.props.language}),r.a.createElement(y,{language:this.props.language})))}}]),a}(n.Component);t(86),t(87),t(88);var C=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var x=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star_half"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var I=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var S=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_half"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var P=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var T=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_half"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var _=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var A=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_half"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var L=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_border"))};var R=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star_half"))};var B=function(){return r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"),r.a.createElement("i",{className:"material-icons star-icon"},"star"))},M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderRating=function(){switch(t.props.rating){case 1:return r.a.createElement(x,null);case 2:return r.a.createElement(I,null);case 3:return r.a.createElement(S,null);case 4:return r.a.createElement(P,null);case 5:return r.a.createElement(T,null);case 6:return r.a.createElement(_,null);case 7:return r.a.createElement(A,null);case 8:return r.a.createElement(L,null);case 9:return r.a.createElement(R,null);case 10:return r.a.createElement(B,null);default:return r.a.createElement(C,null)}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderRating())}}]),a}(n.Component),q=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-line"},r.a.createElement("div",{className:"card-line-content"},this.props.card.name),r.a.createElement(M,{rating:this.props.card.value}))}}]),a}(n.Component),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderSkills=function(){return t.props.card.skills.map((function(e){return r.a.createElement(q,{card:e,key:e.name})}))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},this.props.card.cardName),this.renderSkills())}}]),a}(n.Component),D=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).skillsPortuguese=[{cardName:"Linguagens de Programa\xe7\xe3o",skills:[{name:"Python",value:8},{name:"Javascript",value:6},{name:"C",value:6},{name:"C#",value:3}]},{cardName:"Python",skills:[{name:"Pyramid",value:6},{name:"Web scraping",value:5},{name:"Tkinter",value:2}]},{cardName:"Javascript",skills:[{name:"ES6",value:8},{name:"React",value:7},{name:"Angular",value:5},{name:"Jquery",value:4}]},{cardName:"Banco de Dados",skills:[{name:"MySQL",value:7},{name:"MongoDB",value:6},{name:"SQLite",value:5}]},{cardName:"CSS",skills:[{name:"CSS puro",value:8},{name:"Flexbox",value:7},{name:"Bootstrap",value:6},{name:"CSS grid",value:2}]},{cardName:"Outras",skills:[{name:"Manuten\xe7\xe3o de Computadores",value:9},{name:"Git",value:6},{name:"Linux",value:6},{name:"Redes de Computadores",value:6}]}],t.skillsEnglish=[{cardName:"Programming Languages",skills:[{name:"Python",value:8},{name:"Javascript",value:6},{name:"C",value:6},{name:"C#",value:3}]},{cardName:"Python",skills:[{name:"Pyramid",value:6},{name:"Web scraping",value:5},{name:"Tkinter",value:2}]},{cardName:"Javascript",skills:[{name:"ES6",value:8},{name:"React",value:7},{name:"Angular",value:5},{name:"Jquery",value:4}]},{cardName:"Databases",skills:[{name:"MySQL",value:7},{name:"MongoDB",value:6},{name:"SQLite",value:5}]},{cardName:"CSS",skills:[{name:"CSS in general",value:8},{name:"Flexbox",value:7},{name:"Bootstrap",value:6},{name:"CSS grid",value:2}]},{cardName:"Other",skills:[{name:"Computer Maintenance",value:9},{name:"Git",value:6},{name:"Linux",value:6},{name:"Computer Network",value:6}]}],t.renderCards=function(){return"portuguese"===t.props.language?t.skillsPortuguese.map((function(e){return r.a.createElement(G,{card:e,key:e.cardName})})):t.skillsEnglish.map((function(e){return r.a.createElement(G,{card:e,key:e.cardName})}))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"skill-holder"},this.renderCards())}}]),a}(n.Component),J=(t(89),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderImage=function(){var e=t.props.card.image;if(""!==e)return r.a.createElement("div",{className:"project-card-image-holder"},r.a.createElement("img",{src:e,alt:"Imagem ilustrativa",className:"project-card-image"}))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-card"},r.a.createElement("div",{className:"card-title"},this.props.card.name),r.a.createElement("div",{className:"project-card-description"},r.a.createElement("div",{className:"project-card-content"},this.renderImage(),r.a.createElement("div",{className:"project-card-description"},this.props.card.description,"portuguese"===this.props.language?r.a.createElement(d.b,{to:this.props.card.url,className:"page-link card-link"}," Saiba mais"):r.a.createElement(d.b,{to:this.props.card.url,className:"page-link card-link"}," Learn More")))))}}]),a}(n.Component)),z=(t(90),t(50)),H=t.n(z),W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).projectsPortuguese=[{name:"Geneticats",description:"Geneticats \xe9 um Jogo Educacional voltado a facilitar o aprendizado \n            dos conte\xfados de Gen\xe9tica da Biologia do ensino m\xe9dio.",image:H.a,url:"/post/geneticats-jogo-educacional-de-genetica"},{name:"Crawler Stats",description:"Cole\xe7\xe3o de C\xf3digos Python para obter e analizar textos da wikip\xe9dia",image:"",url:"/post/projeto-crawler-stats"},{name:"Toolks",description:"Toolks \xe9 um conjunto de ferramentas matem\xe1ticas para ajudar em c\xe1lculos do dia a dia.",image:"",url:"/post/toolks-ferramentas-online"}],t.projectsEnglish=[{name:"Geneticats",description:"Geneticats is an Educational Game in portuguese\n            designed to facilitate the learning of high school Biology Genetics content. Geneticats is an Educational Game in portuguese\n            designed to facilitate the learning of high school Biology Genetics content.  ",image:H.a,url:"/post/geneticats-educational-game-of-genetics"},{name:"Crawler Stats",description:"A collection of codes meant to get some stats on webpages using webscraping",image:"",url:"/post/crawler-stats-project"},{name:"Toolks",description:"Toolks is a website to provide some math tools",image:"",url:"/post/toolks-online-tools"}],t.renderCards=function(){return"portuguese"===t.props.language?t.projectsPortuguese.map((function(e){return r.a.createElement(J,{card:e,key:e.name})})):t.projectsEnglish.map((function(e){return r.a.createElement(J,{card:e,key:e.name})}))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects-cards-holder"},this.renderCards())}}]),a}(n.Component),$=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderText=function(){return"portuguese"===t.props.language?r.a.createElement("div",{id:"home-main-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Sobre mim"),r.a.createElement("p",{className:"paragraph"},"Eu sou um T\xe9cnico de Inform\xe1tica formado pelo IFRN - Campus Parnamirim. Eu atualmente curso Bacharelado em Tecnologia da Informa\xe7\xe3o pela UFRN e moro na zona metropolitana de Natal/RN."),r.a.createElement("p",{className:"paragraph"},"Programador em forma\xe7\xe3o, j\xe1 trabalhei em alguns pequenos projetos. Estou constantemente em busca de melhorar meus conhecimentos e por tais conhecimentos em pr\xe1tica nas v\xe1rias ideias que tenho. Estou em uma jornada para tentar p\xf4r em pr\xe1tica v\xe1rias dessas ideias pela experi\xeancia adquirida ao faz\xea-las, mas tamb\xe9m por divers\xe3o."),r.a.createElement("p",{className:"paragraph"},"Atualmente estou focando na \xe1rea de Desenvolvimento WEB, mas tenho interesse em aprender mais sobre An\xe1lise de Dados e Intelig\xeancia Artificial, que s\xe3o umas das \xe1reas que eu acho mais interessantes."),r.a.createElement("p",{className:"paragraph"},"Me considero um estusiasta da ci\xeancia e das tecnologias. Portanto, eu estou sempre antenado \xe0s novas tecnologias e novas descobertas da ci\xeancia e como elas impactam o nosso dia a dia e mudam nossas vida, seja melhorando-a ou seja tendo impactos negativos."),r.a.createElement("p",{className:"paragraph"},"Por esses motivos, sou um f\xe2 de fic\xe7\xe3o cient\xedfica e de canais de ci\xeancia, sendo consumir tais conte\xfados o meu maior passatempo."),r.a.createElement("h1",{className:"title"},"Conhecimentos"),r.a.createElement("p",{className:"paragraph"},"Aqui est\xe3o algumas das minhas habilidades e conhecimentos em tecnologias em geral."),r.a.createElement("p",{className:"star-description-title"},"Legendas aproximadas do significado de cada classifica\xe7\xe3o. Meia estrelas est\xe3o entre uma e outra."),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(I,null),r.a.createElement("div",{className:"star-description"},"J\xe1 aprendi um pouco sobre")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(P,null),r.a.createElement("div",{className:"star-description"},"J\xe1 usei brevemente e/ou experimentei mais a fundo")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(_,null),r.a.createElement("div",{className:"star-description"},"Tenho um conhecimento mediano sobre o assunto e j\xe1 usei algumas vezes")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(L,null),r.a.createElement("div",{className:"star-description"},"Tenho um bom conhecimento sobre o assunto e experi\xeancia de um bom tempo")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(B,null),r.a.createElement("div",{className:"star-description"},"Tenho um conhecimento amplo e me considero um especialista no assunto")),r.a.createElement(D,{language:t.props.language}),r.a.createElement("h1",{className:"title"},"Meus Projetos"),r.a.createElement("p",{className:"paragraph"},"Esse aqui \xe9 meu portf\xf3lio de projetos e coisas mais simples que eu constru\xed ao longo do tempo aplicando meus conhecimentos em programa\xe7\xe3o."),r.a.createElement(W,{language:t.props.language}))):r.a.createElement("div",{id:"home-main-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"About me"),r.a.createElement("p",{className:"paragraph"},"I'm a brazilian computer technitian graduated by IFRN. I am currently pursuing a Bachelor of Information Technology (Something close to Computer Science)from UFRN and I live in the metropolitan region of Natal, Brazil."),r.a.createElement("p",{className:"paragraph"},"Programmer in training, I've worked in some little projects. I'm constantly seeking to improve my knowledge e put them into practice turning many of my ideias into reality. I'm in a journey to put many of those ideias into practice by the experience of it, but also to have fun."),r.a.createElement("p",{className:"paragraph"},"I'm currently focused into the WEB Development are, but I have interest in learning more about Data Science and Artificial Intelligence, which are some of the subjects I find more interesting."),r.a.createElement("p",{className:"paragraph"},"I consider myself a science and technology enthusiast, Therefore I am always attuned to new technologies and science discoveries and how they impact our daily live and change them for the best and sometimes for the worse in some aspects."),r.a.createElement("p",{className:"paragraph"},"By those reasons, I'm a fan of science fiction and science channels. Consuming those contents are my biggest hobby"),r.a.createElement("h1",{className:"title"},"Skills"),r.a.createElement("p",{className:"paragraph"},"Here are some of my skills and knowledge about technologies in general."),r.a.createElement("p",{className:"star-description-title"},"Aproximate subtitles for each classification. Half stars meaning falls between the star before and after."),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(I,null),r.a.createElement("div",{className:"star-description"},"I have learned some things about it")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(P,null),r.a.createElement("div",{className:"star-description"},"I have used it briefly and/or experimented a bit with it mais a fundo")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(_,null),r.a.createElement("div",{className:"star-description"}," I have a medium knowledge about it and I've used it some times")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(L,null),r.a.createElement("div",{className:"star-description"},"I have a good knowledge about the matter and I've been using it for a considerable time")),r.a.createElement("div",{className:"star-description-holder"},r.a.createElement(B,null),r.a.createElement("div",{className:"star-description"},"I have a broad knowledge and experience on the subject and I consider myself a especialist on it")),r.a.createElement(D,{language:t.props.language}),r.a.createElement("h1",{className:"title"},"My Projects"),r.a.createElement("p",{className:"paragraph"},"Here is my portf\xf3lio of projects and some simpler things I've built over the years studying and applyimg my programming skills."),r.a.createElement(W,{language:t.props.language})))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.renderText()}}]),a}(n.Component),F=t(28),Q=t.n(F),U=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home-page-holder"},r.a.createElement(Q.a,null,r.a.createElement("meta",{name:"description",content:"Rodrigo Rocha - p\xe1gina e blog pessoal"}),r.a.createElement("title",null,"Rodrigo Rocha")),r.a.createElement(w,{language:this.props.language}),r.a.createElement($,{language:this.props.language}))}}]),a}(n.Component),K=t(51),V=t(33),X=(t(95),t(185)),Y=t(34),Z=t.n(Y),ee=(t(96),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"post-card-holder"},r.a.createElement(d.b,{to:"/post/".concat(this.props.post.url),className:"postcard-link"},r.a.createElement("div",{className:"postcard-main"},r.a.createElement("div",{className:"postcard-image-holder"},r.a.createElement("img",{alt:this.props.post.title,className:"postcard-img",src:"https://media.graphcms.com/resize=w:225,h:225,fit:crop/".concat(this.props.post.coverImage.handle)})),r.a.createElement("div",{className:"postcard-content"},r.a.createElement("h3",{className:"title postcard-title"},this.props.post.title),r.a.createElement("p",{className:"postcard-description"},this.props.post.description),r.a.createElement("p",{className:"postcard-date"},this.props.post.date)))))}}]),a}(n.Component));function ae(){var e=Object(V.a)(["\n  query posts($first: Int!, $skip: Int!) {\n    posts (orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      url\n      date\n      description\n      createdAt\n      language\n      content\n      coverImage{\n        id\n        handle\n      }\n    }\n    postsConnection {\n        aggregate {\n          count\n        }\n    }\n  }\n"]);return ae=function(){return e},e}var te=Z()(ae()),ne={skip:0,first:24},re=Object(X.a)(te,{options:{variables:ne,notifyOnNetworkStatusChange:!0},props:function(e){var a=e.data;return{data:a,loadMorePosts:function(){return a.fetchMore({variables:{skip:a.posts.length},updateQuery:function(e,a){var t=a.fetchMoreResult;return t?Object.assign({},e,{posts:[].concat(Object(K.a)(e.posts),Object(K.a)(t.posts))}):e}})}}}})((function(e){var a=e.data,t=a.loading,n=a.error,c=a.posts,s=a.postsConnection,i=(a.networkStatus,e.loadMorePosts),l=e.language;if(n)return r.a.createElement("div",{className:"container"},"portuguese"===l?r.a.createElement("h2",null,"Algum erro ocorreu"):r.a.createElement("h2",null,"Something went wrong"));if(c&&s){var o=c.length<s.aggregate.count;return r.a.createElement("div",{id:"blog-page"},r.a.createElement(Q.a,null,r.a.createElement("meta",{name:"description",content:"Artigos sobre programa\xe7\xe3o e outras coisas que me vierem \xe0 mente"}),r.a.createElement("title",null,"Rodrigo Rocha Blog")),r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("div",{id:"blog-page"},r.a.createElement("div",{id:"blog-presentation"},r.a.createElement("div",{id:"blog-presentation-text"},r.a.createElement("h1",{id:"bp-title"},"Rodrigo Rocha Blog"),"portuguese"===l?r.a.createElement("h3",{id:"bp-subtitle"},"Artigos sobre programa\xe7\xe3o e outras coisas que me vierem \xe0 mente"):r.a.createElement("h3",{id:"bp-subtitle"},"Articles about programming and other things that comes to my mind."))),r.a.createElement("div",{className:"postcards"},c.filter((function(e){return function(e,a){return("English"===a?"english":"portuguese")===e}(l,e.language)})).map((function(e,a){return r.a.createElement(ee,{post:e,key:a})}))),r.a.createElement("div",{className:"Home-showMoreWrapper"},o?r.a.createElement("button",{className:"Home-button",disabled:t,onClick:function(){return i()}},t?"Loading...":"Show More Posts"):"")))))}return r.a.createElement("div",{className:"container"},"portuguese"===l?r.a.createElement("h2",null,"Carregando posts..."):r.a.createElement("h2",null,"Loading posts..."))})),ce=t(67),se=t.n(ce),ie=(t(178),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"side-content"},r.a.createElement("div",{id:"side-content-container"}))}}]),a}(n.Component)),le=(t(179),t(68)),oe=t.n(le);function me(){var e=Object(V.a)(["\nquery singlePost($url: String) {\n    post(where: {url: $url}) {\n      id\n      title\n      description\n      url\n      date\n      coverImage {\n        id\n        handle\n      }\n      content\n      createdAt\n    }\n  }\n"]);return me=function(){return e},e}var ue=Z()(me()),de=Object(X.a)(ue,{options:function(e){return{variables:{url:e.match.params.slug}}}})((function(e){var a=e.data,t=a.loading,n=a.error,c=a.post,s=e.language;if(n)return r.a.createElement("div",{className:"container"},"portuguese"===s?r.a.createElement("h2",null,"Algum erro ocorreu"):r.a.createElement("h2",null,"Something went wrong"));if(!t&&c){var i={url:"http://rodrigogomesrc.github.io/post/"+c.url,identifier:c.id,title:c.title};return r.a.createElement("div",{className:"post-main"},r.a.createElement(Q.a,null,r.a.createElement("meta",{name:"description",content:c.description}),r.a.createElement("title",null,c.title)),r.a.createElement("div",{id:"blog-content"},r.a.createElement("div",{id:"blog-content-container"},r.a.createElement("article",null,"portuguese"===s?r.a.createElement(d.b,{to:"/blog",className:"page-link blog-back"},"Ir para os Posts"):r.a.createElement(d.b,{to:"/blog",className:"page-link blog-back"},"Go to Posts"),r.a.createElement("h1",{className:"title post-title"},c.title),r.a.createElement("h3",{className:"post-description"},c.description),r.a.createElement("p",{className:"date"},c.date),r.a.createElement("div",{className:"Post-placeholder"},r.a.createElement("img",{className:"cover-image",alt:c.title,src:"https://media.graphcms.com/resize=w:650,h:366,fit:crop/".concat(c.coverImage.handle)})),r.a.createElement(se.a,{source:c.content,escapeHtml:!0}),r.a.createElement("div",{className:"comments"},r.a.createElement(oe.a.DiscussionEmbed,{shortname:"rodrigogomesrc",config:i}))))),r.a.createElement(ie,null))}return t||c?r.a.createElement("div",{className:"container"},"portuguese"===s?r.a.createElement("h1",null,"Carregando o post..."):r.a.createElement("h1",null,"Loading post...")):r.a.createElement("div",{className:"container"},"portuguese"===s?r.a.createElement("h1",null,"Ops! Parece que esse post n\xe3o existe."):r.a.createElement("h1",null,"Ops! It looks like this post doesn't exist."))})),pe={links:[{name:"Home",path:"/",pageNumber:1},{name:"Blog",path:"/blog",pageNumber:2}]},ge={links:[{name:"Inicio",path:"/",pageNumber:1},{name:"Blog",path:"/blog",pageNumber:2}]},he=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={page:"home",language:"portuguese"},t.loadText=function(){return"portuguese"===t.state.language?ge:pe},t.changeLanguage=function(e){localStorage.setItem("language",e),t.setState({language:e})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("language");null!==e&&this.setState({language:e}),"/"!==window.location.pathname?this.setState({page:"blog"}):this.setState({page:"home"})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(b,{page:this.state.page,texts:this.loadText(),changeLanguage:this.changeLanguage,language:this.state.language}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(U,Object.assign({},a,{texts:e.loadText(),language:e.state.language}))}}),r.a.createElement(p.a,{path:"/blog",render:function(a){return r.a.createElement(re,Object.assign({},a,{texts:e.loadText(),language:e.state.language}))}}),r.a.createElement(p.a,{path:"/post/:slug",render:function(a){return r.a.createElement(de,Object.assign({},a,{texts:e.loadText(),language:e.state.language}))}}),r.a.createElement(p.a,{path:"*",render:function(a){return r.a.createElement(U,Object.assign({},a,{texts:e.loadText(),language:e.state.language}))}})),r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=t(24),ve=t(70),be=t(69),fe=t(10),Ne=new Ee.a({link:new ve.a({uri:"https://api-useast.graphcms.com/v1/ck4ztvlo7kgr401bqaqw6g2i1/master"}),cache:new be.a}),je=document.getElementById("root");je.hasChildNodes()?s.a.hydrate(r.a.createElement(fe.b,{client:Ne},r.a.createElement(he,null)),je):s.a.render(r.a.createElement(fe.b,{client:Ne},r.a.createElement(he,null)),je),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,a,t){e.exports=t.p+"static/media/picture.f895aed7.png"},50:function(e,a,t){e.exports=t.p+"static/media/geneticats.4fe473ed.png"},71:function(e,a,t){e.exports=t(183)},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.ffa8d611.chunk.js.map