create database crud;
use crud;

create table crud(
nombre varchar(10) not null,
apellido varchar(10) not null,
cedula int(8) not null,
carrera varchar(30) not null,
fecha int(4) not null
);
insert into crud(nombre, apellido, cedula, carrera, fecha)
values ('Amira', 'Ilanjian', '70007030', 'Astronauta', '2070');
