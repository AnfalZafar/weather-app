function add(){
var input = document.getElementById("id").value;
var key = "affe7e4a03ae44f798ec1437501d0110";
var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`

fetch(url).then
(p => p.json()).then
(get => {

    var temp = Math.round((get.main.temp) - 273);
    var ico = get.weather[0].icon;
    var descript = get.weather[0].description;
    var homi = get.main.humidity;
    var icon = get.weather[0].icon;
    document.getElementById("temp").innerHTML = temp + "℃";
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${ico}.png`;
    document.getElementById("dest").innerHTML = descript ;
    document.getElementById("countrey").innerHTML = input;
    document.getElementById("homi").innerHTML = homi + "%";
    document.getElementById("clo").src = `https://openweathermap.org/img/wn/${icon}.png`;
})
 .catch(error => console.error(error))

}