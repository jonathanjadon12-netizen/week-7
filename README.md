# Country Explorer

Country Explorer is a React-based web application that allows users to explore information about countries around the world. The application retrieves country data from an external API and displays useful details in a clean and user-friendly interface.

Users can search for countries and view information such as country name, capital city, population, region, and other related details. The project is built to practice API integration, React components, state management, and handling user interactions.

## Features

- View a list of countries
- Search countries by name
- Display country details
- Fetch live data from REST API
- Loading and error handling
- Responsive user interface

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- REST Countries API

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Move to the project directory

```bash
cd country-explorer
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the browser and visit:

```bash
http://localhost:5173
```

## API Used

REST Countries API

https://restcountries.com/

## Project Structure

src/
│
├── Components/
├── App.jsx
├── main.jsx
├── App.css
└── assets/

## Learning Objectives

This project helps in understanding:

- React components
- Props and state management
- API fetching
- Conditional rendering
- Search functionality
- Error handling

## Author

Developed as a React learning and practice project.




# Product App

Product App is a React web application designed to display products and allow users to navigate through different pages. The project demonstrates routing, reusable components, and page navigation using React Router.

The application includes pages such as Home, Products, Product Details, and Contact Us. Users can browse available products and access product-specific information through a structured interface.

This project was created to practice frontend development concepts and understand routing in React applications.

## Features

- Home page
- Product listing page
- Product details page
- Contact page
- Navigation using React Router
- Dynamic page rendering
- Responsive design

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- CSS

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd React-Productapp-demo
```

3. Install project dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open the browser and visit:

```bash
http://localhost:5173
```

## Project Structure

src/
│
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── App.css

## Routes

- Home
- Products
- Product Details
- Contact Us

## Learning Objectives

This project helps in understanding:

- React Router
- Component-based architecture
- Navigation between pages
- Dynamic routing
- React application structure

## Author

Developed as a React practice and learning project.

---

# Task Manager

Task Manager is a React-based application designed to help users track and manage their daily tasks efficiently. The project features interactive task tracking, a progress bar, task status categorization (total, completed, pending), validation on forms, and the ability to toggle and delete tasks.

This project was built to practice state management, form validation using React Hook Form, and clean responsive UI styling using Tailwind CSS.

## Features

- Add new tasks via a validated form with custom validation rules
- Real-time task statistics (Total, Done, Pending)
- Dynamic progress bar showing the percentage of tasks completed
- Mark tasks as completed or pending
- Delete tasks from the list
- Responsive, clean card-based UI designed with Tailwind CSS

## Technologies Used

- React (v19)
- Vite
- Tailwind CSS (v4)
- React Hook Form (v7)
- JavaScript

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd task-manager
```

3. Install project dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open the browser and visit:

```bash
http://localhost:5173
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── AddTaskForm.jsx   # Form with validation to add a new task
│   ├── TaskItem.jsx      # Individual task item displaying name and status
│   ├── TaskList.jsx      # Component listing all task items
│   └── TaskManager.jsx   # Parent component managing state and layout
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Learning Objectives

This project helps in understanding:

- Form handling and validation with `react-hook-form`
- Managing complex component state hierarchies
- Passing state-modifier functions as props
- Calculated state values derived from existing state (progress bar and status counts)
- Advanced utility-first styling with Tailwind CSS v4

## Author

Developed as a React practice and learning project.

