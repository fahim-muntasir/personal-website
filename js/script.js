$('#html').simpleSkillbar({
        width: 90,
        
});

$('#css').simpleSkillbar({
        width: 85// 80%
});
$('#javascript').simpleSkillbar({
        width: 70// 80%
});
$('#jquery').simpleSkillbar({
        width: 65// 80%
 });
$('#php').simpleSkillbar({
        width: 80// 80%
});
 $('#mysql').simpleSkillbar({
        width: 75// 80%
 });


//  mixitup plugin

var mixer = mixitup('.portfolio');

// menu bar responsive

var menuIcon = document.querySelector(".menuIcon");
var closeBtn = document.querySelector(".menuBarClose");
var menuItem = document.querySelector(".nav_items");
menuIcon.addEventListener("click",function(){
        menuItem.classList.add("showMenu");
})

closeBtn.addEventListener("click",function(){
        menuItem.classList.remove("showMenu");
})


// menu bar scroll 

window.addEventListener("scroll",function(){
        var navBar = document.querySelector(".nav_menu");
        navBar.classList.toggle("sticky", window.scrollY > 50);

        var scrollUp = document.querySelector(".scrollUpBotton");
        scrollUp.classList.toggle("scrollUpBottonShow",window.scrollY > 800);

    scrollUp.addEventListener("click",()=>{
      window.scrollTo(0,0);
    })
})




// active menu design

$(".nav_items li").on("click", function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
})


// ==== popup js ===

const popUpBtn = document.querySelectorAll(".portfolio i");
const modal = document.querySelector(".Mymodal");
const modalImage = document.querySelector(".modalImage");

popUpBtn.forEach((popUp) => {
        popUp.addEventListener("click", ()=>{
                modal.classList.add("open");
                modalImage.classList.add("open");

                //daynamic image change
                const orginalSrc = popUp.getAttribute("data-orginal");
                modalImage.src = `portfolio thamnel/${orginalSrc}`;
        })
})

modal.addEventListener("click", (e)=>{
        if(e.target.classList.contains("Mymodal")){
                modal.classList.remove("open");
                modalImage.classList.remove("open"); 
        }
})

// ==== popup js ===
