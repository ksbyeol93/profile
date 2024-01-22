document.addEventListener('DOMContentLoaded',()=>{

  const project2IsoImg = document.querySelector('#project2_iso_img')
  const project2InfographicWrap = document.querySelector('#project2_infographic')

  project2InfographicWrap.addEventListener('mouseenter', showIso)
  project2InfographicWrap.addEventListener('mouseleave', hideIso)




  function showIso(){
    gsap.to(project2IsoImg,{opacity:1, top:"5%", duration:0.5})
  }

  function hideIso(){
    gsap.to(project2IsoImg,{opacity:0, top:"10%", duration:0.5})
  }
})