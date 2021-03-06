const ratingContainer = document.querySelector(".container");
const rateInputs = document.querySelectorAll(".form_input");
const form = document.querySelector(".form");

let ratingValue;

rateInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        ratingValue = e.target.value;
    });
});

window.selected = function(event) {
    document.querySelectorAll('.form_list .form_label.active').forEach(function(item) {
      if (!item.isSameNode(event.parentNode)){
        item.classList.remove("active");
      }
    })
    event.target.parentNode.classList.add("active");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ratingValue) return;
    thankYouState(ratingContainer, ratingValue);
});

function thankYouState(elements, ratingValue) {
    elements.innerHTML = `
    <div class="thx_section">
        <img
          src="images/illustration-thank-you.svg"
          alt="thankyou"
          class="thx_img"
        />
        <p class="result">You selected ${ratingValue} out of 5</p>
        <h1 class="header">Thank you!</h1>
        <p class="thx_description">
          We appreciate you taking the time to give a rating.<br />If you ever
          need more support, don't hestitate to<br />
          get in touch!
        </p>
      </div>
    `;
}