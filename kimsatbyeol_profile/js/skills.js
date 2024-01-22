document.addEventListener('DOMContentLoaded',()=>{

  const skillsAllSection = document.querySelector('#skillsAll_section')
  const skillSection = document.querySelector('#skill_section_wrap')
  
  const sementicMarkup = document.querySelector('#sementic_markup')
  const responsiveWeb = document.querySelector('#responsive_web')
  const adaptiveWeb = document.querySelector('#adaptive_Web')
  const javaScript = document.querySelector('#javaScript')
  const react = document.querySelector('#react')

  const skillSeciton1= document.querySelector('#skillsSection_bg1')
  const skillSeciton2= document.querySelector('#skillsSection_bg2')
  const skillSeciton3= document.querySelector('#skillsSection_bg3')
  const skillSeciton4= document.querySelector('#skillsSection_bg4')
  const skillSeciton5= document.querySelector('#skillsSection_bg5')

  const skillText1 = document.querySelector('#skillText_list1')
  const skillText2 = document.querySelector('#skillText_list2')
  const skillText3 = document.querySelector('#skillText_list3')
  const skillText4 = document.querySelector('#skillText_list4')
  const skillText5 = document.querySelector('#skillText_list5')




  let endX=skillSection.offsetWidth-document.documentElement.clientWidth


  // 타이밍 조절 시작점 기준, 디바이스의 위치
  gsap.to(sementicMarkup,{opacity:1, left:30, duration:1, onComplete:()=>{
    gsap.to(skillText1,{left:0, opacity:1, duration:1})
  }, scrollTrigger:{
    trigger:skillSeciton1,
    start:'top 20%',
    end:'top 20%'
  }})

  gsap.to(responsiveWeb,{opacity:1, left:30, duration:1, onComplete:()=>{
    gsap.to(skillText2,{left:0, opacity:1, duration:1})
  }, scrollTrigger:{
    trigger:skillSeciton2,
    // markers:true,
    start:'bottom 30%',
    end:'bottom 30%',
  }})

  gsap.to(adaptiveWeb,{opacity:1, left:30, duration:1, onComplete:()=>{
    gsap.to(skillText3,{left:0, opacity:1, duration:1})
  }, scrollTrigger:{
    trigger:skillSeciton3,
    // markers:true,
    start:'200% 30%',
    end:'200% 20%',
  }})

  gsap.to(javaScript,{opacity:1, left:30, duration:1, onComplete:()=>{
    gsap.to(skillText4,{left:0, opacity:1, duration:1})
  }, scrollTrigger:{
    trigger:skillSeciton4,
    // markers:true,
    start:'300% 30%',
    end:'300% 20%',
  }})


  gsap.to(react,{opacity:1, left:30, duration:1, onComplete:()=>{
    gsap.to(skillText5,{left:0, opacity:1, duration:1})
  }, scrollTrigger:{
    trigger:skillSeciton5,
    //markers:true,
    start:'550% 50%',
    end:'550% 50%',
  }})






  gsap.to(skillSection,{x:-endX, duration:2, ease:"linear", scrollTrigger:{
    trigger:skillsAllSection,
    // markers:true,
    start:"top 0%",
    end:`${endX} 0%`,
    scrub:1,
    pin:true,
  }})



})
