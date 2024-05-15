import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";

const toggleButtons = document.querySelectorAll(".plus-minus-icon");

const handleToggleIcon = (toggleIcon) => {
  const initialIcon = toggleIcon.src;
  const testIcon = initialIcon.includes("icon-plus.svg");
  const newImg = testIcon ? minusIcon : plusIcon;
  return newImg;
};
toggleButtons.forEach(toggleButton => {
  toggleButton.addEventListener('click',(e)=>{
      toggleButtons.forEach(button => {
          const faq = button.parentNode.parentElement;
          const faqAnswer = faq.getElementsByTagName('p')[0];
          const toggleIcon = button.getElementsByTagName('img')[0];

          if (button !== toggleButton) {
              faqAnswer.classList.add('hidden');
              toggleIcon.src = plusIcon;
          }
      });

      const faq = toggleButton.parentNode.parentElement;
      const faqAnswer = faq.getElementsByTagName('p')[0];
      const toggleIcon = toggleButton.getElementsByTagName('img')[0];

      faqAnswer.classList.toggle('hidden');
      toggleIcon.src = handleToggleIcon(toggleIcon);
  });
});