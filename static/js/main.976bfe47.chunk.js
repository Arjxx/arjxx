(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a.p+"static/media/laptop.6e099379.png"},69:function(e,t,a){e.exports=a(83)},76:function(e,t,a){e.exports=a.p+"static/media/ship.62b6f10b.png"},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(58),i=a(43),o=a(3),c=a(6);const s=Object(n.createContext)(),d=e=>{let{children:t}=e;const[a,r]=Object(n.useState)("light");return l.a.createElement(s.Provider,{value:{theme:a,toggleTheme:()=>{r(e=>"light"===e?"dark":"light")}}},t)},m=()=>Object(n.useContext)(s);var u=c.b`
  body {
  padding: 0 ;
  margin:0;
    background-color: ${e=>{let{theme:t}=e;return"dark"===t.mode?"#000":"#fff"}};
    color: ${e=>{let{theme:t}=e;return"dark"===t.mode?"#fff":"#000"}};
    transition: all 0.3s ease;
  }
`;const p=c.d.div`
  background: ${e=>{let{theme:t}=e;return"light"===t.mode?"#fff":"#444"}};
  color: ${e=>{let{theme:t}=e;return"light"===t.mode?"#000":"#fff"}};
  border: 1px solid ${e=>{let{theme:t}=e;return"light"===t.mode?"#ddd":"#555"}};
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
`;var h=e=>{let{title:t,description:a,technologies:n}=e;const{theme:r}=m();return l.a.createElement(p,{theme:{mode:r}},l.a.createElement("h3",null,t),l.a.createElement("p",null,a),l.a.createElement("p",null,l.a.createElement("strong",null,"Technologies Used:")," ",n))};const g=c.d.div`
  display: grid;
  height: auto;
  background-color: ${e=>{let{theme:t}=e;return"light"===t?"white":"#282c34"}};
  color: ${e=>{let{theme:t}=e;return"light"===t?"#000":"white"}};
  padding: 20px;
`,E=c.d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  grid-template-areas: "b-col-1 b-col-2";
  gap:20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "b-col-2"
      "b-col-1";
  }
`,x=c.d.div`
  grid-area: b-col-2;
  width:100%;
  height:300px;
  background-color:red;
`,f=c.d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  grid-area: b-col-1;
   width:100%;
   height:300px;
  background-color:red;
`,v=c.d.h1`
  font-size: 3rem;
  margin: 0;
`,b=c.d.p`
  font-size: 1.5rem;
  margin: 10px 0 0;
`,w=c.d.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,k=()=>{const{theme:e}=m();return l.a.createElement(g,{theme:e},l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(v,null,"Your Name"),l.a.createElement(b,null,"Web Developer | Designer | Programmer")),l.a.createElement(x,null,l.a.createElement(w,{src:"your-image-url.jpg",alt:"Your Name"}))))},y=c.d.div`
  position: relative;
  width: 300px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`,S=c.d.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://via.placeholder.com/300x200');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  z-index: 1;

  ${y}:hover & {
    transform: scale(5) translate(50px, 50px);
    filter: blur(10px);
  }
`,j=c.d.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 2;
`,M=c.d.h2`
  font-size: 24px;
  margin: 0;
`,P=c.d.h3`
  font-size: 16px;
  margin: 0;
`,A=c.d.div`
  position: absolute;
  top: 250px;
  right: -110%;
  width: 90%;
  padding: 10px;
  color: white;
  border-radius: 10px;
  transition: right 0.5s ease;
  z-index: 2;

  ${y}:hover & {
    right: 0;
  }
`,C=c.d.div`
  position: absolute;
  bottom: -50px;
  right: 20px;
  color: aliceblue;
  transition: bottom 0.5s ease;
  z-index: 2;

  ${y}:hover & {
    bottom: 20px;
  }
`,D=e=>{const{theme:t}=m();return l.a.createElement(y,null,l.a.createElement(S,null),l.a.createElement(j,null,l.a.createElement(M,null,e.title),l.a.createElement(P,null,e.subtitle)),l.a.createElement(A,null,e.description),l.a.createElement(C,null,l.a.createElement("a",{href:e.link},"More")))},T=c.d.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 30px;
  justify-content: center;
  width: 100%;

  @media (min-width: 667px) {
    grid-template-columns: 300px 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 300px 300px 300px;
  }

  @media (min-width: 1350px) {
    grid-template-columns: 300px 300px 300px 300px;

  }
