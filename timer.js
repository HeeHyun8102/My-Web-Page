

var temp;
const startbtn = document.querySelector('#startt');

startbtn.onclick = function(){
var minute = document.getElementById('m_timer').value;
temp = minute;

document.querySelector('#w_timer h1').textContent = temp;}
