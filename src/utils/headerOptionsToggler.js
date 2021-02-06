let optionsNames = ['/','/friends','/watch','/groups','/games']

export default function headerOptionsToggler(location){
    let activeOptionIndex
    if(optionsNames.indexOf(location.pathname)>=0){
        activeOptionIndex = optionsNames.indexOf(location.pathname)
    }else{
        return
    }
    const options = document.querySelectorAll('.header__option')
    options.forEach(item=>item.classList.remove('header__option--active'))
    options[activeOptionIndex].classList.add('header__option--active')
}
