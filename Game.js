var squares = document.querySelectorAll('td');

document.getElementById("b").addEventListener("click", function () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
});

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}
var 'O'=plus
var 'X'=zero
if zero+zero+zero{
  var sayı+1
  window.alert(sayı+" skoruyla Oyun Bitti!");
}
if plus+plus+plus{
  var sayı+1
  window.alert(sayı+" skoruyla Oyun Bitti!");
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}
