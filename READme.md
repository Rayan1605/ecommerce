# Ecommerce Project 

## Overview

This ecommerce platform is a complete web application that makes shopping easy for users and provides powerful tools for administrators. It is built using modern technologies like React for the frontend and Node.js with Express for the backend. MongoDB is used to store data, and AWS services are used to ensure the platform can grow and stay reliable.

The platform includes important features such as a shopping cart, product reviews, search functionality, and a smooth checkout process with PayPal and credit card payment options. Admins can manage products, users, and orders, while customers can browse, make purchases, and track their orders easily.

This project is designed to handle real-world online shopping needs, providing a simple and efficient solution for online businesses.


## Features

This ecommerce platform comes with a range of features to provide a complete shopping experience for users and robust management tools for administrators:

- **Shopping Cart**: Users can easily add and manage items in their cart before checkout.
- **Product Reviews & Ratings**: Customers can leave feedback and rate products to help other users make informed decisions.
- **Featured Products Carousel**: Highlights top products in a rotating carousel on the homepage.
- **Paginated Product Listings**: Products are displayed with pagination for easier navigation across multiple pages.
- **Product Search**: Users can search for specific products using keywords.
- **User Accounts & Order History**: Customers can view and manage their profiles and past orders.
- **Admin Controls**:
    - **Product Management**: Admins can add, update, or remove products from the store.
    - **User Management**: Admins can oversee user accounts, including editing or removing users.
    - **Order Management**: Admins can view order details and mark orders as delivered.
- **Checkout Process**: A complete checkout system including shipping details and payment options.
- **Payment Integration**: Supports payments via PayPal and credit cards.

## Technologies Used

This ecommerce project was built using various technologies to ensure it runs smoothly and securely. Here are some of the main tools and features used:

### Frontend
- **React**: Built the user interface using functional components and hooks.
- **React Router**: Handled page navigation within the app.
- **React-Bootstrap**: Used for building a responsive design with ready-made components.
- **Redux**: Managed global app state to keep data consistent across the app.

### Backend
- **Node.js**: Powered the backend server, providing a fast and efficient environment for handling API requests.
- **Express**: Set up the backend API to handle data requests from the frontend.
- **MongoDB & Mongoose**: Used MongoDB as the database, with Mongoose to interact with the data.
- **JWT Authentication**: Secured user logins and sessions using JSON Web Tokens (JWT) stored in HTTP-Only cookies.
- **PayPal API**: Integrated PayPal for processing payments.


## AWS Resources Used

In this ecommerce project, several AWS services were used to make sure the application could scale, stay secure, and remain highly available. Here's a quick overview:

---

### Networking
- **VPC (Virtual Private Cloud):** Created a private network to keep resources secure.
- **Subnets:** Divided the network into smaller sections, some public and some private.
- **Internet Gateways:** Allowed the VPC to connect to the internet.
- **Route Tables:** Directed traffic between different parts of the network and the internet.
- **Elastic IPs:** Assigned static IP addresses to certain resources, like EC2 instances.
- **NAT Gateways:** Let instances in private areas of the network connect to the internet safely.

### Security
- **Security Groups:** Controlled which traffic could come in and go out of EC2 instances.
- **AWS Certificate Manager:** Managed SSL certificates to secure the website.
- **IAM Roles:** Controlled access to AWS resources securely.

### Load Balancing & Autoscaling
- **Application Load Balancers:** Balanced traffic to ensure reliability and handle more users.
- **ALB Target Groups (Application Load Balancer):** Spread incoming traffic across multiple EC2 instances.
- **Autoscaling Group:** Automatically added or removed EC2 instances based on the app's needs.

### Compute & Storage
- **EC2 Launch Configurations:** Pre-configured settings for starting EC2 instances.
- **EC2 Instances:** Provided servers to run the backend of the ecommerce application.
- **S3 (Simple Storage Service):** Stored product images, static files, and backups.

### Monitoring & Deployment
- **CodeDeploy:** Automated deployment of code updates to the EC2 instances.
- **CloudWatch:** Monitored logs and performance metrics to keep an eye on how the app is running.
- **CloudFront:** Delivered content quickly to users around the world.

---