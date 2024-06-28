# AuthenticationSystem-Next

This project showcases a simple authentication system built with Next.js following the MVC architecture. It interacts with a backend API to handle user authentication and authorization. The system includes public and protected routes, user registration, login, and logout functionalities.

## Features

- User Registration
- User Login
- User Logout
- Protected Routes
- Public Routes

## Technologies Used

- **Next.js**: Front-end framework
- **React**: UI Library
- **Tailwind CSS**: Styling
- **shadcn/ui**: UI components
- **Axios**: HTTP client for API requests

## Setup and Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/WannaCry081/AuthenticationSystem-Next.git
    cd authenticationsystem-next
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Setup Environment Variables**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```plaintext
    NEXT_PUBLIC_ENV=
    NEXT_PUBLIC_API_URL=
    NEXT_PUBLIC_HOST=
    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

## Usage

1. **Register a New User**

    Navigate to `/register` and create a new account.

2. **Login**

    Navigate to `/login` and login with your credentials.

3. **Access Protected Route**

    After logging in, navigate to `/home`. This route is protected and requires authentication.