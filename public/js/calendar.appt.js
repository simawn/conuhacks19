var tdElements = document.getElementsByTagName('td');
var formElement = document.getElementById('form');

var times = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00"
]

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