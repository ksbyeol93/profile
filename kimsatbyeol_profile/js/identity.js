document.addEventListener('DOMContentLoaded',()=>{
  
  const identitySection=document.querySelector('#identity_section_wrap')
  const identityImg=document.querySelector('#identity_img')
  const imText=document.querySelector('#identity_title_wrap')
  const secondTitle=document.querySelector('#identity_title_second')
  const secondText=document.querySelector('#identity_text_second')
  const identityMainImg=document.querySelector('#identity_img_main')

  gsap.set(secondTitle,{top:0})
  gsap.set(secondText,{bottom:0})



  // #모션1 실루엣 scale 모션
  gsap.to(identityImg,{scale:3, opacity:0, ease:'power1.out', onComplete:()=>{
    gsap.set(identityImg,{display:'none'})
  },scrollTrigger:{
    trigger:identityImg,
    // markers:true,
    start:'top 0%',
    end:'bottom 10%',
    scrub:1,
  }})

  // #모션2 I'm 텍스트 enter 모션
  gsap.to(imText,{left:0, opacity:1, duration:1, ease:'power1.out',scrollTrigger:{
      trigger:imText,
      // markers:true,
      start:'top 80%',
      end:'bottom 10%',
      toggleActions:'play reverse',
    }
  })

  // #모션3 indentityMain 텍스트 enter 모션
  gsap.to(identityMainImg,{scale:1, opacity:1, duration:0.5, onComplete:()=>{
    gsap.to(secondTitle,{top:115, opacity:1, duration:0.3})
    gsap.to(secondText,{bottom:115, opacity:1, duration:0.3})
  },scrollTrigger:{
    trigger:identitySection,
    // markers:true,
    start:'60% 0%',
    end:'bottom 0%',
  }})

  gsap.to(identitySection,{scrollTrigger:{
    trigger:identitySection,
    // markers:true,
    start:'top 0%',
    end:'bottom 0%',
    toggleActions:'play reverse play reverse',
    toggleClass:'activate',
    scrub:1,
    pin:true,
  }})


})