create database Syncro;
use Syncro;

create table Business
(
	ID int identity( 1 , 1 ) primary key,
	USERNAME nvarchar(50) not null,
	EMAIL nvarchar(50) not null,
	PASSWROD varbinary(max) not null
);

create table Freelance
(
	ID int identity( 1 , 1 ) primary key,
	USERNAME nvarchar(50) not null,
	EMAIL nvarchar(50) not null,
	PASSWROD varbinary(max) not null
);

create table Projects_Free
(
	ID int Identity( 1 , 1 ),
	PROJECT_NAME nvarchar(50),
	PROJECT_DESCRIPTION nvarchar(200),
	NUMBER_OF_MEMBERS int CHECK (NUMBER_OF_MEMBERS <= 3)
);

create table Projects_Pro
(
	ID int Identity( 1 , 1 ),
	PROJECT_NAME nvarchar(50),
	PROJECT_DESCRIPTION nvarchar(200),
	NUMBER_OF_MEMBERS int CHECK (NUMBER_OF_MEMBERS <= 6)
);

create table Projects_WorkStation
(
	ID int Identity( 1 , 1 ),
	PROJECT_NAME nvarchar(50),
	PROJECT_DESCRIPTION nvarchar(200),
	NUMBER_OF_MEMBERS int
);

alter table Freelance
add POSITION nvarchar(50),
	OVERREVIEW nvarchar(150),
	SKILLS nvarchar(50),
	ABOUT nvarchar(200);

select * from Freelance;

alter table Business
add MEMBERSHIPS nvarchar(30);

select * from Business;