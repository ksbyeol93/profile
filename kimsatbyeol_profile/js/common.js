document.addEventListener('DOMContentLoaded',()=>{

  const sizing= document.querySelectorAll('.section_size')
  gsap.set(sizing, {height:window.innerHeight})

})