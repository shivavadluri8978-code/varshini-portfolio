const body=document.body, theme=document.getElementById("theme"), menu=document.getElementById("menu"), nav=document.getElementById("nav");
theme.onclick=()=>{body.classList.toggle("light");theme.textContent=body.classList.contains("light")?"☀":"◐";};
menu.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
document.addEventListener("mousemove",e=>{const g=document.querySelector(".cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";});
const sections=[...document.querySelectorAll("main section[id]")], links=[...document.querySelectorAll("#nav a")];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.hash==="#"+e.target.id));}),{rootMargin:"-35% 0px -55% 0px"}).observe(sections[0]);
sections.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.hash==="#"+e.target.id));}),{rootMargin:"-35% 0px -55% 0px"}).observe(s));
