# Express & MongoDB Login/Signup App

This is a simple Node.js application using **Express.js** and **MongoDB (Mongoose)** that allows users to **sign up** and **log in**. Each user has a **unique email** and an **auto-increment ID**.  

---

## Features

- **Home Route `/`**
  -  Serves a file that displays options to **Sign Up** or **Log In**.

- **Sign Up**
  - Users can register with a unique email.
  - User data is saved in MongoDB using **Mongoose**.
  - Each user is assigned an **auto-increment ID**.
  
- **Log In**
  - Users can log in with their email and password.
  - The app validates credentials against the database.
  - On successful login, users are redirected to the **homepage**.

- **File-Based Serving**
  - All pages are rendered and served using **HTML/EJS templates** or static files.    

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- body-parser
- HTML
- CSS
  
---

## Author

**Hamza Hannou**  
  
- **Email:** hhannou06@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/hamza-hannou-0a7bb6320/
