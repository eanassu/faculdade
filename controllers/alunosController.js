const Aluno = require('../models/alunoModel');
const datas = require('../utils/datas');

exports.home = (req, res) => {
  res.render('alunos/home');
}

exports.cadastro = (req, res) => {
  res.render('alunos/cadastro');
}

exports.excluir = (req, res) => {
  res.render('alunos/delete');
}

exports.listarAlunos = (req, res) => {
  Aluno.selectAll((err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar alunos');
    } else {
      res.render('alunos/lista', { alunos: results });
    }
  });
}

exports.new = (req, res) => {
    const {ra,nome,dataNascimento,email} = req.body;
    req.body.dataNascimento = datas.formatDateToMySQL(req.body.dataNascimento);
    Aluno.insert(req.body, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar aluno');
        } else {
            res.redirect('/alunos');
        }
    });


};

exports.buscar = (req, res) => {
  res.render('alunos/busca');
};

exports.updateForm = (req, res) => {
  const { ra } = req.body;
  Aluno.selectByRa(ra, (err, alunos) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar aluno');
    } else {
      alunos[0].dataNascimento = datas.formatDateToBR(alunos[0].dataNascimento);
      res.render('alunos/update', { aluno:alunos[0] });
    }
  });
};

exports.update = (req, res) => {
  req.body.dataNascimento = datas.formatDateToMySQL(req.body.dataNascimento);
  const { ra } = req.params;
  Aluno.update(ra, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar aluno');
    } else {
      res.redirect('/alunos');
    }
  });
};

exports.delete = (req, res) => {
  const { ra } = req.body;
  if (!ra) {
    return res.status(400).send('RA é obrigatório para exclusão');
  }

  Aluno.delete(ra, err => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao excluir aluno');
    }

    res.redirect('/alunos');
  });
};
