// //1- Using document object method on the lecture’s HTML page 
// document.images
// document.querySelectorAll("img")
// document.querySelector("img")
// document.getElementsByTagName("img")
// document.getElementById('select');
// document.getElementsByTagName("option")[0].innerText="sina"
// document.querySelectorAll(".bPink td")
// document.querySelectorAll(".fontBlue.BGrey")


///////////////////// task2

function createTrackList(trackId, tableElement) {
    let trackList = document.createElement('ul');
    trackList.id = trackId;
    tableElement.appendChild(trackList);
    
}


function addCourse(courseName, listTrackElement) {
    let course_Item = document.createElement('li');
        course_Item.innerText = (courseName);

    listTrackElement.appendChild(course_Item);
}


 function moveCourse  (courseName, toTargetTrack) {
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].innerText === courseName) {
        toTargetTrack.appendChild(elements[i]);
      }
    }
  }

  function remove(courseName,fromTrackElement) {
    let list = fromTrackElement.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent == courseName) {
            fromTrackElement.removeChild(list[i]);
            break;
        }
    
    }
}
/////////////////////////// task 3

// function changeImages(){
 
//   let image = document.querySelector('img.fake');
//       if (image.src.includes('images/1.jpg')) {
//           image.src = 'images/2.jpg';
//       } else {
//         image.src = 'images/1.jpg';
//     }
  
// }setInterval(changeImages,1000);


let i =0 ;

function changeImages(){
    let imageSources = ['images/1.jpg' , 'images/2.jpg'];
    let image = document.querySelector('img.fake');
   //let i = 0;+ 
    console.log(i); // for testing
    if (image){
        image.src = imageSources[i];
        i =(i + 1) %  imageSources.length;
        console.log(i);
        setTimeout(changeImages , 1000);
    }
}
setTimeout(changeImages , 1000);
//setInterval(changeImages, 1000);