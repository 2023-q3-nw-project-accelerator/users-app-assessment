# Users app assessment

## Installation

1. Clone the repository:

```
git clone git@github.com:gitlep1/users-app-assessment2.git
```

2. Navigate to the project directory:

```
cd users-app-assessment2
```

3. Install the dependencies:

```
npm install
```

4. Create a .env file

```
touch .env
```

5. Add the API url to the value of the variable REACT_APP_API_URL in the .env

```
REACT_APP_API_URL="https://users-app-backend.onrender.com/users"
```

## Usage

1. Start the application:

```
npm start
```

2. Open your browser and visit `http://localhost:3000` to access the app.

3. Make sure you're using process.env.REACT_APP_API_URL in the value of the API variable.

```
const API = process.env.REACT_APP_API_URL
```
