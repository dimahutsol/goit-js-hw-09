import"./assets/modulepreload-polyfill-3cfb730f.js";const o="feedback-form-state",a={form:document.querySelector(".feedback-form")};let t={email:"",message:""};a.form.addEventListener("input",m);a.form.addEventListener("submit",s);document.addEventListener("DOMContentLoaded",c);function m(e){t[e.target.name]=e.target.value.trim();try{localStorage.setItem(o,JSON.stringify(t))}catch{return}}function s(e){e.preventDefault(),Object.keys(t).every(l=>e.currentTarget.elements[l].value)?(console.log(t),localStorage.removeItem(o),e.currentTarget.reset()):alert("Fill please all fields")}function c(){try{const e=JSON.parse(localStorage.getItem(o));if(e){const n=Object.keys(e);t=e,n.forEach(r=>{a.form.elements[r].value=e[r]})}}catch{return}}
//# sourceMappingURL=commonHelpers2.js.map