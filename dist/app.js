const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.75, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0");
tl.fromTo(".small-text", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const form = document.querySelector('#form');
const error = document.querySelector('#error');

const card = document.querySelectorAll(".job");
const container = document.querySelectorAll(".card-effect")
const cardTitle = document.querySelectorAll(".job_title");
const dots = document.querySelectorAll(".fluid");


form.addEventListener('submit', (e) => {
    
    let messages = []
    if(name.value === '' || name.value == null)
    {
        messages.push('wpisz ładnie imię')
    }
    
     

    if(messages.length > 0)
    { e.preventDefault();
       error.innerText = messages.join (",")
    }
})

//Card moving Event



container.forEach(job => {
    job.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    dots.forEach(dot => dot.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
})
  });

  //Animate In
container.forEach(job => {
    job.addEventListener("mouseenter", (e) => {
    card.forEach(cards => cards.style.transition = "none");
    dots.forEach(dot => dot.style.transform = " rotateZ(45deg)");
 
  })
});

  //Animate Out
container.forEach(job => {
    job.addEventListener("mouseleave", (e) => {
    card.forEach(cards => cards.style.transition = "all 0.5s ease");
    dots.forEach(dot => dot.style.transform = `rotateY(0deg) rotateX(0deg)`);
})

});


// back to top handler

const backTotop = document.querySelector("#back_top");
const landing = document.querySelector(".backdrop")

landing.addEventListener("mouseover", (e) => {
  backTotop.style.display = "none";
})

landing.addEventListener("mouseleave", (e) => {
  backTotop.style.display = "block";
})
