function toggleMenu(){
let menu=document.getElementById("nav-menu");
menu.classList.toggle("active");
}

function scrollToSection(){
document.getElementById("services").scrollIntoView({
behavior:"smooth"
});
}

function submitForm(e){
e.preventDefault();
document.getElementById("msg").innerText =
"Thank you! Your message has been received.";
}