import{d as i,j as e}from"./index-Bx32hr4R.js";const l={layout:"minimal",title:"KaTools",description:"undefined"};function n(a){const s={a:"a",code:"code",div:"div",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"katools",children:["KaTools",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#katools",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:[`Que onda!
Hoy quiero hablarles sobre `,e.jsx(s.a,{href:"https://www.npmjs.com/package/katools",children:"KaTools"}),`, una herramienta CLI que se encarga del codigo
repetitivo para proyectos de juegos creados con `,e.jsx(s.a,{href:"https://kaplayjs.com/",children:"KAPLAY"}),"."]}),`
`,e.jsx(s.p,{children:`Hace un par de meses andaba aburrido y recorde sobre una libreria llamada KABOOM, la cual estaba saliendo en muchos canales
de youtube. Recuerdo que la use un poco y me gusto mucho su API pero como era muy nueva y no tenia un par de cosas que
necesitaba en ese momento. Deje de escuchar sobre KABOOM y decidi buscar, encontre que ya no estaba soportada
y fue remplazada por KAPLAY.`}),`
`,e.jsxs(s.p,{children:[`KAPLAY en ese momento estaba celebrando su lanzamiento con un game jam. Me dije: "Vamos a ver que onda" y decidi entrar a mi
primer game jam. Termine creando `,e.jsx(s.a,{href:"https://kesuave.github.io/KaPlanck/",children:"KaPlanck"}),`, un plugin que integra
`,e.jsx(s.a,{href:"https://piqnt.com/planck.js",children:"PlanckJS"}),` a KAPLAY, en lugar de enfocarme en mi juego para el jam. Mi juego quedo en ultimo
lugar 😄`]}),`
`,e.jsx(s.p,{children:`La neta, me diverti y aprendi mucho. Me volvi a dar cuenta que lo mio es crear herramientas y no juegos 😄. Aun asi,
quiero crear juegos! KAPLAY tiene un API muy chida! Anteriormente utilizaba Phaser para crear juegos y tenia una CLI
para generar el codigo repetitivo en mis proyectos. Ahora que decidi usar KAPLAY, me di cuenta que necesitaba algo similar
y el resultado fue KaTools!`}),`
`,e.jsx(s.p,{children:"Pa' comenzar a usar KaTools, primero crea un proyecto con tu bundler/starter kit favorito. Por ejemplo:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-kaplay"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" mygame"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --typescript"})]})})}),`
`,e.jsx(s.p,{children:"Entra al directorio recien creado y ejecuta:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" katools"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" init"})]})})}),`
`,e.jsx(s.p,{children:"Esto generara los siguientes archivos:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/context.ts"})," - Contine tu configuración de contexto para tu juego."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/index.ts"})," - Contine el gestor de escenas para tu juego."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/boot.ts"})," - Contiene la escena de inicio donde puedes cargar los activos."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/menu.ts"})," - Contiene una escena de menú simple para empezar rápidamente."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/game.ts"})," - Contiene la lógica principal de juego de tu juego."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/gameOver.ts"})," - Contiene la pantalla de game over."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Despues de eso, puedes agregar las siguientes lineas a tu archivo de entrada, en este caso de create-kaplay sería ",e.jsx(s.code,{children:"src/main.ts"}),":"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { k } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./context"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"k."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"go"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"boot"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsx(s.p,{children:"y listo, tienes la configuración básica para un juego de Kaplay!"}),`
`,e.jsx(s.p,{children:"Katools también proporciona algunos comandos para ayudarte a agregar escenas, componentes y entidades:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools scene <name>"})," - Crea una nueva escena con el nombre dado."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools component <name>"})," - Crea un nuevo componente con el nombre dado."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools entity <name>"})," - Crea una nueva entidad con el nombre dado."]}),`
`]}),`
`,e.jsx(s.p,{children:"la estructura de tu proyecto debería verse algo así:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"src/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── components/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   ├── movement.ts"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   └── ..."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── entities/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   ├── player.ts"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   └── ..."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── scenes/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   ├── boot.ts"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"│   └── ..."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── context.ts"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"└── ..."})})]})}),`
`,e.jsx(s.p,{children:`Nota: esta herramienta la hice pa' mi, como me gusta organizar mi proyecto, pero quizas le funcione a alguien mas y por eso
decidi publicarla!`}),`
`,e.jsx(s.p,{children:"y listo, pasatela chido!"})]})}function o(a={}){const{wrapper:s}={...i(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(n,{...a})}):n(a)}export{o as default,l as frontmatter};
