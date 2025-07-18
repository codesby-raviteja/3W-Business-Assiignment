# 3W-Business-Assiignment
# User Management MERN App

A full-stack MERN (MongoDB, Express, React, Node.js) application to manage users with dynamic pagination, form validation, image support, and responsive UI using TailwindCSS.

## Features

- Add new users with name and image URL
- Client-side and server-side form validation
- Responsive UI using React and TailwindCSS
- Pagination with total document count
- Server-side sorting by total points
- MongoDB + Mongoose for data modeling

## Technologies Used

- Frontend: React, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)

## API Endpoints

### `POST /create/user`
Create a new user with `name` and `imageUrl`.

### `GET /users?page=<number>`
Get paginated users sorted by `totalPoints`. Returns 10 users per page with total document count.

### ▶️ `POST /claimpoints/:userId`

Claim random points (between **1 and 10**) for a user.  
Updates the user's `totalPoints`, logs the claim in their history, and reassigns ranks for all users based on updated scores.





## How to Run

1. Clone the repository  
2. Install dependencies for both frontend and backend  
3. Run backend: `npm run start`
4. Run frontend: `npm run start`  



