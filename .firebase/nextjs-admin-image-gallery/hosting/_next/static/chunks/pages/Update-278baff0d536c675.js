(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{7569:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Update",function(){return a(5784)}])},9690:function(e,t,a){"use strict";var s=a(5893),n=a(1163),i=a(7294),d=a(175);let l=e=>{let{children:t}=e,a=(0,n.useRouter)(),{user:l}=(0,d.a)();return(0,i.useEffect)(()=>{l.uid||a.push("/login")},[a,l]),(0,s.jsx)("div",{children:l?t:null})};t.Z=l},5784:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(5893),n=a(7294),i=a(8039),d=a(3446),l=a.n(d),c=a(1294),r=a(5675),u=a.n(r),o=a(9690);let h=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{d()},[e]);let a=(0,c.hJ)(i.R,"About"),d=async()=>{let e=await (0,c.PL)(a),s=[];e.forEach(e=>{s.push(e)}),setTimeout(()=>{t(s)},1e3)},[r,u]=(0,n.useState)("iFVDvkl4HamfnHMWEl0B"),[o,h]=(0,n.useState)(r);(0,n.useEffect)(()=>{},[o]);let p=()=>{let e=(0,c.JU)(i.R,"About","".concat(r));(0,c.r7)(e,{bio:o})};return(0,s.jsx)(s.Fragment,{children:e&&e.map((e,t)=>(0,s.jsxs)("section",{className:l().ABOUTcontainer,children:[(0,s.jsx)("div",{className:l().ABOUT,children:(0,s.jsx)("ul",{children:(0,s.jsx)("div",{children:e.data().bio})})}),(0,s.jsxs)("div",{className:l().aboutUPDATE,children:[(0,s.jsx)("textarea",{placeholder:e.data().bio,onChange:e=>h(e.target.value)}),(0,s.jsx)("button",{onClick:()=>{p()},children:" Update "})]})]},e.id))})},p=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{d()},[e]);let a=(0,c.hJ)(i.R,"art"),d=async()=>{let e=await (0,c.PL)(a),s=[];e.forEach(e=>{s.push(e)}),setTimeout(()=>{t(s)},1e3)},[r,p]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),[m,f]=(0,n.useState)(""),[g,v]=(0,n.useState)(""),[U,b]=(0,n.useState)(""),[S,E]=(0,n.useState)(""),[N,C]=(0,n.useState)(""),[k,_]=(0,n.useState)(m),[w,y]=(0,n.useState)(g),[R,T]=(0,n.useState)(U),[I,J]=(0,n.useState)(S),[P,A]=(0,n.useState)(N);(0,n.useEffect)(()=>{},[k,w,R,I,P]);let F=()=>{let e=(0,c.JU)(i.R,"art","".concat(m));(0,c.r7)(e,{date:w})},O=()=>{let e=(0,c.JU)(i.R,"art","".concat(m));(0,c.r7)(e,{dimensions:R})},Z=()=>{let e=(0,c.JU)(i.R,"art","".concat(m));(0,c.r7)(e,{medium:I})},B=()=>{let e=(0,c.JU)(i.R,"art","".concat(m));(0,c.r7)(e,{price:P})};return(0,s.jsxs)(o.Z,{children:[e&&e.map((e,t)=>(0,s.jsxs)("section",{className:l().UPDATEcontainer,children:[(0,s.jsx)("div",{className:l().UpdateImage,children:(0,s.jsx)(u(),{src:e.data().url,alt:"Gallery Image",onClick:()=>{f(e.data().title),v(e.data().date),b(e.data().dimensions),E(e.data().medium),C(e.data().price),alert("".concat(e.data().title," is selected for update"))},width:640,height:360,priority:!0,unoptimized:!0,tabIndex:0},e.id)}),(0,s.jsx)("div",{className:l().UpdateInfo,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("div",{children:e.data().title}),(0,s.jsx)("div",{children:e.data().date}),(0,s.jsx)("div",{children:e.data().dimensions}),(0,s.jsx)("div",{children:e.data().medium}),(0,s.jsx)("div",{children:e.data().price})]})}),(0,s.jsxs)("div",{className:l().UpdateInputs,children:[(0,s.jsx)("input",{type:"text",placeholder:e.data().date,onChange:e=>y(e.target.value)}),(0,s.jsx)("button",{onClick:()=>{F()},children:" Update "}),(0,s.jsx)("input",{type:"text",placeholder:e.data().dimensions,onChange:e=>T(e.target.value)}),(0,s.jsx)("button",{onClick:()=>{O()},children:" Update "}),(0,s.jsx)("input",{type:"text",placeholder:e.data().medium,onChange:e=>J(e.target.value)}),(0,s.jsx)("button",{onClick:()=>{Z()},children:" Update "}),(0,s.jsx)("input",{type:"text",placeholder:e.data().price,onChange:e=>A(e.target.value)}),(0,s.jsx)("button",{onClick:()=>{B()},children:" Update "})]})]},e.id)),(0,s.jsx)(h,{})]})},x=()=>null!=i.I.currentUser?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(p,{})})}):(0,s.jsx)(o.Z,{children:(0,s.jsx)("div",{className:l().SPINNERbox,children:(0,s.jsx)(u(),{src:"https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery.appspot.com/o/spinner%2Floader-min%20(3).gif?alt=media&token=e6f5c9da-af4d-4590-96ec-b29f5da82a06",width:640,height:360,alt:"loading",unoptimized:!0})})});var j=x}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=7569)}),_N_E=e.O()}]);