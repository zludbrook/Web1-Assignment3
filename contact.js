// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function submit(event) {
  event.preventDefault();

  let contact_pg = document.querySelector("main");
  let message = document.createElement("p");

  message.textContent = "Thank you for your message";
  message.style.fontSize = "24px;";

  contact_pg.innerHTML = "";
  contact.appendChild(message);
}

document.getElementById("submit-button").addEventListener("click, submit");
