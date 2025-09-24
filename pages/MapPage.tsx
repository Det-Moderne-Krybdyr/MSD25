import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function MapPage() {
  const html = `<!doctype html><html><head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<style>
  html,body,#map{height:100%;margin:0}
  .leaflet-container{touch-action:none;-webkit-tap-highlight-color:transparent}
  .leaflet-top.leaflet-left{ top: 80px !important; left: 30px !important; }
</style>
</head><body>
<div id="map"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  const map = L.map('map', { zoomControl:false, scrollWheelZoom:true, tap:false }).setView([54,10],5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19, attribution:'© OpenStreetMap'
  }).addTo(map);

  L.control.zoom({ position:'topleft' }).addTo(map);

  const cities=[["London",51.5074,-0.1278],["Paris",48.8566,2.3522],["Berlin",52.52,13.405],
    ["Madrid",40.4168,-3.7038],["Rome",41.9028,12.4964],["Amsterdam",52.3676,4.9041],
    ["Vienna",48.2082,16.3738],["Warsaw",52.2297,21.0122],["Stockholm",59.3293,18.0686],
    ["Copenhagen",55.6761,12.5683]];

  const jitter=d=>(Math.random()-0.5)*d;
  cities.forEach(([_,lat,lng])=>{
    for(let i=0;i<4;i++){
      L.marker([lat+jitter(0.06),lng+jitter(0.06)])
        .addTo(map)
        .bindPopup("pickup location");
    }
  });
</script>
</body></html>`;

  return (
    <View style={styles.container}>
      <WebView originWhitelist={["*"]} source={{ html }} style={styles.map} scrollEnabled={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
