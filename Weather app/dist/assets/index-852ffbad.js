(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const r={method:"GET",headers:{"X-RapidAPI-Key":"0fc0d3f6a9msh83aca0b5420b605p1cfe9bjsn1c4066e2e8c4","X-RapidAPI-Host":"weather-by-api-ninjas.p.rapidapi.com"}},a=i=>{cityname.innerHTML=i,fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${i}`,r).then(e=>e.json()).then(e=>{console.log(e),cityname.innerHTML=i,cloud_pct.innerHTML=e.cloud_pct,temp.innerHTML=e.temp,e.temp<10&&(document.getElementById("bg").style.backgroundImage="url('Winter.jpg')"),e.temp<10&&(document.getElementById("table").style="color:whitesmoke ;"),feels_like.innerHTML=e.feels_like,humidity.innerHTML=e.humidity,max_temp.innerHTML=e.max_temp,min_temp.innerHTML=e.min_temp,wind_degrees.innerHTML=e.wind_degrees,wind_speed.innerHTML=e.wind_speed}).catch(e=>console.error(e))};let o=document.getElementById("submit"),m=document.getElementById("search");document.getElementById("bg");o.addEventListener("click",i=>{i.preventDefault(),a(m.value),m.value=""});a("Chennai");const h=i=>{fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${i}`,r).then(e=>e.json()).then(e=>{console.log(e),cloud_pct2.innerHTML=e.cloud_pct,temp2.innerHTML=e.temp,feels_like2.innerHTML=e.feels_like,humidity2.innerHTML=e.humidity,max_temp2.innerHTML=e.max_temp,min_temp2.innerHTML=e.min_temp,wind_degrees2.innerHTML=e.wind_degrees,wind_speed2.innerHTML=e.wind_speed}).catch(e=>console.error(e))};h("Delhi");const u=i=>{fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${i}`,r).then(e=>e.json()).then(e=>{console.log(e),cloud_pct3.innerHTML=e.cloud_pct,temp3.innerHTML=e.temp,feels_like3.innerHTML=e.feels_like,humidity3.innerHTML=e.humidity,max_temp3.innerHTML=e.max_temp,min_temp3.innerHTML=e.min_temp,wind_degrees3.innerHTML=e.wind_degrees,wind_speed3.innerHTML=e.wind_speed}).catch(e=>console.error(e))};u("Kolkata");const p=i=>{fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${i}`,r).then(e=>e.json()).then(e=>{console.log(e),cloud_pct4.innerHTML=e.cloud_pct,temp4.innerHTML=e.temp,feels_like4.innerHTML=e.feels_like,humidity4.innerHTML=e.humidity,max_temp4.innerHTML=e.max_temp,min_temp4.innerHTML=e.min_temp,wind_degrees4.innerHTML=e.wind_degrees,wind_speed4.innerHTML=e.wind_speed}).catch(e=>console.error(e))};p("Bengaluru");const _=i=>{fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${i}`,r).then(e=>e.json()).then(e=>{console.log(e),cloud_pct5.innerHTML=e.cloud_pct,temp5.innerHTML=e.temp,feels_like5.innerHTML=e.feels_like,humidity5.innerHTML=e.humidity,max_temp5.innerHTML=e.max_temp,min_temp5.innerHTML=e.min_temp,wind_degrees5.innerHTML=e.wind_degrees,wind_speed5.innerHTML=e.wind_speed}).catch(e=>console.error(e))};_("Mumbai");
