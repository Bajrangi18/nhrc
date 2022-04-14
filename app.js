var txt = 'NEW HORIZON ROCKETRY CLUB';
const navComp = document.getElementById('navbarMainLinks');
const navName  = document.getElementById('nhrcName');
const astroGuy = document.getElementById('astroGuy');
let rocketImg = document.getElementById('rocketImg');
let satImg = document.getElementById('satImg');
let droneImg = document.getElementById('droneImg');
let rcImg = document.getElementById('rcImg');
var i = 0;

window.onload = (event) => {
navComp.style.right = "2vw";
navName.style.padding = "0vw 0vw 0vw 28vw";
typeWriter();
document.getElementById('quote').style.opacity="1";
};

window.addEventListener("scroll", reveal);

function typeWriter() {
  if (i < txt.length) {
    navName.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 55);
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


rocketImg.addEventListener("mouseover", function( event ) {
          rocketImg.style.transform = "scale(1.3,1.3)";
          document.getElementById('aboutPro').style.display = "block";
          document.getElementById('aboutPro').style.opacity = "1";
          document.getElementById('aboutPro').innerHTML="A model rocket is a normal rocket by every definition, but usually discerned by the size and scale of the rocket. They are typically propelled by a solid black powder or composite motor, and recovered using parachute systems. <br> A rocket typically looks much like the one in the image below. A tube with a pointed nose, fins and a hole on the bottom end where the propellant goes. The propellant is often called a motor or engine as well, and all three terms are used interchangably. <br> While similar in concept, a Model Rocket has a few key differences to distinguish it from a Real Rocket";
          } , false);
rocketImg.addEventListener("mouseout", function( event ) {
          document.getElementById('aboutPro').style.opacity = "0";
          document.getElementById('aboutPro').style.display = "none";
          rocketImg.style.transform = "scale(1,1)";
          } , false);

satImg.addEventListener("mouseover", function( event ) {
        satImg.style.transform = "scale(1.3,1.3)";
        document.getElementById('aboutPro').style.display = "block";
        document.getElementById('aboutPro').style.opacity = "1";
        document.getElementById('aboutPro').innerHTML="Satellites vary in size. Some cube satellites are as small as 10 cm. Some communication satellites are about 7 m long and have solar panels that extend another 50 m. The largest artificial satellite is the International Space Station (ISS). The main part of this is as big as a large five-bedroom house, but including solar panels, it is as large as a rugby field.";
        } , false);
satImg.addEventListener("mouseout", function( event ) {
        document.getElementById('aboutPro').style.opacity = "0";
        document.getElementById('aboutPro').style.display = "none";
        satImg.style.transform = "scale(1,1)";
        } , false);

droneImg.addEventListener("mouseover", function( event ) {
        droneImg.style.transform = "scale(1.3,1.3)";
        document.getElementById('aboutPro').style.display = "block";
        document.getElementById('aboutPro').style.opacity = "1";
        document.getElementById('aboutPro').innerHTML="Although originally built for military purposes, drones have seen rapid growth and advancements and made a break to consumer electronics. Their original use was as weapons, in the form of remotely-guided aerial missile deployers. However, today, drones have found a wide range of applications for civilian use, especially in the form of small quadcopters and octocopters. <br> Today, drones are used for a wide range of functions, including monitoring climate change, delivering goods, aiding in search and resuce operations, and in filming and photography.";
        } , false);
droneImg.addEventListener("mouseout", function( event ) {
        document.getElementById('aboutPro').style.opacity = "0";
        document.getElementById('aboutPro').style.display = "none";
        droneImg.style.transform = "scale(1,1)";
        } , false);

rcImg.addEventListener("mouseover", function( event ) {
        rcImg.style.transform = "scale(1.3,1.3)";
        document.getElementById('aboutPro').style.display = "block";
        document.getElementById('aboutPro').style.opacity = "1";
        document.getElementById('aboutPro').innerHTML="A radio-controlled aircraft (often called RC aircraft or RC plane) is a small flying machine that is controlled remotely by an operator on the ground using a hand-held radio transmitter. The transmitter communicates with a receiver within the craft that sends signals to servomechanisms (servos) which move the control surfaces based on the position of joysticks on the transmitter. The control surfaces, in turn, affect the orientation of the plane. <br> Flying RC aircraft as a hobby grew substantially from the 2000s with improvements in the cost, weight, performance and capabilities of motors, batteries and electronics. A wide variety of models and styles is available. ";
        } , false);
rcImg.addEventListener("mouseout", function( event ) {
        document.getElementById('aboutPro').style.opacity = "0";
        document.getElementById('aboutPro').style.display = "none";
        rcImg.style.transform = "scale(1,1)";
        } , false);
