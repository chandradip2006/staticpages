// alert('ok')
const Location=document.getElementById('location');
const time=document.getElementById('time');
const temp=document.getElementById('temp');
const condition=document.getElementById('condition');

const key="bf115f62d00b41d9927223900251407";
// const url=`https://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}&aqi=yes`;

async function gotLocation(location){
    console.log(location)
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    
    const data1 = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}&aqi=yes`);
    const data = await data1.json();

    Location.innerText=`${data.location.name} , ${data.location.region} - ${data.location.country}`;
    time.innerText=`LocalTime: ${data.location.localtime}`;
    temp.innerText=`Temperature: ${data.current.temp_c}°C`;
    condition.innerText=`Weather Condition: ${data.current.condition.text}`;



}

function gotError(){
    // console.log('location not found');
    Location.innerText = "Unable to retrieve your location.";
}

const btn = document.getElementById('btn');

btn.addEventListener('click' , async ()=>{
    await navigator.geolocation.getCurrentPosition(gotLocation, gotError);
})