# WaziupApi.Sensor

## Properties

| Name              | Type                                | Description                         | Notes      |
| ----------------- | ----------------------------------- | ----------------------------------- | ---------- |
| **id**            | **String**                          | ID of the sensor                    | [optional] |
| **name**          | **String**                          | name of the sensor                  | [optional] |
| **quantity_kind** | **String**                          | physical dimension of the sensor    | [optional] |
| **unit**          | **String**                          | unit of the sensor                  | [optional] |
| **sensor_kind**   | **String**                          | kind of device providing the sensor | [optional] |
| **value**         | [**[SensorValue]**](SensorValue.md) |                                     | [optional] |
| **calib**         | [**[Calib]**](Calib.md)             |                                     | [optional] |
