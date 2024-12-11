let heart = document.querySelectorAll("#heart");
    heart.forEach((item) => {
     item.addEventListener("click" , function() {
        item.style.color = "red";
        console.log(this);
        confirm("item is added in your wishlist")
     })
    });

// traditional-dress
let card = document.querySelectorAll("#card");
    card.forEach( (cart) => {
        cart.addEventListener("click" , function() {
            cart.style.background = "green"
            console.log(this);
            // cart.innerText = "ADD TO CART";
            confirm("item is added in your cart")
        })
    });



//western-slide
// let next = document.querySelector('#next');
// let prev = document.querySelector('#prev');
// let imgslider = document.querySelectorAll(".img");
// let slider = document.querySelector(".western-slide")

// next.onclick = function {
//     nextimg('next');
// }
// let timeRunning = 1000;
// let runtimeOut;
// function nextimg(type){
//     let imagemove = document.querySelector(".img >img");

//     if(type === 'next'){
//         imgslider ++;
//     }

//     clearTimeout(runtimeOut)
//     runtimeOut.setInterval(() => {
//         slider.classList.remove('next');
//         carouselimg.classList.remove('prev');
//     }, timeRunning);
// }

ScrollReveal({
    reset: true,
    distance: '25px',
    duration: 2500,
    delay: 400
});
//western slide buy now
let buynow = document.querySelectorAll(".buynow");
    buynow.forEach( (item) => {
        item.addEventListener("click" , function() {
            item.style.background = "orange";
            console.log(this);
            // cart.innerText = "ADD TO CART";
            alert("item is bought by you");
        })
    });


//dress 
ScrollReveal().reveal('.top-deals-container , #indo-western' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #western' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #lehenga' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('.top-deals-container , #salwar' , {delay: 500, origin: 'right'});

//occasion
ScrollReveal().reveal('#occasion1' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#occasion2' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#occasion3' , {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('#occasion4' , {delay: 500, origin: 'right'});

//traditional dress
ScrollReveal().reveal('#women-gown' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#Anarkali-gown' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#lehenga-choli' , {delay: 500, origin: 'right'});
ScrollReveal().reveal('#peacock' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#sharara-suit' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#women-saree' , {delay: 500, origin: 'right'});

//bridal lehenga
ScrollReveal().reveal('#b-img1' , {delay: 500, origin: 'left'});
ScrollReveal().reveal('#b-img2' , {delay: 500, origin: 'top'});
ScrollReveal().reveal('#b-img3' , {delay: 500, origin: 'right'});


//bridal lehenga 

