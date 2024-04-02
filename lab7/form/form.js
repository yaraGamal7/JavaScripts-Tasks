
window.addEventListener("load", function () {
  let addButton = document.querySelector("input[value=Add]");
  let nameValue = document.querySelector("input[name=studentName]");
  let gradeValue = document.querySelector("input[name=studentGrade]");
  let studentTable = this.document.createElement("table");
  studentTable.id = "tableData";
  this.document.body.append(studentTable);
  capitalFirstChar(nameValue.value);


  
  addButton.onclick = function () {
    if (nameValue.value == "" || gradeValue.value == "") {
      alert("enter values in all Fieldes");
    }
    else if ((nameValue.value).length < 3||parseInt(nameValue.value)) {
      alert("you entered wrong name ")
    }
    else if (gradeValue.value < 0 || gradeValue.value > 100 || isNaN(gradeValue.value)) {
      alert("the grade must be number and between 0 and  100");
    }



    else {
      let checkUndefined = preventRepeatedName(nameValue.value);
      if (checkUndefined == undefined) { }

      else {
        let trElement = document.createElement("tr");
        studentTable.append(trElement);
        let tdElement = document.createElement("td");
        tdElement.innerText = checkUndefined;
        trElement.append(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerText = gradeValue.value;
        trElement.append(tdElement);
        trElement.classList.add(document.querySelector("input[type=radio]:checked").value);

        
      }
    }

  }
})

