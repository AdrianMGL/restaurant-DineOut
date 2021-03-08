/*========== TOGGLE NAVBAR ==========*/

const d = document,
navToggler = d.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
  navToggler.classList.toggle("active");
  d.querySelector(".nav").classList.toggle("open");
}

/**----- Close nav when clicking on a nav item -----*/
  d.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
      toggleNav();
    }
  })

/**----- Sticky -----*/
window.addEventListener("scroll", function(){
     /*  console.log(this.pageYOffset); */

  if(this.pageYOffset > 60){
     d.querySelector(".header").classList.add("sticky"); 
  } else {
    d.querySelector(".header").classList.remove("sticky");
  } 
})



/*==========  ==========*/

/*==========  ==========*/


/*==========  ==========*/

/*==========  ==========*/
