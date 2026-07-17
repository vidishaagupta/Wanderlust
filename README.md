# 🏕️ Wanderlust

<div align="center">

### Discover • Explore • Stay

Wanderlust is a full-stack accommodation booking platform inspired by Airbnb. It enables users to explore unique travel destinations, list their own properties, write reviews, and securely manage listings through a clean and intuitive interface.

</div>

---

# 📖 About the Project

Wanderlust is a modern accommodation booking platform developed to simplify the process of discovering and sharing rental properties. The application allows travelers to browse unique stays while enabling property owners to showcase and manage their accommodations.

The platform offers secure user authentication, complete property management, customer reviews, and a responsive user experience. Built using the MVC architecture, Wanderlust demonstrates scalable backend development, efficient database management, and clean application organization.

---

# ✨ Features

## 🏡 Explore Listings

Browse a wide collection of accommodations with detailed information including property images, descriptions, pricing, location, and country.

---

## ➕ Create Property Listings

Authenticated users can create new property listings by providing:

- Property Title
- Description
- Price
- Location
- Country
- Property Images

---

## ✏️ Update Listings

Listing owners can edit property details whenever required, ensuring that accommodation information always remains accurate and up to date.

---

## 🗑️ Delete Listings

Owners have complete control over their properties and can remove listings from the platform whenever necessary.

---

## ⭐ Review & Rating System

Users can share their travel experiences by adding reviews and ratings to listings.

Features include:

- Add Reviews
- View Reviews
- Delete Reviews
- Property Ratings

This helps future travelers make informed booking decisions.

---

## 🔐 Secure Authentication

The application provides a secure authentication system where users can:

- Register
- Login
- Logout
- Maintain Secure Sessions

Only authenticated users can create listings and submit reviews.

---

## 👤 Authorization

Authorization ensures that:

- Only listing owners can edit or delete their listings.
- Only review authors can delete their reviews.

This keeps user data secure and prevents unauthorized modifications.

---

## 💬 Flash Notifications

Interactive success and error messages notify users after actions such as:

- Login
- Registration
- Listing Creation
- Listing Update
- Listing Deletion
- Review Submission

---

## 📱 Responsive User Interface

Designed with a clean and responsive interface that provides a seamless experience across desktops, tablets, and mobile devices.

---

## 🏗️ MVC Architecture

The project follows the Model-View-Controller (MVC) architecture, separating models, views, controllers, and routes to improve maintainability and scalability.

---

# 🔄 Workflow

```text
User Registration/Login
          │
          ▼
Browse Listings
          │
          ▼
View Listing Details
          │
          ▼
Create / Edit Listings
          │
          ▼
Add Reviews
          │
          ▼
Manage Listings & Reviews
```

---

# 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local Strategy
- Express Session

### Additional Packages

- Connect Flash
- Method Override
- Dotenv
- EJS Mate

---

# 📂 Project Structure

```text
Wanderlust
│
├── models
├── routes
├── controllers
├── middleware
├── utils
├── views
├── public
├── init
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/Wanderlust.git
```

## Navigate to the Project

```bash
cd Wanderlust
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

## Start the Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

The application will run at:

```text
http://localhost:8080
```

---

# 🚀 Future Enhancements

- Image Upload with Cloudinary
- Advanced Search & Filters
- Interactive Maps Integration
- Wishlist Functionality
- Online Booking System
- Payment Gateway Integration
- User Profile Dashboard
- Favorite Listings
- Email Verification
- Admin Dashboard
- Booking History
- Property Availability Calendar

---

# 💡 Use Cases

Wanderlust is ideal for:

- Travelers
- Property Owners
- Vacation Rental Businesses
- Homestay Hosts
- Students learning Full Stack Development

---

# 🌟 Project Highlights

- ✅ Secure User Authentication
- ✅ Complete CRUD Operations
- ✅ Property Listing Management
- ✅ Review & Rating System
- ✅ Authorization & Ownership Validation
- ✅ Session Management
- ✅ Responsive User Interface
- ✅ MVC Architecture
- ✅ MongoDB Database Integration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push your changes.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 👩‍💻 Author

**Sia Gupta**

B.Tech Computer Science Engineering (Data Science)

Passionate about Full Stack Development and building scalable web applications.

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star!

Built with ❤️ using Node.js, Express.js, MongoDB, Passport.js, EJS, and Bootstrap.

</div>
