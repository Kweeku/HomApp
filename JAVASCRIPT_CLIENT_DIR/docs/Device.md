# WaziupApi.Device

## Properties

| Name           | Type                          | Description                   | Notes      |
| -------------- | ----------------------------- | ----------------------------- | ---------- |
| **id**         | **String**                    | Unique ID of the device node  |
| **gateway_id** | **String**                    | Unique ID of the gateway      | [optional] |
| **name**       | **String**                    | name of the device node       | [optional] |
| **owner**      | **String**                    | owner of the device node      | [optional] |
| **visibility** | **String**                    | visibility of the device node | [optional] |
| **domain**     | **String**                    | domain of the device node     | [optional] |
| **actuators**  | [**[Actuator]**](Actuator.md) |                               | [optional] |
| **sensors**    | [**[Sensor]**](Sensor.md)     |                               | [optional] |
| **location**   | [**Location**](Location.md)   |                               | [optional] |
