let optionsNames = ['/','/friends','/watch','/groups','/games']

export default function headerOptionsToggler(location){
    let activeOptionIndex
    const options = document.querySelectorAll('.header__option')
    options.forEach(item=>item.classList.remove('header__option--active'))
    if(optionsNames.indexOf(location.pathname)>=0){
        activeOptionIndex = optionsNames.indexOf(location.pathname)
        options[activeOptionIndex].classList.add('header__option--active')
    }
    
   
    
}
