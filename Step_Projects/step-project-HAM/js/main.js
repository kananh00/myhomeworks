//first tabs

const tabnames = document.getElementsByClassName("tab-title");
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

//second tabs

const filterTitlesContainer = document.getElementById('titles');
const projects = document.querySelectorAll('.gridbox');
filterTitlesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-name'))
{
    const title = e.target;
    const type = title.dataset.filterby || 'gridbox';
    const isActive = title.classList.contains('selected');
    if(!isActive) {
        document.querySelector('.tab-name.selected').classList.remove('selected');
        title.classList.add('selected');
            filterByClassName(projects, type);    }
}
});
function filterByClassName(elements, className){
    for(let element of elements){
        element.hidden = !element.classList.contains(className);
        }
}

