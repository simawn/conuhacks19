var tdElements = document.getElementsByTagName('td');
var formElement = document.getElementById('form');
var popElement = document.getElementById('pop');

for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].setAttribute('id', i);
}

for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener('click', function(e){
    if(formElement.style.display){
      formElement.style.display = 'block';
    }else{
      formElement.style.display = 'none';
    }
    document.getElementById('cell').value = this.id;
  })
}


for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener('click', function(e){
    if(popElement.style.display){
      popElement.style.display = 'block';
    }else{
      popElement.style.display = 'none';
    }
    
    //console.log(clinicSlotsTest);
    clinicSlotsTest.forEach((cid) => {
      if(cid.cellId == this.id){
        popElement.innerHTML = "<strong>First name : </strong>";
        popElement.innerHTML += cid.firstName;
        popElement.innerHTML += '</br></br>';
        popElement.innerHTML += "<strong>Last name : </strong>";
        popElement.innerHTML += cid.lastName;
        popElement.innerHTML += '</br></br>';
        popElement.innerHTML += "<strong>Symptoms : </strong>"
        popElement.innerHTML += cid.symptoms;
      }
    });
  })
}