import{x as y}from"./lit-element-48dhvRsy.js";/* empty css                   */const L=({label:a,link:u,weight:g,type:k})=>y`
        <a href="${u}" class="${["text-link",`text-link--${k}`,`font-weight--${g}`].join(" ")}">
        ${a}
        </a>
     `,f={title:"Atoms/Links",tags:["autodocs"],render:a=>L(a),argTypes:{label:{control:"text",description:"set the label",defaultValue:"Link",name:"Label"},link:{control:"url",description:"set the link"},weight:{control:"select",description:"Set the weight",defaultValue:400,options:[100,150,200,250,300,350,400,450,500,550,600,650,700,750,800],name:"Weight"},type:{control:"select",description:"Set the link type",options:["primary","decorated","inline"],defaultValue:"primary",name:"Type"}}},e={args:{label:"lorem impsum....",type:"primary"}},r={args:{label:"lorem impsum....",type:"decorated"}},t={args:{label:"lorem impsum....",type:"inline"}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'lorem impsum....',
    type: 'primary'
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'lorem impsum....',
    type: 'decorated'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'lorem impsum....',
    type: 'inline'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["LinkBasic","LinkDecorated","LinkInline"];export{e as LinkBasic,r as LinkDecorated,t as LinkInline,x as __namedExportsOrder,f as default};
