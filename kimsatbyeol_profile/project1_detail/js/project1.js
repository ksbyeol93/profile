document.addEventListener('DOMContentLoaded',()=>{

  const project1IsoImg = document.querySelector('#project1_iso_img')
  const project1InfographicWrap = document.querySelector('#project1_infographic')

  project1InfographicWrap.addEventListener('mouseenter', showIso)
  project1InfographicWrap.addEventListener('mouseleave', hideIso)




  function showIso(){
    gsap.to(project1IsoImg,{opacity:1, top:"10%", duration:0.5})
  }

  function hideIso(){
    gsap.to(project1IsoImg,{opacity:0, top:"15%", duration:0.5})
  }
})