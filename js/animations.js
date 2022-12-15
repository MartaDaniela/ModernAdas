
  function backgroundChange() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.getElementById("title").style.backgroundImage = "url('images/hero-section-img.png')";

  }

  button.addEventListener("click", function(backgroundChange) {
    var e = document.getElementById("title");
    e.classList.toggle("title-image");
  });

  
 
  
  function myFunction() {
    var element = document.getElementById("title");
    element.classList.toggle("title-image");
  }

  /*having cursor be different appearance based on element
  function setCursorByID(id,cursorStyle) {
    var elem;
    if (document.getElementById &&
       (elem=document.getElementById(id)) ) {
     if (elem.style) elem.style.cursor=cursorStyle;
    }
   }

  how to apply in html:
  use mouseover(setCursorByID(id,cursorStyle)) */