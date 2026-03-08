# Express & MongoDB Login/Signup App

This is a simple Node.js application using **Express.js** and **MongoDB (Mongoose)** that allows users to **sign up** and **log in**. Each user has a **unique email** , **password** is hashed with**bycrypt** before storing it to the database.  

---

## Features

- **Home Route `/`**
  -  Serves a file that displays options to **Sign Up** or **Log In**.

- **Sign Up**
  - Users can register with a unique email.
  - User data is saved in MongoDB using **Mongoose**.
  - Each user's password is hashed before stored to the database.
  
- **Log In**
  - Users can log in with their email and password.
  - The app validates credentials against the database.
  - On successful login, users are redirected to the **homepage**.

- **Session-Based Authentication**
  This application uses session-based authentication to control access to protected pages.
  - The homepage is protected and can only be accessed by users who are already logged in.
  - If a user tries to access the homepage without an active session, they are automatically redirected to /login.
  - When a user logs in successfully, a session is created and the user's _id is stored in the session.
  - Sessions are persisted in MongoDB, allowing the server to remember authenticated users.
  - If the user logs out, the session is destroyed, and any attempt to access protected pages will redirect the user back to /login.

- **File-Based Serving**
  - All pages are rendered and served using **HTML/EJS templates** or static files.    

---

## Technologies Used

- Node.js
- Express.js
- bycrypt
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
