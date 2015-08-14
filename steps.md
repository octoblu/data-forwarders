#Forwarder Steps
The Forwarder's purpose is to allow a meshblu / octoblu user to setup message and
event subscriptions to their devices and be able to forward the messages and events to a supported data store owned by the user.

##Steps
1. User Logs in with their Octoblu account
Login Page
email
github
facebook
oauth
twitter
uuid/ token

2. Device Selection Page
   - Get the list of Devices that the User has access to
   - Pick the list of Devices
   - Select Subscribe to Send , Receive or Events

3. Select Data Forwarder type
Node Types
Splunk
Elastic
Hadoop

4. Register A new Forwarder Device with Correct Options

5. Select your Gateblu Instance
- use meshblu api to get Devices owned by the user of type(device:gateblu)
- At least 1 Gateblu running
- Or tell the user to configure it in app.octoblu.com


6. Configure The new Forwarder Device
- Register a New Device with the correct options
- Setup the device subscriptions with Meshblu
   meshblu subscribe[UUIDs, Subscription Types]
- Add it to the Gateblu instance

---------------
Gateblu refreshes its device list
Pulls down the forwarder plugin
Starts the forwarder with the options already configured
