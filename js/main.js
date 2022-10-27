let calc = document.querySelector(".cointoss");
let curr = document.querySelector(".stopwatch");
let temp = document.querySelector(".tempcon");
let like1 = document.querySelector('.like1');
let like2 = document.querySelector('.like2');
let like3 = document.querySelector('.like3');

// Coin Toss clicked
function clickCal() {
    curr.style.display = "none";
    temp.style.display = "none";

    like2.classList.remove('active');
    like3.classList.remove('active');

  if (calc.style.display == "none") {
    calc.style.display = 'block';
    like1.classList.add('active');
  } else {
      calc.style.display = 'block';
      like1.classList.add("active");
  }
};

// Stopwatch Clicked
function clickCurr() {
    calc.style.display = "none";
    temp.style.display = "none";

    like1.classList.remove('active');
    like3.classList.remove('active');

 if (curr.style.display == "none") {
     curr.style.display = "block";
     like2.classList.add("active");
   } else {
       curr.style.display = 'block';
       like2.classList.add("active");
   }
};

// Temperature Clicked
function clickTemp() {
    curr.style.display = "none";
    calc.style.display = "none";

    like1.classList.remove('active');
    like2.classList.remove('active');

if (temp.style.display == "none") {
     temp.style.display = "block";
     like3.classList.add("active");
  } else {
      temp.style.display = 'block';
      like3.classList.add("active");
  }
};

// Stopwatch

let mins = document.querySelector('.mins');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');

let min = 00;
let seco = 00;
let mili = 00;

let timer = false;

// Start pressed
function start() {
  if(timer == false) {
    timer = true;
  stopwatch();
  }
};

// Stop pressed
function stop() {
  timer = false;
};

// Reset pressed
function reset() {
  timer = false;

  min = 00;
  seco =00;
  mili = 00;

  mins.innerHTML = '00';
  sec.innerHTML = '00';
  milisec.innerHTML = '00';
};

function stopwatch() {
  if(timer == true) {
    mili = mili + 1;

    if(mili == 100) {
      seco = seco + 1;
      mili = 00;
    }
    if(seco == 60) {
      min = min +1;
      seco = 00;
      mili = 00;
    }
    
  let minString = min;
  let secoString = seco;
  let miliString = mili;

  if(min < 10){
    minString = '0' + minString;
  }
  if(seco < 10){
    secoString = '0' + secoString;
  }
  if(mili < 10){
    miliString = '0' + miliString;
  }

  milisec.innerHTML = miliString;
  sec.innerHTML = secoString;
  mins.innerHTML = minString;
  setTimeout('stopwatch()', 10);
  }
};

// Temperature Converter

let kelhead = document.querySelector('.kelvin');
let fahhead = document.querySelector('.fahrenheit');

let celtokel = document.querySelector('.celtokel');
let celtofah = document.querySelector('.celtofah');

// Kelvin clicked
function kelcli() {
  celtofah.style.display = 'none';
  fahhead.classList.remove('activebtn');

  if(celtokel.style.display == 'none'){
    celtokel.style.display = 'block';
    kelhead.classList.add('activebtn');
  } else {
    celtokel.style.display = 'block';
    kelhead.classList.add('activebtn');
  }
};

// Fahrenheit clicked
function fahcli() {
  celtokel.style.display = 'none';
  kelhead.classList.remove('activebtn');
  
  if(celtofah.style.display == 'none'){
    celtofah.style.display = 'block';
    fahhead.classList.add('activebtn');
  } else {
    celtofah.style.display = 'block';
    fahhead.classList.add('activebtn');
  }
};

// Calculation

let celinput = document.getElementById('celinput');
let celinput1 = document.getElementById('celinput1');
let kelinput = document.getElementById('kelinput');
let fahinput = document.getElementById('fahinput');

// C to F
celinput1.addEventListener('input', function() {
  let c = this.value;
  let f = (c * 9/5) + 32;

  if(!Number.isInteger(f)) {
    f = f.toFixed(5);
  }

  fahinput.value = f;
});

fahinput.addEventListener('input', function() {
  let f = this.value;
  let c = (f - 32) * 5/9;

 if(!Number.isInteger(c)) {
    c = c.toFixed(5);
  }
  
  celinput1.value = c;
});

// C to K
celinput.addEventListener('input', function() {
  let c = this.value;
  let k = Number(c) + 273.15;
  
  kelinput.value = k;
});

kelinput.addEventListener('input', function() {
  let k = this.value;
  let c = (k - 273.15);

  if(!Number.isInteger(c)) {
    c = c.toFixed(2);
  }
  
  celinput.value = c;
});

// Coin Toss

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if(i){
      setTimeout(function(){
          coin.style.animation = "spin-heads 3s forwards";
      }, 100);
  }
  else{
      setTimeout(function(){
          coin.style.animation = "spin-tails 3s forwards";
      }, 100);
  }
  disableButton();
});

function disableButton(){
  flipBtn.disabled = true;
  setTimeout(function(){
      flipBtn.disabled = false;
  },3000);
}
resetBtn.addEventListener("click",() => {
  coin.style.animation = "none";
});