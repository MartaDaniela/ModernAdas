/*
function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.getElementById("title").style.setProperty('--cursorX', x + 'px')
    document.getElementById("title").style.setProperty('--cursorY', y + 'px')
  }
  

function cursorChange(id){
  if(document.getElementById(id)!= "title"){
    document.removeEventListener("mousemove", update); 
    document.removeEventListener("touchmove", update); 
  }
}

cursorChange(document.documentElement);


function setCursorByID(id,cursorStyle) {
  var elem;
  if (document.getElementById &&
     (elem=document.getElementById(id)) ) {
   if (elem.style) elem.style.cursor=cursorStyle;
  }
 }

  
  document.getElementById("title").addEventListener('mousemove',update)
  document.getElementById("title").addEventListener('touchmove',update)

  

  function setCursorByID(id,cursorStyle) {
    var elem;
    if (document.getElementById &&
       (elem=document.getElementById(id)) ) {
     if (elem.style) elem.style.cursor=cursorStyle;
    }
   }

  setCursorByID("title", help);



  function backgroundChange() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.getElementById("title").style.backgroundImage = "url('images/hero-section-img.png')";

  }

  button.addEventListener("click", function(backgroundChange) {
    var e = document.getElementById("title");
    e.classList.toggle("title-image");
  });

  */
 
  function myFunction() {
    var element = document.getElementById("title");
    element.classList.toggle("title-image");
  }