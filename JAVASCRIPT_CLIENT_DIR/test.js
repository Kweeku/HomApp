const WaziupApi = require('./lib/index.js');
 
WaziupApi.ApiClient.instance.basePath = 'http://localhost/api/v1'
var api = new WaziupApi.SensorsApi()
 
api.getSensors("waziup").then((sensors) =>{
     console.log(JSON.stringify(sensors));
})

