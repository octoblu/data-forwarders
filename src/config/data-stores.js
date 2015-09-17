module.exports = [
  {
    "name" : "Splunk Event Collector",
    "uuid" : "5dc9dec3-9a5a-4fa6-a65f-11f8b6c58501",
    "logoUrl" : "",
    "type" : "device:forwarder",
    "forwarderType" : "splunk-event-collector",
    "connector" : "meshblu-splunk-event-collector",
    "optionsSchema" : {
      "type": "object",
      "properties":{
        "EventCollectorToken" : {
          "title": "Event Collector Token",
          "type": "string",
          "required" : true
        },
        "SplunkEventUrl" : {
          "title": "Event Collector Token",
          "type" : "string",
          "required" : true
        }
      }
    }
  }
]
