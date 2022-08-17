function createElement(tag, props) {
  const newTag = document.createElement(tag);

  if (props && props.length) {
    props.forEach((singleProp) => {
      newTag[singleProp.name] = singleProp.value;
    });
  }

  return newTag;
}

function render(data) {
  const cardContainerId = "business-card-output";

  if (document.querySelector(`#${cardContainerId}`)) {
    document.querySelector(`#${cardContainerId}`).remove();
  }

  const cardContainer = createElement("div", [{ name: "id", value: cardContainerId }]);
  const nameParagraph = createElement("p", [{ name: "textContent", value: data.name }]);
  const emailParagraph = createElement("p", [{ name: "textContent", value: data.email }]);
  const phoneParagraph = createElement("p", [{ name: "textContent", value: data.phone }]);
  const addressParagraph = createElement("p", [{ name: "textContent", value: data.address }]);
  const serviceParagraph = createElement("p", [{ name: "textContent", value: data.service }]);

  cardContainer.append(
    nameParagraph,
    emailParagraph,
    phoneParagraph,
    addressParagraph,
    serviceParagraph
  );
  document.querySelector("#app").append(cardContainer);
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("cardInputs")) {
    const persistedData = JSON.parse(window.localStorage.getItem("cardInputs"));

    render(persistedData);

    // more advanced solution
    document.querySelectorAll("#card-inputs input").forEach((input) => {
      input.value = persistedData[input.name];
    });

    // simple and valid solution
    // document.querySelector("#card-inputs [name='name']").value = persistedData.name;
    // document.querySelector("#card-inputs [name='email']").value = persistedData.email;
    // document.querySelector("#card-inputs [name='address']").value = persistedData.address;
    // document.querySelector("#card-inputs [name='phone']").value = persistedData.phone;
    // document.querySelector("#card-inputs [name='service']").value = persistedData.service;
  }

  document.querySelector("#card-inputs").addEventListener("submit", (e) => {
    e.preventDefault();

    // more advanced solution
    const cardInputs = Object.fromEntries(new FormData(e.target));

    // simple and valid solution
    // const cardInputs = {
    //   name: e.target.querySelector("[name='name']").value,
    //   email: e.target.querySelector("[name='email']").value,
    //   address: e.target.querySelector("[name='address']").value,
    //   phone: e.target.querySelector("[name='phone']").value,
    //   service: e.target.querySelector("[name='service']").value,
    // };

    render(cardInputs);
    window.localStorage.setItem("cardInputs", JSON.stringify(cardInputs));
  });
});
