const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&y(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function y(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};f();document.querySelector("#themeOption").addEventListener("click",()=>{document.body.classList.toggle("dark-theme")});const l=document.querySelector(".menu");let c=!1;document.querySelector("#menu").addEventListener("click",e=>{l.classList.toggle("display-menu"),c?(document.querySelector("#line1").style.setProperty("transform","translatey(0)"),document.querySelector("#line4").style.setProperty("transform","translatey(0)"),document.querySelector("#line1").style.setProperty("opacity","1"),document.querySelector("#line4").style.setProperty("opacity","1"),document.querySelector("#line2").style.setProperty("transform","rotate(0) "),document.querySelector("#line3").style.setProperty("transform","rotate(0) ")):(document.querySelector("#line1").style.setProperty("transform","translatey(25%)"),document.querySelector("#line4").style.setProperty("transform","translatey(-25%)"),document.querySelector("#line1").style.setProperty("opacity","0"),document.querySelector("#line4").style.setProperty("opacity","0"),document.querySelector("#line2").style.setProperty("transform","rotate(40deg)"),document.querySelector("#line3").style.setProperty("transform","rotate(-40deg)")),c=!c,e.stopImmediatePropagation()});window.addEventListener("click",e=>{!l.classList.contains("display-menu")||l.contains(e.target)||(document.querySelector("#line1").style.setProperty("transform","translatey(0)"),document.querySelector("#line4").style.setProperty("transform","translatey(0)"),document.querySelector("#line1").style.setProperty("opacity","1"),document.querySelector("#line4").style.setProperty("opacity","1"),document.querySelector("#line2").style.setProperty("transform","rotate(0) "),document.querySelector("#line3").style.setProperty("transform","rotate(0) "),c=!1,l.classList.remove("display-menu"),e.stopImmediatePropagation())});const n=document.querySelector("#down"),s=document.querySelector("body header nav"),i=[...document.querySelectorAll("body header nav ul li")].map(e=>e.firstChild),p=e=>e.getBoundingClientRect().top,S=[...document.querySelectorAll("main section")],m=function(){const e=S.map(a=>Math.trunc(Math.abs(p(a)))),o=Math.min(...e);return e.indexOf(o)};let u=m();i.forEach(e=>e.classList.remove("underline"));i[u+1].classList.add("underline");window.onscroll=function(){const e=m();u!==e&&(i.forEach(o=>o.classList.remove("underline")),i[e+1].classList.add("underline"),u=e),window.pageYOffset>60?(n.classList.contains("hide")||n.classList.add("hide"),s.classList.contains("line-shadow")||s.classList.add("line-shadow")):(n.classList.contains("hide")&&n.classList.remove("hide"),s.classList.contains("line-shadow")&&s.classList.remove("line-shadow"))};
