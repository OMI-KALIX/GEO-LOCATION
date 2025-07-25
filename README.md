# 🌍 Geo Location Alert App
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Maps API](https://img.shields.io/badge/Google_Maps-4285F4?logo=googlemaps&logoColor=white)](https://developers.google.com/maps)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
> A real-time location-based alert system that notifies you when you approach specific geographic coordinates.
---
## 📌 Features
✔️ `Real-time location`
    
✔️ `Custom alerts` 

✔️ `Google Maps integration`

✔️ `Persistent storage`

✔️ `Distance display`

✔️ `Mobile-friendly`

---
## ⚙️ Project Structure
```
geo-location-alert-app/
├── index.html         # Main application interface
├── styles.css         # Application styling
├── script.js          # Core functionality
└── hk.mp3             # Default alert tone (optional)
```
---
## 🚀 Getting Started
### 🔧 Requirements
- Modern web browser (Chrome, Firefox, Edge, etc.)
- Google Maps API key (free tier available)
- Internet connection (for Google Maps)
### ⚙️ Installation
1. **Clone the repository**:
```bash
git clone https://github.com/your-username/geo-location-alert-app.git
cd geo-location-alert-app
```
2. **Get a Google Maps API Key**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project and enable "Maps JavaScript API"
   - Generate an API key
3. **Add API Key to `index.html`**:
   Replace `YOUR_API_KEY` in the script tag with your actual key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
   ```
4. **Open the app**:
   - Simply open `index.html` in your browser
---
## 💻 Usage
1. **Set an Alert**:
   - Enter the latitude and longitude of the location you want to monitor
   - Write a custom message for the alert
   - Select the alert type (audio, vibration, or both)
   - Optionally, upload a custom audio tone (or use the default)
2. **View Alerts**:
   - All set alerts appear in the "Your Alerts" section
   - Delete alerts by clicking the "Delete Alert" button
3. **Real-time Monitoring**:
   - The app continuously monitors your location
   - When within 10 meters of an alert location, it triggers the alert
   - The nearest distance to any alert is displayed in the bottom right
4. **Toggle Dark Mode**:
   - Use the button at the bottom to switch between light and dark themes
---
## 🛡️ License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

📄 This project is licensed under the MIT License.  
✅ You are free to:
- Use
- Modify
- Share 
*(with attribution)*
---
## 👤 Author
**OMI-KALIX**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/OMI-KALIX)

Made with 💙 by OMI-KALIX  
> For collaboration or deployment inquiries - contact via GitHub!
---
**Note**: This application requires location permissions and works best with high-accuracy GPS (such as on mobile devices).
