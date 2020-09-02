const travelButton = document.getElementById('travelButton')
const coordinateDisplay = document.getElementById('coordinateDisplay')
const infoMessage = document.getElementById('infoMessage')
const geoHashDisplay = document.getElementById('geoHash')
const destinationMessages = ['wow! Looks interesting!', 'How did you end up there!?', 'WHAT A SHITHOLE!!', 'Hope they have a McDonalds!', 'Whoa! Don\'t stay too long there! ', 'GET THE HELL OUTA THERE!', 'Bon voyage!', 'Still beats sittin at home']


function getRandomLatitude() {

    let latitudeMainNumber = getRandomInt(-40, 90)
    let latitudeDecimal = getRandomInt(0, 9999) / 10000
    return latitudeMainNumber + latitudeDecimal
}

function getRandomLongitude() {

    let longitudeMainNumber = getRandomInt(-90, 80)
    let longitudeDecimal = getRandomInt(0, 9999) / 10000
    return longitudeMainNumber + longitudeDecimal
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGeoHash(latitude, longitude) {
    return Geohash.encode(latitude, longitude, 6)
}

travelButton.addEventListener('click', displayMap)


function displayMap() {
    let map = initMap()
    infoMessage.textContent = destinationMessages[getRandomInt(0, (destinationMessages.length) - 1)]
    geoHashDisplay.textContent = `Your geoHash is  ${getGeoHash(map.lat, map.lng)} . Latitude is ${map.lat} . Longitude is ${map.lng}`
}


function initMap() {

    let destination = { lat: getRandomLatitude(), lng: getRandomLongitude() };
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: getRandomInt(3, 5), center: destination });
    let marker = new google.maps.Marker({ position: destination, map: map });
    return destination
}



