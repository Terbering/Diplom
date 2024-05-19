
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})
window.onload = function() {
    var container = document.getElementsByClassName('slidecontainer')[0];
    var slider = document.createElement("input");
    slider.type = 'range';
    slider.value = 56;
    container.prepend(slider);
  
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  }
  
