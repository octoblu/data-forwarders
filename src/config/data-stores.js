module.exports = [
  {
    "name" : "Splunk Event Collector",
    "uuid" : "5dc9dec3-9a5a-4fa6-a65f-11f8b6c58501",
    "logoUrl" : "https://s3-us-west-2.amazonaws.com/octoblu-icons/channel/splunk.svg",
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
          "title": "Splunk Event URL",
          "type" : "string",
          "required" : true
        }
      }
    }
  }
]