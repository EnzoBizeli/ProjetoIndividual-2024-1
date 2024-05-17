-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database ProjetoIndividual;
use ProjetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
confirmacao_senha varchar(45)
);

create table quiz (
tentativa int primary key auto_increment,
fkUsuario int, 
pontuacao int,
constraint fkQuizUsuario foreign key (fkUsuario)
	references usuario(idUsuario)
);