import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n=document.querySelector("input");n.classList.add("input-form-email");const l=document.querySelector("textarea");l.classList.add("textarea-form-message");const m=document.querySelector("button");m.classList.add("btn-form");const a=document.querySelector(".feedback-form");let o={email:"",message:""};const c=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));o=e;for(const t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};c();const u=e=>{const t=e.target,r=t.value,s=t.name;o[s]=r,localStorage.setItem("feedback-form-state",JSON.stringify(o))},f=e=>{o.email===""||o.message===""?alert("Fill please all fields"):console.log(o),e.preventDefault();const{currentTarget:t}=e;t.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",u);a.addEventListener("submit",f);
//# sourceMappingURL=2-form.js.map
