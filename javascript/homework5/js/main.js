const tabnames = document.getElementsByClassName("tabs-title");
const content = document.getElementsByClassName("text");

    tabnames[0].dataset.tabnum = 0;
    content[0].dataset.textnum = 0;

for (let i = 0; i < tabnames.length; i++) {
  tabnames[i].onclick = function() {
    for (let j = 0; j < content.length; j++) {
      content[j].style.display = "none";
    }

    for (let j = 0; j < tabnames.length; j++) {
      tabnames[j].classList.remove("active");
    }
    
    tabnames[i].classList.add("active");
    content[i].style.display = "inline";
    
  };
}

for (let item of content) {
  if (item.dataset.textnum == false) {
    continue;
  }
  item.style.display = "none";
}
