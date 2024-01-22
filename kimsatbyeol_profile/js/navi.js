document.addEventListener('DOMContentLoaded',()=>{

  const mainMenuWrap=document.querySelector('#mainmenu')
  const mainmenuList=document.querySelector('#mainmenu_list')
  const headerWrap=document.querySelector('#header_wrap')
  const menuBg=document.querySelector('#mainmenu_bg')

  
  let openWidth=500;
  

  mainMenuWrap.addEventListener('mouseenter', openMenu)
  headerWrap.addEventListener('mouseleave', closeMenu)


  function openMenu(){
    gsap.to(menuBg,{opacity:1, duration:0.3})
    gsap.to(mainmenuList,{right:0, opacity:1, duration:0.3})
  }

  function closeMenu(){
    // gsap.to(mainmenuList,{right:-openWidth, opacity:0, duration:0.2, onComplete:()=>{
    //   gsap.to(menuBg,{opacity:0, duration:0.5})  
    // }})
    gsap.to(mainmenuList,{right:-openWidth, opacity:0, duration:0.2 })

    gsap.to(menuBg,{opacity:0, duration:0.5}) 
    
    
  }

  
})