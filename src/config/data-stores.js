module.exports = [
  {
    "name" : "Splunk Event Collector",
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
