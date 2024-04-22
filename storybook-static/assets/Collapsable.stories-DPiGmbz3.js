import{x as o}from"./lit-element-48dhvRsy.js";/* empty css                   */const d=({summary:a,details:p,type:s})=>o`
        <details class="${["collapsable",`collapsable--${s}`].join(" ")}">
          <summary>
          <h5 class="font-weight--500">${a}</h5>
          ${s==="faq"?o`<i class="fa fa-arrow-circle-down text-color--brand-yellow"></i>`:""}
    
          </summary>
          <div>
          <p>${p}</p>
          </div>
        </details>
    `,g={title:"Atoms/Collapsable",tags:["autodocs"],render:a=>d(a),argTypes:{type:{control:"select",options:["generic","faq"],name:"Type",defaultValue:"generic"},details:{control:"text",name:"Details"},summary:{control:"text",name:"Summary"}}},e={args:{type:"generic",summary:"This is a generic summary",details:"Lorem ipsum, set dolar more more more more"}},r={args:{type:"faq",summary:"This is a FAQ summary",details:"Lorem ipsum, set dolar more more more more"}};var m,t,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'generic',
    summary: "This is a generic summary",
    details: "Lorem ipsum, set dolar more more more more"
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'faq',
    summary: "This is a FAQ summary",
    details: "Lorem ipsum, set dolar more more more more"
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const f=["Generic","FAQ"];export{r as FAQ,e as Generic,f as __namedExportsOrder,g as default};
