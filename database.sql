create database IF NOT EXISTS faculdade;

use faculdade;

CREATE TABLE if not exists ALUNOS(
    RA INT, 
    NOME VARCHAR(100),
    DATANASCIMENTO DATE,
    EMAIL VARCHAR(255),
    PRIMARY KEY(RA));

