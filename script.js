var css = document.getElementById("pick");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

random.addEventListener("click", function(){

	color1.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
	color2.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)

});
    
 console.log(color1);
 console.log(color2);
  
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setGradient);

