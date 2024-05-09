var map = L.map("map").setView([-15, -60], 4);
var maxBounds = [
  [-90, -180],
  [90, 180],
];
var maxValue = 0

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
      ? "<b>" + props.name + "</b><br />" + props.users + " usuários"
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

var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
    grades = [1, maxValue/7, maxValue * 2/7, maxValue * 3/7, maxValue * 4/7, maxValue * 5/7, maxValue * 6/7,  maxValue]

    for (i = 0; i < grades.length - 1; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i].toFixed() + (grades[i + 1] ? '&ndash;' + grades[i + 1].toFixed() + '<br>' : '+');
    }

    div.innerHTML +=
            '<i style="background:' + getColor(grades[grades.length - 1]) + '"></i> ' +
            grades[grades.length-1].toFixed();

    return div;
};
legend.addTo(map);

var iconMap = L.Icon.extend({
  options: {
    iconSize: [10, 10],
    iconAnchor: [5, 5],
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

  L.marker(coordinates, { icon: icon }).addTo(map).bindPopup(groupName);
}

setCaptions();

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

function getColor(d, maxValue) {
  var thresholds = [
    { threshold: maxValue, color: "#0F8418" },
    { threshold: maxValue * 6/7, color: "#8CBB2C" },
    { threshold: maxValue * 5/7, color: "#54DF5E" },
    { threshold: maxValue * 4/7, color: "#00FF14" },
    { threshold: maxValue * 3/7, color: "#00FF14" },
    { threshold: maxValue * 2/7, color: "#00FF14" },
    { threshold: maxValue/7, color: "#00FF14" },
    { threshold: 1, color: "#FFEDA0" },
  ];

  for (var i = 0; i < thresholds.length; i++) {
    if (d > thresholds[i].threshold) {
      return thresholds[i].color;
    }
  }

  return "#DADADA";
}

function replaceSpecialChars(str)
{
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");

    return str.replace(/[^a-z0-9]/gi,''); 
}

(async () => {
  var response = await getUsersCountByState();
  response.forEach((v) => {
    var feature = statesData.features.find(
      (feature) => replaceSpecialChars(feature.properties.name.toUpperCase()) === replaceSpecialChars(v.state.toUpperCase())
    );
    
    if(v.users > maxValue)
      maxValue = v.users;
    console.log(maxValue);

    console.log(v.state, v.users, feature.properties.name)

    feature.properties.users = v.users;
  });
  
    function style(feature) {
      return {
        fillColor: getColor(feature.properties.users),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "0",
        fillOpacity: 0.3,
      };
    }

    geojson = L.geoJson(statesData, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(map);
})();

(async () => {
  var response = await getGroups();
  response.forEach((v) => {
    setGroupMarker(v.coordinates, v.name, v.type);
  });
})();