`,H=()=>l.a.createElement(T,null,l.a.createElement(D,null),l.a.createElement(D,null),l.a.createElement(D,null),l.a.createElement(D,null)),O=c.d.div`
  width: auto;
  height: 70px;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 10px 0;
`,$=c.d.div`
  width: 100%;
  text-align:center;
  line-height:5px;
`,z=c.d.div`
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  font-size: 4rem;

  ${e=>{let{isActive:t}=e;return t&&c.c`
      opacity: 1;
      transform: translateY(0%);
    `}}
`,I=["Developer","Designer","Programmer"];var R=()=>{const[e,t]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%I.length)},1500);return()=>clearInterval(e)},[]),l.a.createElement("div",null,l.a.createElement($,null,l.a.createElement("p",null,"Hi"),l.a.createElement("p",null,"I am Arjun Suresh,"),l.a.createElement("p",null," and I am a")),l.a.createElement(O,null,I.map((t,a)=>l.a.createElement(z,{key:a,isActive:a===e},t))))},Y=a(61),L=a.n(Y);a(76);const B=c.d.div``,J=c.d.div`
  position: relative;
  height: 500vh; /* Ensure the Box has enough height to allow for scrolling */
`,N=c.d.div`
  position: relative;
  top: 80vh;
`,Q=c.d.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 3rem;
  z-index: 0; /* Optional: Ensure it stays on top */
`,F=c.d.div`
  position: absolute;
  width: 20%;
  height: 350px;
  top: 600px;
  left: 500px;
  no-repeat center/contain;
  animation: floatAndRotate1 120s linear infinite;

  @keyframes floatAndRotate1 {
    0%     {
      transform: translate(-50%, -50%) translateY(20px) rotate(0deg);
    }
   
       100% {
      transform: translate(-500%, -700%) translateY(20px) rotate(360deg);
    }
  }
`,G=c.d.div`
  position: absolute;
  width: 20%;
  height: 350px;
  background: url("https://cdn3d.iconscout.com/3d/premium/thumb/coding-book-4493997-3738381.png")
    no-repeat center/contain;
  top: 350px;
  right: 200px;
  transform: translate(-50%, -50%);
  animation: floatAndRotate2 120s linear  infinite;

  @keyframes floatAndRotate2 {
    0%   {
      transform: translate(-50%, -70%) translateY(-20px) rotate(0deg);
    }
   
       100% {
      transform: translate(-50%, -70%) translateY(-20px) rotate(-360deg);
    }
  }
`,W=(c.d.div`
  position: absolute;
  width: 10%;
  height: 350px;
  top: 900px;
  right: 700px;
  transform: translate(-50%, -50%);
  animation: floatAndRotate 60s  infinite;

  @keyframes floatAndRotate {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(-20px) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) translateY(20px) rotate(10deg);
    }
  }
`,()=>(Object(n.useEffect)(()=>{const e=setTimeout(()=>{document.getElementById("box-container").scrollIntoView({behavior:"smooth"})},100);return()=>clearTimeout(e)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null,l.a.createElement(J,null,l.a.createElement(Q,null,l.a.createElement(R,null)),l.a.createElement(N,{id:"box-container"},l.a.createElement(F,null,l.a.createElement("img",{style:{width:"100%"},src:L.a,alt:"Laptop"})),l.a.createElement(G,null)))))));c.d.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width:100%;

@media (min-width: 768px) {
    width: 750px;

}
@media (min-width: 992px) {
    width: 970px;

}
@media (min-width: 1200px) {
    width: 1170px;
  }
