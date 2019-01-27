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


  popElement.addEventListener('click', function(e){
    if(postElement.style.display){
      postElement.style.display = 'block';
    }else{
      postElement.style.display = 'none';
    }
    document.getElementById('cell').value = this.id;
  })
