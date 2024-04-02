// // firsr assigment
const uppercase=function (inputString)
{
  input=new String(inputString);
  let first_array = inputString.split(' ');

//  console.log(first_array[0]);
//  console.log(first_array[1]);

  let second_array = [];
  for(let i = 0; i < first_array.length; i++){
    second_array.push(first_array[i][0].toUpperCase()+ first_array[i].slice(1));

//   console.log(first_array[i]);
  }

  return second_array.join(' ');
}

//******************************** */

// //second assigmrnt//
// const longestWord =function (inputString)
// {
//   input=new String(inputString);
//   let first_array = inputString.split(' ');
//   let result = first_array[0];


//   for(let i = 1 ; i < first_array.length ; i++)
//   {
//     if(result.length < first_array[i].length)
//     {
//     result = first_array[i];
//     } 
    
//     //console.log(first_array[i]);
//   }
  

//   return result;
  
// }

// assigemt 3 ///

const alphabetic_ordered = function (input)
{
    let word = input.split(" ");
//    console.log(word);
    let ordered_Word = '' ;
    for(let i = 0 ; i < word.length ; i++){
       let alplabetic = word[i].split("");
    //   console.log(alplabetic);
       ordered_Word =alplabetic.sort();
    }
    return ordered_Word ;
}


//// ASSIGMENT 4///

const myMonth = function(input){
    let date = new Date(input);

    console.log(date);

    let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let currentMonth = date.getMonth();
    return months[currentMonth];
} 



/// ASSIGMENT 5 ////

const randomArray = function () {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let random;
        do {
            random = Math.ceil(Math.random() * 10);
        }while (duplication(random, array));
        array.push(random);
    }
    return array;
}

function duplication(random, array) {
    for (let i = 0; i < array.length; i++) {
        if (random === array[i]) {
            return true;
        }
    }
    return false;
}