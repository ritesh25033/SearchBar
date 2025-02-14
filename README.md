# Student Search Application

This is a full-stack student search application built with **React.js** for the frontend and **Node.js (Express.js)** for the backend. The application allows users to search for student names dynamically with debounce and lazy loading.

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- CSS
- Axios (for API calls)

### Backend:
- Node.js
- Express.js
- JSON file as a data source

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ritesh25033/SearchBar.git
cd your-repo
```

### 2️⃣ Setup Backend

#### Install Dependencies
```sh
cd backend
npm install
```

#### Run Backend Locally
```sh
npm start
```
The backend should now be running on `https://searchbar-3xns.onrender.com`

#### API Endpoint
```
GET /api/search?query=<student_name>
```
Example:
```
https://searchbar-3xns.onrender.com/api/search?query=Simran
```

---

### 3️⃣ Setup Frontend

#### Install Dependencies
```sh
cd frontend
npm install
```

#### Run Frontend Locally
```sh
npm start
```
The frontend should now be running on `https://search-bar-rouge-two.vercel.app/`

---

## 🌍 Deployment

### 🔹 Deploy Backend on Render
1. Push your backend code to GitHub.
2. Create an account on [Render](https://render.com/).
3. Click **New Web Service** → Connect your GitHub repo.
4. Select `Node.js` as the environment.
5. Set the **Build Command** to:
   ```sh
   npm install
   ```
6. Set the **Start Command** to:
   ```sh
   npm start
   ```
7. Deploy and get your live backend URL.

### 🔹 Deploy Frontend on Vercel
1. Push your frontend code to GitHub.
2. Create an account on [Vercel](https://vercel.com/).
3. Click **New Project** → Import your GitHub repo.
4. Set the **Environment Variable**:
   ```
   REACT_APP_API_URL = <Your Render Backend URL>
   ```
5. Deploy and get your live frontend URL.

---

## 🔥 Features
- **Debounced Search:** Reduces API calls while searching.
- **Lazy Loading:** Optimized search results.
- **Case-Insensitive Search:** Handles uppercase/lowercase input.
- **Handles Edge Cases:** Special characters, spaces, and duplicate names.

---

## 🤝 Contributing
Feel free to submit pull requests or issues for improvements.
