"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[794],{7449:function(e,t,a){var n,l=a(5276),r=a(4794),o=a(6540),i=a(4715);t.A=e=>{let t,a,n,l,{maxPage:i,current:m,type:u=""}=e;return t=1===m?o.createElement("li",{className:"not-work",key:"pagination0"},o.createElement("span",null,"最新")):o.createElement("li",{key:"pagination0"},o.createElement(r.Link,{to:"/"+u+(u?"/":"")},"最新")),a=1===m?o.createElement("li",{className:"not-work",key:"pagination1"},o.createElement("span",null,"前へ")):2===m?o.createElement("li",{key:"pagination1"},o.createElement(r.Link,{to:"/"+u+(u?"/":"")},"前へ")):o.createElement("li",{key:"pagination1"},o.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+(m-1)+"/"},"前へ")),n=m===i?o.createElement("li",{className:"not-work",key:"pagination3"},o.createElement("span",null,"次へ")):o.createElement("li",{key:"pagination3"},o.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+(m+1)+"/"},"次へ")),l=m===i?o.createElement("li",{className:"not-work",key:"paginatio4"},o.createElement("span",null,"最後")):o.createElement("li",{key:"pagination4"},o.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+i+"/"},"最後")),i>1?o.createElement(c,null,o.createElement("ul",null,t,a,o.createElement("li",{key:"pagination2"},"page ",m,"/",i),n,l)):o.createElement(o.Fragment,null)};const c=i.Ay.nav(n||(n=(0,l.A)(["\n  ul {\n    display: flex;\n    list-style: none;\n    justify-content: center;\n\n    li {\n      padding: 0 10px;\n\n      &.not-work span {\n        text-decoration: none;\n        background: var(--orange);\n        color: #fff;\n        opacity: 0.5;\n      }\n\n      span, a {\n        text-decoration: underline;\n        display: flex;\n        align-items: center;\n        font-weight: 700;\n        color: var(--orange);\n        border-radius: 5px;\n        border: 1px solid var(--orange);\n        padding: 0 10px;\n      }\n    }\n  }\n"])))},5700:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d}});var n=a(6540),l=a(4794),r=a(500),o=a(2080),i=a(1042),c=a(2532),m=a(1877),u=a(7449);t.default=e=>{let{pageContext:t,data:a,location:i}=e;const d=(0,r.u)(a.allMdx,a.allWpPost,a.allFile);return n.createElement(o.A,{location:i},n.createElement(m.yH,null,n.createElement("h1",null,"記事一覧")),n.createElement(m.N1,null,d.map((e=>n.createElement("li",{key:e.slug},n.createElement("article",{className:"post-list-item",itemType:"http://schema.org/Article"},n.createElement(l.Link,{to:e.slug},n.createElement("h2",null,n.createElement("span",null,e.title)),n.createElement("section",null,n.createElement("div",null,n.createElement("small",null,n.createElement("time",null,e.date))),n.createElement("div",{className:"thumbnail"},void 0===e.gatsbyImage||n.createElement(c.G,{alt:e.altText,image:e.gatsbyImage,className:"thumbnail"})),n.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))))))),n.createElement(u.A,{maxPage:t.maxPage,current:t.current}))};const d=e=>{let{location:t}=e;return n.createElement(i.A,{title:"記事一覧",location:t})}},500:function(e,t,a){a.d(t,{d:function(){return r},u:function(){return l}});var n=a(2532);function l(e,t,a){let l={};a&&a.edges.forEach((e=>{l[e.node.relativePath]=e.node.childImageSharp.gatsbyImageData}));const r=e.nodes,o=t.nodes;return r.map((e=>({title:e.frontmatter.title,excerpt:e.excerpt,slug:e.fields.slug,date:e.frontmatter.date,description:e.frontmatter.description,altText:e.frontmatter.featuredImagePath,gatsbyImage:(0,n.c)(l[e.frontmatter.featuredImagePath||"featured/defaultThumbnail.png"]),category:e.frontmatter.category||"",tags:e.frontmatter.tags||[]}))).concat(o.map((e=>{var t,a,r,o,i;return{title:e.title,excerpt:e.excerpt,slug:"/"+e.slug,date:e.date,altText:(null===(t=e.featuredImage)||void 0===t?void 0:t.node.altText)||"",gatsbyImage:(null===(a=e.featuredImage)||void 0===a?void 0:a.node.gatsbyImage)||(0,n.c)(l["featured/defaultThumbnail.png"]),category:(null===(r=e.categories)||void 0===r||null===(o=r.nodes[0])||void 0===o?void 0:o.name)||"",tags:(null===(i=e.tags)||void 0===i?void 0:i.nodes.map((e=>e.name)))||[]}}))).sort(((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()))}function r(e,t,a){var l,r;let o={};return a&&a.edges.forEach((e=>{o[e.node.relativePath]=e.node.childImageSharp.gatsbyImageData})),{title:(null==e?void 0:e.frontmatter.title)||(null==t?void 0:t.title),excerpt:(null==e?void 0:e.excerpt)||(null==t?void 0:t.excerpt),slug:(null==e?void 0:e.fields.slug)||"/"+(null==t?void 0:t.slug),date:(null==e?void 0:e.frontmatter.date)||(null==t?void 0:t.date),description:(null==e?void 0:e.frontmatter.description)||"",altText:(null==e?void 0:e.frontmatter.featuredImagePath)||(null==t||null===(l=t.featuredImage)||void 0===l?void 0:l.node.altText)||"",gatsbyImage:(0,n.c)(o[(null==e?void 0:e.frontmatter.featuredImagePath)||"featured/defaultThumbnail.webp"])||(null==t||null===(r=t.featuredImage)||void 0===r?void 0:r.node.gatsbyImage)||(0,n.c)(o["featured/defaultThumbnail.webp"])}}}}]);
//# sourceMappingURL=component---src-templates-page-list-tsx-b349e53c7d1937884bbe.js.map