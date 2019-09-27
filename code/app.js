window.addEventListener('load',()=>{
    let long;
    let lat;
    let tem_desc = document.querySelector('.temp-description')
    let tem_degree = document.querySelector('.temp-degree') 
    let location = document.querySelector('.location-timezone')
    let icondis = document.querySelector('.icon')
    

    if(navigator.geolocation)
    {
        
        navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;

        //    const proxy = 'https://cors-anywhere.herokuapp.com/'
        //    const api = `${proxy}https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6907d289e10d714a6e88b30761fae22`

           const api = `https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6907d289e10d714a6e88b30761fae22`
           fetch(api)
            .then(res =>{
                return res.json()
            })
            .then(data =>{
               
                const {temp}= data.main
                const {description,icon} = data.weather[0]
                const {country} = data.sys
                const {name} = data

                tem_degree.textContent = temp
                tem_desc.textContent = description
                location.textContent = name + " / " + country
                //set icon
                setIcon(icon)

            })

        });
        

    }
    else
    {
        h1.textContent = "Allow to access location";
    }

    function setIcon(icon)
    {
        var iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        icondis.src = iconUrl
        
    }
    
})