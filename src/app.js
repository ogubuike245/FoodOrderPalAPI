// Import necessary packages
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// // Import middleware functions
import { allowedMethods } from './middleware/methods.middleware.js';
import { errorHandler } from './middleware/errorHandler.js';

// Import function to connect to MongoDB
import connectToDatabase from './config/config.js';

//Import app routes
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import menuRoutes from './routes/menu.route.js';
import orderRoutes from './routes/order.route.js';
import tableRoutes from './routes/table.route.js';

// Create ainstance of the Express application
const app = express();
const { API_URL } = process.env;

// Add your other middleware and routes here

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views');

// Define middleware functions and serve static files
app.use(express.static('./src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

// Allow only specific HTTP methods for certain routes
app.use(allowedMethods);

// Apply middleware for routes

// Define the application routes
app.get('/', (_, response) => {
    response.status(400).json('Welcome to the FoodOrderPal API ');
});

app.use(`${API_URL}/auth`, authRoutes);
app.use(`${API_URL}/user`, userRoutes);
app.use(`${API_URL}/menu`, menuRoutes);
app.use(`${API_URL}/order`, orderRoutes);
app.use(`${API_URL}/table`, tableRoutes);

// Call the function to connect to MongoDB
connectToDatabase(app);

// Register the error handling middleware function
app.use(errorHandler);
