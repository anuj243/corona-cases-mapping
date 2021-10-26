function updateMap()
{
 fetch("/latest.json")
 .then(response => response.json())
 .then(rsp => {
     console.log(rsp)
     rsp.forEach(element => {
        longitude = element.coordinates[0];
        latitude = element.coordinates[1];

        console.log(element.cases)
        cases=element.cases
        if(cases>3000)
        color="rgb(255,0,0)";
        else
        color=`rgb($cases,0,0)`
         

         new mapboxgl.Marker({
            draggable: false,
            color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
     });
 })
}

updateMap();