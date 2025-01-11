
# Product Management App

## Overview
This React Native application provides a product management platform, allowing users to add, edit, delete, and view products. The app is equipped with authentication, loader management, category dropdowns, and toast notifications for user feedback. The backend API handles authentication, product CRUD operations, and category management.

## Features
- **Authentication**: Allows users to log in using email and password.
- **Product Management**: Users can add, edit, or delete products.
- **Category Selection**: Products can be categorized using a dropdown menu that fetches categories from the server.
- **Toast Notifications**: Displays success, error, or information messages.
- **Loader**: A loading indicator is shown when the app is performing an API call.
- **Splash Screen**: Shows a welcome screen and checks if the user is logged in.
- **State Management**: Utilizes Redux for managing user state and loader visibility.

## Installation

To run the app locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/patilrushikesh78/RNBaseProject.git
cd RNBaseProject
```

### 2. Install Dependencies
Make sure you have Node.js and npm/yarn installed, then run:
```bash
npm install
# or
yarn install
```

### 3. Set up Environment Variables
Create a `.env` file in the root of the project and add your base URL for the API:
```env
BASE_URL=https://api.escuelajs.co/api/v1
```

### 4. Run the App
To run the app on an Android or iOS emulator, use the following command:

For Android:
```bash
npx react-native run-android
```

For iOS:
```bash
npx react-native run-ios
```

## Technologies Used
- **React Native**: The framework for building the app.
- **Redux Toolkit**: For state management.
- **Axios**: For making API requests.
- **React Navigation**: For navigating between screens.
- **React Native Element Dropdown**: For the dropdown UI component.
- **React Native Toast Message**: For displaying toast notifications.
- **AsyncStorage**: For storing the authentication token.

## Screens
- **Splash Screen**: Displays a loading indicator and checks if the user is logged in.
- **Login Screen**: Allows the user to log in with email and password.
- **Home Screen**: Displays the list of products, with options to add, edit, or delete products.
- **Product Form Screen**: Allows users to add or edit a product's details such as name, price, description, and category.
- **Logout**: Provides an option to log out and clear the authentication token.

## Components
- **AppLoader**: A modal spinner that displays while an API request is being processed.
- **CategoryDropdown**: A dropdown component that allows users to select a category from a list fetched from the server.
- **EmptyView**: A view that is shown when there is no data to display (e.g., no products).
- **ToastConfig**: Custom configuration for toast notifications to display success, error, and info messages.
- **ProductForm**: Form used to add or edit products.

## Redux State
The app uses Redux for managing two pieces of state:
- **Loader**: Displays a loading spinner when data is being fetched.
- **User**: Stores user details such as name and age, as well as authentication state.

## API Endpoints
The following API endpoints are used by the app:

- `POST /auth/login`: Logs the user in and returns an authentication token.
- `GET /products`: Retrieves a list of products.
- `POST /products`: Adds a new product.
- `PUT /products/:id`: Updates an existing product.
- `DELETE /products/:id`: Deletes a product.
- `GET /categories`: Retrieves a list of product categories.

## Error Handling
If there is an error with the API request, a toast message will be shown with the error details. API errors are handled globally, displaying the error message if something goes wrong.
