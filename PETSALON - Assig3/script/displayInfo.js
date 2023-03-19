function displayFooterInfo(){
    console.log("footer info");
    document.getElementById("information").innerHTML = `<p> Welcome to ${petSalon.name}</p>
    <p> It is located at ${petSalon.address.city}, ${petSalon.address.street} zip code: ${petSalon.address.zip}</p>
    <p> It is open from ${petSalon.hours.open} to ${petSalon.hours.close}</p>
    `;   
}

displayFooterInfo();

function displayPetsInfo(){
    
}