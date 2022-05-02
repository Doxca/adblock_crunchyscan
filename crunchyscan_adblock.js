// ==UserScript==
// @name         adblock crunchyscan
// @version      0.47
// @description  yup, qu'ils ailles se faire foutre
// @author       Doxca
// @match        https://crunchyscan.fr/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAaAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @namespace       https://github.com/Doxca/adblock_crunchyscan
// @updateURL       https://raw.githubusercontent.com/Doxca/adblock_crunchyscan/main/crunchyscan_adblock.user.js
// @downloadURL     https://raw.githubusercontent.com/Doxca/adblock_crunchyscan/main/crunchyscan_adblock.user.js
// @supportURL      https://github.com/Doxca/aadblock_crunchyscan/issues
// @run-at document-start
// ==/UserScript==
setTimeout(()=>{document.querySelectorAll("*").forEach(c=>{c.onclick="";})},2000);
setInterval(()=>{
window.open=(a,b,c,d)=>{return 1;};
document.querySelectorAll("div").forEach(c=>{
if(c.outerHTML.includes("z-index: 300000;")||c.outerHTML.includes("z-index: 2147483647;")){
    c.remove();
}
})
if(!document.querySelector(".captcha-validator,.settings-page")){
document.addEventListener=()=>{return true};
document.querySelectorAll("iframe").forEach(c=>{if(c.id!="done"){c.outerHTML="<iframe id='done' style='display:none;'></iframe>";}});
}
try{
document.querySelector(".c-footer-sidebar").remove();
}catch(e){}
try{document.querySelector(".textwidget,.custom-html-widget").remove()}catch(e){}
try{document.querySelector("#arc-broker").remove()}catch(e){}

});
