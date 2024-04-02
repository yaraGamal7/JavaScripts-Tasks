
 window.onload = function(){
    
let blocks = document.querySelectorAll("div");

let copy= function (){
    let element = document.createElement("div");
    element.className= this.className;
    // console.log("this");
    // element.classList.add(`${this.className}`);
    this.removeEventListener('click' , copy);

    element.addEventListener('click', copy);
    document.body.appendChild(element);
}

 for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', copy);
}

}