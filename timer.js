const starttbtn = document.querySelector('#startt');
const resettbtn = document.querySelector('#resett');

let m_input = document.getElementById('m_timer').value;
let s_input = document.getElementById('s_timer').value;

let timeAll = Number(m_input)*60 + Number(s_input);

let timerFunction = function(){
    
    let minute = Math.floor(timeAll / 60);
    let second = timeAll % 60;
    timeAll -=1;


    if(minute<10) minute = '0'+ minute;
    if(second<10) second = '0'+ second;
    let timeshow = minute + ':' + second;

    document.querySelector('#w_timer h1').textContent = timeshow;
}

let b;
starttbtn.onclick = function(){
    if (starttbtn.textContent === 'start'){
        starttbtn.textContent = 'stop';
        b = setInterval(timerFunction, 1000);
    }else{
        starttbtn.textContent = 'start';
        clearInterval(b);
    }
}

resettbtn.onclick = function(){
    document.querySelector('#w_timer h1').textContent = '00:00';
}