/*! For license information please see main.b9d85627.js.LICENSE.txt */
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,vr`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,vr`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,vr`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,vr`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,vr`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,vr`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,vr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,vr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,vr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,vr`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,vr`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,vr`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Or=vr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;vr`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ir(e,t){return n=>n?e():t()}function Nr(e){return Ir(e,(()=>null))}function Mr(e){return Nr((()=>({opacity:0})))(e)}const Lr=e=>{const{cascade:t=!1,damping:n=.5,delay:i=0,duration:a=1e3,fraction:o=0,keyframes:s=Or,triggerOnce:c=!1,className:l,style:u,childClassName:d,childStyle:h,children:f,onVisibilityChange:p}=e,g=(0,r.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:i=Or,iterationCount:a=1}=e;return br`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:a})),[a,s]);return void 0==f?null:"string"===typeof(m=f)||"number"===typeof m||"boolean"===typeof m?yr(jr,{...e,animationStyles:g,children:String(f)}):(0,Rr.isFragment)(f)?yr(Br,{...e,animationStyles:g}):yr(mr,{children:r.Children.map(f,((s,f)=>{if(!(0,r.isValidElement)(s))return null;const m=i+(t?f*a*n:0);switch(s.type){case"ol":case"ul":return yr(wr,{children:t=>{let{cx:n}=t;return yr(s.type,{...s.props,className:n(l,s.props.className),style:Object.assign({},u,s.props.style),children:yr(Lr,{...e,children:s.props.children})})}});case"li":return yr(Fr,{threshold:o,triggerOnce:c,onChange:p,children:e=>{let{inView:t,ref:n}=e;return yr(wr,{children:e=>{let{cx:r}=e;return yr(s.type,{...s.props,ref:n,className:r(d,s.props.className),css:Nr((()=>g))(t),style:Object.assign({},h,s.props.style,Mr(!t),{animationDelay:m+"ms"})})}})}});default:return yr(Fr,{threshold:o,triggerOnce:c,onChange:p,children:e=>{let{inView:t,ref:n}=e;return yr("div",{ref:n,className:l,css:Nr((()=>g))(t),style:Object.assign({},u,Mr(!t),{animationDelay:m+"ms"}),children:yr(wr,{children:e=>{let{cx:t}=e;return yr(s.type,{...s.props,className:t(d,s.props.className),style:Object.assign({},h,s.props.style)})}})})}})}}))});var m},Wr={display:"inline-block",whiteSpace:"pre"},jr=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:c,style:l,children:u,onVisibilityChange:d}=e,{ref:h,inView:f}=Pr({triggerOnce:s,threshold:o,onChange:d});return Ir((()=>yr("div",{ref:h,className:c,style:Object.assign({},l,Wr),children:u.split("").map(((e,n)=>yr("span",{css:Nr((()=>t))(f),style:{animationDelay:i+n*a*r+"ms"},children:e},n)))})),(()=>yr(Br,{...e,children:u})))(n)},Br=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:s}=e,{ref:c,inView:l}=Pr({triggerOnce:r,threshold:n,onChange:s});return yr("div",{ref:c,className:i,css:Nr((()=>t))(l),style:Object.assign({},a,Mr(!l)),children:o})};vr`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,vr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vr`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,vr`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,vr`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,vr`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,vr`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,vr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,vr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,vr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,vr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;vr`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,vr`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,vr`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,vr`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,vr`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;vr`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,vr`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,vr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;vr`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,vr`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,vr`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,vr`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,vr`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,vr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const zr=vr`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,qr=vr`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vr=vr`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Hr=vr`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$r=vr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Gr=vr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Xr=vr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Yr=vr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const Kr=e=>{const{direction:t,reverse:n=!1,...i}=e,a=(0,r.useMemo)((()=>function(e,t){switch(t){case"down":return e?$r:zr;case"right":return e?Xr:Vr;case"up":return e?Yr:Hr;default:return e?Gr:qr}}(n,t)),[t,n]);return yr(Lr,{keyframes:a,...i})},Qr=vr`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Jr=vr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Zr=vr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ei=vr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ti=vr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ni=vr`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ri=vr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ii=vr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ai=vr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,oi=vr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const si=e=>{const{direction:t,reverse:n=!1,...i}=e,a=(0,r.useMemo)((()=>function(e,t){switch(t){case"down":return e?ri:Jr;case"left":return e?ii:Zr;case"right":return e?ai:ei;case"up":return e?oi:ti;default:return e?ni:Qr}}(n,t)),[t,n]);return yr(Lr,{keyframes:a,...i})};function ci(){return(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsx)("nav",{className:"navbar navbar-expand-lg",children:(0,vt.jsxs)("div",{className:"container",children:[" ",(0,vt.jsx)(Wt,{className:"navbar-brand navbar-logo",to:"#",children:" "}),(0,vt.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[" ",(0,vt.jsx)("span",{className:"fas fa-bars"})," "]}),(0,vt.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,vt.jsx)("ul",{className:"navbar-nav ml-auto",children:(0,vt.jsxs)("li",{className:"nav-item",children:[" ",(0,vt.jsx)(Wt,{className:"nav-link",to:"#About",onClick:()=>{document.getElementById("About").scrollIntoView({behavior:"smooth",block:"start"})},children:"About"})," "]})})})]})}),(0,vt.jsx)("section",{className:"banner","data-scroll-index":"0",children:(0,vt.jsx)("div",{className:"banner-overlay",children:(0,vt.jsx)("div",{className:"container",children:(0,vt.jsxs)("div",{className:"row",children:[(0,vt.jsx)("div",{className:"col-md-7 col-sm-12",children:(0,vt.jsxs)("div",{className:"banner-text",children:[(0,vt.jsx)("h2",{className:"white",children:"Enhance your Resume in Seconds"}),(0,vt.jsx)("p",{className:"banner-text white",children:"Enhancing Professional Resumes for Your Success: Elevate your career with our user-friendly platform, showcasing your accomplishments and skills effortlessly. Your gateway to professional growth awaits!"}),(0,vt.jsx)("ul",{children:(0,vt.jsx)("li",{children:(0,vt.jsx)(Kr,{direction:"up",triggerOnce:!0,children:(0,vt.jsxs)(Wt,{to:"/getstarted",className:"banner-button",children:[(0,vt.jsx)("span",{className:"fadeInUp"}),"Get Started"]})})})})]})}),(0,vt.jsxs)("div",{className:"col-md-5 col-sm-12",children:[(0,vt.jsxs)(Kr,{direction:"up",triggerOnce:!0,children:[" ",(0,vt.jsx)("img",{src:zt,className:"img-fluid fadeInUp enlarged-image",alt:"Portfolio Template Image",style:{width:"100%",maxWidth:"1000px",height:"auto"}})]})," "]})]})})})}),(0,vt.jsx)("section",{id:"About",className:"about section-padding prelative","data-scroll-index":"1",children:(0,vt.jsx)("div",{className:"container",children:(0,vt.jsx)("div",{className:"row",children:(0,vt.jsxs)("div",{className:"col-md-12",children:[(0,vt.jsxs)("div",{className:"sectioner-header text-center",children:[(0,vt.jsx)("h3",{children:"About"}),(0,vt.jsx)("span",{className:"line"}),(0,vt.jsx)("p",{children:"Whether you're a seasoned professional or a student embarking on your career journey, our user-friendly interface make the process seamless. Showcase your skills, projects, and experiences in a way that captivates and communicates your unique value proposition."})]}),(0,vt.jsx)("div",{className:"section-content text-center",children:(0,vt.jsx)(si,{children:(0,vt.jsxs)("div",{className:"row",children:[(0,vt.jsx)("div",{className:"col-md-4",children:(0,vt.jsxs)("div",{className:"icon-box fadeInUp",children:[" ",(0,vt.jsx)("i",{className:"fa fa-life-ring","aria-hidden":"true"}),(0,vt.jsx)("h5",{children:"Effortless Resume Boost"}),(0,vt.jsx)("p",{children:"Upload your resume to tailor it to spotlight your strengths for the job. Get it back ready for further personalization to meet your needs."})]})}),(0,vt.jsx)("div",{className:"col-md-4",children:(0,vt.jsxs)("div",{className:"icon-box fadeInUp",children:[" ",(0,vt.jsx)("i",{className:"fa fa-mobile","aria-hidden":"true"}),(0,vt.jsx)("h5",{children:"Responsive Design"}),(0,vt.jsx)("p",{children:"Seamlessly adapting to various screen sizes, from desktops to tablets and smartphones, our platform guarantees that your professional story is presented with clarity and precision, regardless of the viewing medium."})]})}),(0,vt.jsx)("div",{className:"col-md-4",children:(0,vt.jsxs)("div",{className:"icon-box fadeInUp",children:[" ",(0,vt.jsx)("i",{className:"fa fa-bolt","aria-hidden":"true"}),(0,vt.jsx)("h5",{children:"Fast"}),(0,vt.jsx)("p",{children:"We understand the importance of a seamless user experience, and our commitment to optimal performance ensures that your resume loads swiftly, providing instant access to your professional narrative."})]})})]})})})]})})})}),(0,vt.jsx)("footer",{className:"landing-page-footer-copy",children:(0,vt.jsx)("div",{className:"container-fluid",children:(0,vt.jsx)("div",{className:"row",children:(0,vt.jsx)("div",{className:"col-md-12",children:(0,vt.jsx)("p",{children:"2024 \xa9 Resume Magic"})})})})})]})}const li=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ui=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,di={};function hi(e,t){return((t||di).jsx?ui:li).test(e)}const fi=/[ \t\n\f\r]/g;function pi(e){return""===e.replace(fi,"")}class gi{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}function mi(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new gi(n,r,t)}function yi(e){return e.toLowerCase()}gi.prototype.property={},gi.prototype.normal={},gi.prototype.space=null;class bi{constructor(e,t){this.property=e,this.attribute=t}}bi.prototype.space=null,bi.prototype.boolean=!1,bi.prototype.booleanish=!1,bi.prototype.overloadedBoolean=!1,bi.prototype.number=!1,bi.prototype.commaSeparated=!1,bi.prototype.spaceSeparated=!1,bi.prototype.commaOrSpaceSeparated=!1,bi.prototype.mustUseProperty=!1,bi.prototype.defined=!1;let vi=0;const xi=Ei(),_i=Ei(),wi=Ei(),Di=Ei(),Si=Ei(),Ti=Ei(),ki=Ei();function Ei(){return 2**++vi}const Ai=Object.keys(e);class Ci extends bi{constructor(t,n,r,i){let a=-1;if(super(t,n),Ui(this,"space",i),"number"===typeof r)for(;++a<Ai.length;){const t=Ai[a];Ui(this,Ai[a],(r&e[t])===e[t])}}}function Ui(e,t,n){n&&(e[t]=n)}Ci.prototype.defined=!0;const Fi={}.hasOwnProperty;function Pi(e){const t={},n={};let r;for(r in e.properties)if(Fi.call(e.properties,r)){const i=e.properties[r],a=new Ci(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[yi(r)]=r,n[yi(a.attribute)]=r}return new gi(t,n,e.space)}const Ri=Pi({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Oi=Pi({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ii(e,t){return t in e?e[t]:t}function Ni(e,t){return Ii(e,t.toLowerCase())}const Mi=Pi({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ni,properties:{xmlns:null,xmlnsXLink:null}}),Li=Pi({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:_i,ariaAutoComplete:null,ariaBusy:_i,ariaChecked:_i,ariaColCount:Di,ariaColIndex:Di,ariaColSpan:Di,ariaControls:Si,ariaCurrent:null,ariaDescribedBy:Si,ariaDetails:null,ariaDisabled:_i,ariaDropEffect:Si,ariaErrorMessage:null,ariaExpanded:_i,ariaFlowTo:Si,ariaGrabbed:_i,ariaHasPopup:null,ariaHidden:_i,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Si,ariaLevel:Di,ariaLive:null,ariaModal:_i,ariaMultiLine:_i,ariaMultiSelectable:_i,ariaOrientation:null,ariaOwns:Si,ariaPlaceholder:null,ariaPosInSet:Di,ariaPressed:_i,ariaReadOnly:_i,ariaRelevant:null,ariaRequired:_i,ariaRoleDescription:Si,ariaRowCount:Di,ariaRowIndex:Di,ariaRowSpan:Di,ariaSelected:_i,ariaSetSize:Di,ariaSort:null,ariaValueMax:Di,ariaValueMin:Di,ariaValueNow:Di,ariaValueText:null,role:null}}),Wi=Pi({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Ni,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ti,acceptCharset:Si,accessKey:Si,action:null,allow:null,allowFullScreen:xi,allowPaymentRequest:xi,allowUserMedia:xi,alt:null,as:null,async:xi,autoCapitalize:null,autoComplete:Si,autoFocus:xi,autoPlay:xi,blocking:Si,capture:null,charSet:null,checked:xi,cite:null,className:Si,cols:Di,colSpan:null,content:null,contentEditable:_i,controls:xi,controlsList:Si,coords:Di|Ti,crossOrigin:null,data:null,dateTime:null,decoding:null,default:xi,defer:xi,dir:null,dirName:null,disabled:xi,download:wi,draggable:_i,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:xi,formTarget:null,headers:Si,height:Di,hidden:xi,high:Di,href:null,hrefLang:null,htmlFor:Si,httpEquiv:Si,id:null,imageSizes:null,imageSrcSet:null,inert:xi,inputMode:null,integrity:null,is:null,isMap:xi,itemId:null,itemProp:Si,itemRef:Si,itemScope:xi,itemType:Si,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:xi,low:Di,manifest:null,max:null,maxLength:Di,media:null,method:null,min:null,minLength:Di,multiple:xi,muted:xi,name:null,nonce:null,noModule:xi,noValidate:xi,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:xi,optimum:Di,pattern:null,ping:Si,placeholder:null,playsInline:xi,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:xi,referrerPolicy:null,rel:Si,required:xi,reversed:xi,rows:Di,rowSpan:Di,sandbox:Si,scope:null,scoped:xi,seamless:xi,selected:xi,shadowRootClonable:xi,shadowRootDelegatesFocus:xi,shadowRootMode:null,shape:null,size:Di,sizes:null,slot:null,span:Di,spellCheck:_i,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Di,step:null,style:null,tabIndex:Di,target:null,title:null,translate:null,type:null,typeMustMatch:xi,useMap:null,value:_i,width:Di,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Si,axis:null,background:null,bgColor:null,border:Di,borderColor:null,bottomMargin:Di,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:xi,declare:xi,event:null,face:null,frame:null,frameBorder:null,hSpace:Di,leftMargin:Di,link:null,longDesc:null,lowSrc:null,marginHeight:Di,marginWidth:Di,noResize:xi,noHref:xi,noShade:xi,noWrap:xi,object:null,profile:null,prompt:null,rev:null,rightMargin:Di,rules:null,scheme:null,scrolling:_i,standby:null,summary:null,text:null,topMargin:Di,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Di,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:xi,disableRemotePlayback:xi,prefix:null,property:null,results:Di,security:null,unselectable:null}}),ji=Pi({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Ii,properties:{about:ki,accentHeight:Di,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Di,amplitude:Di,arabicForm:null,ascent:Di,attributeName:null,attributeType:null,azimuth:Di,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Di,by:null,calcMode:null,capHeight:Di,className:Si,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Di,diffuseConstant:Di,direction:null,display:null,dur:null,divisor:Di,dominantBaseline:null,download:xi,dx:null,dy:null,edgeMode:null,editable:null,elevation:Di,enableBackground:null,end:null,event:null,exponent:Di,externalResourcesRequired:null,fill:null,fillOpacity:Di,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ti,g2:Ti,glyphName:Ti,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Di,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Di,horizOriginX:Di,horizOriginY:Di,id:null,ideographic:Di,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Di,k:Di,k1:Di,k2:Di,k3:Di,k4:Di,kernelMatrix:ki,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Di,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Di,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Di,overlineThickness:Di,paintOrder:null,panose1:null,path:null,pathLength:Di,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Si,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Di,pointsAtY:Di,pointsAtZ:Di,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ki,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ki,rev:ki,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ki,requiredFeatures:ki,requiredFonts:ki,requiredFormats:ki,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Di,specularExponent:Di,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Di,strikethroughThickness:Di,string:null,stroke:null,strokeDashArray:ki,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Di,strokeOpacity:Di,strokeWidth:null,style:null,surfaceScale:Di,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ki,tabIndex:Di,tableValues:null,target:null,targetX:Di,targetY:Di,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ki,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Di,underlineThickness:Di,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Di,values:null,vAlphabetic:Di,vMathematical:Di,vectorEffect:null,vHanging:Di,vIdeographic:Di,version:null,vertAdvY:Di,vertOriginX:Di,vertOriginY:Di,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Di,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Bi=mi([Oi,Ri,Mi,Li,Wi],"html"),zi=mi([Oi,Ri,Mi,Li,ji],"svg"),qi=/^data[-\w.:]+$/i,Vi=/-[a-z]/g,Hi=/[A-Z]/g;function $i(e){return"-"+e.toLowerCase()}function Gi(e){return e.charAt(1).toUpperCase()}const Xi={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Yi=__webpack_require__(4222);const Ki=Yi.default||Yi,Qi=Zi("end"),Ji=Zi("start");function Zi(e){return function(t){const n=t&&t.position&&t.position[e]||{};if("number"===typeof n.line&&n.line>0&&"number"===typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"===typeof n.offset&&n.offset>-1?n.offset:void 0}}}function ea(e){return e&&"object"===typeof e?"position"in e||"type"in e?na(e.position):"start"in e||"end"in e?na(e):"line"in e||"column"in e?ta(e):"":""}function ta(e){return ra(e&&e.line)+":"+ra(e&&e.column)}function na(e){return ta(e&&e.start)+"-"+ta(e&&e.end)}function ra(e){return e&&"number"===typeof e?e:1}class ia extends Error{constructor(e,t,n){super(),"string"===typeof t&&(n=t,t=void 0);let r="",i={},a=!1;if(t&&(i="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"===typeof e?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&"string"===typeof n){const e=n.indexOf(":");-1===e?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){const e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}const o=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=o?o.line:void 0,this.name=ea(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&"string"===typeof i.cause.stack?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}ia.prototype.file="",ia.prototype.name="",ia.prototype.reason="",ia.prototype.message="",ia.prototype.stack="",ia.prototype.column=void 0,ia.prototype.line=void 0,ia.prototype.ancestors=void 0,ia.prototype.cause=void 0,ia.prototype.fatal=void 0,ia.prototype.place=void 0,ia.prototype.ruleId=void 0,ia.prototype.source=void 0;const aa={}.hasOwnProperty,oa=new Map,sa=/[A-Z]/g,ca=/-([a-z])/g,la=new Set(["table","tbody","thead","tfoot","tr"]),ua=new Set(["td","th"]),da="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ha(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!==typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return n;function n(n,r,i,a){const o=Array.isArray(i.children),s=Ji(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!==typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!==typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");r=function(e,t,n){return r;function r(e,r,i,a){const o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}(0,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?zi:Bi,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},a=fa(i,e,void 0);return a&&"string"!==typeof a?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function fa(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=zi,e.schema=i);e.ancestors.push(t);const a=ba(e,t.tagName,!1),o=function(e,t){const n={};let r,i;for(i in t.properties)if("children"!==i&&aa.call(t.properties,i)){const a=ya(e,i,t.properties[i]);if(a){const[i,o]=a;e.tableCellAlignToStyle&&"align"===i&&"string"===typeof o&&ua.has(t.tagName)?r=o:n[i]=o}}if(r){(n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r}return n}(e,t);let s=ma(e,t);la.has(t.tagName)&&(s=s.filter((function(e){return"string"!==typeof e||!("object"===typeof(t=e)?"text"===t.type&&pi(t.value):pi(t));var t})));return pa(e,o,a,t),ga(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}va(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.name&&"html"===r.space&&(i=zi,e.schema=i);e.ancestors.push(t);const a=null===t.name?e.Fragment:ba(e,t.name,!0),o=function(e,t){const n={};for(const r of t.attributes)if("mdxJsxExpressionAttribute"===r.type)if(r.data&&r.data.estree&&e.evaluater){const t=r.data.estree.body[0];t.type;const i=t.expression;i.type;const a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else va(e,t.position);else{const i=r.name;let a;if(r.value&&"object"===typeof r.value)if(r.value.data&&r.value.data.estree&&e.evaluater){const t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else va(e,t.position);else a=null===r.value||r.value;n[i]=a}return n}(e,t),s=ma(e,t);return pa(e,o,a,t),ga(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);va(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return ga(r,ma(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function pa(e,t,n,r){"string"!==typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ga(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function ma(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:oa;for(;++r<t.children.length;){const a=t.children[r];let o;if(e.passKeys){const e="element"===a.type?a.tagName:"mdxJsxFlowElement"===a.type||"mdxJsxTextElement"===a.type?a.name:void 0;if(e){const t=i.get(e)||0;o=e+"-"+t,i.set(e,t+1)}}const s=fa(e,a,o);void 0!==s&&n.push(s)}return n}function ya(e,t,n){const r=function(e,t){const n=yi(t);let r=t,i=bi;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&qi.test(t)){if("-"===t.charAt(4)){const e=t.slice(5).replace(Vi,Gi);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4);if(!Vi.test(e)){let n=e.replace(Hi,$i);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}i=Ci}return new i(r,t)}(e.schema,t);if(!(null===n||void 0===n||"number"===typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){const n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):n.join(" ").trim()),"style"===r.property){let t="object"===typeof n?n:function(e,t){const n={};try{Ki(t,r)}catch(i){if(!e.ignoreInvalidStyle){const t=i,n=new ia("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=da+"#cannot-parse-style-attribute",n}}return n;function r(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(ca,_a)),n[r]=t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)aa.call(e,n)&&(t[xa(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?Xi[r.property]||r.property:r.attribute,n]}}function ba(e,t,n){let r;if(n)if(t.includes(".")){const e=t.split(".");let n,i=-1;for(;++i<e.length;){const t=hi(e[i])?{type:"Identifier",name:e[i]}:{type:"Literal",value:e[i]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(i&&"Literal"===t.type),optional:!1}:t}r=n}else r=hi(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else r={type:"Literal",value:t};if("Literal"===r.type){const t=r.value;return aa.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);va(e)}function va(e,t){const n=new ia("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=da+"#cannot-handle-mdx-estrees-without-createevaluater",n}function xa(e){let t=e.replace(sa,wa);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function _a(e,t){return t.toUpperCase()}function wa(e){return"-"+e.toLowerCase()}const Da={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Sa={};function Ta(e,t,n){if(function(e){return Boolean(e&&"object"===typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ka(e.children,t,n)}return Array.isArray(e)?ka(e,t,n):""}function ka(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Ta(e[i],t,n);return r.join("")}function Ea(e,t,n,r){const i=e.length;let a,o=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Aa(e,t){return e.length>0?(Ea(e,e.length,0,t),e):t}class Ca{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const n=null===t||void 0===t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){const r=t||0;this.setCursor(Math.trunc(e));const i=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return n&&Ua(this.left,n),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Ua(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Ua(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Ua(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Ua(this.left,t.reverse())}}}function Ua(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Fa(e){const t={};let n,r,i,a,o,s,c,l=-1;const u=new Ca(e);for(;++l<u.length;){for(;l in t;)l=t[l];if(n=u.get(l),l&&"chunkFlow"===n[1].type&&"listItemPrefix"===u.get(l-1)[1].type&&(s=n[1]._tokenizer.events,i=0,i<s.length&&"lineEndingBlank"===s[i][1].type&&(i+=2),i<s.length&&"content"===s[i][1].type))for(;++i<s.length&&"content"!==s[i][1].type;)"chunkText"===s[i][1].type&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,Pa(u,l)),l=t[l],c=!0);else if(n[1]._container){for(i=l,r=void 0;i--&&(a=u.get(i),"lineEnding"===a[1].type||"lineEndingBlank"===a[1].type);)"enter"===a[0]&&(r&&(u.get(r)[1].type="lineEndingBlank"),a[1].type="lineEnding",r=i);r&&(n[1].end={...u.get(r)[1].start},o=u.slice(r,l),o.unshift(n),u.splice(r,l-r+1,o))}}return Ea(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function Pa(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const a=[],o=n._tokenizer||r.parser[n.contentType](n.start),s=o.events,c=[],l={};let u,d,h=-1,f=n,p=0,g=0;const m=[g];for(;f;){for(;e.get(++i)[1]!==f;);a.push(i),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),d&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++h<s.length;)"exit"===s[h][0]&&"enter"===s[h-1][0]&&s[h][1].type===s[h-1][1].type&&s[h][1].start.line!==s[h][1].end.line&&(g=h+1,m.push(g),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):m.pop(),h=m.length;h--;){const t=s.slice(m[h],m[h+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),h=-1;++h<c.length;)l[p+c[h][0]]=p+c[h][1],p+=c[h][1]-c[h][0]-1;return l}const Ra={}.hasOwnProperty;function Oa(e,t){let n;for(n in t){const r=(Ra.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let a;if(i)for(a in i){Ra.call(r,a)||(r[a]=[]);const e=i[a];Ia(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Ia(e,t){let n=-1;const r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);Ea(e,0,0,r)}const Na=Xa(/[A-Za-z]/),Ma=Xa(/[\dA-Za-z]/),La=Xa(/[#-'*+\--9=?A-Z^-~]/);function Wa(e){return null!==e&&(e<32||127===e)}const ja=Xa(/\d/),Ba=Xa(/[\dA-Fa-f]/),za=Xa(/[!-/:-@[-`{-~]/);function qa(e){return null!==e&&e<-2}function Va(e){return null!==e&&(e<0||32===e)}function Ha(e){return-2===e||-1===e||32===e}const $a=Xa(/\p{P}|\p{S}/u),Ga=Xa(/\s/);function Xa(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function Ya(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return function(r){if(Ha(r))return e.enter(n),o(r);return t(r)};function o(r){return Ha(r)&&a++<i?(e.consume(r),o):(e.exit(n),t(r))}}const Ka={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Ya(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),r(t)}));let n;return t;function r(t){const r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,i(t)}function i(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):qa(t)?(e.consume(t),e.exit("chunkText"),r):(e.consume(t),i)}}};const Qa={tokenize:function(e){const t=this,n=[];let r,i,a,o=0;return s;function s(r){if(o<n.length){const i=n[o];return t.containerState=i[1],e.attempt(i[0].continuation,c,l)(r)}return l(r)}function c(e){if(o++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&b();const n=t.events.length;let i,a=n;for(;a--;)if("exit"===t.events[a][0]&&"chunkFlow"===t.events[a][1].type){i=t.events[a][1].end;break}y(o);let s=n;for(;s<t.events.length;)t.events[s][1].end={...i},s++;return Ea(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(i){if(o===n.length){if(!r)return h(i);if(r.currentConstruct&&r.currentConstruct.concrete)return p(i);t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ja,u,d)(i)}function u(e){return r&&b(),y(o),h(e)}function d(e){return t.parser.lazy[t.now().line]=o!==n.length,a=t.now().offset,p(e)}function h(n){return t.containerState={},e.attempt(Ja,f,p)(n)}function f(e){return o++,n.push([t.currentConstruct,t.containerState]),h(e)}function p(n){return null===n?(r&&b(),y(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:i}),g(n))}function g(n){return null===n?(m(e.exit("chunkFlow"),!0),y(0),void e.consume(n)):qa(n)?(e.consume(n),m(e.exit("chunkFlow")),o=0,t.interrupt=void 0,s):(e.consume(n),g)}function m(e,n){const s=t.sliceStream(e);if(n&&s.push(null),e.previous=i,i&&(i.next=e),i=e,r.defineSkip(e.start),r.write(s),t.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<a&&(!r.events[e][1].end||r.events[e][1].end.offset>a))return;const n=t.events.length;let i,s,c=n;for(;c--;)if("exit"===t.events[c][0]&&"chunkFlow"===t.events[c][1].type){if(i){s=t.events[c][1].end;break}i=!0}for(y(o),e=n;e<t.events.length;)t.events[e][1].end={...s},e++;Ea(t.events,c+1,0,t.events.slice(n)),t.events.length=e}}function y(r){let i=n.length;for(;i-- >r;){const r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function b(){r.write([null]),i=void 0,r=void 0,t.containerState._closeFlow=void 0}}},Ja={tokenize:function(e,t,n){return Ya(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const Za={partial:!0,tokenize:function(e,t,n){return function(t){return Ha(t)?Ya(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||qa(e)?t(e):n(e)}}};const eo={resolve:function(e){return Fa(e),e},tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?i(t):qa(t)?e.check(to,a,i)(t):(e.consume(t),r)}function i(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function a(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}},to={partial:!0,tokenize:function(e,t,n){const r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Ya(e,i,"linePrefix")};function i(i){if(null===i||qa(i))return n(i);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&"linePrefix"===a[1].type&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}};const no={tokenize:function(e){const t=this,n=e.attempt(Za,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,r,Ya(e,e.attempt(this.parser.constructs.flow,r,e.attempt(eo,r)),"linePrefix")));return n;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(r)}}};const ro={resolveAll:so()},io=oo("string"),ao=oo("text");function oo(e){return{resolveAll:so("text"===e?co:void 0),tokenize:function(t){const n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(null!==e)return t.enter("data"),t.consume(e),s;t.consume(e)}function s(e){return c(e)?(t.exit("data"),i(e)):(t.consume(e),s)}function c(e){if(null===e)return!0;const t=r[e];let i=-1;if(t)for(;++i<t.length;){const e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}}function so(e){return function(t,n){let r,i=-1;for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}function co(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],i=t.sliceStream(r);let a,o=i.length,s=-1,c=0;for(;o--;){const e=i[o];if("string"===typeof e){for(s=e.length;32===e.charCodeAt(s-1);)c++,s--;if(s)break;s=-1}else if(-2===e)a=!0,c++;else if(-1!==e){o++;break}}if(c){const i={type:n===e.length||a||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-c,offset:r.end.offset-c},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,["enter",i,t],["exit",i,t]),n+=2)}n++}return e}const lo={name:"thematicBreak",tokenize:function(e,t,n){let r,i=0;return function(t){return e.enter("thematicBreak"),function(e){return r=e,a(e)}(t)};function a(a){return a===r?(e.enter("thematicBreakSequence"),o(a)):i>=3&&(null===a||qa(a))?(e.exit("thematicBreak"),t(a)):n(a)}function o(t){return t===r?(e.consume(t),i++,o):(e.exit("thematicBreakSequence"),Ha(t)?Ya(e,a,"whitespace")(t):a(t))}}};const uo={continuation:{tokenize:function(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Za,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ya(e,t,"listItemIndent",r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Ha(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(fo,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ya(e,e.attempt(uo,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,t,n){const r=this,i=r.events[r.events.length-1];let a=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,o=0;return function(t){const i=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||t===r.containerState.marker:ja(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===t||45===t?e.check(lo,n,c)(t):c(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(t)}return n(t)};function s(t){return ja(t)&&++o<10?(e.consume(t),s):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),c(t)):n(t)}function c(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(Za,r.interrupt?n:l,e.attempt(ho,d,u))}function l(e){return r.containerState.initialBlankLine=!0,a++,d(e)}function u(t){return Ha(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),d):n(t)}function d(n){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}}},ho={partial:!0,tokenize:function(e,t,n){const r=this;return Ya(e,(function(e){const i=r.events[r.events.length-1];return!Ha(e)&&i&&"listItemPrefixWhitespace"===i[1].type?t(e):n(e)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},fo={partial:!0,tokenize:function(e,t,n){const r=this;return Ya(e,(function(e){const i=r.events[r.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}),"listItemIndent",r.containerState.size+1)}};const po={continuation:{tokenize:function(e,t,n){const r=this;return function(t){if(Ha(t))return Ya(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return i(t)};function i(r){return e.attempt(po,t,n)(r)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,t,n){const r=this;return function(t){if(62===t){const n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),i}return n(t)};function i(n){return Ha(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}}};function go(e,t,n,r,i,a,o,s,c){const l=c||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),d;if(null===t||32===t||41===t||Wa(t))return n(t);return e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),p(t)};function d(n){return 62===n?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(n))}function h(t){return 62===t?(e.exit("chunkString"),e.exit(s),d(t)):null===t||60===t||qa(t)?n(t):(e.consume(t),92===t?f:h)}function f(t){return 60===t||62===t||92===t?(e.consume(t),h):h(t)}function p(i){return u||null!==i&&41!==i&&!Va(i)?u<l&&40===i?(e.consume(i),u++,p):41===i?(e.consume(i),u--,p):null===i||32===i||40===i||Wa(i)?n(i):(e.consume(i),92===i?g:p):(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),t(i))}function g(t){return 40===t||41===t||92===t?(e.consume(t),p):p(t)}}function mo(e,t,n,r,i,a){const o=this;let s,c=0;return function(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),l};function l(d){return c>999||null===d||91===d||93===d&&!s||94===d&&!c&&"_hiddenFootnoteSupport"in o.parser.constructs?n(d):93===d?(e.exit(a),e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):qa(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),l):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(t){return null===t||91===t||93===t||qa(t)||c++>999?(e.exit("chunkString"),l(t)):(e.consume(t),s||(s=!Ha(t)),92===t?d:u)}function d(t){return 91===t||92===t||93===t?(e.consume(t),c++,u):u(t)}}function yo(e,t,n,r,i,a){let o;return function(t){if(34===t||39===t||40===t)return e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=40===t?41:t,s;return n(t)};function s(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),c(n))}function c(t){return t===o?(e.exit(a),s(o)):null===t?n(t):qa(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Ya(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),l(t))}function l(t){return t===o||null===t||qa(t)?(e.exit("chunkString"),c(t)):(e.consume(t),92===t?u:l)}function u(t){return t===o||92===t?(e.consume(t),l):l(t)}}function bo(e,t){let n;return function r(i){if(qa(i))return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r;if(Ha(i))return Ya(e,r,n?"linePrefix":"lineSuffix")(i);return t(i)}}function vo(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xo={name:"definition",tokenize:function(e,t,n){const r=this;let i;return function(t){return e.enter("definition"),function(t){return mo.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function a(t){return i=vo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),o):n(t)}function o(t){return Va(t)?bo(e,s)(t):s(t)}function s(t){return go(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function c(t){return e.attempt(_o,l,l)(t)}function l(t){return Ha(t)?Ya(e,u,"whitespace")(t):u(t)}function u(a){return null===a||qa(a)?(e.exit("definition"),r.parser.defined.push(i),t(a)):n(a)}}},_o={partial:!0,tokenize:function(e,t,n){return function(t){return Va(t)?bo(e,r)(t):n(t)};function r(t){return yo(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function i(t){return Ha(t)?Ya(e,a,"whitespace")(t):a(t)}function a(e){return null===e||qa(e)?t(e):n(e)}}};const wo={name:"codeIndented",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("codeIndented"),Ya(e,i,"linePrefix",5)(t)};function i(e){const t=r.events[r.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?a(e):n(e)}function a(t){return null===t?s(t):qa(t)?e.attempt(Do,a,s)(t):(e.enter("codeFlowValue"),o(t))}function o(t){return null===t||qa(t)?(e.exit("codeFlowValue"),a(t)):(e.consume(t),o)}function s(n){return e.exit("codeIndented"),t(n)}}},Do={partial:!0,tokenize:function(e,t,n){const r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):qa(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i):Ya(e,a,"linePrefix",5)(t)}function a(e){const a=r.events[r.events.length-1];return a&&"linePrefix"===a[1].type&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):qa(e)?i(e):n(e)}}};const So={name:"headingAtx",resolve:function(e,t){let n,r,i=e.length-2,a=3;"whitespace"===e[a][1].type&&(a+=2);i-2>a&&"whitespace"===e[i][1].type&&(i-=2);"atxHeadingSequence"===e[i][1].type&&(a===i-1||i-4>a&&"whitespace"===e[i-2][1].type)&&(i-=a+1===i?2:4);i>a&&(n={type:"atxHeadingText",start:e[a][1].start,end:e[i][1].end},r={type:"chunkText",start:e[a][1].start,end:e[i][1].end,contentType:"text"},Ea(e,a,i-a+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]]));return e},tokenize:function(e,t,n){let r=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),i(t)}(t)};function i(t){return 35===t&&r++<6?(e.consume(t),i):null===t||Va(t)?(e.exit("atxHeadingSequence"),a(t)):n(t)}function a(n){return 35===n?(e.enter("atxHeadingSequence"),o(n)):null===n||qa(n)?(e.exit("atxHeading"),t(n)):Ha(n)?Ya(e,a,"whitespace")(n):(e.enter("atxHeadingText"),s(n))}function o(t){return 35===t?(e.consume(t),o):(e.exit("atxHeadingSequence"),a(t))}function s(t){return null===t||35===t||Va(t)?(e.exit("atxHeadingText"),a(t)):(e.consume(t),s)}}};const To={name:"setextUnderline",resolveTo:function(e,t){let n,r,i,a=e.length;for(;a--;)if("enter"===e[a][0]){if("content"===e[a][1].type){n=a;break}"paragraph"===e[a][1].type&&(r=a)}else"content"===e[a][1].type&&e.splice(a,1),i||"definition"!==e[a][1].type||(i=a);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};e[r][1].type="setextHeadingText",i?(e.splice(r,0,["enter",o,t]),e.splice(i+1,0,["exit",e[n][1],t]),e[n][1].end={...e[i][1].end}):e[n][1]=o;return e.push(["exit",o,t]),e},tokenize:function(e,t,n){const r=this;let i;return function(t){let o,s=r.events.length;for(;s--;)if("lineEnding"!==r.events[s][1].type&&"linePrefix"!==r.events[s][1].type&&"content"!==r.events[s][1].type){o="paragraph"===r.events[s][1].type;break}if(!r.parser.lazy[r.now().line]&&(r.interrupt||o))return e.enter("setextHeadingLine"),i=t,function(t){return e.enter("setextHeadingLineSequence"),a(t)}(t);return n(t)};function a(t){return t===i?(e.consume(t),a):(e.exit("setextHeadingLineSequence"),Ha(t)?Ya(e,o,"lineSuffix")(t):o(t))}function o(r){return null===r||qa(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}}};const ko=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Eo=["pre","script","style","textarea"],Ao={concrete:!0,name:"htmlFlow",resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},tokenize:function(e,t,n){const r=this;let i,a,o,s,c;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),l}(t)};function l(s){return 33===s?(e.consume(s),u):47===s?(e.consume(s),a=!0,f):63===s?(e.consume(s),i=3,r.interrupt?t:O):Na(s)?(e.consume(s),o=String.fromCharCode(s),p):n(s)}function u(a){return 45===a?(e.consume(a),i=2,d):91===a?(e.consume(a),i=5,s=0,h):Na(a)?(e.consume(a),i=4,r.interrupt?t:O):n(a)}function d(i){return 45===i?(e.consume(i),r.interrupt?t:O):n(i)}function h(i){const a="CDATA[";return i===a.charCodeAt(s++)?(e.consume(i),6===s?r.interrupt?t:k:h):n(i)}function f(t){return Na(t)?(e.consume(t),o=String.fromCharCode(t),p):n(t)}function p(s){if(null===s||47===s||62===s||Va(s)){const c=47===s,l=o.toLowerCase();return c||a||!Eo.includes(l)?ko.includes(o.toLowerCase())?(i=6,c?(e.consume(s),g):r.interrupt?t(s):k(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?m(s):y(s)):(i=1,r.interrupt?t(s):k(s))}return 45===s||Ma(s)?(e.consume(s),o+=String.fromCharCode(s),p):n(s)}function g(i){return 62===i?(e.consume(i),r.interrupt?t:k):n(i)}function m(t){return Ha(t)?(e.consume(t),m):S(t)}function y(t){return 47===t?(e.consume(t),S):58===t||95===t||Na(t)?(e.consume(t),b):Ha(t)?(e.consume(t),y):S(t)}function b(t){return 45===t||46===t||58===t||95===t||Ma(t)?(e.consume(t),b):v(t)}function v(t){return 61===t?(e.consume(t),x):Ha(t)?(e.consume(t),v):y(t)}function x(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),c=t,_):Ha(t)?(e.consume(t),x):w(t)}function _(t){return t===c?(e.consume(t),c=null,D):null===t||qa(t)?n(t):(e.consume(t),_)}function w(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||Va(t)?v(t):(e.consume(t),w)}function D(e){return 47===e||62===e||Ha(e)?y(e):n(e)}function S(t){return 62===t?(e.consume(t),T):n(t)}function T(t){return null===t||qa(t)?k(t):Ha(t)?(e.consume(t),T):n(t)}function k(t){return 45===t&&2===i?(e.consume(t),U):60===t&&1===i?(e.consume(t),F):62===t&&4===i?(e.consume(t),I):63===t&&3===i?(e.consume(t),O):93===t&&5===i?(e.consume(t),R):!qa(t)||6!==i&&7!==i?null===t||qa(t)?(e.exit("htmlFlowData"),E(t)):(e.consume(t),k):(e.exit("htmlFlowData"),e.check(Co,N,E)(t))}function E(t){return e.check(Uo,A,N)(t)}function A(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),C}function C(t){return null===t||qa(t)?E(t):(e.enter("htmlFlowData"),k(t))}function U(t){return 45===t?(e.consume(t),O):k(t)}function F(t){return 47===t?(e.consume(t),o="",P):k(t)}function P(t){if(62===t){const n=o.toLowerCase();return Eo.includes(n)?(e.consume(t),I):k(t)}return Na(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),P):k(t)}function R(t){return 93===t?(e.consume(t),O):k(t)}function O(t){return 62===t?(e.consume(t),I):45===t&&2===i?(e.consume(t),O):k(t)}function I(t){return null===t||qa(t)?(e.exit("htmlFlowData"),N(t)):(e.consume(t),I)}function N(n){return e.exit("htmlFlow"),t(n)}}},Co={partial:!0,tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Za,t,n)}}},Uo={partial:!0,tokenize:function(e,t,n){const r=this;return function(t){if(qa(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i;return n(t)};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}};const Fo={partial:!0,tokenize:function(e,t,n){const r=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}},Po={concrete:!0,name:"codeFenced",tokenize:function(e,t,n){const r=this,i={partial:!0,tokenize:function(e,t,n){let i=0;return o;function o(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),c}function c(t){return e.enter("codeFencedFence"),Ha(t)?Ya(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):l(t)}function l(t){return t===a?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===a?(i++,e.consume(t),u):i>=s?(e.exit("codeFencedFenceSequence"),Ha(t)?Ya(e,d,"whitespace")(t):d(t)):n(t)}function d(r){return null===r||qa(r)?(e.exit("codeFencedFence"),t(r)):n(r)}}};let a,o=0,s=0;return function(t){return function(t){const n=r.events[r.events.length-1];return o=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,a=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(t)}(t)};function c(t){return t===a?(s++,e.consume(t),c):s<3?n(t):(e.exit("codeFencedFenceSequence"),Ha(t)?Ya(e,l,"whitespace")(t):l(t))}function l(n){return null===n||qa(n)?(e.exit("codeFencedFence"),r.interrupt?t(n):e.check(Fo,f,b)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||qa(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),l(t)):Ha(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ya(e,d,"whitespace")(t)):96===t&&t===a?n(t):(e.consume(t),u)}function d(t){return null===t||qa(t)?l(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(t))}function h(t){return null===t||qa(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),l(t)):96===t&&t===a?n(t):(e.consume(t),h)}function f(t){return e.attempt(i,b,p)(t)}function p(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),g}function g(t){return o>0&&Ha(t)?Ya(e,m,"linePrefix",o+1)(t):m(t)}function m(t){return null===t||qa(t)?e.check(Fo,f,b)(t):(e.enter("codeFlowValue"),y(t))}function y(t){return null===t||qa(t)?(e.exit("codeFlowValue"),m(t)):(e.consume(t),y)}function b(n){return e.exit("codeFenced"),t(n)}}};const Ro=document.createElement("i");function Oo(e){const t="&"+e+";";Ro.innerHTML=t;const n=Ro.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}const Io={name:"characterReference",tokenize:function(e,t,n){const r=this;let i,a,o=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),s};function s(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),i=31,a=Ma,l(t))}function c(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=Ba,l):(e.enter("characterReferenceValue"),i=7,a=ja,l(t))}function l(s){if(59===s&&o){const i=e.exit("characterReferenceValue");return a!==Ma||Oo(r.sliceSerialize(i))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(s)}return a(s)&&o++<i?(e.consume(s),l):n(s)}}};const No={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return za(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}};const Mo={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Ya(e,t,"linePrefix")}}};function Lo(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}const Wo={name:"labelEnd",resolveAll:function(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),"labelImage"===r.type||"labelLink"===r.type||"labelEnd"===r.type){const e="labelImage"===r.type?4:2;r.type="data",t+=e}}e.length!==n.length&&Ea(e,0,e.length,n);return e},resolveTo:function(e,t){let n,r,i,a,o=e.length,s=0;for(;o--;)if(n=e[o][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[o][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(i){if("enter"===e[o][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=o,"labelLink"!==n.type)){s=2;break}}else"labelEnd"===n.type&&(i=o);const c={type:"labelLink"===e[r][1].type?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[r][1].start},end:{...e[i][1].end}},u={type:"labelText",start:{...e[r+s+2][1].end},end:{...e[i-2][1].start}};return a=[["enter",c,t],["enter",l,t]],a=Aa(a,e.slice(r+1,r+s+3)),a=Aa(a,[["enter",u,t]]),a=Aa(a,Lo(t.parser.constructs.insideSpan.null,e.slice(r+s+4,i-3),t)),a=Aa(a,[["exit",u,t],e[i-2],e[i-1],["exit",l,t]]),a=Aa(a,e.slice(i+1)),a=Aa(a,[["exit",c,t]]),Ea(e,r,e.length,a),e},tokenize:function(e,t,n){const r=this;let i,a,o=r.events.length;for(;o--;)if(("labelImage"===r.events[o][1].type||"labelLink"===r.events[o][1].type)&&!r.events[o][1]._balanced){i=r.events[o][1];break}return function(t){if(!i)return n(t);if(i._inactive)return u(t);return a=r.parser.defined.includes(vo(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),s};function s(t){return 40===t?e.attempt(jo,l,a?l:u)(t):91===t?e.attempt(Bo,l,a?c:u)(t):a?l(t):u(t)}function c(t){return e.attempt(zo,l,u)(t)}function l(e){return t(e)}function u(e){return i._balanced=!0,n(e)}}},jo={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return Va(t)?bo(e,i)(t):i(t)}function i(t){return 41===t?l(t):go(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function a(t){return Va(t)?bo(e,s)(t):l(t)}function o(e){return n(e)}function s(t){return 34===t||39===t||40===t?yo(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):l(t)}function c(t){return Va(t)?bo(e,l)(t):l(t)}function l(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},Bo={tokenize:function(e,t,n){const r=this;return function(t){return mo.call(r,e,i,a,"reference","referenceMarker","referenceString")(t)};function i(e){return r.parser.defined.includes(vo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function a(e){return n(e)}}},zo={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}};const qo={name:"labelStartImage",resolveAll:Wo.resolveAll,tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),i};function i(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),a):n(t)}function a(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}};function Vo(e){return null===e||Va(e)||Ga(e)?1:$a(e)?2:void 0}const Ho={name:"attention",resolveAll:function(e,t){let n,r,i,a,o,s,c,l,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;s=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const d={...e[n][1].end},h={...e[u][1].start};$o(d,-s),$o(h,s),a={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[n][1].end}},o={type:s>1?"strongSequence":"emphasisSequence",start:{...e[u][1].start},end:h},i={type:s>1?"strongText":"emphasisText",start:{...e[n][1].end},end:{...e[u][1].start}},r={type:s>1?"strong":"emphasis",start:{...a.start},end:{...o.end}},e[n][1].end={...a.start},e[u][1].start={...o.end},c=[],e[n][1].end.offset-e[n][1].start.offset&&(c=Aa(c,[["enter",e[n][1],t],["exit",e[n][1],t]])),c=Aa(c,[["enter",r,t],["enter",a,t],["exit",a,t],["enter",i,t]]),c=Aa(c,Lo(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),c=Aa(c,[["exit",i,t],["enter",o,t],["exit",o,t],["exit",r,t]]),e[u][1].end.offset-e[u][1].start.offset?(l=2,c=Aa(c,[["enter",e[u][1],t],["exit",e[u][1],t]])):l=0,Ea(e,n-1,u-n+3,c),u=n+c.length-l-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e},tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vo(r);let a;return function(t){return a=t,e.enter("attentionSequence"),o(t)};function o(s){if(s===a)return e.consume(s),o;const c=e.exit("attentionSequence"),l=Vo(s),u=!l||2===l&&i||n.includes(s),d=!i||2===i&&l||n.includes(r);return c._open=Boolean(42===a?u:u&&(i||!d)),c._close=Boolean(42===a?d:d&&(l||!u)),t(s)}}};function $o(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Go={name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(t){return Na(t)?(e.consume(t),a):64===t?n(t):c(t)}function a(e){return 43===e||45===e||46===e||Ma(e)?(r=1,o(e)):c(e)}function o(t){return 58===t?(e.consume(t),r=0,s):(43===t||45===t||46===t||Ma(t))&&r++<32?(e.consume(t),o):(r=0,c(t))}function s(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||Wa(r)?n(r):(e.consume(r),s)}function c(t){return 64===t?(e.consume(t),l):La(t)?(e.consume(t),c):n(t)}function l(e){return Ma(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),r=0,l):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):d(n)}function d(t){if((45===t||Ma(t))&&r++<63){const n=45===t?d:u;return e.consume(t),n}return n(t)}}};const Xo={name:"htmlText",tokenize:function(e,t,n){const r=this;let i,a,o;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),s};function s(t){return 33===t?(e.consume(t),c):47===t?(e.consume(t),x):63===t?(e.consume(t),b):Na(t)?(e.consume(t),D):n(t)}function c(t){return 45===t?(e.consume(t),l):91===t?(e.consume(t),a=0,f):Na(t)?(e.consume(t),y):n(t)}function l(t){return 45===t?(e.consume(t),h):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),d):qa(t)?(o=u,P(t)):(e.consume(t),u)}function d(t){return 45===t?(e.consume(t),h):u(t)}function h(e){return 62===e?F(e):45===e?d(e):u(e)}function f(t){const r="CDATA[";return t===r.charCodeAt(a++)?(e.consume(t),6===a?p:f):n(t)}function p(t){return null===t?n(t):93===t?(e.consume(t),g):qa(t)?(o=p,P(t)):(e.consume(t),p)}function g(t){return 93===t?(e.consume(t),m):p(t)}function m(t){return 62===t?F(t):93===t?(e.consume(t),m):p(t)}function y(t){return null===t||62===t?F(t):qa(t)?(o=y,P(t)):(e.consume(t),y)}function b(t){return null===t?n(t):63===t?(e.consume(t),v):qa(t)?(o=b,P(t)):(e.consume(t),b)}function v(e){return 62===e?F(e):b(e)}function x(t){return Na(t)?(e.consume(t),_):n(t)}function _(t){return 45===t||Ma(t)?(e.consume(t),_):w(t)}function w(t){return qa(t)?(o=w,P(t)):Ha(t)?(e.consume(t),w):F(t)}function D(t){return 45===t||Ma(t)?(e.consume(t),D):47===t||62===t||Va(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),F):58===t||95===t||Na(t)?(e.consume(t),T):qa(t)?(o=S,P(t)):Ha(t)?(e.consume(t),S):F(t)}function T(t){return 45===t||46===t||58===t||95===t||Ma(t)?(e.consume(t),T):k(t)}function k(t){return 61===t?(e.consume(t),E):qa(t)?(o=k,P(t)):Ha(t)?(e.consume(t),k):S(t)}function E(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),i=t,A):qa(t)?(o=E,P(t)):Ha(t)?(e.consume(t),E):(e.consume(t),C)}function A(t){return t===i?(e.consume(t),i=void 0,U):null===t?n(t):qa(t)?(o=A,P(t)):(e.consume(t),A)}function C(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||Va(t)?S(t):(e.consume(t),C)}function U(e){return 47===e||62===e||Va(e)?S(e):n(e)}function F(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function P(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),R}function R(t){return Ha(t)?Ya(e,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):O(t)}function O(t){return e.enter("htmlTextData"),o(t)}}};const Yo={name:"labelStartLink",resolveAll:Wo.resolveAll,tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),i};function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}};const Ko={name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return qa(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}};const Qo={name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let t,n,r=e.length-4,i=3;if(("lineEnding"===e[i][1].type||"space"===e[i][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(t=i;++t<r;)if("codeTextData"===e[t][1].type){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}t=i-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},tokenize:function(e,t,n){let r,i,a=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),o(t)};function o(t){return 96===t?(e.consume(t),a++,o):(e.exit("codeTextSequence"),s(t))}function s(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),s):96===t?(i=e.enter("codeTextSequence"),r=0,l(t)):qa(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(t))}function c(t){return null===t||32===t||96===t||qa(t)?(e.exit("codeTextData"),s(t)):(e.consume(t),c)}function l(n){return 96===n?(e.consume(n),r++,l):r===a?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(i.type="codeTextData",c(n))}}};const Jo={42:uo,43:uo,45:uo,48:uo,49:uo,50:uo,51:uo,52:uo,53:uo,54:uo,55:uo,56:uo,57:uo,62:po},Zo={91:xo},es={[-2]:wo,[-1]:wo,32:wo},ts={35:So,42:lo,45:[To,lo],60:Ao,61:To,95:lo,96:Po,126:Po},ns={38:Io,92:No},rs={[-5]:Mo,[-4]:Mo,[-3]:Mo,33:qo,38:Io,42:Ho,60:[Go,Xo],91:Yo,92:[Ko,No],93:Wo,95:Ho,96:Qo},is={null:[Ho,ro]},as={null:[42,95]},os={null:[]};function ss(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},a=[];let o=[],s=[],c=!0;const l={attempt:b((function(e,t){v(e,t.from)})),check:b(y),consume:function(e){qa(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,x()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++));u.previous=e,c=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=p(),u.events.push(["enter",n,u]),s.push(n),n},exit:function(e){const t=s.pop();return t.end=p(),u.events.push(["exit",t,u]),t},interrupt:b(y,{interrupt:!0})},u={code:null,containerState:{},defineSkip:function(e){i[e.line]=e.column,x()},events:[],now:p,parser:e,previous:null,sliceSerialize:function(e,t){return function(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const a=e[n];let o;if("string"===typeof a)o=a;else switch(a){case-5:o="\r";break;case-4:o="\n";break;case-3:o="\r\n";break;case-2:o=t?" ":"\t";break;case-1:if(!t&&i)continue;o=" ";break;default:o=String.fromCharCode(a)}i=-2===a,r.push(o)}return r.join("")}(f(e),t)},sliceStream:f,write:function(e){if(o=Aa(o,e),g(),null!==o[o.length-1])return[];return v(t,0),u.events=Lo(a,u.events,u),u.events}};let d,h=t.tokenize.call(u,l);return t.resolveAll&&a.push(t),u;function f(e){return function(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){const e=o[0];"string"===typeof e?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}(o,e)}function p(){const{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function g(){let e;for(;r._index<o.length;){const t=o[r._index];if("string"===typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)m(t.charCodeAt(r._bufferIndex));else m(t)}}function m(e){c=void 0,d=e,h=h(e)}function y(e,t){t.restore()}function b(e,t){return function(n,i,a){let o,d,h,f;return Array.isArray(n)?g(n):"tokenize"in n?g([n]):function(e){return t;function t(t){const n=null!==t&&e[t],r=null!==t&&e.null;return g([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}(n);function g(e){return o=e,d=0,0===e.length?a:m(e[d])}function m(e){return function(n){f=function(){const e=p(),t=u.previous,n=u.currentConstruct,i=u.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=i,s=a,x()}}(),h=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return b(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,l,y,b)(n)}}function y(t){return c=!0,e(h,f),i}function b(e){return c=!0,f.restore(),++d<o.length?m(o[d]):a}}}function v(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&Ea(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function x(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function cs(e){const n=function(e){const t={};let n=-1;for(;++n<e.length;)Oa(t,e[n]);return t}([t,...(e||{}).extensions||[]]),r={constructs:n,content:i(Ka),defined:[],document:i(Qa),flow:i(no),lazy:{},string:i(io),text:i(ao)};return r;function i(e){return function(t){return ss(r,e,t)}}}const ls=/[\0\t\n\r]/g;function us(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535===(65535&n)||65534===(65535&n)||n>1114111?"\ufffd":String.fromCodePoint(n)}const ds=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hs(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return us(n.slice(t?2:1),t?16:10)}return Oo(n)||e}const fs={}.hasOwnProperty;function ps(e,t,n){return"string"!==typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(te),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(Q),blockQuote:a($),characterEscape:T,characterReference:T,codeFenced:a(G),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(G,o),codeText:a(X,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(Y),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(K),hardBreakEscape:a(J),hardBreakTrailing:a(J),htmlFlow:a(Z,o),htmlFlowData:T,htmlText:a(Z,o),htmlTextData:T,image:a(ee),label:o,link:a(te),listItem:a(re),listItemValue:h,listOrdered:a(ne,d),listUnordered:a(ne),paragraph:a(ie),reference:W,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Q),strong:a(ae),thematicBreak:a(se)},exit:{atxHeading:c(),atxHeadingSequence:_,autolink:c(),autolinkEmail:H,autolinkProtocol:V,blockQuote:c(),characterEscapeValue:k,characterReferenceMarkerHexadecimal:B,characterReferenceMarkerNumeric:B,characterReferenceValue:z,characterReference:q,codeFenced:c(m),codeFencedFence:g,codeFencedFenceInfo:f,codeFencedFenceMeta:p,codeFlowValue:k,codeIndented:c(y),codeText:c(F),codeTextData:k,data:k,definition:c(),definitionDestinationString:x,definitionLabelString:b,definitionTitleString:v,emphasis:c(),hardBreakEscape:c(A),hardBreakTrailing:c(A),htmlFlow:c(C),htmlFlowData:k,htmlText:c(U),htmlTextData:k,image:c(R),label:I,labelText:O,lineEnding:E,link:c(P),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:j,resourceDestinationString:N,resourceTitleString:M,resource:L,setextHeading:c(S),setextHeadingLineSequence:D,setextHeadingText:w,strong:c(),thematicBreak:c()}};ms(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(e){let r={type:"root",children:[]};const a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[];let d=-1;for(;++d<e.length;)if("listOrdered"===e[d][1].type||"listUnordered"===e[d][1].type)if("enter"===e[d][0])c.push(d);else{d=i(e,c.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]];fs.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){const e=a.tokenStack[a.tokenStack.length-1];(e[1]||bs).call(a,void 0,e[0])}for(r.position={start:gs(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:gs(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r,i,a,o,s=t-1,c=-1,l=!1;for(;++s<=n;){const t=e[s];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?c++:c--,o=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||o||c||a||(a=s),o=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:o=void 0}if(!c&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===c&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let o=s;for(i=void 0;o--;){const t=e[o];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",l=!0),t[1].type="lineEnding",i=o}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}a&&(!i||a<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||s,0,["exit",r,t[2]]),s++,n++}if("listItemPrefix"===t[1].type){const i={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=i,e.splice(s,0,["enter",i,t[2]]),s++,n++,a=void 0,o=!0}}}return e[t][1]._spread=l,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:gs(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+ea({start:e.start,end:e.end})+"): it\u2019s not open");if(r[0].type!==e.type)if(t)t.call(this,e,r[0]);else{(r[1]||bs).call(this,e,r[0])}n.position.end=gs(e.end)}function u(){return function(e,t){const n=t||Sa;return Ta(e,"boolean"!==typeof n.includeImageAlt||n.includeImageAlt,"boolean"!==typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(e){if(this.data.expectingFirstListItemValue){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function f(){const e=this.resume();this.stack[this.stack.length-1].lang=e}function p(){const e=this.resume();this.stack[this.stack.length-1].meta=e}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function m(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function b(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=vo(this.sliceSerialize(e)).toLowerCase()}function v(){const e=this.resume();this.stack[this.stack.length-1].title=e}function x(){const e=this.resume();this.stack[this.stack.length-1].url=e}function _(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function D(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2}function S(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n=oe(),n.position={start:gs(e.start),end:void 0},t.push(n)),this.stack.push(n)}function k(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=gs(e.end)}function E(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak){return n.children[n.children.length-1].position.end=gs(e.end),void(this.data.atHardBreak=void 0)}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),k.call(this,e))}function A(){this.data.atHardBreak=!0}function C(){const e=this.resume();this.stack[this.stack.length-1].value=e}function U(){const e=this.resume();this.stack[this.stack.length-1].value=e}function F(){const e=this.resume();this.stack[this.stack.length-1].value=e}function P(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function R(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function O(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(ds,hs)}(t),n.identifier=vo(t).toLowerCase()}function I(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t}function N(){const e=this.resume();this.stack[this.stack.length-1].url=e}function M(){const e=this.resume();this.stack[this.stack.length-1].title=e}function L(){this.data.inReference=void 0}function W(){this.data.referenceType="collapsed"}function j(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=vo(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function B(e){this.data.characterReferenceType=e.type}function z(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;if(n)r=us(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0;else{r=Oo(t)}this.stack[this.stack.length-1].value+=r}function q(e){this.stack.pop().position.end=gs(e.end)}function V(e){k.call(this,e);this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function H(e){k.call(this,e);this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function $(){return{type:"blockquote",children:[]}}function G(){return{type:"code",lang:null,meta:null,value:""}}function X(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function K(){return{type:"emphasis",children:[]}}function Q(){return{type:"heading",depth:0,children:[]}}function J(){return{type:"break"}}function Z(){return{type:"html",value:""}}function ee(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function ne(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function re(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function ie(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function oe(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}(n)(function(e){for(;!Fa(e););return e}(cs(n).document().write(function(){let e,t=1,n="",r=!0;return function(i,a,o){const s=[];let c,l,u,d,h;for(i=n+("string"===typeof i?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,n="",r&&(65279===i.charCodeAt(0)&&u++,r=void 0);u<i.length;){if(ls.lastIndex=u,c=ls.exec(i),d=c&&void 0!==c.index?c.index:i.length,h=i.charCodeAt(d),!c){n=i.slice(u);break}if(10===h&&u===d&&e)s.push(-3),e=void 0;else switch(e&&(s.push(-5),e=void 0),u<d&&(s.push(i.slice(u,d)),t+=d-u),h){case 0:s.push(65533),t++;break;case 9:for(l=4*Math.ceil(t/4),s.push(-2);t++<l;)s.push(-1);break;case 10:s.push(-4),t=1;break;default:e=!0,t=1}u=d+1}return o&&(e&&s.push(-5),n&&s.push(n),s.push(null)),s}}()(e,t,!0))))}function gs(e){return{line:e.line,column:e.column,offset:e.offset}}function ms(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ms(e,r):ys(e,r)}}function ys(e,t){let n;for(n in t)if(fs.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function bs(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ea({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ea({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ea({start:t.start,end:t.end})+") is still open")}function vs(e){const t=this;t.parser=function(n){return ps(n,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}const xs="object"===typeof self?self:globalThis,_s=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);const[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{const e=n([],i);for(const t of o)e.push(r(t));return e}case 2:{const e=n({},i);for(const[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{const{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{const e=n(new Map,i);for(const[t,n]of o)e.set(r(t),r(n));return e}case 6:{const e=n(new Set,i);for(const t of o)e.add(r(t));return e}case 7:{const{name:e,message:t}=o;return n(new xs[e](t),i)}case 8:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i)}return n(new xs[a](o),i)};return r})(new Map,e)(0),ws="",{toString:Ds}={},{keys:Ss}=Object,Ts=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=Ds.call(e).slice(8,-1);switch(n){case"Array":return[1,ws];case"Object":return[2,ws];case"Date":return[3,ws];case"RegExp":return[4,ws];case"Map":return[5,ws];case"Set":return[6,ws]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},ks=e=>{let[t,n]=e;return 0===t&&("function"===n||"symbol"===n)},Es=function(e){let{json:t,lossy:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[];return((e,t,n,r)=>{const i=(e,t)=>{const i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=Ts(r);switch(o){case 0:{let t=r;switch(s){case"bigint":o=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);t=null;break;case"undefined":return i([-1],r)}return i([o,t],r)}case 1:{if(s)return i([s,[...r]],r);const e=[],t=i([o,e],r);for(const n of r)e.push(a(n));return t}case 2:{if(s)switch(s){case"BigInt":return i([s,r.toString()],r);case"Boolean":case"Number":case"String":return i([s,r.valueOf()],r)}if(t&&"toJSON"in r)return a(r.toJSON());const n=[],c=i([o,n],r);for(const t of Ss(r))!e&&ks(Ts(r[t]))||n.push([a(t),a(r[t])]);return c}case 3:return i([o,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{const t=[],n=i([o,t],r);for(const[i,o]of r)(e||!ks(Ts(i))&&!ks(Ts(o)))&&t.push([a(i),a(o)]);return n}case 6:{const t=[],n=i([o,t],r);for(const i of r)!e&&ks(Ts(i))||t.push(a(i));return n}}const{message:c}=r;return i([o,{name:s,message:c}],r)};return a})(!(t||n),!!t,new Map,r)(e),r},As="function"===typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?_s(Es(e,t)):structuredClone(e):(e,t)=>_s(Es(e,t));function Cs(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const a=e.charCodeAt(n);let o="";if(37===a&&Ma(e.charCodeAt(n+1))&&Ma(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o="\ufffd"}else o=String.fromCharCode(a);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Us(e,t){const n=[{type:"text",value:"\u21a9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Fs(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}const Ps=function(e){if(null===e||void 0===e)return Os;if("function"===typeof e)return Rs(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ps(e[n]);return Rs(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return Rs(n);function n(n){const r=n;let i;for(i in e)if(r[i]!==t[i])return!1;return!0}}(e);if("string"===typeof e)return function(e){return Rs(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function Rs(e){return function(t,n,r){return Boolean(Is(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function Os(){return!0}function Is(e){return null!==e&&"object"===typeof e&&"type"in e}const Ns=[],Ms=!0,Ls=!1;function Ws(e,t,n,r){let i;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):i=t;const a=Ps(i),o=r?-1:1;!function e(i,s,c){const l=i&&"object"===typeof i?i:{};if("string"===typeof l.type){const e="string"===typeof l.tagName?l.tagName:"string"===typeof l.name?l.name:void 0;Object.defineProperty(u,"name",{value:"node ("+i.type+(e?"<"+e+">":"")+")"})}return u;function u(){let l,u,d,h=Ns;if((!t||a(i,s,c[c.length-1]||void 0))&&(h=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[Ms,e];return null===e||void 0===e?Ns:[e]}(n(i,c)),h[0]===Ls))return h;if("children"in i&&i.children){const t=i;if(t.children&&"skip"!==h[0])for(u=(r?t.children.length:-1)+o,d=c.concat(t);u>-1&&u<t.children.length;){const n=t.children[u];if(l=e(n,u,d)(),l[0]===Ls)return l;u="number"===typeof l[1]?l[1]:u+o}}return h}}(e,void 0,[])()}function js(e,t,n,r){let i,a,o;"function"===typeof t&&"function"!==typeof n?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Ws(e,a,(function(e,t){const n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}),i)}function Bs(e,t){const n=t.referenceType;let r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),a=i[0];a&&"text"===a.type?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&"text"===o.type?o.value+=r:i.push({type:"text",value:r}),i}function zs(e){const t=e.spread;return null===t||void 0===t?e.children.length>1:t}function qs(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const a=[];for(;r;)a.push(Vs(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Vs(t.slice(i),i>0,!1)),a.join("")}function Vs(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;9===t||32===t;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}const Hs={blockquote:function(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){const n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i},delete:function(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){const n="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Cs(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);void 0===s?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,c);const l={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)},heading:function(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Bs(e,t);const i={src:Cs(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)},image:function(e,t){const n={src:Cs(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Bs(e,t);const i={href:Cs(r.url||"")};null!==r.title&&void 0!==r.title&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)},link:function(e,t){const n={href:Cs(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){const r=e.all(t),i=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=zs(n[r])}return t}(n):zs(t),a={},o=[];if("boolean"===typeof t.checked){const e=r[0];let n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const e=r[s];(i||0!==s||"element"!==e.type||"p"!==e.tagName)&&o.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||i?o.push(e):o.push(...e.children)}const c=r[r.length-1];c&&(i||"element"!==c.type||"p"!==c.tagName)&&o.push({type:"text",value:"\n"});const l={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,l),e.applyData(t,l)},list:function(e,t){const n={},r=e.all(t);let i=-1;for("number"===typeof t.start&&1!==t.start&&(n.start=t.start);++i<r.length;){const e=r[i];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)},paragraph:function(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){const r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Ji(t.children[1]),o=Qi(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)},tableCell:function(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){const r=n?n.children:void 0,i=0===(r?r.indexOf(t):1)?"th":"td",a=n&&"table"===n.type?n.align:void 0,o=a?a.length:t.children.length;let s=-1;const c=[];for(;++s<o;){const n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:"element",tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}const l={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)},text:function(e,t){const n={type:"text",value:qs(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:$s,yaml:$s,definition:$s,footnoteDefinition:$s};function $s(){}const Gs={}.hasOwnProperty,Xs={};function Ys(e,t){e.position&&(t.position=function(e){const t=Ji(e),n=Qi(e);if(t&&n)return{start:t,end:n}}(e))}function Ks(e,t){let n=t;if(e&&e.data){const t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;if("string"===typeof t)if("element"===n.type)n.tagName=t;else{n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}}"element"===n.type&&i&&Object.assign(n.properties,As(i)),"children"in n&&n.children&&null!==r&&void 0!==r&&(n.children=r)}return n}function Qs(e,t){const n=t.data||{},r=!("value"in t)||Gs.call(n,"hProperties")||Gs.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:e.all(t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}function Js(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function Zs(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function ec(e,t){const n=function(e,t){const n=t||Xs,r=new Map,i=new Map,a=new Map,o={...Hs,...n.handlers},s={all:function(e){const t=[];if("children"in e){const n=e.children;let r=-1;for(;++r<n.length;){const i=s.one(n[r],e);if(i){if(r&&"break"===n[r-1].type&&(Array.isArray(i)||"text"!==i.type||(i.value=Zs(i.value)),!Array.isArray(i)&&"element"===i.type)){const e=i.children[0];e&&"text"===e.type&&(e.value=Zs(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t},applyData:Ks,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:function(e,t){const n=e.type,r=s.handlers[n];if(Gs.call(s.handlers,n)&&r)return r(s,e,t);if(s.options.passThrough&&s.options.passThrough.includes(n)){if("children"in e){const{children:t,...n}=e,r=As(n);return r.children=s.all(e),r}return As(e)}return(s.options.unknownHandler||Qs)(s,e,t)},options:n,patch:Ys,wrap:Js};return js(e,(function(e){if("definition"===e.type||"footnoteDefinition"===e.type){const t="definition"===e.type?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}})),s}(e,t),r=n.one(e,void 0),i=function(e){const t="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Us,r=e.options.footnoteBackLabel||Fs,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;const a=e.all(i),o=String(i.identifier).toUpperCase(),l=Cs(o.toLowerCase());let u=0;const d=[],h=e.footnoteCounts.get(o);for(;void 0!==h&&++u<=h;){d.length>0&&d.push({type:"text",value:" "});let e="string"===typeof n?n:n(c,u);"string"===typeof e&&(e={type:"text",value:e}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+l+(u>1?"-"+u:""),dataFootnoteBackref:"",ariaLabel:"string"===typeof r?r:r(c,u),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}const f=a[a.length-1];if(f&&"element"===f.type&&"p"===f.tagName){const e=f.children[f.children.length-1];e&&"text"===e.type?e.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...d)}else a.push(...d);const p={type:"element",tagName:"li",properties:{id:t+"fn-"+l},children:e.wrap(a,!0)};e.patch(i,p),s.push(p)}if(0!==s.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...As(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:"\n"}]}}(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:"\n"},i),a}function tc(e,t){return e&&"run"in e?async function(n,r){const i=ec(n,{file:r,...t});await e.run(i,r)}:function(n,r){return ec(n,{file:r,...e||t})}}function nc(e){if(e)throw e}var rc=__webpack_require__(3240);function ic(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ac(){const e=[],t={run:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let i=-1;const a=n.pop();if("function"!==typeof a)throw new TypeError("Expected function as last argument, not "+a);!function t(r){const o=e[++i];let s=-1;if(r)a(r);else{for(var c=arguments.length,l=new Array(c>1?c-1:0),u=1;u<c;u++)l[u-1]=arguments[u];for(;++s<n.length;)null!==l[s]&&void 0!==l[s]||(l[s]=n[s]);n=l,o?function(e,t){let n;return i;function i(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];const c=e.length>i.length;let l;c&&i.push(a);try{l=e.apply(this,i)}catch(r){if(c&&n)throw r;return a(r)}c||(l&&l.then&&"function"===typeof l.then?l.then(o,a):l instanceof Error?a(l):o(l))}function a(e){if(!n){n=!0;for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t(e,...i)}}function o(e){a(null,e)}}(o,t)(...l):a(null,...l)}}(null,...n)},use:function(n){if("function"!==typeof n)throw new TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}const oc={basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');sc(e);let n,r=0,i=-1,a=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;a--;)if(47===e.codePointAt(a)){if(n){r=a+1;break}}else i<0&&(n=!0,i=a+1);return i<0?"":e.slice(r,i)}if(t===e)return"";let o=-1,s=t.length-1;for(;a--;)if(47===e.codePointAt(a)){if(n){r=a+1;break}}else o<0&&(n=!0,o=a+1),s>-1&&(e.codePointAt(a)===t.codePointAt(s--)?s<0&&(i=a):(s=-1,i=o));r===i?i=o:i<0&&(i=e.length);return e.slice(r,i)},dirname:function(e){if(sc(e),0===e.length)return".";let t,n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){sc(e);let t,n=e.length,r=-1,i=0,a=-1,o=0;for(;n--;){const s=e.codePointAt(n);if(47!==s)r<0&&(t=!0,r=n+1),46===s?a<0?a=n:1!==o&&(o=1):a>-1&&(o=-1);else if(t){i=n+1;break}}if(a<0||r<0||0===o||1===o&&a===r-1&&a===i+1)return"";return e.slice(a,r)},join:function(){let e,t=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++t<r.length;)sc(r[t]),r[t]&&(e=void 0===e?r[t]:e+"/"+r[t]);return void 0===e?".":function(e){sc(e);const t=47===e.codePointAt(0);let n=function(e,t){let n,r,i="",a=0,o=-1,s=0,c=-1;for(;++c<=e.length;){if(c<e.length)n=e.codePointAt(c);else{if(47===n)break;n=47}if(47===n){if(o===c-1||1===s);else if(o!==c-1&&2===s){if(i.length<2||2!==a||46!==i.codePointAt(i.length-1)||46!==i.codePointAt(i.length-2))if(i.length>2){if(r=i.lastIndexOf("/"),r!==i.length-1){r<0?(i="",a=0):(i=i.slice(0,r),a=i.length-1-i.lastIndexOf("/")),o=c,s=0;continue}}else if(i.length>0){i="",a=0,o=c,s=0;continue}t&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+e.slice(o+1,c):i=e.slice(o+1,c),a=c-o-1;o=c,s=0}else 46===n&&s>-1?s++:s=-1}return i}(e,!t);0!==n.length||t||(n=".");n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/");return t?"/"+n:n}(e)},sep:"/"};function sc(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const cc={cwd:function(){return"/"}};function lc(e){return Boolean(null!==e&&"object"===typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}function uc(e){if("string"===typeof e)e=new URL(e);else if(!lc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){const e=new TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}const t=e.pathname;let n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){const e=t.codePointAt(n+2);if(70===e||102===e){const e=new TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}const dc=["history","path","basename","stem","extname","dirname"];class hc{constructor(e){let t;t=e?lc(e)?{path:e}:"string"===typeof e||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":cc.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n,r=-1;for(;++r<dc.length;){const e=dc[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)dc.includes(n)||(this[n]=t[n])}get basename(){return"string"===typeof this.path?oc.basename(this.path):void 0}set basename(e){pc(e,"basename"),fc(e,"basename"),this.path=oc.join(this.dirname||"",e)}get dirname(){return"string"===typeof this.path?oc.dirname(this.path):void 0}set dirname(e){gc(this.basename,"dirname"),this.path=oc.join(e||"",this.basename)}get extname(){return"string"===typeof this.path?oc.extname(this.path):void 0}set extname(e){if(fc(e,"extname"),gc(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=oc.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){lc(e)&&(e=uc(e)),pc(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"===typeof this.path?oc.basename(this.path,this.extname):void 0}set stem(e){pc(e,"stem"),fc(e,"stem"),this.path=oc.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){const r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){const r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){const r=new ia(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){if(void 0===this.value)return"";if("string"===typeof this.value)return this.value;return new TextDecoder(e||void 0).decode(this.value)}}function fc(e,t){if(e&&e.includes(oc.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+oc.sep+"`")}function pc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function gc(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}const mc=function(e){const t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},yc={}.hasOwnProperty;class bc extends mc{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ac()}copy(){const e=new bc;let t=-1;for(;++t<this.attachers.length;){const n=this.attachers[t];e.use(...n)}return e.data(rc(!0,{},this.namespace)),e}data(e,t){return"string"===typeof e?2===arguments.length?(wc("data",this.frozen),this.namespace[e]=t,this):yc.call(this.namespace,e)&&this.namespace[e]||void 0:e?(wc("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...n]=this.attachers[this.freezeIndex];if(!1===n[0])continue;!0===n[0]&&(n[0]=void 0);const r=t.call(e,...n);"function"===typeof r&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Tc(e),n=this.parser||this.Parser;return xc("parse",n),n(String(t),t)}process(e,t){const n=this;return this.freeze(),xc("process",this.parser||this.Parser),_c("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){const a=Tc(e),o=n.parse(a);function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}n.run(o,a,(function(e,t,r){if(e||!t||!r)return s(e);const i=t,a=n.stringify(i,r);var o;"string"===typeof(o=a)||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(o)?r.value=a:r.result=a,s(e,r)}))}}processSync(e){let t,n=!1;return this.freeze(),xc("processSync",this.parser||this.Parser),_c("processSync",this.compiler||this.Compiler),this.process(e,(function(e,r){n=!0,nc(e),t=r})),Sc("processSync","process",n),t}run(e,t,n){Dc(e),this.freeze();const r=this.transformers;return n||"function"!==typeof t||(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){const o=Tc(t);r.run(e,o,(function(t,r,o){const s=r||e;t?a(t):i?i(s):n(void 0,s,o)}))}}runSync(e,t){let n,r=!1;return this.run(e,t,(function(e,t){nc(e),n=t,r=!0})),Sc("runSync","run",r),n}stringify(e,t){this.freeze();const n=Tc(t),r=this.compiler||this.Compiler;return _c("stringify",r),Dc(e),r(e,n)}use(e){const t=this.attachers,n=this.namespace;if(wc("use",this.frozen),null===e||void 0===e);else if("function"===typeof e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];l(e,i)}else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");Array.isArray(e)?c(e):s(e)}return this;function o(e){if("function"===typeof e)l(e,[]);else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");if(Array.isArray(e)){const[t,...n]=e;l(t,n)}else s(e)}}function s(e){if(!("plugins"in e)&&!("settings"in e))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(e.plugins),e.settings&&(n.settings=rc(!0,n.settings,e.settings))}function c(e){let t=-1;if(null===e||void 0===e);else{if(!Array.isArray(e))throw new TypeError("Expected a list of plugins, not `"+e+"`");for(;++t<e.length;){o(e[t])}}}function l(e,n){let r=-1,i=-1;for(;++r<t.length;)if(t[r][0]===e){i=r;break}if(-1===i)t.push([e,...n]);else if(n.length>0){let[r,...a]=n;const o=t[i][1];ic(o)&&ic(r)&&(r=rc(!0,o,r)),t[i]=[e,r,...a]}}}}const vc=(new bc).freeze();function xc(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `parser`")}function _c(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `compiler`")}function wc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dc(e){if(!ic(e)||"string"!==typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function Sc(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Tc(e){return function(e){return Boolean(e&&"object"===typeof e&&"message"in e&&"messages"in e)}(e)?e:new hc(e)}const kc=[],Ec={allowDangerousHtml:!0},Ac=/^(https?|ircs?|mailto|xmpp)$/i,Cc=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Uc(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,a=e.components,o=e.disallowedElements,s=e.rehypePlugins||kc,c=e.remarkPlugins||kc,l=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ec}:Ec,u=e.skipHtml,d=e.unwrapDisallowed,h=e.urlTransform||Fc,f=vc().use(vs).use(c).use(tc,l).use(s),p=new hc;"string"===typeof r&&(p.value=r);for(const y of Cc)Object.hasOwn(e,y.from)&&(y.from,y.to&&y.to,y.id);const g=f.parse(p);let m=f.runSync(g,p);return i&&(m={type:"element",tagName:"div",properties:{className:i},children:"root"===m.type?m.children:[m]}),js(m,(function(e,r,i){if("raw"===e.type&&i&&"number"===typeof r)return u?i.children.splice(r,1):i.children[r]={type:"text",value:e.value},r;if("element"===e.type){let t;for(t in Da)if(Object.hasOwn(Da,t)&&Object.hasOwn(e.properties,t)){const n=e.properties[t],r=Da[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=h(String(n||""),t,e))}}if("element"===e.type){let a=t?!t.includes(e.tagName):!!o&&o.includes(e.tagName);if(!a&&n&&"number"===typeof r&&(a=!n(e,r,i)),a&&i&&"number"===typeof r)return d&&e.children?i.children.splice(r,1,...e.children):i.children.splice(r,1),r}})),ha(m,{Fragment:vt.Fragment,components:a,ignoreInvalidStyle:!0,jsx:vt.jsx,jsxs:vt.jsxs,passKeys:!0,passNode:!0})}function Fc(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||Ac.test(e.slice(0,t))?e:""}function Pc(e){let{markdownContent:t}=e;return(0,vt.jsx)("div",{className:"resume-preview",children:(0,vt.jsx)(Uc,{children:t})})}function Rc(e){let{uploadedResumeContent:t}=e;return(0,vt.jsx)("div",{className:"resume-preview",children:(0,vt.jsx)(Uc,{children:t})})}var Oc=__webpack_require__(7633),Ic=__webpack_require__(8967);function Nc(){const[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(null),[a,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(null),[l,u]=(0,r.useState)(null),[d,h]=(0,r.useState)(!1),[f,p]=(0,r.useState)(null),[g,m]=(0,r.useState)(null),[y,b]=(0,r.useState)(!1),[v,x]=(0,r.useState)(!1),[_,w]=(0,r.useState)(null),[D,S]=(0,r.useState)(""),[T,k]=(0,r.useState)(""),[E,A]=(0,r.useState)(!1),C="http://127.0.0.1:5000/api";(0,r.useEffect)((()=>{f&&g&&console.log("DOCX and PDF blobs have been updated!")}),[f,g]);return(0,vt.jsxs)("div",{className:"get-started-container",children:[(0,vt.jsx)("header",{className:"header",children:(0,vt.jsx)("h1",{children:(0,vt.jsx)("span",{className:"highlight",children:" Job Aligned Personalized Resume "})})}),(0,vt.jsx)("section",{className:"get-started-banner",children:(0,vt.jsxs)("div",{className:"upload-content",children:[(0,vt.jsx)("span",{children:"Upload your JD (PDF or DOCX)"}),(0,vt.jsx)("div",{className:"buttons-row",children:(0,vt.jsx)("input",{type:"file",accept:".pdf, .docx",onChange:async e=>{const t=e.target.files[0];u(t),S(""),k("");const n=new FormData;n.append("JD",t);try{(await fetch(`${C}/submitjd`,{method:"POST",body:n})).ok?console.log("JD uploaded successfully"):console.error("Failed to upload JD")}catch(r){console.error("Error:",r)}}})}),(0,vt.jsx)("span",{children:"Upload your resume (PDF or DOCX)"}),(0,vt.jsx)("div",{className:"buttons-row",children:(0,vt.jsx)("input",{type:"file",accept:".pdf, .docx",onChange:async e=>{const n=e.target.files[0];if(c(n),w(URL.createObjectURL(n)),S(""),k(""),A(""),t(null),i(null),o(!1),b(!1),n){const e=n.name.split(".").pop().toLowerCase();if("docx"===e){const e=new FileReader;e.onload=async()=>{const t=e.result;try{const e=(await Oc.extractRawText({arrayBuffer:t})).value;k(e),console.log("Extracted Text from .docx:",e)}catch(n){console.error("Error extracting text from .docx:",n)}},e.readAsArrayBuffer(n)}else if("pdf"===e){const e=new FileReader;e.onload=async()=>{const t=e.result;try{const e=await Ic.getDocument({data:t}).promise;let n="";for(let t=1;t<=e.numPages;t++){const r=await e.getPage(t),i=await r.getTextContent();let a="",o=null;i.items.forEach((e=>{null!==o&&Math.abs(o-e.transform[5])>10&&(a+="\n"),a+=e.str,o=e.transform[5]})),n+=a+"\n"}k(n),console.log("Extracted Text from .pdf:",n)}catch(n){console.error("Error extracting text from .pdf:",n)}},e.readAsArrayBuffer(n)}else console.error("Unsupported file type. Please upload a .docx, or .pdf file.")}const r=new FormData;r.append("resume",n);try{(await fetch(`${C}/uploadresume`,{method:"POST",body:r})).ok?console.log("Resume uploaded successfully"):console.error("Failed to upload resume")}catch(a){console.error("Error:",a)}}})}),l&&s&&(0,vt.jsx)(Kr,{direction:"up",triggerOnce:!0,children:(0,vt.jsxs)("div",{className:"buttons-row",children:[(0,vt.jsx)("button",{onClick:async()=>{h(!0);try{const e=await fetch(`${C}/getscore`,{method:"POST",headers:{"Content-Type":"application/json"}});if(e.ok){const n=await e.json();t(n.score),i(n.reason),o(!0),console.log("Resume Score: ",n.score),console.log("Resume Score Reason: ",n.reason)}else console.error("Failed to fetch resume score"),console.error("Failed to fetch resume score reason")}catch(e){console.error("Error:",e)}finally{h(!1)}},children:"Get Resume Score"}),(0,vt.jsx)("button",{onClick:async()=>{A(!0),x(!0);try{const e=await fetch(`${C}/tailorresume`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();S(t.resume);const n=await fetch(`${C}/downloadresume/docx`,{method:"POST"});if(!n.ok)throw new Error("Failed to fetch DOCX");const r=await n.blob();p(r);const i=await fetch(`${C}/downloadresume/pdf`,{method:"POST"});if(!i.ok)throw new Error("Failed to fetch PDF");const a=await i.blob();m(a),b(!0)}catch(e){console.error("Error while fetching resume paths:",e)}finally{x(!1)}},children:"Tailor Resume"}),y&&(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsx)("button",{onClick:async()=>{h(!0);try{const e=await fetch(`${C}/getnewscore`,{method:"POST",headers:{"Content-Type":"application/json"}});if(e.ok){const n=await e.json();t(n.score),i(n.reason),o(!0),console.log("Resume Score: ",n.score),console.log("Resume Score Reason: ",n.reason)}else console.error("Failed to fetch resume score"),console.error("Failed to fetch resume score reason")}catch(e){console.error("Error:",e)}finally{h(!1)}},children:"Get Tailored Resume Score"}),(0,vt.jsx)("button",{onClick:()=>{if(!g)return void console.error("PDF Blob is not available for download.");const e=window.URL.createObjectURL(g),t=document.createElement("a");t.href=e,t.setAttribute("download","Updated_Resume.pdf"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:"Download Resume (PDF)"}),(0,vt.jsx)("button",{onClick:()=>{if(!f)return;const e=window.URL.createObjectURL(f),t=document.createElement("a");t.href=e,t.setAttribute("download","Updated_Resume.docx"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:"Download Resume (.docx)"})]})]})}),d?(0,vt.jsx)("div",{className:"score-message",children:"Loading..."}):(0,vt.jsxs)(vt.Fragment,{children:[a&&(0,vt.jsxs)("div",{className:"semicircle-container",children:[(0,vt.jsx)("div",{className:"semicircle",style:{borderColor:e<50?"#e0281b":e<75?"#ecbb09":"#389410"},children:(0,vt.jsxs)("span",{className:"score-label",style:{color:e<50?"#e0281b":e<75?"#ecbb09":"#389410"},children:[e,"%"]})}),(0,vt.jsx)("div",{className:"score-reason-container",children:(0,vt.jsxs)("p",{className:"score-reason",children:["Resume Score Reason: ",n]})})]}),v&&(0,vt.jsx)("div",{className:"tailoring-message",style:{marginTop:"10px",color:"#ecbb09"},children:"Your resume is getting tailored. Please wait..."}),(0,vt.jsxs)("div",{className:"resume-container",children:[E&&T&&(0,vt.jsx)(Kr,{direction:"up",triggerOnce:!0,children:(0,vt.jsxs)("div",{className:"uploaded-resume-preview",children:[(0,vt.jsx)("h4",{children:"Uploaded Resume"}),(0,vt.jsx)(Rc,{uploadedResumeContent:T})]})}),D&&(0,vt.jsx)(Kr,{direction:"up",triggerOnce:!0,children:(0,vt.jsxs)("div",{className:"resume-preview",children:[(0,vt.jsx)("h4",{children:"Tailored Resume"}),(0,vt.jsx)(Pc,{markdownContent:D})]})})]})]})]})}),(0,vt.jsx)("footer",{className:"footer-copy",children:(0,vt.jsx)("p",{children:"2024 \xa9 Resume Magic"})})]})}Ic.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";const Mc=function(e,t){return ne({basename:null==t?void 0:t.basename,future:Dt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),p((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=f(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:h(t))}),(function(e,t){l("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),n)),hydrationData:(null==t?void 0:t.hydrationData)||kt(),routes:e,mapRouteProperties:bt,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:null==t?void 0:t.unstable_patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{path:"",element:(0,vt.jsx)(xt,{}),children:[{path:"/",element:(0,vt.jsx)(ci,{})},{path:"/getstarted",element:(0,vt.jsx)(Nc,{})}]}]);a.createRoot(document.getElementById("root")).render((0,vt.jsx)(r.StrictMode,{children:(0,vt.jsx)(Ot,{router:Mc})}))})()})();
//# sourceMappingURL=main.b9d85627.js.map