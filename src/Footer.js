import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub
} from 'react-icons/fa'

const Footer = () => (
  <footer>
    <p>Find me on social media</p>
    <FaFacebookSquare /> <FaInstagram /> <FaGithub />
    <p>
      Powered by <a href="https://albertoivo.github.io" target="_blank" rel="noopener noreferrer">
        AlbertoIvo.github.io</a>
    </p>
  </footer>
)

export default Footer