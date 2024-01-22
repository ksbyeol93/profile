document.addEventListener('DOMContentLoaded',()=>{

  const introduceSection=document.querySelector('#introduce_section_wrap')
  const profileIconList=document.querySelectorAll('#profile_text_list')
  const profilePictureBg=document.querySelector('#profile_picture_bg')
  const profileImg=document.querySelector('#profile_picture')
  const profileBgText=document.querySelector('#tag_wrap')

  gsap.to(profileIconList,{left:0, opacity:1, duration:1, scrollTrigger:{
    trigger:introduceSection,
    // markers:true,
    start:'top 30%',
    end:'bottom 0%',
  }})

  gsap.to(profileImg,{scale:1, delay:0.3, ease:"expo.out", duration:2, scrollTrigger:{
    trigger:introduceSection,
    // markers:true,
    start:'top 20%',
    end:'bottom 0%',
  }})

  gsap.to(profilePictureBg,{bottom:0, delay:0.5, opacity:1, duration:0.5, onComplete:()=>{
    gsap.to(profileBgText,{bottom:0, opacity:1})
  }, scrollTrigger:{
    trigger:introduceSection,
    // markers:true,
    start:'top 0%',
    end:'bottom 0%',
    pin:true,
  }})

  







})