const nav = document.getElementById('header')
console.log(nav)

window.addEventListener('scroll',() =>{
  if(this.scrollY >= 50) {
    nav.classList.add('active-header')
  }else {
    nav.classList.remove('active-header')
  }
})