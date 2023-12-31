const toggleButtons= document.querySelectorAll('.plus-minus-icon')

const getIconPath = (imageName) => {
    const scriptTag = document.querySelector('script[src*="main.js"]');
    const scriptPath = scriptTag.src;
    const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
    return `${basePath}/assets/images/${imageName}`;
  };
  
  const handleToggleIcon = (toggleIcon) => {
    const initialIcon = toggleIcon.src;
    const testIcon = initialIcon.includes('icon-plus.svg');
    const newImg = getIconPath(testIcon ? 'icon-minus.svg' : 'icon-plus.svg');
    return newImg;
  };
toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener('click',(e)=>{
        const faq=toggleButton.parentNode.parentElement;
        // find and hide/show FAQ answer
        const faqAnswer = faq.getElementsByTagName('p')[0];
        faqAnswer.classList.toggle('hidden')
        // find and change toggleicon 
        const toggleIcon = toggleButton.getElementsByTagName('img')[0]
        toggleIcon.src=handleToggleIcon(toggleIcon)
    })
   
});