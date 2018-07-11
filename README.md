# AgencyWeatherApp
This is a Single-Page Application (SPA) using the MERN stack (MongoDB, Express, React, Node). The Front-End is built with HTML, CSS and JavaScript while also using the React.js and Redux libraries. The SPA navigation is set up using the react-router-dom package. The application's Back-End database functionality is provided by an API that uses Node, Express, and MongoDB. With the app a user can use an API Key to access thier own weather dashboard where they can view weather data, add new cities, and delete cities they no longer wish to see weather data for. This is done by using the axios package to make requests to several APIs. The App also uses the MaterializeCSS library for some extra front end styling.

**NOTE: I do not control the backend API used for the database. The database is occasionally scrubbed of all data.**

---

- When the user first navigates to the application they will be directed to the home page. Here there are info cards for each city with the city name displayed as well as a picture. From this page the user can click on one of the cards to be redirected to the specific city page, where they can view weather data for that specific city. 
![HOME PAGE](/read_me/one-landing.png)

- Once the user selects a city to view more information on they will be able to see chart data for the five day forecast along with the average of the five day forecast.
![CITY INFO TOP](/read_me/two-city-top.png)

- This data includes Temperature, Humidity, and Pressure.
![CITY INFO BOTTOM](/read_me/three-city-bottom.png)

- The user can add a new city to thier application by clicking the round button on the bottom right corner of the homepage.
![HOME PAGE](/read_me/one-landing.png)

- Once redirected to the the Add New City page the user can enter the name of a city they woukd like to add.
![ADD NEW CITY](/read_me/four-add-city.png)

- After adding a new city the user will be redirected back to the homepage, where the new city is at the beginning of the city list.
![NEW CITE=Y ADDED](/read_me/five-new-city.png)

- The user can delete and city they no longer want the weather data for but clicking on the red button on the bottom right corner of the city weather page.
![DELETE CITY](/read_me/six-delete-city.png)

- Once the user had deleted a city they will be redirected to the homepage, where the city is no longer avaliable.
![BACK HOME](/read_me/seven-return.png)

---
Future Upgrades:
- Create unique backend database for application
- Form Validation to check if form entry is a valid US city name before submitting (right now it'll save to the database and the weather API request won't load with bad data, creating a bug with the new component )
- Google Maps intergration
- User authentication. Every user can have their own list of cities
