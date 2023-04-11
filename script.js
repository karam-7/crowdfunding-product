
const selectDiv = document.querySelector('.model-div');
const project = document.querySelector('#project')
const btn1 = document.querySelector('.btn1');
const btn3 = document.querySelector('.btn3');
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');
const radio3 = document.querySelector('.radio3');
const money1 = document.querySelector('.money1');
const money2 = document.querySelector('.money2');
const money3 = document.querySelector('.money3');
const plege1 = document.querySelector('.plege1');
const plege2 = document.querySelector('.plege2');
const plege3 = document.querySelector('.plege3');
const btn2 = document.querySelector('.btn2');
const moneyBtn = document.querySelector('.moneyBtn');
const moneyBtn1 = document.querySelector('.moneyBtn1');
const thankDiv= document.querySelector('.thank-div')
const cross = document.querySelector('.cross');
const thanksBtn = document.querySelector('.thank-btn');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const navbar = document.querySelector('.bar-ul');
 
const twentyInput = document.querySelector('.twenty');
const seventyInput = document.querySelector('.seventy');
const amountDisplay = document.querySelector('#amount');
const backerDisplay = document.querySelector('#backer');
const fiveDisplay = document.querySelector('.five');
const sevenDisplay = document.querySelector('.seven');
 
btn1.addEventListener('click', function() {
  selectDiv.style.display = 'block';
  project.style.display = 'none';
});
 
btn3.addEventListener('click', function() {
  selectDiv.style.display = 'block';
  project.style.display = 'none';
});

 
radio1.addEventListener('click', function() {
  money1.style.display = 'block';
  plege1.style.border = '2px solid hsl(176, 72%, 28%)';
  money2.style.display = "none";
  plege2.style.border = "none";
  money3.style.display = "none";
  plege3.style.border = "none";
});
 
radio2.addEventListener('click', function() {
  money2.style.display = 'block';
  plege2.style.border = '2px solid hsl(176, 72%, 28%)';
  money1.style.display = "none";
  plege1.style.border = "none";
  money3.style.display = "none";
  plege3.style.border = "none";
});
 
radio3.addEventListener('click', function() {
  money3.style.display = 'block';
  plege3.style.border = '2px solid hsl(176, 72%, 28%)';
  money1.style.display = "none";
  plege1.style.border = "none";
  money2.style.display = "none";
  plege2.style.border = "none";
});
 
btn2.addEventListener('click', function() {
  selectDiv.style.display = 'none';
  thankDiv.style.display = 'block';
});
 
cross.addEventListener('click', function() {
  selectDiv.style.display = 'none';
  project.style.display = 'block';
});
 
thanksBtn.addEventListener('click', function() {
  thankDiv.style.display = 'none';
  project.style.display = 'block';
});
 
// Set the minimum amounts
const minAmountTwenty = 25;
const minAmountSeventy = 75;
 
// Set the initial amounts and backers
let amount = 89914;
let backer = 5007;
let five = 101;
let seven = 64;
 
// Function to update the displays
function updateDisplays() {
  amountDisplay.textContent = '$' + amount.toLocaleString();
  backerDisplay.textContent = backer.toLocaleString();
  fiveDisplay.innerHTML = `${five} <sup class="h3-sup">left</sup>`;
  sevenDisplay.innerHTML = `${seven} <sup class="h3-sup">left</sup>`;

}
 
// Add event listener to moneyBtn
// Add event listener to moneyBtn
moneyBtn.addEventListener('click', function() {
  const inputAmount = parseInt(twentyInput.value);
  if (inputAmount >= minAmountTwenty) {
    amount += inputAmount;
    backer += 1;
    five -= 1;
    updateDisplays();
    if (five === 0 && seven === 0) {
      moneyBtn.classList.add('inactive');
      btn1.classList.add('inactive');
      btn3.classList.add('inactive');
      plege2.classList.add('out');
      plege3.classList.add('out');
    }
    selectDiv.style.display = 'none';
    thankDiv.style.display = 'block';
    const remainingItems = parseInt(selectDiv.querySelector('.five').textContent) - 1;
    selectDiv.querySelector('.five').innerHTML = `${remainingItems} <sup class="h3-sup">left</sup>`;
    twentyInput.value = '';
  } else {
    alert('Please enter money more than minimum amount');
  }
});
 
// Add event listener to moneyBtn1
moneyBtn1.addEventListener('click', function() {
  const inputAmount = parseInt(seventyInput.value);
  if (inputAmount >= minAmountSeventy) {
    amount += inputAmount;
    backer += 1;
    seven -= 1;
    updateDisplays();
    if (five === 0 && seven === 0) {
      moneyBtn1.classList.add('inactive');
      btn1.classList.add('inactive');
      btn3.classList.add('inactive');
      plege2.classList.add('out');
      plege3.classList.add('out');
    }
    selectDiv.style.display = 'none';
    thankDiv.style.display = 'block';
    const remainingItems = parseInt(selectDiv.querySelector('.seven').textContent) - 1;
    selectDiv.querySelector('.seven').innerHTML = `${remainingItems} <sup class="h3-sup">left</sup>`;
    seventyInput.value = '';
  } else {
    alert('Please enter money more than minimum amount');
  }
});
 
// Update the displays initially
updateDisplays();
 


document.getElementsByClassName("book")[0].addEventListener("click", function () {
    (this.classList.contains("active-bookmark")) ? this.classList.remove("active-bookmark"): this.classList.add("active-bookmark");
});

openBtn.addEventListener('click', () => {
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  navbar.style.display = 'block';
});
 
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  setTimeout(() => {
    navbar.style.display = 'none';
    openBtn.style.display = 'block';
  });
});