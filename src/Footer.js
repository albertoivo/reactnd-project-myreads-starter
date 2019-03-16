import React from 'react'
import {
  FaFacebook, FaInstagram, FaGithub, FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => (
  <footer>
    <p>Find me on social media</p>
    <a href="https://www.facebook.com/nossasrotass" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://instagram.com/nossasrotas" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://github.com/albertoivo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/alberto-ivo-vieira" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    <p>
      Powered by
      <a href="https://albertoivo.github.io" target="_blank" rel="noopener noreferrer">AlbertoIvo.github.io</a>
    </p>
  </footer>
)

export default Footer