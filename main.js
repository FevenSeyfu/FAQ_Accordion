
const getIconPath = (imageName) => {
  const basePath = "./assets/images";
  return `${basePath}/${imageName}`;
};

const handleToggleIcon = (toggleIcon) => {
  const initialIcon = toggleIcon.src;
  const testIcon = initialIcon.includes("icon-plus.svg");
  const newImg = getIconPath(testIcon ? "icon-minus.svg" : "icon-plus.svg");
  return newImg;
};

fetch("./assets/data.json")
  .then((response) => response.json())
  .then((data) => {
    const faqContainer = document.getElementById("faq_container");

    data.forEach((faq, index) => {
      const isOpen = index === 0 ? "" : "hidden";
      const icon = index === 0 ? "icon-minus.svg" : "icon-plus.svg";
      const hr = index !== data.length - 1 ? "<hr />" : "";

      const faqList = `
              <div class="faq my-2">
                  <div class="flex items-center mb-4">
                      <h2 class="font-bold text-md w-11/12 hover:text-purple-900">${
                        faq.question
                      }</h2>
                      <button class="plus-minus-icon">
                          <img src="${getIconPath(
                            icon
                          )}" alt="Faq toggle icon" />
                      </button>
                  </div>
                  <p class="text-[16px] text-grayish-purple my-4 ${isOpen}">${ faq.answer }</p>
                  ${hr}
              </div>
            `;

      faqContainer.innerHTML += faqList;
    });

    const toggleButtons = document.querySelectorAll(".plus-minus-icon");
    toggleButtons.forEach((toggleButton) => {
      toggleButton.addEventListener("click", (e) => {
        toggleButtons.forEach((button) => {
          const faq = button.parentNode.parentElement;
          const faqAnswer = faq.getElementsByTagName("p")[0];
          const toggleIcon = button.getElementsByTagName("img")[0];

          if (button !== toggleButton) {
            faqAnswer.classList.add("hidden");
            toggleIcon.src = getIconPath("icon-plus.svg");
          }
        });

        const faq = toggleButton.parentNode.parentElement;
        const faqAnswer = faq.getElementsByTagName("p")[0];
        const toggleIcon = toggleButton.getElementsByTagName("img")[0];

        faqAnswer.classList.toggle("hidden");
        toggleIcon.src = handleToggleIcon(toggleIcon);
      });
    });
  });
