let about=document.querySelector('.component .white');
let start=document.querySelector('.name .underLine')


window.addEventListener("scroll",  function ()  {
  if (window.scrollY <= 0 || window.scrollY <= 200) {
    start.classList.add("position-line"); 
    console.log(window.scrollY)
    
  } else {
    start.classList.remove("position-line");
   
} 
});

 