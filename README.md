# GEO-LOCATION Alert App 

# *Overview*

This is a web-based Geolocation Alert App that tracks the user's real-time location and allows users to set location-based alerts. When the user enters a predefined alert zone, an audio notification (customizable) and vibration alert are triggered.

# *Features*

@ Real-time Location Tracking: Uses the browser's Geolocation API to monitor user movement.

@ Google Maps Integration: Displays the user’s location on a map.

@ Location-based Alerts: Users can add alerts with messages and alert types.

@ Local Storage: Alerts and selected audio tones are stored persistently.

@ Custom Alert Tones: Users can upload their own audio files as alert tones.

@ Vibration Alerts: Supports device vibration when an alert is triggered (if supported by the device).

@ Dark Mode Toggle: Enables a dark mode interface for better usability.

# *Technologies Used*

@ HTML, CSS, JavaScript

@ Google Maps API

@ LocalStorage

# *Installation & Setup*

# 1. Clone or download this repository.

# 2. Open the index.html file in a web browser.

# 3. Ensure you allow location permissions for the app to function properly.

# Usage

# 1. Enable Location Services: Ensure your browser has location permissions enabled.

# 2. View Your Location: The app will automatically track and display your location on Google Maps.

# *Add Alerts:

Enter latitude, longitude, alert message, and type.

Click the submit button to save the alert.

Set Custom Alert Tone:

Upload an audio file for notifications.

The tone will be saved in localStorage.

# *Trigger Alerts:

If the user moves within 10 meters of a stored alert location, an alert is triggered.

Audio plays and the device vibrates (if supported).

# *Delete Alerts:

Click the "Delete Alert" button next to an alert to remove it.

# *Dark Mode:

Toggle dark mode using the provided button.

# *Permissions Required

Geolocation Access: Needed for real-time location tracking.

Storage Access: Required to save alerts and custom alert tones.

Known Issues & Limitations

Works only on browsers that support the Geolocation API.

Custom alert tones are only available during the session (browser restrictions may prevent persistent storage of audio URLs).

Accuracy of location tracking depends on the device and browser.

Future Enhancements

Implement a database backend for persistent storage.

Add a feature to share alerts with other users.

Improve UI with more animations and user-friendly controls.

Support for push notifications.

# *License*

This project is open-source and available under the MIT License.

# *Author

Developed by #*OMI-KALIX*

