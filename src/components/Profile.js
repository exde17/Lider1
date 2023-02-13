import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from "react-json-pretty";
// import 'react-json-pretty/themes/monikai.css'

export const Profile = () => {
    const {user, isAuthenticated}= useAuth0();
  return (
    isAuthenticated && (
      <div>
          {/* <img src={user.picture} alt={user.name} /> */}
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          {/* <JSONPretty data={user} /> */}
      </div>
    )
        
  )
}
