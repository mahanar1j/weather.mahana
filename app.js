// customColor js code//  

let section=document.querySelector('.sec');
let con=document.getElementById("mahana");
let button=document.querySelector('.btn')
let newColor;
button.addEventListener('click',(e)=>{
    e.preventDefault();
    newColor=document.querySelector('.newColorInput').value;
    con.style.backgroundColor=newColor
});


// Weather apps code

"use strict"
const getWeather =()=>{
const enterCity=document.getElementById('enterCity').value;
const apiKey='6271769b271f9f286efbe0b15c8cd202'

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&appid=${apiKey}&units=metric `
fetch(apiUrl)
.then(res=> res.json())
.then(data=> {
const WearInfo=document.getElementById('pushWeather')


const description=data.weather[0].description;
const temparature=data.main.temp;
const humidity =data.main.humidity;
const windSpeed=data.wind.speed;


WearInfo.innerHTML=`

<br><br><p> Description:&nbsp${description}</P><br>
<h2> Temperature:&nbsp${temparature}&#8451</h2><br>
<p> Humidity:&nbsp${humidity}%</P><br>
<p> Wind Speed:&nbsp${windSpeed}m/s</P>



`


})
.catch(error=>{
console.error('Jui Server ei name kono city khuje pacchena sorry',error);
document.getElementById('pushWeather').textContent='Mahana Server ei name kono city khuje pacchena sorry';
})


};


// infinityColor


"use strict"
window.onload=()=>{
main();
}
function main(){

// let customColor =document.getElementById('customColor').value;

const container=document.getElementById("mahana");
const infinityBtn=document.getElementById("infinity")
infinityBtn.addEventListener ("click",function(){
    const bgColor=genaratedRgbColor();
    container.style.backgroundColor=bgColor

});


};

function genaratedRgbColor(){
const red= Math.floor(Math.random()*255);
const green= Math.floor(Math.random()*255);
const blue= Math.floor(Math.random()*255);
return `rgb(${red},${green},${blue})`

}
const result =genaratedRgbColor()


// sound efect
const WeatherBtn=document.getElementById('getWeather');
const getWeatherAudio=document.getElementById('getWeatherAudio');
WeatherBtn.addEventListener('click',function(){
playAudio();
});
function playAudio(){
getWeatherAudio.play()
}














        
