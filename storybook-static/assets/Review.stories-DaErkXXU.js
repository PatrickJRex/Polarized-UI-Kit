import{x as d}from"./lit-element-48dhvRsy.js";/* empty css                   */const l=({reviewer:e,icon:r,reviewHeadline:t,reviewText:i})=>d`
     <div class="review-component">
     <header>
        <img src="../assets/${r}"  alt="${e} profile" />
      <span class="font-weight--600">${e}</span>
     </header>
     <div class="review-component__body">
        <h2 class="font-weight--400">${t}</h2>
        <p class="text-margin-none">
        ${i}
        </p>
     </div>
     </div>
    `,v={title:"Molecules/Reviews",tags:["autodocs"],render:e=>l(e),argTypes:{reviewer:{control:"text",defaultValue:"Helen",description:"Reviewer's name",name:"Reviewer"},icon:{control:"text",defaultValue:"icon-user.svg",description:"Name the icon to use",name:"Icon"},reviewHeadline:{control:"text",defaultValue:"Hilarious",description:"Add the headline",name:"Headline"},reviewText:{control:"text",defaultValue:"Some of the most fun and engaging conversations I've ever had. And we laughed our asses off for 45 minutes!",description:"Add the headline",name:"Headline"}}},n={args:{reviewer:"Bob",reviewHeadline:"Hilarious!",icon:"icon-user.svg",reviewText:"Some of the most fun and engaging conversations I've ever had. And we laughed our asses off for 45 minutes!"}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    reviewer: "Bob",
    reviewHeadline: "Hilarious!",
    icon: 'icon-user.svg',
    reviewText: "Some of the most fun and engaging conversations I've ever had. And we laughed our asses off for 45 minutes!"
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const m=["ExampleReview"];export{n as ExampleReview,m as __namedExportsOrder,v as default};
