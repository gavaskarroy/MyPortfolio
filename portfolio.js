// navbar code
let navh1=document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navoptions = document.querySelector(".options");
let navbtn = document.querySelector(".nav-btn");

navh1.addEventListener("click",function(){
    body.style.backgroundColor="black";
    navh1.style.display="none";
    navoptions.style.display="none";
    navbtn.style.display="none";
    body.innerHTML=`<h1>PORTFOLIO</h1>`;
    body.style.color="palegreen";
    body.style.display="flex";
    body.style.alignItems="center";
    body.style.justifyContent="center";
    body.style.fontSize="80px"
})
// herosection part

// about me right list js

let aboutRightSkills = document.querySelector(".about-right-skills");
let aboutRightList1 = document.querySelector(".about-right-list-1");

aboutRightSkills.addEventListener("click",function(){
    aboutRightList1.style.display="block";
})

let aboutRighteducation = document.querySelector(".about-right-education");
let aboutRightlist2 = document.querySelector(".about-right-list-2");

aboutRightSkills.addEventListener("click",function(){
    aboutRightList2.style.display="block";
})


let aboutRightList = document.querySelector(".about-right-list");
let aboutRightskills =document.querySelector(".about-right-skills");
let aboutRightEducation = document.querySelector(".about-right-education");

let aboutRighttist1 = document.querySelector(".about-right-list-1")
let aboutRightList2 = document.querySelector(".about-right-list-2")

aboutRightskills.addEventListener("click",function(){
    aboutRightList2.style.display="block";
     aboutRightList2.style.display="none";
})

aboutRightEducation.addEventListener("click",function(){
    aboutRightList2.style.display="block";
     aboutRightList1.style.display="none";
})

// services

let servicesBox1 = document.querySelector(".services-box-1");
let servicesBox2 = document.querySelector(".services-box-2") ;
let servicesBox3 = document.querySelector(".services-box-3") ; 
let learn = document.querySelectorAll(".learn");

servicesBox1.addEventListener("mouseover",function(){
    servicesBox1.style.backgroundColor="rgb(94, 184, 11)";
    servicesBox1.style.color="black";
})
servicesBox1.addEventListener("mouseout",function(){
    servicesBox1.style.backgroundColor="black";
    servicesBox1.style.color="palegreen";
}) 

servicesBox2.addEventListener("mouseover",function(){
    servicesBox2.style.backgroundColor="rgb(94, 184, 11)";
    servicesBox2.style.color="black";
})
servicesBox2.addEventListener("mouseout",function(){
    servicesBox2.style.backgroundColor="black";
    servicesBox2.style.color="palegreen";
}) 

servicesBox3.addEventListener("mouseover",function(){
    servicesBox3.style.backgroundColor="rgb(94, 184, 11)";
    servicesBox3.style.color="black";
})
servicesBox3.addEventListener("mouseout",function(){
    servicesBox3.style.backgroundColor="black";
    servicesBox3.style.color="palegreen";
}) 

learn.forEach(function(learn){
    learn.addEventListener("click",function(){
        alert("All details coming soon.....")
    })
})
document.querySelector('a[href="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scroLLInview({
            behaviour:"smooth"
        })
    })
})