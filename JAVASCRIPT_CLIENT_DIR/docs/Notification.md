# WaziupApi.Notification

## Properties

| Name                  | Type                                                  | Description                                      | Notes      |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------ | ---------- |
| **id**                | **String**                                            | Unique ID of the notification                    |
| **description**       | **String**                                            | Description of the notification                  | [optional] |
| **condition**         | [**NotificationCondition**](NotificationCondition.md) |                                                  |
| **action**            | [**SocialMessageBatch**](SocialMessageBatch.md)       |                                                  |
| **throttling**        | **Number**                                            | minimum interval between two messages in seconds | [optional] |
| **expires**           | **String**                                            | expiring time of the notification                | [optional] |
| **times_sent**        | **String**                                            | the time the notification was sent               | [optional] |
| **last_notification** | **String**                                            | the last notification                            | [optional] |
| **last_success**      | **String**                                            | last success of the notification                 | [optional] |
| **last_failure**      | **String**                                            | last failure of the notification                 | [optional] |
| **status**            | **String**                                            | status of the notification                       | [optional] |
