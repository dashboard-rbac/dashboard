var map = L.map("map").setView([-15, -60], 4);
var maxBounds = [
  [-90, -180],
  [90, 180],
];

map.setMaxBounds(maxBounds);
map.on("drag", function () {
  map.panInsideBounds(maxBounds, { animate: false });
});

var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.geoJson(statesData).addTo(map);

function getColor(d) {
  var thresholds = [
    { threshold: 1000, color: "#0F8418" },
    { threshold: 500, color: "#8CBB2C" },
    { threshold: 200, color: "#54DF5E" },
    { threshold: 100, color: "#00FF14" },
    { threshold: 50, color: "#00FF14" },
    { threshold: 20, color: "#00FF14" },
    { threshold: 10, color: "#00FF14" },
    { threshold: 0, color: "#FFEDA0" },
  ];

  for (var i = 0; i < thresholds.length; i++) {
    if (d > thresholds[i].threshold) {
      return thresholds[i].color;
    }
  }

  return "#dadada";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "0",
    fillOpacity: 0.5,
  };
}
L.geoJson(statesData, { style: style }).addTo(map);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 3,
    color: "black",
    dashArray: "0",
    fillOpacity: 0.7,
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
    click: zoomToFeature,
  });
}

geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);

var info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};
info.update = function (props) {
  this._div.innerHTML =
    "<h4>Quantidade de usuários</h4>" +
    (props
      ? "<b>" + props.name + "</b><br />" + props.density + " usuários"
      : "Passe o mouse sobre um estado");
};
info.addTo(map);

function setCaptions() {
  var caption = L.control({ position: "bottomright" });

  caption.onAdd = function () {
    var div = L.DomUtil.create("div", "info caption");
    div.innerHTML +=
      '<div class="caption-topic"><img src="images/black-square.png"></img><div>&nbspInstituições de Ensino</div></div>';
    div.innerHTML +=
      '<div class="caption-topic"><img src="images/black-circle.png"></img><div>&nbspSecretarias</div></div>';
    div.innerHTML +=
      '<div class="caption-topic"><img src="images/black-triangle.png"></img><div>&nbspGrupos Temáticos</div></div>';
    div.innerHTML +=
      '<div class="caption-topic"><img src="images/black-star.png"></img><div>&nbspNúcleos Regionais RBAC</div></div>';
    return div;
  };

  caption.addTo(map);
}

var iconMap = L.Icon.extend({
  options: {
    iconSize: [10, 10],
    iconAnchor: [0, 0],
    popupAnchor: [5, 5],
  },
});
var squareIcon = new iconMap({ iconUrl: "images/black-square.png" }),
  circleIcon = new iconMap({ iconUrl: "images/black-circle.png" }),
  triangleIcon = new iconMap({ iconUrl: "images/black-triangle.png" }),
  starIcon = new iconMap({ iconUrl: "images/black-star.png" });

function setGroupMarker(coordinates, groupName, groupType) {
  var rbacCoreGroupType = "Núcleos Regionais RBAC",
    teachingInstituteType = "Instituições de Ensino",
    boardType = "Secretarias",
    thematicGroups = "Grupos Temáticos";

  var icon = "";
  switch (groupType) {
    case rbacCoreGroupType:
      icon = starIcon;
      break;
    case teachingInstituteType:
      icon = squareIcon;
      break;
    case boardType:
      icon = circleIcon;
      break;
    case thematicGroups:
      icon = triangleIcon;
      break;
  }
  console.log(icon);

  L.marker(coordinates, { icon: icon }).addTo(map).bindPopup(groupName);
}

setCaptions();

(async () => {
  var response = await getGroups();
  response.forEach((v) => {
    var lat = Math.random() * 100;
    var lon = Math.random() * 100;
    setGroupMarker([lat, lon], v.name, v.type);
  });
})();
