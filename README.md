# The Wild Oasis

The Wild Oasis is a sophisticated full-stack web application developed with Vite and React. Tailored for hotel employees, it empowers users to seamlessly manage cabins, bookings, and related tasks within a robust and intuitive interface.

## Table of Contents

- [Features](#features)
- [Pictures](#pictures)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication:**
   - Users need to log in to perform tasks.
   - New users can sign up within the application.

2. **Profile Management:**
   - Users can upload avatars and change their name and password.

3. **Cabin Management:**
   - Table view with cabin details.
   - Users can update, delete, or create new cabins.

4. **Booking Management:**
   - Table view with booking details.
   - Filter bookings by status.
   - Users can delete, check-in, or check out a booking.

5. **Payment Processing:**
   - Users can confirm payment on guest check-in.

6. **Guest Information:**
   - Guest data includes full name, email, national ID, nationality, and country flag.

7. **Dashboard:**
   - Display important information for the last 7, 30, or 90 days.
   - List of guests checking in and out.
   - Statistics on bookings, sales, check-ins, and occupancy rate.
   - Charts showing daily sales and stay durations.

8. **Application Settings:**
   - Users can define application-wide settings such as breakfast price, min/max nights per booking, and max guests per booking.

9. **Dark Mode:**
   - Toggle between light and dark modes.


## Pictures

## Technologies Used

- React
- Vite
- Supabase
- React Query
- Styled Components
- React Hook Form
- Recharts
- React Router
- React Icons

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/huzaifaghazali/wild-oasis
   cd your-repo
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Set up Supabase:**
   - Create a Supabase project and configure your environment variables. 
   ```bash
   VITE_SUPABASE_KEY=Add_Your_Own_key
   ```
4. **Run the development server:**

   ```bash
   npm run dev
   ```
4. **Open your browser:**

   ```bash
   Visit http://localhost:5173 to view the application.
   ```