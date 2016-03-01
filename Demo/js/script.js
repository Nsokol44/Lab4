// This script creates a map with overlay raster layers of data extracted from NOAA.

// This command creates a variable for a map with the view set at 30 degrees North latitude, and 90 degrees west longitude. The level of zoom on the map is 4.
var map = L.map('map').setView([30, -90], 4); 


// This command adds a theme or "template" to the map called in the previous command.
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);


// Extract lihgtning data from NOAA, then call it as a raster layer to the map.
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
  layers: '1', 
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
  }); 


// Extract temperature data from NOAA, then call it as a raster layer on the map.
var temperature = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
  }); 


// Extract precipitation data from NOAA, then call it as a raster layer on the map. 
var precipitation = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WmsServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA",
  }); 


// This creates the variable Basemaps for the toggle selector on the map. In most situations, it would allow you to toggle through different basemap layers.
var baseMaps = {
  "Basemap": map
  }; 


// A variable for overlay features on the basemap is made, this takes the three layers of data called previously, and nests it into one variable. 
var overlayMaps = {
  "Lightning": lightning,
  "Temperature": temperature,
  "Precipitation": precipitation,
  }; 

// By writing out this command it adds control functions to the map, which allows you to toggle through the variables previously made in the script.
L.control.layers(baseMaps, overlayMaps).addTo(map);

