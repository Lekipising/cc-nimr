# Nimcure: A Seamless Prescription Delivery Service

Nimcure is a drug prescription delivery service. It focuses on providing a smooth and efficient user experience for pharmacy attendants to initiate and manage prescription deliveries.

## Live Demo

[https://nimcure.vercel.app](https://nimcure.vercel.app)

## Key Features

- **Intuitive UI**: Designed according to provided Figma specifications, ensuring a pixel-perfect and user-friendly interface.
- **Efficient Navigation**: Utilizes Next.js App Router for complex routing and optimized performance.
- **Server Components**: Leverages React Server Components for faster rendering, improved security, and enhanced caching.
- **Patient Management**: Allows attendants to view patient details, delivery history, and assign new deliveries.
- **Delivery Management**: Features a functional filter sidebar with server-side rendering for efficient delivery tracking.
- **Package Scanning**: Integrates a scanning library for efficient package code extraction (in development).
- **State Preservation**: Layouts ensure persistent UI state across different routes, enhancing user experience.

## Pages

- **Login**: Secure authentication for pharmacy attendants.
- **Patients**: Displays a list of patients with detailed information and delivery history.
- **Patient View**: Provides comprehensive patient information, rider details, and delivery history.
- **Package Assignment**: Dedicated page for assigning new deliveries, setting drug cycles, and assigning riders.
- **Deliveries**: Shows a list of deliveries with a filter sidebar for refined tracking.
- **Admin**: (Not yet implemented)
- **Riders**: (Not yet implemented)

## Technology Stack

- **Next.js**: A React framework for building high-performance web applications.
- **App Router**: Enables modern React features like Server Components and Streaming.
- **Server Components**: Renders UI on the server for improved performance and security.
- **Layouts**: Provides a mechanism for shared UI and state preservation between routes.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Scanning Library**: qr-scanner

## How it Works

1. **Authentication**: Pharmacy attendants log in to access the dashboard.
2. **Patient Management**: Attendants can view a list of patients, access their details, and view delivery history.
3. **Delivery Initiation**: Attendants can initiate new deliveries or renew existing ones for patients.
4. **Package Assignment**: Attendants assign packages to patients, set drug cycles, and assign dispatch riders.
5. **Delivery Tracking**: Attendants can track deliveries using the filter sidebar on the Deliveries page.
6. **Package Scanning**: Attendants can scan package codes to streamline the delivery process (in development).

## Development Focus

This project prioritizes the user experience and UI design, ensuring a seamless and efficient workflow for pharmacy attendants. The use of Next.js App Router with Server Components optimizes performance and provides a modern development experience.

## Future Enhancements

- Complete package scanning functionality.
- Develop the Admin and Riders pages.
- Implement additional features based on user feedback.
- Enhance UI with animations and micro-interactions.
- Once integrated with a backend, implement end to end testing.

## Getting Started

1. **Clone the repository**: `git clone https://github.com/lekipising/cc-nimr`
2. **Install dependencies**: `pnpm install`
3. **Run the development server**: `pnpm run dev`

## Author

Liplan Lekipising
Visit my [Portfolio](https://lekipising.com)
