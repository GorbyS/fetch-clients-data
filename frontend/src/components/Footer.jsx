import React from 'react';

export default function Footer() {
  const handleRickroll = (e) => {
    e.preventDefault();
    
    const newWindow = window.open('about:blank', '_blank');
    
    const htmlContent = `
      <html>
        <head>
          <title>You've been rickrolled!</title>
        </head>
        <body style="margin:0;padding:0;">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
          ></iframe>
        </body>
      </html>
    `;
    
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  }

  return (
    <footer className="form-footer">
      <div className="footer-content">
        <p>&copy; 2024 Segrey Gorbachev</p>
        <nav className="footer-nav">
          <a href="#" onClick={handleRickroll}>Privacy Policy</a>
          <a href="#" onClick={handleRickroll}><b>Rickroll yourself</b></a>
          <a href="#" onClick={handleRickroll}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

//Code-review