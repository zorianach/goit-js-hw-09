!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}));var a=0}();
//# sourceMappingURL=01-color-switcher.302b016a.js.map