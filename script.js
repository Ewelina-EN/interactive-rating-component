const ratingContainer = document.querySelector(".container");
const rateInputs = document.querySelectorAll(".rate_input");
const form = document.querySelector(".form");

let ratingValue;

console.log(rateInputs);

rateInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingValue = e.target.value;
    console.log(e.target.value);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ratingValue) return;
  thankYouState(ratingContainer, ratingValue);
  console.log(thankYouState);
});

function thankYouState(elements, ratingValue) {
  elements.innerHTML = `
    <div class="thx">
        <img
          src="images/illustration-thank-you.svg"
          alt="thankyou"
          class="thx_img"
        />
        <p class="result">You selected ${ratingValue} out of 5</p>
        <h1>Thank you!</h1>
        <p class="thx_description">
          We appreciate you taking the time to give a rating.<br />If you ever
          need more support, don't hestitate to<br />
          get in touch!
        </p>
      </div>
    `;
}
