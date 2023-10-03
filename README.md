# google-the-learning-cloud-assignment

### `npm start`

Runs the react app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run dev`

Runs the backend in the development mode.\

### deploy our backend project on render

### Create a Render Account with github
Log in to your Render account.
From your Render dashboard, click on the "Create" button in the top right corner.
Choose "Web Service" from the dropdown menu.

### fill the details 
like: Name, Environment, BuildCommand, Start Command

### Set Up Your Environment Variables
Add any necessary environment variables that your backend requires (e.g., database connection strings, API keys).
It should be in key value pairs

### Deploy Your Backend
Once you've set up your service and configured it as needed, click the "Deploy Latest" button in your Render dashboard.

Render will start the deployment process. Once it's complete, your backend will be live and you'll be provided with a URL.

### Deploying Your Frontend on Netlify

Step 1: Create an Account on Netlify
Sign up for a Netlify account at https://app.netlify.com/signup.

Step 2: Replace Localhost with Backend Deployment URL

In your frontend code, locate the places where you make API requests to your backend.
Replace http://localhost:8000 (or similar) with the URL of your deployed backend. 
For example, https://my-backend.netlify.app.


Step 3: Build Your Frontend App

Open a terminal and navigate to your frontend project directory.
Run the following command to build the frontend app:
This will generate a build folder containing the production-ready code.

Step 4: Deploy Your Frontend on Netlify

Log in to your Netlify account.
From your Netlify dashboard, click on the "Sites" tab.

Drag and drop the build folder (from your project directory) into the Netlify dashboard to deploy your frontend.

Step 5: Access Your Deployed Application
After a successful deploy, Netlify will provide you with a URL (e.g., https://your-app-name.netlify.app).
You can now access and use your application through this URL.

