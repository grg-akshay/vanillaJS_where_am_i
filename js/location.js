(function(){
    let parra= document.querySelector('.p-img');
    if(!navigator.geolocation){
        parra.innerHTML="Geolocation not supported in your browser!";
        //console.log("Geolocation not supported in your browser!");
        return;
    }

    function success(responseObject){//by default argument to success is an JS object containing the coords-latitude and longitude!
        const {latitude, longitude}= responseObject.coords;
        console.log('latitude'+ latitude );
        console.log('longitude'+longitude);

        let link = document.createElement('a');
        link.href='https://google.com/maps/search/?api=1&query='+ latitude+','+longitude;

        let newImg= document.createElement('img');
        newImg.className='map-img';
        //use google static map api
        newImg.src=
        'https://maps.googleapis.com/maps/api/staticmap?center='+
        latitude+','+longitude+
        '&markers=color:red|'+
        latitude+','+longitude+
        '&zoom=13&size=600x300&maptype=roadmap&scale=2';

        link.appendChild(newImg);
         parra.appendChild(link);

        

    }

function error(){
    console.log("capturing current location failed")
}
    navigator.geolocation.getCurrentPosition(success,error,{maximumAge:60000, timeout:10000, enableHighAccuracy:true});//this is the geolcation api's method to fetch the latitude and logitude 
    //it will run async and will need two callback functions success and error

})();