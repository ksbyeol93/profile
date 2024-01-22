document.addEventListener('DOMContentLoaded',()=>{

  const visualGray = document.querySelector('#main_visual_img_gray')
  const subtractImg = document.querySelector('#subtract_wrap')
  const twinkleText = document.querySelector('#twinkle_text')
  const profileTitle = document.querySelector('#profile_title')
  const copyTitle= document.querySelector('#copy_title')
  const copySmall1= document.querySelector('.copy_text1')
  const copySmall2= document.querySelector('.copy_text2')



  
  
  gsap.to(visualGray,{opacity:0, delay:2, duration:0.5, onComplete:()=>{
    gsap.to(subtractImg,{right:-90, ease:'expo.out',duration:1.5, onComplete:()=>{
      gsap.to(copyTitle,{opacity:1, left:0})
      gsap.to(copySmall1,{delay:0.3, opacity:1, left:0})
      gsap.to(copySmall2,{delay:0.5, opacity:1, left:0})
    }})
  }})

  gsap.to(twinkleText,{delay:1, opacity:1, top:0, duration:2, ease:'expo'})
  gsap.to(profileTitle,{delay: 1.8, opacity:1, left:0, duration:1})







})
