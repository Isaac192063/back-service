
## Installation

1. Install my-project with npm
```bash
npm i 
```
2. Crear base de datos 
```bash
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

```

3. configurar variables en .env
```bash
PORT=8080
DB_URL=postgres://postgres:ADMIN@localhost:5433/asa
JWT_HASH=valor_random
```