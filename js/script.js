// Change header color when scrolling
const nav = document.getElementById('header')

window.addEventListener('scroll',() =>{
  if(this.scrollY >= 50) {
    nav.classList.add('active-header')
  }else {
    nav.classList.remove('active-header')
  }
})

// Menu drop down

const menuItens = Array.from(document.querySelectorAll('.menu-item'))
const dropDownMenu = Array.from(document.querySelectorAll('.dropdown-menu'))
console.log(menuItens)
console.log(dropDownMenu)

menuItens.forEach((item,index) => {
  item.addEventListener('click',(e)=>{
    e.preventDefault()
    dropDownMenu[index].classList.add('active-dropdown-menu')
  })
})

menuItens.forEach((item,index) => {
  item.addEventListener('mouseleave',(e)=>{
    e.preventDefault()
    dropDownMenu[index].classList.remove('active-dropdown-menu')
  })
})

