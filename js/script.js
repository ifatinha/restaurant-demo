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

/** activate questions item */
function openQuestion(event) {
   const question = event.currentTarget;
   const control = question.getAttribute("aria-controls");
   const response = document.getElementById(control);
   response.classList.toggle("ativa");

   if (response.classList.contains("ativa")) {
      question.setAttribute("aria-expanded", "true");
   } else {
      question.setAttribute("aria-expanded", "false");
   }
}

function eventQuestions(question) {
   question.addEventListener("click", openQuestion);
}

const questions = document.querySelectorAll(".faqs-questions button");
questions.forEach(eventQuestions);