`;var K=()=>l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement(k,null),l.a.createElement(H,null),l.a.createElement(h,{title:"Reporting System Website",description:"Developed a website to track Google keyword rankings and website backlinks, generating and emailing PDF reports to users.",technologies:"HTML, CSS, JavaScript, Bootstrap, PHP, Node.js"}),l.a.createElement(h,{title:"MCQ System for Online Tests",description:"Developed an online system for users to take MCQ tests on various subjects and receive instant results.",technologies:"HTML, CSS, JavaScript, Bootstrap, PHP, MySQL"}));var V=()=>l.a.createElement("div",null,l.a.createElement("h1",null,"About Me"),l.a.createElement("p",null,"My name is Arjun Suresh. I'm a web developer with expertise in HTML, CSS, JavaScript, PHP, and more. I have a strong understanding of SEO, graphic design, and multimedia tools."),l.a.createElement("h2",null,"Education"),l.a.createElement("ul",null,l.a.createElement("li",null,"BSc Multimedia - IMAGE CREATIVE, 2015 - 2018"),l.a.createElement("li",null,"MHSS +2 - 2013"),l.a.createElement("li",null,"SREENIKETHAN - Class X, 2010")),l.a.createElement("h2",null,"Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Web Developer - Icubics Technologies, Kottayam, 2022 - Present"),l.a.createElement("li",null,"Multimedia Designer - TECHADEMY, Bangalore, 2019 - 2020"),l.a.createElement("li",null,"Graphic Designer - Chithira Digital Press, Kollam, 2018 - 2019")));var U=function(){const[e,t]=Object(n.useState)(0),a=()=>{const e=window.pageYOffset;t(e)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),l.a.createElement("div",{style:{height:"150vh",padding:"20px"}},l.a.createElement("h1",null,"Scroll Position: ",e,"px"),l.a.createElement("p",null,"Scroll down to see the effect."))};var X=()=>l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("h1",null,"My Projects"),l.a.createElement(h,{title:"Reporting System Website",description:"Developed a website to track Google keyword rankings and website backlinks, generating and emailing PDF reports to users.",technologies:"HTML, CSS, JavaScript, Bootstrap, PHP, Node.js"}),l.a.createElement(h,{title:"MCQ System for Online Tests",description:"Developed an online system for users to take MCQ tests on various subjects and receive instant results.",technologies:"HTML, CSS, JavaScript, Bootstrap, PHP, MySQL"})),q=a(112),Z=a(111),_=a(109),ee=a(110);var te=()=>{const{toggleTheme:e,theme:t}=m();return l.a.createElement(q.a,{control:l.a.createElement(Z.a,{checked:"dark"===t,onChange:e}),label:"dark"===t?l.a.createElement(_.a,null):l.a.createElement(ee.a,null)})};const ae=c.d.nav`
  background: ${e=>{let{theme:t}=e;return"light"===t.mode?"#f8f9fa":"#343a40"}};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  z-index:999;
  width:100%;
`,ne=Object(c.d)(i.b)`
  color: ${e=>{let{theme:t}=e;return"light"===t.mode?"#000":"#fff"}};
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;var le=()=>{const{theme:e}=m();return l.a.createElement(ae,{theme:{mode:e}},l.a.createElement("h1",null,"Arjun Suresh"),l.a.createElement("div",null,l.a.createElement(ne,{theme:{mode:e},to:"/"},"Home"),l.a.createElement(ne,{theme:{mode:e},to:"/about"},"About"),l.a.createElement(ne,{theme:{mode:e},to:"/projects"},"Projects")),l.a.createElement(te,null))};const re=c.d.footer`
  background: ${e=>{let{theme:t}=e;return"light"===t?"#f8f9fa":"#343a40"}};
  padding: 1em;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return"light"===t?"#000":"#fff"}};

  
  bottom: 0;
`,ie=(new Date).getFullYear();var oe=()=>l.a.createElement(re,null,l.a.createElement("p",null,"\xa9 ",ie," Arjun Suresh. All Rights Reserved."));a(82);const ce=c.d.div`
  padding:0px;

@media (max-width: 768px) {

}
@media (max-width: 992px) {

}
@media (max-width: 1200px) {
  }
`,se=()=>{const{theme:e}=m();return l.a.createElement(c.a,{theme:{mode:e}},l.a.createElement(u,null),l.a.createElement(i.a,null,l.a.createElement(le,null),l.a.createElement(ce,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(K,null)}),l.a.createElement(o.a,{path:"/about",element:l.a.createElement(V,null)}),l.a.createElement(o.a,{path:"/projects",element:l.a.createElement(X,null)})))," ",l.a.createElement(oe,null)))};var de=()=>l.a.createElement(d,null,l.a.createElement(se,null));const me=document.getElementById("root");Object(r.createRoot)(me).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null,l.a.createElement(de,null))))}},[[69,1,2]]]);
//# sourceMappingURL=main.976bfe47.chunk.js.map