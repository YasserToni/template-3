let otherMenu = document.getElementById("other");
console.log(otherMenu)
var megaMenu = document.getElementById("mega-menue");
console.log(megaMenu)
otherMenu.onclick = function () {
    megaMenu.style.zIndex = "100";
    megaMenu.style.opacity = "1";
    megaMenu.style.top = "calc(100% + 1px)";;
}
document.onkeyup = function (e) {
    if (e.key === "Escape") {
    megaMenu.style.zIndex = "-1";
    megaMenu.style.opacity = "0";;
    megaMenu.style.top = "calc(100% + 50px)";;
    }
}
/////////////////////////////////////////////////////////////
let ourSkills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills span')
/////////////////////////////////////////////////////////////
let stats = document.querySelector(".stats")
let box = document.querySelector(".stats .box")
let number = document.querySelectorAll(".stats .box .number")
let started = false // Function Started ? NO


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 5000 / goal)
}

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    if (!started) {
            if (window.scrollY >= stats.offsetTop -150) {
                number.forEach((num) => {
                startCount(num);
            })
    }
    }
    started = true;
}
//////////////////////////////////////////////////////////
// Counter
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let diff = countDownDate - dateNow;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.querySelector(".days").innerHTML = days
    if (days <= 99) {
        
        document.querySelector(".days").innerHTML =`0${days}`;
    } else if (days <= 9) {
        document.querySelector(".days").innerHTML =`00${days}`;
    }

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.querySelector(".hours").innerHTML = hours <= 9 ? `0${hours}` : hours;
    
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.querySelector(".minutes").innerHTML = minutes <= 9 ? `0${minutes}` : minutes;
    
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.querySelector(".seconds").innerHTML = seconds <= 9 ? `0${seconds}` : seconds;

    if (diff < 0) {
        clearInterval(counter);
    }

},1000)
