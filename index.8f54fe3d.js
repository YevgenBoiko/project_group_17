let e=document.querySelector(".js-form"),o=document.querySelectorAll(".js-input"),r=document.querySelector(".js-input-email"),t=document.querySelector(".js-input-phone");e.onsubmit=function(){let e=r.value,s=t.value,l=Array.from(o).filter((e=>""===e.value));return o.forEach((function(e){""===e.value?e.classList.add("error"):e.classList.remove("error")})),0!==l.length?(console.log("inputs not filled"),!1):/^[0-9\s]*$/.test(String(s))?(t.classList.remove("error"),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void r.classList.remove("error"):(console.log("email not valid"),r.classList.add("error"),!1)):(console.log("phone not valid"),t.classList.add("error"),!1)};
//# sourceMappingURL=index.8f54fe3d.js.map
