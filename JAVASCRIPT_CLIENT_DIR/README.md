# WAZIUP-JS

Waziup-js is a javascript client to interact with the [Waziup plaform](www.waziup.io).

## Installation

Install it via:

```shell
npm install --save -g waziup-js
```

## Getting Started

Here is an example code to retrieve all devices from Waziup:

```javascript
const WaziupApi = require("waziup-js");

WaziupApi.ApiClient.instance.basePath = "https://api.waziup.io/api/v2";
var api = new WaziupApi.DevicesApi();

api.getDevices().then(devices => {
  console.log("List of devices: ", JSON.stringify(devices));
});
```

Save this file as test.js and run:

```
node test.js
```

You should get a list of devices.
The format of the devices is given [here](https://github.com/Waziup/waziup-js/blob/master/docs/Device.md).

## Authentication

You need a token to access protected resources. You can retrieve one like that:

```javascript
const WaziupApi = require("waziup-js");

WaziupApi.ApiClient.instance.basePath = "https://api.waziup.io/api/v2";
var deviceApi = new WaziupApi.DevicesApi();
var authApi = new WaziupApi.AuthApi();

//Deleting a resource requires authentication
async function testDelete() {
  var token = await authApi.getAuthToken(
    "waziup",
    new WaziupApi.AuthBody("YOUR_USERNAME", "YOUR_PASSWORD")
  );
  WaziupApi.ApiClient.instance.authentications["Bearer"].apiKey =
    "Bearer " + token;

  try {
    await deviceApi.deleteDevice("MyDevice");
  } catch (error) {
    console.log("Error " + error.status);
  }
}

testDelete();
```

You should create a user beforehand on https://dashboard.waziup.io.
As a rule of thumb, you can only update or delete resources that you are owner of.

## Documentation for API Endpoints

There are 8 endpoints:

- [Auth API](docs/AuthApi.md)
- [Sensors API](docs/SensorsApi.md)
- [Devices API](docs/DevicesApi.md)
- [Actuators API](docs/ActuatorsApi.md)
- [Gateways API](docs/GatewaysApi.md)
- [Notifications API](docs/NotificationsApi.md)
- [Projects API](docs/ProjectsApi.md)
- [Socials API](docs/SocialsApi.md)
- [Users API](docs/UsersApi.md)


## Documentation for Authorization

### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Developement

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your waziup-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('waziup-js')` in javascript files from the directory you ran the last
command above from.

### Publish

Simply type:
```
npm publish
```

