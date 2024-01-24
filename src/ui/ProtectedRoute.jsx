import React from 'react'
import { useUser } from '../features/authentication/useUser';

function ProtectedRoute({ children }) {
   // 1. Load the authenticated user
   const { isLoading, user } = useUser();

   // 2. While loading, show a spinner

   // 3. If there is No authenticated user, redirect to the /login

   // 4. If there IS a user, render the app

   return children;
}

export default ProtectedRoute