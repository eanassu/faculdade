const db = require( '../config/db' );

// DAO do Aluno
const Aluno = {
  selectAll: cb => db.query('SELECT ra,nome,dataNascimento,email FROM ALUNOS', cb),
  selectByRa: (ra, cb) => db.query('SELECT ra,nome,dataNascimento,email FROM ALUNOS WHERE ra = ?', [ra], cb),
  insert: (data, cb) => db.query('INSERT INTO ALUNOS SET ?', data, cb),
  update: (ra, data, cb) => db.query('UPDATE ALUNOS SET ? WHERE RA = ?', [data, ra], cb),
  delete: (ra, cb) => db.query('DELETE FROM ALUNOS WHERE RA = ?', [ra], cb),
};

module.exports = Aluno;