const tabnames = document.getElementsByClassName("tabs-title");
const content = document.getElementsByClassName("text");

for (let i = 0; i < tabnames.length; i++) {
  tabnames[i].onclick = function() {
  
    for (let j = 0; j < content.length; j++) {
      content[j].style.display = "none";
    }

    for (let j = 0; j < tabnames.length; j++) {
      tabnames[j].classList.remove("selected");
    }
    
    tabnames[i].classList.add("selected");
    content[i].style.display = "inline";
   
  };
}
