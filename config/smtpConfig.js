const smtpConfig = {
    host: "smtp.example.com", // Adresse du serveur SMTP
    port: 587, // Port du serveur SMTP
    secure: false, // Utilisez true si votre serveur SMTP nécessite une connexion sécurisée (TLS/SSL)
    auth: {
      user: "your-email@example.com", // Votre adresse e-mail
      pass: "your-email-password" // Mot de passe de votre adresse e-mail
    }
  };
  
  export default smtpConfig;
  