//Adding Map
var map = L.map('map').setView([-15, -60], 4);
var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.geoJson(statesData).addTo(map);

function getColor(d) {
    return d > 1000 ? '#0F8418' :
           d > 500  ? '#8CBB2C' :
           d > 200  ? '#54DF5E' :
           d > 100  ? '#00FF14' :
           d > 50   ? '#00FF14' :
           d > 20   ? '#00FF14' :
           d > 10   ? '#00FF14' :
                      '#FFEDA0';
}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.5
    };
}
L.geoJson(statesData, {style: style}).addTo(map);


//Adding Events
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: 'black',
        dashArray: '0',
        fillOpacity: 0.7
    });
    layer.bringToFront();
    info.update(layer.feature.properties);
}
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

//Info Control
var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>Densidade Populacional</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' pessoa / m<sup>2</sup>'
        : 'Passe o mouse sobre um estado');
};
info.addTo(map);

//Legend Control
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<div class="legend-topic"><img src="images/black-square.png"></img><div>&nbspInstituições de Ensino</div></div>';
    div.innerHTML += '<div class="legend-topic"><img src="images/black-circle.png"></img><div>&nbspSecretarias</div></div>';
    div.innerHTML += '<div class="legend-topic"><img src="images/black-triangle.png"></img><div>&nbspGrupos Temáticos</div></div>';
    div.innerHTML += '<div class="legend-topic"><img src="images/black-star.png"></img><div>&nbspNúcleos Regionais RBAC</div></div>';
    return div;
};

legend.addTo(map);

//Map Icons
var iconMap = L.Icon.extend({
    options: {
        iconSize: [10,10],
        iconAnchor: [1, 1],
        popupAnchor:  [1, 1],
        InstitutionName: "nome"
    }
});
var squareIcon = new iconMap({iconUrl: 'images/black-square.png'}),
    circleIcon = new iconMap({iconUrl: 'images/black-circle.png'}),
    triangleIcon = new iconMap({iconUrl: 'images/black-triangle.png'}),
    starIcon = new iconMap({iconUrl: 'images/black-star.png'});

L.icon = function (options) {
        return new L.Icon(options);
};
L.marker([-10, -50], {icon: squareIcon}).addTo(map).bindPopup("InstitutionName");
L.marker([-20, -45], {icon: circleIcon}).addTo(map).bindPopup("InstitutionName");
L.marker([-8, -60], {icon: triangleIcon}).addTo(map).bindPopup("InstitutionName");
L.marker([-10, -45], {icon: starIcon}).addTo(map).bindPopup("InstitutionName");