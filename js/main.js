const startBtn= document.getElementById("start-btn");
const titleTxt=document.getElementById("title-txt");



startBtn.addEventListener('click',function() {
    titleTxt.textContent="javascript"
    startBtn.style.display = 'none'
})

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("timeout").innerHTML = "Hello-Javascript"
}
