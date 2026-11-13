require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const alunosRoutes = require('./routes/alunosRoutes');

// Protege os cabeçalhos HTTP (permitindo o CDN do Bootstrap nas views)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
    },
  },
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use('/alunos', alunosRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
