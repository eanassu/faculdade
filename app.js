const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const alunosRoutes = require('./routes/alunosRoutes');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/alunos', alunosRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
