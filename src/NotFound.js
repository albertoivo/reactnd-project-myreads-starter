import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import notfound from "./icons/not-found.jpg"

const NotFound = () => (
  <div>
    <Header />
    <div className="center">
      <h1>404 - Page not found</h1>
      <p>
        Sorry, we can’t find that page that you’re looking for. You can try
        again by going <Link to="/">Home</Link> back to the homepage.
      </p>
      <div>
        <img className="not-found" src={notfound} alt="not-found" />
      </div>
    </div>
  </div>
)

export default NotFound;
