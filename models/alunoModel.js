const db = require( '../config/db' );

// DAO do Aluno
const Aluno = {
  async selectAll () {
    const [rows] = await db.query('SELECT ra,nome,dataNascimento,email FROM ALUNOS');
    return rows;
  },
  
  async selectByRa() {
    const [rows] = await db.query('SELECT ra,nome,dataNascimento,email FROM ALUNOS WHERE ra = ?', [ra]);
    return rows;
  },

  async insert(data) { 
    const[result] = await db.query('INSERT INTO ALUNOS SET ?', data); 
    return result;
  },

   async update(ra, data ) { 
    const [result] = await db.query('UPDATE ALUNOS SET ? WHERE RA = ?', [data, ra]);
    return result;
  },

  async delete(ra) {
    const [result] = await db.query('DELETE FROM ALUNOS WHERE RA = ?', [ra]);
    return result;
  }
};

module.exports = Aluno;