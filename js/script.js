/** activate links function */
const links = document.querySelectorAll("nav a");

function ativarLink(link) {
   const url = location.href;
   const href = link.href;

   if (url.includes(href)) {
      link.classList.add("linkAtivo");
   }
}

links.forEach(ativarLink);