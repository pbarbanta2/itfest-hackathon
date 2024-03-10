// Importăm modulul Express
const express = require('express');
const app = express();
const port = 3000; // Portul pe care serverul va asculta

// Middleware pentru a servi fișierele statice din directorul 'public'
app.use(express.static('public'));

// Ruta pentru pagina principală
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta pentru gestionarea cererilor de la client
app.post('/api/user', (req, res) => {
  // Aici poți gestiona cererea pentru adăugarea unui nou utilizator în sistem
});

// Pornim serverul și ascultăm pe portul definit
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
