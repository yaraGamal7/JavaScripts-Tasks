let Container=document.querySelector(".trackList");

//tracks//
createTrackList('OS',Container);
createTrackList('AI',Container);
createTrackList('PD',Container);
///// add courses to tracks ///

addCourse('OOP',OS);
addCourse('Node',OS);


addCourse('learning machine',AI);
addCourse('linear',AI);


addCourse('Data structure',PD);


///remove from tracks //

remove('learning machine',AI);

/////

// moveCourse('linear',OS);