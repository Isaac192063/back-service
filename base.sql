CREATE TABLE CARROS(
id serial primary key,
	nombre varchar(40) 
);

select * from CARROS

INSERT INTO CARROS (id, nombre) VALUES (default, 'renault');

CREATE TABLE MODELS(
id serial primary key,
name varchar(100) not null
);

SELECT * FROM MODELS;

INSERT INTO MODELS(id, name) 
VALUES (default, 'renault'), (default, 'audy');