const t=document.getElementById("calculate-btn"),o=document.getElementById("roll-thick"),a=document.getElementById("veneer-thick"),e=(document.getElementById("total-output-math"),document.getElementById("total-output-tab"));t.addEventListener("click",(()=>{e.innerHTML=l(Number(a.value),Number(o.value)),o.value=""}));const l=(t,o)=>.5===t?(total=59.129*Math.pow(o,2)+1307.8*o+500.31,`${Math.round(total/100)} mb`):.8===t?(total=41.435*Math.pow(o,2)+770.66*o+70.674,`${Math.round(total/100)} mb`):1===t?(total=40.083*Math.pow(o,2)+462.91*o+983.99,`${Math.round(total/100)} mb`):1.2===t?(total=2.0001*o+.5006,`${Math.round(total/100)} mb`):1.5===t?(total=2.0005*o+2.504,`${Math.round(total/100)} mb`):2===t?(total=23.048*Math.pow(o,2)+82.342*o+1595.7,`${Math.round(total/100)} mb`):void(total=0);
//# sourceMappingURL=index.2058a799.js.map
