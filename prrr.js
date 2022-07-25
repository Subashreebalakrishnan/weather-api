
async function popu()
{
// console.log()
var cityName = document.getElementById('cityName').value 
let data1 = await fetch('https://restcountries.com/v3.1/name/'+cityName)
let resdata = await data1.json()

console.log(resdata[0])
population = resdata[0]['population']
flag = resdata[0]["flags"]["png"]
console.log(flag)
region = resdata[0]["region"]
Nativename = resdata[0]["name"]["common"]

document.getElementById("header").innerText = 'Country Name: '+cityName

document.getElementById("imagee").src = flag
document.getElementById("pop").innerHTML = 'Population: '+population
document.getElementById("reg").innerText = 'Region: '+region
document.getElementById("nativeName").innerText = 'nativeName: '+Nativename



}

 async function getWeatherData()
{
    var cityName = document.getElementById('cityName').value
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=32e13efada2a4677d8fccf39e425b120`)
    let res = await data.json()
     console.log(res)
   
    var weatherContainer = document.getElementById('weatherContainer')
weatherContainer.innerHTML=`<div class="row g-0">
 <div class="col-md-4">
  <img src="https://media.istockphoto.com/vectors/vectot-weather-widget-for-smartphone-vector-id475696742?k=6&m=475696742&s=612x612&w=0&h=UFFoG4LnltIDFv3PSvGAQPV8CPHpoqTkZsgs8QDas0Q=" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title"><h2>Weather Data - ${cityName}</h2></h5>
    <p class="card-text"><small class="text-muted"><h3>Temperature:${res.main.temp}</h3></small></p>
    <p class="card-text"><small class="text-muted"><h5>Weatherid:${res.weather[0].id}</h5></small></p>
    <p class="card-text"><small class="text-muted"><h5>Humidity:${res.main.humidity}</h5></small></p>
    
    
  </div>
</div>
</div>` 

}
