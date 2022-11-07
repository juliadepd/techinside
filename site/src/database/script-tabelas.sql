CREATE DATABASE Monitoriapc;

USE Monitoriapc;

CREATE TABLE empresa(
    idEmpresa INT AUTO_INCREMENT PRIMARY KEY,
    nomeEmpresa VARCHAR(45),
    cnpjEmpresa char(14),
    telefoneEmpresa INT,
    emailEmpresa VARCHAR(45)
);

INSERT INTO empresa VALUES
(default, 'SPTech', '12365478965485',48374387, 'sptech@sptech.com');

select * from empresa;	


CREATE TABLE usuario(
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nomeUser VARCHAR(45),
    cargoUser VARCHAR(45),
    setorUser VARCHAR(45),
    cpfUser char(11),
    emailUser VARCHAR(45),
    senhaUser varbinary(100),
    userAdmin INT,
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
    FOREIGN KEY (userAdmin) REFERENCES usuario (idUsuario)
);

INSERT INTO usuario VALUES
(default, 'Pedro', 'tecnico', 'manutenção', '13245672138', 'pedro@gmail.com', aes_encrypt('pedro123','TechInside'), null, 1),
(default, 'Livia', 'junior', 'faturamento', '98712345672', 'livia@gmail.com', aes_encrypt('livia123','TechInside'), 1, 1);

select * from usuario;  
SELECT * from usuario where emailUser = 'pedro@gmail.com' and aes_decrypt(senhaUser,'TechInside') = 'pedro1234';

CREATE TABLE computador(
    idComputador INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(45),
    modelo VARCHAR(45),
    numSerial VARCHAR(45),
    fkUsuario INT,
    fkEmpresa INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

INSERT INTO computador () VALUES
(default,'DELL', 'XPS', 'as8765JKHGd', 1, 1),
(default,'Lenovo', 'Idea-pad', 'asdsd896JHF', 2, 1);

select * from computador;  


CREATE TABLE componente (
    idComponente INT AUTO_INCREMENT,
    tipoComponente VARCHAR(45),
    unidadeMedidaComponente VARCHAR(45),
    capacidadeComponente DECIMAL (10,2),
    triggerMax DECIMAL (10,2),
    triggerMin DECIMAL (10,2),
    fkComputador INT,
    FOREIGN KEY (fkComputador) REFERENCES computador (idComputador),
    PRIMARY KEY (idComponente, fkComputador)
);

INSERT INTO componente VALUES
    (default, 'Memoria Ram', 'mb', '8000', '7500', '2000', 1),
    (default, 'CPU', 'Celsius', null, '60', '20', 1);

select * from componente;

CREATE TABLE alerta (
    idAlerta INT PRIMARY KEY AUTO_INCREMENT,
    tipoAlerta VARCHAR(100)
);

INSERT INTO alerta VALUES
    (default, 'O componente está em seu uso maximo'),
    (default, 'O componente está quase em seu uso maximo'),
    (default, 'O componente está quase em seu uso minimo'),
    (default, 'O componente está em seu uso minimo');

CREATE TABLE captura (
    idCaptura INT AUTO_INCREMENT,
    valorCapturado DECIMAL(10,2),
    dtaCaptura DATETIME,
    fkComponente INT,
    fkAlerta INT,
    FOREIGN KEY (fkComponente) REFERENCES componente (idComponente),
    FOREIGN KEY (fkAlerta) REFERENCES alerta (idAlerta),
    PRIMARY KEY (idCaptura, fkComponente, fkAlerta)
);

INSERT INTO captura VALUES
    (default, '4987.01', '2022-01-10 22:30:12', 1, 2),
    (default, '70.35', '2022-12-10 22:30:12', 2, 1);

select * from captura;  


