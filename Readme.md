# WanderLodge - Full-Stack Web Application

Welcome to **WanderLodge**, a full-stack web application inspired by **Airbnb**. This platform allows users to explore, create, review, and manage lodging listings. Built using **HTML, CSS, JavaScript, MongoDB, Node.js, Express.js, EJS, and Bootstrap**, it provides a seamless experience for travelers and hosts alike. Additionally, **Cloudinary** is used for image storage, and **Mapbox** is integrated to display locations on an interactive map.

## 🚀 Features

- **User Authentication**: Secure login and registration system.
- **Lodging Management**: Users can **create, edit, and delete** their listings.
- **Reviews & Ratings**: Users can **post, edit, and delete reviews** for lodgings with your account.
- **Image Uploads**: Integrated with **Cloudinary** for storing and managing images.
- **Interactive Maps**: Utilizes **Mapbox** for displaying locations dynamically.
- **Responsive Design**: Built with **Bootstrap** for a user-friendly experience across all devices.

## 📂 Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/JaganParida/WanderLodge.git
   cd WanderLodge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_api_secret
   MAP_TOKEN=your_mapbox_token
   ATLASDB_URL=your_mongodbAtlas_url
   SECRET=your_secret_code_for_session
   ```
4. Start the server:
   ```sh
   node app.js
   ```
5. Open your browser and visit:
   ```sh
   http://localhost:8080/listings
   ```

##

Thank you for checking out **WanderLodge**! 🚀
