const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n;t.addEventListener("click",(function(){t.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),500)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.3f17b8a2.js.map