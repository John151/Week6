
let USCenterCoordinates = [-69, -15.55]
let zoomLevel = 3

let map = L.map('bridge-map').setView(USCenterCoordinates, zoomLevel)


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVpZ2lmaXJlYmFsbCIsImEiOiJja2Z4ZThmNWcxb25tMzBxcWIzamtxMm4xIn0.9nw25BY7OFDUsrtCF3u1BA'
}).addTo(map)


// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     accessToken: 'pk.eyJ1IjoibHVpZ2lmaXJlYmFsbCIsImEiOiJja2Z4ZThmNWcxb25tMzBxcWIzamtxMm4xIn0.9nw25BY7OFDUsrtCF3u1BA'
// }).addTo(map);

// let longestBridges = [
//     {Name: 'Verrazano-Narrows Bridge',
//         City: 'New York',
//         State: 'NY',
//         Span: 1298.4,
//         Latitude: 40.6066,
//         Longitude: -74.0447},
//     {Name: 'Golden Gate Bridge',
//         City: ['San Francisco', 'Marin'],
//         State: 'CA',
//         Span: 1280.2,
//         Latitude: 37.8199,
//         Longitude: -122.4783},
//     {Name: 'Mackinac Bridge',
//         City: ['Mackinaw', 'St. Ignace'],
//         State: 'MI',
//         Span: 1158,
//         Latitude: 45.8174,
//         Longitude: -84.7278},
//     {Name: 'George Washington Bridge',
//         City: ['New York', 'New Jersey'],
//         State: 'NY',
//         Span: 1067,
//         Latitude: 408517,
//         Longitude: -73.9527},
//     {Name: 'Tacoma Narrows Bridge',
//         City: ['Tacoma', 'Kitsap'],
//         State: 'NJ',
//         Span: 853.44,
//         Latitude: 47.2690,
//         Longitude: -122.5517}
// ]
//console.log(longestBridges)

