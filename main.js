const FaqContainer = document.getElementById('faq')
const toggleButtons= document.querySelectorAll('#plus-minus-icon')

FaqContainer.focus()
console.log(FaqContainer)
const HandleToggleIcon = (toggleIcon) => {
    let initilaIcon = toggleIcon.src ;
    let testIcon = initilaIcon.includes('icon-plus.svg')
    let newImg = {
        'true': "./assets/images/icon-minus.svg",
        'false':"./assets/images/icon-plus.svg"
    }[testIcon];
    return newImg;
}
toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener('click',(e)=>{
        const faq=toggleButton.parentNode.parentElement;
        // find and hide/show FAQ answer
        const faqAnswer = faq.getElementsByTagName('p')[0];
        faqAnswer.classList.toggle('hidden')
        // find and change toggleicon 
        const toggleIcon = toggleButton.getElementsByTagName('img')[0]
        toggleIcon.src=HandleToggleIcon(toggleIcon)
    })
   
});