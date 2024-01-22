document.addEventListener('DOMContentLoaded',()=>{
  const projectImg1 =document.querySelector('#mockup1_wrap')
  const projectImg2 =document.querySelector('#mockup2_wrap')
  const projectImg3 =document.querySelector('#mockup3_wrap')
  const projectImg4 =document.querySelector('#mockup4_wrap')


  const project1Section = document.querySelector('#project1_visual_wrap')
  const project2Section = document.querySelector('#project2_visual_wrap')
  const project3Section = document.querySelector('#project3_visual_wrap')
  const project4Section = document.querySelector('#project4_visual_wrap')

    
  gsap.to(projectImg1,{top:550, opacity:1, duration:1, scrollTrigger:{
    trigger:project1Section,
    // markers:true,
    start:"top 0%",
    end:"bottom 100%",
  }})

  gsap.to(projectImg2,{top:550, opacity:1, duration:1, scrollTrigger:{
    trigger:project2Section,
    // markers:true,
    start:"top 0%",
    end:"bottom 100%",
  }})

  gsap.to(projectImg3,{top:250, opacity:1, duration:1, scrollTrigger:{
    trigger:project3Section,
    // markers:true,
    start:"top 0%",
    end:"bottom 100%",
  }})

  gsap.to(projectImg4,{top:250, opacity:1, duration:1, scrollTrigger:{
    trigger:project4Section,
    // markers:true,
    start:"top 0%",
    end:"bottom 100%",
  }})
 
})