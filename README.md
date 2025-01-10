# RNBaseProject

## App Information
**RNBaseProject** is a starter template for a React Native application. It includes essential configurations and boilerplate code to kickstart your project efficiently. The app follows industry best practices, incorporating state management with Redux, navigation with React Navigation, and API integration using Axios.

### Features
- **React Native** for building cross-platform apps.
- **Redux Toolkit** for state management.
- **React Navigation** for handling navigation flows.
- **Axios** for API integration with interceptors.
- Customizable project structure for scalability and maintainability.

---

## Project Setup

### Prerequisites
- **Node.js** version >= 18
- **React Native CLI** installed globally
- An Android or iOS simulator/device

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/RNBaseProject.git
   cd RNBaseProject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   BASE_URL=https://fakestoreapi.com
   ```

4. Run the project:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

5. Start the Metro bundler:
   ```bash
   npm start
   ```

### Lint and Test
- Run the linter:
  ```bash
  npm run lint
  ```
- Run tests:
  ```bash
  npm run test
  ```

---

## Used Libraries
| Library                           | Version  | Purpose                                 |
|-----------------------------------|----------|-----------------------------------------|
| React Native                      | 0.76.2   | Core framework for building the app     |
| React                             | 18.3.1   | Core React library                      |
| Redux Toolkit                     | 2.5.0    | State management                        |
| React Navigation                  | 7.0.14   | Navigation framework                    |
| Axios                             | 1.7.9    | API integration                         |
| React Native Dotenv               | 3.4.11   | Environment variables management         |
| React Native Gesture Handler      | 2.21.2   | Gesture handling in navigation          |
| React Native Vector Icons         | 10.2.0   | Icons for the app                       |
| React Native Reanimated           | 3.16.6   | Animations library                      |

---

## Project Structure
```
RNBaseProject/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js         # Navigation configuration
│   ├── redux/
│   │   ├── store.js                # Redux store setup
│   │   └── userSlice.js            # Redux slice for user state
│   ├── screens/
│   │   ├── HomeScreen.js           # Home screen with API data fetching
│   │   ├── DetailsScreen.js        # Details screen navigation example
│   │   └── ProfileScreen.js        # Profile screen with state updates
│   ├── services/
│   │   └── ApiService.js           # Axios service with interceptors
│   ├── styles/
│   │   └── globalStyles.js         # Global styles for the app
│   └── App.js                      # Entry point of the app
├── .env                            # Environment variables
├── package.json                    # Project metadata and dependencies
└── README.md                       # Documentation (you're here!)
```

---

## How to Use
- **Navigation**: Defined in `AppNavigator.js` using React Navigation's stack-based routing.
- **State Management**: Redux is configured in `store.js` with slices defined in `userSlice.js`.
- **API Integration**: Axios setup in `ApiService.js` for making network requests.
- **Styling**: Centralized styles defined in `globalStyles.js`.

---

## Contribution
Feel free to fork the repository, make changes, and create a pull request. Contributions are welcome!