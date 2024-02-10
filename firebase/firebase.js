import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAVZdGcG4SEM24eGWaABsZM03vP_hDzYlU",
    authDomain: "hello-world-db040.firebaseapp.com",
    projectId: "hello-world-db040",
    storageBucket: "hello-world-db040.appspot.com",
    messagingSenderId: "349827654245",
    appId: "1:349827654245:web:ef3f53d601bd9d6da79c8c",
    measurementId: "G-DSM1375L2Y"
  };


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignUp = async () => {
    try {

      // Hash the password

      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      
      await set(ref(db, `users/${email.replace('.', ',')}`), {
        email,
        password: hashedPassword
      });
      

      
      setLoggedInCookie();
      console.log("User signed up successfully!");
    }
     catch (error) {
      console.error("Error signing up:", error);
    }
  };


  const handleSignIn = async () => {
    try {
     
      const snapshot = await get(ref(db, `users/${email.replace('.', ',')}`));

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const storedHashedPassword = userData.password;

       
        const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

        if (passwordMatch) {
          
          setLoggedInCookie();
          console.log("User signed in successfully!");
        } else {
          console.error("Invalid email or password.");
        }
      } else {
        console.error("User not found.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  
  const setLoggedInCookie = () => {
    Cookies.set('login', true, { expires: 2 / 24 }); // Expiry in 2 hours
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Login;