/** activate links function */
const links = document.querySelectorAll("nav a");

function ativarLink(link) {
   let href = link.href;
   let url = location.href;

   if (href.includes(url)) {
      link.classList.add("linkAtivo");
   }
}

links.forEach(ativarLink);