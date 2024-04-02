console.log("Extrenal file");


/**************** ES5  Types, values and variables **********/
   
/**   ES5 varaibles Declarations
 *    -define varibales with var keyword  (Global variable through entire script and the following scripts)
 *    -without var keyword is not recommended 
 */

//------------- number
//OOP language like c++   int x=3;
// alet(); 
var numberFloat=2.2;     //Global Context


numberInt=3;            // forbidden
// alet();
console.log("number Int ",numberInt);

// typeof numberFloat;   number

//------------- String

var instructorName="Eman";
var studentName='Ahmed';
var studentEmail="ahmed@gmail.com"

console.log("instrcutorName",instructorName,"studentName ", studentName);

// alert(" Student Info , Name:  "+studentName+" Email: "+studentEmail);

//******************* ES6 backtick   multiline and template literals */

var studentHtml=`<table>\
    <tr>
            <td>${studentName}</td>
            <td>${studentEmail}</td>
     </tr>
</table>`;


// Dynamic typing
studentName=9;
console.log(studentName, typeof studentName);


/****************** boolean */

var flag=true;

if(flag)
{

}

/***********************undefiend   (empty) */

var  courseName;    // define varibale

typeof courseName// undefined;

// studentGrade;       // calling for a varible

//******************** null OOP    (empty)*/

// console.log(object,"******************");
var object=null;

typeof object;




/**************
 * var Problems
 1- reDefined variable   (devloper x and y)
 2- hoisting	
 3- none block variable expect functions	
------------------------	Hoisting 
before execution , code is scanned  for varibales declarations


/*  ES6 variables declarations (block scoping)
    let , const and var -------------------------

*/

for(let i=0;i<3;i++)
{
    console.log(i);
}

console.log(i,"outside");

// console.log(count);

// let count=0;
// count++;
// count="";
// console.log(count);


const birthYear="9999";











