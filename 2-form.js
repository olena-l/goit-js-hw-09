import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n="feedback-form-state",e={email:"",message:""},a=document.querySelector(".feedback-form"),s=a.querySelector("input"),l=a.querySelector("textarea");c();a.addEventListener("input",m);a.addEventListener("submit",i);function m(t){const{name:o,value:r}=t.target;e[o]=r.trim(),localStorage.setItem(n,JSON.stringify(e))}function i(t){if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),a.reset(),localStorage.removeItem(n),e.email="",e.message=""}function c(){const t=localStorage.getItem(n);if(t){const{email:o,message:r}=JSON.parse(t);s.value=o,l.value=r}}
//# sourceMappingURL=2-form.js.map
