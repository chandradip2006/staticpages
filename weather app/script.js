// alert('this is script.js')

const input=document.getElementById('input')
const btn=document.getElementById('submit')
const locate=document.getElementById('location')
const temp=document.getElementById('temp')
const cond=document.getElementById('condition')
const img=document.getElementById('img')
const time=document.getElementById('time')

// const value=input.value;
// const key=require('./key')
const key="bf115f62d00b41d9927223900251407";

// btn.addEventListener('click' , ()=>{
//     console.log(input.value);
// })

async function getdata(value){
    const data=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${value}&aqi=yes`
    )
    // .catch((err)=>console.log("404 not Found"))

    return await data.json();
}


// async function getdata1(value){
//     const data=await fetch(
//         ` https://geeks-for-geeks-api.vercel.app/${value}`
//     )

//     return await data.json();
// }
btn.addEventListener('click' , async ()=>{
    const result = await getdata(input.value);
    locate.innerHTML=`<b>Location:</b> ${result.location.name}-${result.location.region}-${result.location.country}`;
    time.innerHTML=`<b>LocalTime:</b> ${result.location.localtime}`
    temp.innerHTML=`<b>Temperature:</b> ${result.current.temp_c}`
    cond.innerHTML=`<b>Current Condition:</b> ${result.current.condition.text}`
    img.src=`${result.current.condition.icon}`;
Html 
    // console.log(result);
})

