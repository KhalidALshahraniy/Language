let arabic =document.getElementById("arabic");
let english =document.getElementById("english");
let title =document.getElementById("title");
let welcome =document.getElementById("welcome-text");
let about =document.getElementById("about");
let aboutText =document.getElementById("about-text");
let contact =document.getElementById("contact");







arabic.onclick=()=>{
    setLanugage("arabic");
localStorage.setItem("Lang","arabic");
};


english.onclick=()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload=()=>{
    setLanugage(localStorage.getItem("Lang"));
};



function setLanugage(getLanuage){
if(getLanuage==="arabic"){
title.innerHTML="المبرمج خالد";
welcome.innerHTML="مرحبا بكم في صفحة مبرمج خالد";
about.innerHTML="حولنا";
aboutText.innerHTML="انا مهندس حاسب ومطور";
contact.innerHTML="اتصل بنا";
}
else if (getLanuage ==="english"){
    title.innerHTML="Coder Khalid";
    welcome.innerHTML="Welcom to website of coder khalid";
about.innerHTML="About Us";
aboutText.innerHTML="I am computer Enigneer and Developer";
contact.innerHTML=" Contact Us";
}
}
