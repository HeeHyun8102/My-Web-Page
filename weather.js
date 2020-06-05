const COORDS = "coords";

const APIkey = "745654b08210965c25eb10ee6593b9d8";

const weather = document.querySelector(".js-weather");



function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const name = json.name;
        console.log(temperature)
        console.log(name)
        weather.innerText = `오늘의 온도 : ${temperature}도(섭씨) and 장소 : ${name}`;
    });

}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handlesuccess(position){
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
}


function handleerror(){
    console.log('error');
}




function askforPosition(){
    navigator.geolocation.getCurrentPosition(handlesuccess, handleerror);
}






function loadedCoords(){
    const loadedcoords = localStorage.getItem(COORDS)
    console.log(loadedcoords)
    if(loadedcoords === null){
        askforPosition()
    }else{
        const parsecoords = JSON.parse(loadedcoords);
        getWeather(parsecoords.latitude, parsecoords.longitude);
    }
} //위도와 경도를 넣어서 온도와 장소를 가져오는 함수



function init(){
    loadedCoords()
}

init();