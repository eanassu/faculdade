const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/', alunosController.home);
router.get('/cadastrar', alunosController.cadastro);
router.get('/excluir', alunosController.excluir);
router.get('/listar', alunosController.listarAlunos);
router.get('/buscar', alunosController.buscar);
router.post('/new', alunosController.new);
router.post('/update', alunosController.update);
router.post('/updateForm', alunosController.updateForm);
router.post('/delete', alunosController.delete);
module.exports = router;