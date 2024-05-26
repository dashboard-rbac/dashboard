const map = L.map("map").setView([-15, -60], 3);
const maxBounds = [
  [-90, -180],
  [90, 180],
];
let maxValue = 0;

map.setMaxBounds(maxBounds);
map.on("drag", function () {
  map.panInsideBounds(maxBounds, {animate: false});
});

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 18,
  attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const info = L.control();
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
  const caption = L.control({position: "bottomright"});

  caption.onAdd = function () {
    const div = L.DomUtil.create("div", "info caption");
    div.innerHTML +=
        '<div class="caption-topic"><img src="../../images/map-icons/black-square.png"/><div>&nbspInstituições de Ensino</div></div>';
    div.innerHTML +=
        '<div class="caption-topic"><img src="../../images/map-icons/black-circle.png"/><div>&nbspSecretarias</div></div>';
    div.innerHTML +=
        '<div class="caption-topic"><img src="../../images/map-icons/black-triangle.png"/><div>&nbspGrupos Temáticos</div></div>';
    div.innerHTML +=
        '<div class="caption-topic"><img src="../../images/map-icons/black-star.png"/><div>&nbspNúcleos Regionais RBAC</div></div>';
    return div;
  };

  caption.addTo(map);
}

const iconMap = L.Icon.extend({
  options: {
    iconAnchor: [5, 5],
    popupAnchor: [5, 5],
  },
});

function setGroupMarker(coordinates, groupName, groupType, members) {
  const rbacCoreGroupType = "Núcleos Regionais RBAC",
      teachingInstituteType = "Instituições de Ensino",
      boardType = "Secretarias",
      thematicGroups = "Grupos Temáticos";

  let icon;
  switch (groupType) {
    case rbacCoreGroupType:
      icon = new iconMap({
        iconUrl: "images/map-icons/black-star.png",
        iconSize: [calculateIconSize(members), calculateIconSize(members)]
      });
      break;
    case teachingInstituteType:
      icon = new iconMap({
        iconUrl: "images/map-icons/black-square.png",
        iconSize: [calculateIconSize(members), calculateIconSize(members)]
      });
      break;
    case boardType:
      icon = new iconMap({
        iconUrl: "images/map-icons/black-circle.png",
        iconSize: [calculateIconSize(members), calculateIconSize(members)]
      });
      break;
    case thematicGroups:
      icon = new iconMap({
        iconUrl: "images/map-icons/black-triangle.png",
        iconSize: [calculateIconSize(members), calculateIconSize(members)]
      });
      break;
  }

  const popupContent = "<b>" + groupName + "</b><br>" + members + " membros";

  L.marker(coordinates, {icon: icon}).addTo(map).bindPopup(popupContent);
}

function calculateIconSize(members) {
  return Math.min(Math.max(members * 0.5, 7), 12);
}

setCaptions();

function highlightFeature(e) {
  const layer = e.target;

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

maxValue = -1;

(async () => {
  const response = await getUsersCountByState();
  response.forEach((v) => {
    const feature = statesData.features.find(
        (feature) =>
            replaceSpecialChars(feature.properties.name.toUpperCase()) ===
            replaceSpecialChars(v.state.toUpperCase())
    );

    if (v.users > maxValue) maxValue = v.users;

    feature.properties.users = v.users;
  });

  function getColor(density) {
    const thresholds = [
      {threshold: 1, color: "#D0F0C0"},
      {threshold: maxValue / 7, color: "#A2E18C"},
      {threshold: (maxValue * 2) / 7, color: "#73D358"},
      {threshold: (maxValue * 3) / 7, color: "#45C424"},
      {threshold: (maxValue * 4) / 7, color: "#1DB700"},
      {threshold: (maxValue * 5) / 7, color: "#148A00"},
      {threshold: (maxValue * 6) / 7, color: "#0E6600"},
      {threshold: maxValue, color: "#004000"}
    ];

    for (let thresholdRange = 0; thresholdRange < thresholds.length; thresholdRange++) {
      if (density <= thresholds[thresholdRange].threshold) {
        return thresholds[thresholdRange].color;
      }
    }

    return "#DADADA";
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.users),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "0",
      fillOpacity: 0.4,
    };
  }

  const legend = L.control({position: "bottomleft"});
  legend.onAdd = function (map) {
    const div = L.DomUtil.create("div", "info legend"),
        grades = [
          1,
          maxValue / 7,
          (maxValue * 2) / 7,
          (maxValue * 3) / 7,
          (maxValue * 4) / 7,
          (maxValue * 5) / 7,
          (maxValue * 6) / 7,
          maxValue,
        ];

    for (let i = 0; i < grades.length - 1; i++) {
      div.innerHTML +=
          '<i style="background:' +
          getColor(grades[i] + 1) +
          '"></i> ' +
          (grades[i + 1] ? grades[i].toFixed() + " &ndash; " + grades[i + 1].toFixed() + "<br>" : "+");
    }

    return div;
  };
  legend.addTo(map);

  geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);
})();

(async () => {
  const response = await getGroups();
  response.forEach((v) => {
    setGroupMarker(v.coordinates, v.name, v.type, v.members);
  });
})();

function changeMapFocus(coordinates, zoomLevel) {
  map.setView(coordinates, zoomLevel);
}
