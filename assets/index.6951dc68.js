const u=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};u();document.querySelector("#themeOption").addEventListener("click",()=>{document.body.classList.toggle("dark-theme")});const r=document.querySelector(".menu");document.querySelector("#menu").addEventListener("click",n=>{r.classList.toggle("display-menu"),n.stopImmediatePropagation()});window.addEventListener("click",n=>{!r.classList.contains("display-menu")||r.contains(n.target)||(r.classList.remove("display-menu"),n.stopImmediatePropagation())});const[a,m,f]=[document.querySelector("#home"),document.querySelector("#projects"),document.querySelector("#contact")],o=[...document.querySelectorAll("body header nav ul li")].map(n=>n.firstChild),c=n=>n.getBoundingClientRect().top;window.onscroll=function(){c(a)<=60&&(o[2].classList.remove("underline"),o[3].classList.remove("underline"),o[1].classList.add("underline")),c(m)<=60&&(o[2].classList.add("underline"),o[1].classList.remove("underline"),o[3].classList.remove("underline")),c(f)<=60&&(o[3].classList.add("underline"),o[1].classList.remove("underline"),o[2].classList.remove("underline"))};
