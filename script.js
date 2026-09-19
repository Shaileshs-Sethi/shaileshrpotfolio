console.log("Portfolio Loaded");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-150;

        if(scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});

// ===== Typing Animation =====

const text = "Frontend Web Developer";
let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

typing();


// ===== Scroll Reveal =====

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ===== Dark / Light =====

const btn = document.getElementById("theme-btn");

btn.onclick = ()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        btn.innerHTML="☀️";

    }else{

        btn.innerHTML="🌙";

    }

};