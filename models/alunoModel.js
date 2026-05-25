import { query } from '../config/db';

// DAO do Aluno
const Aluno = {
  selectAll: cb => query('SELECT * FROM ALUNOS', cb),
  selectByRa: (ra, cb) => query('SELECT * FROM ALUNOS WHERE ra = ?', [ra], cb),
  insert: (data, cb) => query('INSERT INTO ALUNOS SET ?', data, cb),
  update: (ra, data, cb) => query('UPDATE ALUNOS SET ? WHERE RA = ?', [data, ra], cb),
  delete: (ra, cb) => query('DELETE FROM ALUNOS WHERE RA = ?', [ra], cb),
};

export default Aluno;