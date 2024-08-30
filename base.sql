CREATE TABLE CARRO(
	id serial primary key,
	nombre varchar(40),
	anyo varchar(10),
	empresa varchar(30)
);

INSERT INTO CARRO (id, nombre, anyo, empresa) 
VALUES 
(default, 'Mustang', '2022', 'Ford'),
(default, 'Civic', '2020', 'Honda'),
(default, 'Model S', '2023', 'Tesla');

select * from CARRO;