
## Installation

1. Install my-project with npm
```bash
npm i 
```
2. Crear base de datos 
```bash
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
```
3. crear archivo .env en la riaz. Con esta varible local
```bash
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:PORT/DB_NAME"
```
Ejemplo:
```bash
DATABASE_URL="postgres://postgres:admin@localhost:5432/asa"

```
4. configurar puerto en .env
```bash
PORT=8080
```

