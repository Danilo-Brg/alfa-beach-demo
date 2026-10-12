const phone="5571991843800";
const messages={
 hero:"Olá! Conheci a Alfa Beach pelo site e gostaria de consultar a disponibilidade e os valores para me hospedar.",
 benefits:"Olá! Gostaria de saber mais sobre a hospedagem na Alfa Beach e consultar as opções disponíveis.",
 gallery:"Olá! Gostei das fotos da Alfa Beach e gostaria de conhecer os quartos disponíveis, os valores e as condições de hospedagem.",
 reviews:"Olá! Vi os comentários sobre a Alfa Beach e gostaria de consultar a disponibilidade para minha viagem.",
 info:"Olá! Gostaria de confirmar os horários, o café da manhã, as comodidades e os valores da hospedagem.",
 final:"Olá! Quero planejar minha hospedagem na Alfa Beach. Poderiam me informar os valores e a disponibilidade para as datas da minha viagem?",
 floating:"Olá! Vim pelo site da Alfa Beach e gostaria de receber informações sobre hospedagem.",
 team:"Olá! Gostaria de falar com a equipe da Alfa Beach para tirar algumas dúvidas sobre hospedagem."
};
const wa=m=>"https://wa.me/"+phone+"?text="+encodeURIComponent(m);
document.querySelectorAll("[data-wa]").forEach(a=>{const key=a.dataset.wa;a.href=wa(messages[key]||messages.final);a.target="_blank";a.rel="noopener noreferrer";});
const menu=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"✕":"☰";});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const today=new Date().toISOString().slice(0,10),arrival=document.getElementById("arrival"),departure=document.getElementById("departure");
arrival.min=today;departure.min=today;arrival.addEventListener("change",()=>departure.min=arrival.value||today);
document.getElementById("stayForm").addEventListener("submit",e=>{e.preventDefault();const a=arrival.value,d=departure.value,err=document.getElementById("formError");if(!a||!d||d<=a){err.textContent="Informe uma entrada e uma saída válidas. A saída deve ser depois da entrada.";return;}err.textContent="";const msg=`Olá! Gostaria de consultar hospedagem na Alfa Beach. Entrada: ${a}. Saída: ${d}. Adultos: ${document.getElementById("adults").value}. Crianças: ${document.getElementById("children").value}. Poderiam informar a disponibilidade e o valor total?`;window.open(wa(msg),"_blank","noopener,noreferrer");});
const lb=document.getElementById("lightbox"),lbImg=document.getElementById("lightboxImage");
document.querySelectorAll("[data-image]").forEach(b=>b.addEventListener("click",()=>{lbImg.textContent=b.dataset.image==="sea"?"Imagem ilustrativa de paisagem costeira — substitua por foto autorizada.":"Imagem ilustrativa de piscina tropical — substitua por foto autorizada.";lb.hidden=false;}));
document.getElementById("closeLightbox").addEventListener("click",()=>lb.hidden=true);
lb.addEventListener("click",e=>{if(e.target===lb)lb.hidden=true;});
