

// function calcAverage(){
//     let sum =  0 ;
//     for(let i = 0 ; i < arguments.length ; i++){
//         sum+=arguments[i];
//      }
//      return sum / arguments.length;
// }


// function checkWinner (firstTeam,secondTeam){

//     if(firstTeam>secondTeam){
//         console.log("firstTeam is a winner");
//     }
//     else if (firstTeam<secondTeam){
//         console.log("fsecondTeam is a winner");
//     }

   
// }

// let userName=prompt();

// function sum(){

//     let sum=0 , numbers;

//     for(let i=0 ; i<arguments.length ; i++)
//     {
//         sum+=arguments[i]
//     }


// }

// function sum(){
    
//     let sum = 0 , num;
//     for(let i=0 ; i<2 ; i++){

//         do{
//            num=Number(prompt(`Enter the ${i+1} number `));
//         }while(isNaN(num));

//         sum+=num;

//     }
// return sum;
// }

// function sumMulti(){
    
//     let sum = 0 , num , countNum;

//     do{
//         countNum=Number(prompt("how many values to sum"));
//     }while(isNaN(countNum));

    
//     for(let i=0 ; i<countNum ; i++){

//         do{
//            num=Number(prompt(`Enter the ${i+1} number `));
//         }while(isNaN(num));

//         sum+=num;

//     }
// return sum;
// }



// function getPrometedNum   (massage){
//     let number;
//     do{
//         number=prompt(massage);
//     }while(isNaN(number)|| number==''|| number==null);
//     return;
// }

//  function sum(count=getPrometedNum("enter values")){
//     let value;
//     let sum=0;
//     for(let i =0 ; i<count ; i++ ){
//         value= Number(getPrometedNum('enter number'+(i+1)))
//         sum+= value;
//     }
//     console.log(sum);
// }

Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });


