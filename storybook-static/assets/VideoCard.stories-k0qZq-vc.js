import{x as l}from"./lit-element-48dhvRsy.js";import"./videoCard-CU5zEypq.js";const n=({videoId:e,image:a,alt:s})=>{let o=`https://i.ytimg.com/vi/${e}/hqdefault.jpg`;return a&&(o=a),l`
    <lite-youtube videoid="${e}" style="background-image: url(${o});">
    <a href="https://youtube.com/watch?v=${e}" class="lty-playbtn lty-playbtn--polarized" title="Play Video">
      <span class="lyt-visually-hidden">${s}</span>
    </a>
    <div class="lty-fill"></div>
  </lite-youtube>   
    `},p={title:"Molecules/VideoCard",tags:["autodocs"],render:e=>n(e),argTypes:{image:{control:"text",description:"Choose an image to override the youtube thumbnail",name:"Image",defaultValue:"docs.png"},videoId:{control:"text",description:"Add a video ID",name:"Video ID"}}},t={args:{videoId:"pD4E_RddfZQ",alt:"Are men crying a turnoff?"}};var r,d,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    videoId: 'pD4E_RddfZQ',
    alt: 'Are men crying a turnoff?'
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const m=["ExampleVideo"];export{t as ExampleVideo,m as __namedExportsOrder,p as default};
