$(function () {
    // call the ceader element 
    let header = document.querySelector("header");
    // but the height for the header 
    header.style.height = window.innerHeight + "px";
    $(".navbar .nav-link").click(function (e) {
        e.preventDefault();
        if ($(this).data("scroll") === "home") {
            $("body, html").animate({
            scrollTop: 0,
        }, 500);
        }
        $("body, html").animate({
            scrollTop: $($(this).data("scroll")).offset().top,
        }, 500);
    });
    // change active link click
    $(".list-click").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().find(".list-click").removeClass("active");
        $(this).addClass("active");
        $($(this).data("slide")).siblings().removeClass("active");
        $($(this).data("slide")).addClass("active");
    });
});

// ******** add class fixed top to navabr ***************
window.onscroll = () => {
    if (window.scrollY > 200) {
        document.querySelector(".navigation").classList.add("fixed-top");
    } else {
        document.querySelector(".navigation").classList.remove("fixed-top");
    }
}
//************* *********************************

//  **************** counter comming soon *********************
let dateLast = new Date("Jan 5, 2023 12:0:0").getTime(),
    dayVal = document.querySelector(".comming-soon .counter .days .value"),
    hourVal = document.querySelector(".comming-soon .counter .hours .value"),
    minuteVal = document.querySelector(".comming-soon .counter .minutes .value"),
    secondVal = document.querySelector(".comming-soon .counter .seconds .value");

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = dateLast - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minute = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
        second = Math.floor(distance % (1000 * 60) / 1000);
    dayVal.innerHTML = day;
    hourVal.innerHTML = hour;
    minuteVal.innerHTML = minute;
    secondVal.innerHTML = second;
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);

// ****************  *******************************
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})


