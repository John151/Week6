
let USCenterCoordinates = [39, -97]
let zoomLevel = 4

let map = L.map('bridge-map').setView(USCenterCoordinates, zoomLevel)


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVpZ2lmaXJlYmFsbCIsImEiOiJja2Z4ZHMwbTYwM2MxMnNueTJoanM0NjZuIn0.oDcJdbBK_2-ulMD-cJtdvA'
}).addTo(map);


// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     accessToken: 'pk.eyJ1IjoibHVpZ2lmaXJlYmFsbCIsImEiOiJja2Z4ZThmNWcxb25tMzBxcWIzamtxMm4xIn0.9nw25BY7OFDUsrtCF3u1BA'
// }).addTo(map);

let longestBridges = [
    {Name: 'Verrazano-Narrows Bridge',
        City: 'New York',
        State: 'NY',
        Span: 1298.4,
        Location: [40.6066, -74.0447]
    },
    {Name: 'Golden Gate Bridge',
        City: ['San Francisco', 'Marin'],
        State: 'CA',
        Span: 1280.2,
        Location: [37.8199, -122.4783]
    },
    {Name: 'Mackinac Bridge',
        City: ['Mackinaw', 'St. Ignace'],
        State: 'MI',
        Span: 1158,
        Location: [45.8174, -84.7278]
},
    {Name: 'George Washington Bridge',
        City: ['New York', 'New Jersey'],
        State: 'NY',
        Span: 1067,
        Location: [40.8517, -73.9527]
},
    {Name: 'Tacoma Narrows Bridge',
        City: ['Tacoma', 'Kitsap'],
        State: 'NJ',
        Span: 853.44,
        Location: [47.2690, -122.5517]
    }
]

var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [40, 30]
});

longestBridges.forEach( function (bridge)
{
    let marker = L.marker(bridge.Location, {icon: bridgeIcon}).bindPopup(bridge.Name).addTo(map);
})
//console.log(longestBridges)

