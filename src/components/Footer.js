import React from 'react';

let data = new Date();
const year = data.getFullYear()

const Footer = () => {
  return (
    <footer>
      <small>&copy; Copyright {year}, Kokot Patryk email: kokot.patryk@gmail.com</small>
</footer>
  );
};

export default Footer;