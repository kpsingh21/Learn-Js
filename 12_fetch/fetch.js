
fetch("https://api-geocode-earth-proxy.prod.use1.greenhouse.io/v1/autocomplete/?api_key=ge-39f1178289d5d0c5&text=" + inputval)
.then(response => response.json()) // Convert to JSON
.then(data => console.log(data.features[0].properties.name)) // Log response
.catch(error => console.error("Error:", error));