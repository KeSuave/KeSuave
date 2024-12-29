import{d as a,j as e}from"./index-Bx32hr4R.js";const r={layout:"minimal",title:"KaTools",description:"undefined"};function i(n){const s={a:"a",br:"br",code:"code",div:"div",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"katools",children:["KaTools",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#katools",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["Sup!",e.jsx(s.br,{}),`
`,"Today I want to introduce ",e.jsx(s.a,{href:"https://www.npmjs.com/package/katools",children:"KaTools"}),`, a simple CLI tool that takes care of the boilerplate code for you when creating
games with `,e.jsx(s.a,{href:"https://kaplayjs.com/",children:"KAPLAY"}),"."]}),`
`,e.jsx(s.p,{children:`A few months ago I was bored and remembered about a game framework called KABOOM, it was getting popular and youtube
was recommending me videos on how to create games using this framework. I remember playing with it a little bit, I
really liked it's API but because it was generally the new kid on the block, it didn't have a few things that I wanted
at that time. I stopped hearing about it and when I searched for it, I found out that KABOOM had been discontinued and
replaced by KAPLAY.`}),`
`,e.jsxs(s.p,{children:[`The KAPLAY team was also promoting their first game jam. So, I decided to participate in my first game jam. I ended up creating
`,e.jsx(s.a,{href:"https://kesuave.github.io/KaPlanck/",children:"KaPlanck"}),", a plugin that integrates ",e.jsx(s.a,{href:"https://piqnt.com/planck.js",children:"PlanckJS"}),` instead
of working in my game entry, which got last place 😄`]}),`
`,e.jsx(s.p,{children:`But I learned a lot from this experience and decided I was going to start creating more games using KAPLAY because it's API
truly makes it feel fun and easy to create games with. I had previously created a game or two using Phaser, in which I had
created a CLI tool that would generate boilerplate code for me when starting new projects. So, I decided to do the same thing
for KAPLAY. The result being KaTools!`}),`
`,e.jsx(s.p,{children:"To start using KaTools, first create a project using your favorite bundler/starter kit. For example:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-kaplay"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" mygame"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --typescript"})]})})}),`
`,e.jsx(s.p,{children:"Then cd into that directory and run:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" katools"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" init"})]})})}),`
`,e.jsx(s.p,{children:"This will generate the following files:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/context.ts"})," - Contains your game's context setup."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/index.ts"})," - Contains the scene manager for your game."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/boot.ts"})," - Contains the boot scene, where you can load assets."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/menu.ts"})," - Contains a simple menu scene to get started quickly."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/game.ts"})," - Contains your game's main gameplay logic."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/scenes/gameOver.ts"})," - Contains the game over screen."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Then you can simply add the following lines to your entry point file, in this case of create-kaplay it would be ",e.jsx(s.code,{children:"src/main.ts"}),":"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { k } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "./context"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"k."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"go"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"boot"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsx(s.p,{children:"that is it, you have the basic setup for a Kaplay game!"}),`
`,e.jsx(s.p,{children:"Katools also provides some commands to help add scenes, components, and entities:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools scene <name>"})," - Creates a new scene with the given name."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools component <name>"})," - Creates a new component with the given name."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npx katools entity <name>"})," - Creates a new entity with the given name."]}),`
`]}),`
`,e.jsx(s.p,{children:"your project structure should look something like this:"}),`
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
`,e.jsx(s.p,{children:`Note: this was created mostly for personal use, so it might not be the best way to do things, but it works for me! I decided
to make it public because maybe someone else will find it useful.`}),`
`,e.jsx(s.p,{children:"With that said, happy coding!"})]})}function l(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{l as default,r as frontmatter};
