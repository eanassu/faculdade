const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao projeto faculdade!');
});

const alunosRoutes = require('./routes/alunosRoutes');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/alunos', alunosRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.redirect('home'); // ou res.render('algumaView') se quiser uma página inicial
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
