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

exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.selectAll(); 
    res.render('alunos/lista', { alunos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar alunos');
  }
}

exports.new = async (req, res) => {
    const {ra,nome,dataNascimento,email} = req.body;
    req.body.dataNascimento = datas.formatDateToMySQL(req.body.dataNascimento);
    try {
        const result = await Aluno.insert(req.body);
        res.redirect('/alunos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar aluno');
    }
};

exports.buscar = (req, res) => {
  res.render('alunos/busca');
};

exports.updateForm = async (req, res) => {
  const { ra } = req.body;
  try {
    const aluno = await Aluno.selectByRa(ra);
    if (!aluno) {
      return res.status(404).send('Aluno não encontrado');
    }
    aluno.dataNascimento = datas.formatDateToBR(aluno.dataNascimento);
    res.render('alunos/update', { aluno });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar aluno');
  }
};

exports.update = async (req, res) => {
  req.body.dataNascimento = datas.formatDateToMySQL(req.body.dataNascimento);
  const { ra } = req.params;
  console.log(ra);
  const {nome, dataNascimento, email} = req.body;
  console.log(req.body);
  try {
    await Aluno.update(ra, {nome, dataNascimento, email});
    res.redirect('/alunos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar aluno');
  }
};

exports.delete = async (req, res) => {
  const { ra } = req.body;
  try {
    await Aluno.delete(ra);
    res.redirect('/alunos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao excluir aluno');
  }
};