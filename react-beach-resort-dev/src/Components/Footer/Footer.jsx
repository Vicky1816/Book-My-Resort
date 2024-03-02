import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> BookMyResort.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/vivek_chaudhari_18/"
        >
          Vivek Vasudeo Chaudhari
        </a>
      </p>
    </footer>
  );
}
