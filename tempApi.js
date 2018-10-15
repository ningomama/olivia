//gadgit displaying current temperature at different cities using ajax
 

let ranNum = function(length){
    let num = Math.floor(Math.random()*length);
    return num;
};

    let getWeather = ()=> {
        let http = new XMLHttpRequest();
        const apikey = "bf66190a1d640846e9b9920dc8046773";
        const cities = ['Paris','Hong%20Kong','London', "Okinawa",'Beijing',"Delhi", "Mumbai", "New%20York", "Istanbul", "Manila"];

        const city = cities[ranNum(cities.length-1)];

        http.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=${apikey}`)

        http.onreadystatechange = function(){
            if(http.readyState != XMLHttpRequest.DONE){
                return;
            } else if(http.status == 200){
                displayTemp(http.responseText, city)
            } else {
                console.log("error occurred" + http.status)
            }
        }
        http.send();
    }

    let displayTemp = (x,y) => {
    let data = JSON.parse(x); 
    let t = data.main.temp;
    celcius = t - 273
    celcius = celcius.toFixed(1);
    y = y.replace("%20"," ");
    $(".temp").text(`${celcius}`);
    $(".city").text(`${y}`);

}

setInterval(getWeather, 5000);
