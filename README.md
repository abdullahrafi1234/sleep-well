# Sleep Well Real Estate

## Live Site

https://nine-assignment-project.web.app/

## Features

- * Explore a vast selection of properties, including hotels, vacation rentals, apartments, and more. Each listing includes detailed descriptions, high-resolution images, and essential information such as amenities, pricing, and location.
- * User-friendly interface with intuitive navigation.
- * Responsive design ensures optimal viewing experience across devices.
- * Secure login functionality for registered users.
- * Interactive dashboard for personalized content and account management.

## Technologies Used

- **Frontend**: React, DaisyUI, TailwindCSS, React Leaflet, React Query (TanStack Query), daisyUI
- **Backend**: ExpressJS, Node.js
- **Database**: MongoDB Atlas
- **Others**: SweetAlert2 for alerts, Axios for HTTP requests, Firebase Auth, Firebase Hosting

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abdullahrafi1234/sleep-well.git
```

2. Install dependencies:
```bash
cd project name
npm install
```

3. Create a .env.local file in the root directory and add your Firebase config keys and other details:

```env
VITE_APIKEY=your-firebase-api-key
VITE_AUTHDOMAIN=your-firebase-auth-domain
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-firebase-storage-bucket
VITE_MESSAGINGSENDERID=your-firebase-messaging-sender-id
VITE_APPID=your-firebase-app-id
VITE_IMAGE_HOSTING_KEY=imgbb-image-hosting-key
VITE_PAYMENT_GATEWAY_PK=stripe-public-key
```

4. Start the development server:
 ```bash
npm run dev
```

5. Visit http://localhost:5000 in your browser to view the application.




