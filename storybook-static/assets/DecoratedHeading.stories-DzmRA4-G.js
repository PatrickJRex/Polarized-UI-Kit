import{x as a}from"./lit-element-48dhvRsy.js";/* empty css                   */const o=({position:e,label:t,tag:s})=>{switch(s){case"h1":return a`
            <h1 class="${["decorated-heading",`decorated-heading--${e}`,`text-align-${e}`].join(" ")}">
            <span class="decorated-heading__text">
                ${t}
            </span>
            </h1>`;case"h2":return a`
            <h2 class="${["decorated-heading",`decorated-heading--${e}`,`text-align-${e}`].join(" ")}">
            <span class="decorated-heading__text">
                ${t}
            </span>
            </h2>`;case"h3":return a`
        <h3 class="${["decorated-heading",`decorated-heading--${e}`,`text-align-${e}`].join(" ")}">
        <span class="decorated-heading__text">
            ${t}
        </span>
        </h3>`;default:return a`
      <h2 class="${["decorated-heading",`decorated-heading--${e}`,`text-align-${e}`].join(" ")}">
         <span class="decorated-heading__text">
          ${t}
         </span>
      </h2>
    `}},g={title:"Molecules/DecoratedHeading",tags:["autodocs"],render:e=>o(e),argTypes:{label:{control:"text",description:"Set the text for the heading",defaultValue:"See the game in action!",name:"Heading text"},position:{control:"select",description:"Set the text position",defaultValue:"center",options:["left","center","right"],name:"Heading position"},tag:{control:"select",description:"Set the tag",defaultValue:"p",options:["h1","h2","h3"],name:"Tag"}}},n={args:{label:"Watch the game in action",tag:"h2",position:"center"}};var d,r,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Watch the game in action",
    tag: 'h2',
    position: 'center'
  }
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const l=["DecoratedH2"];export{n as DecoratedH2,l as __namedExportsOrder,g as default};
