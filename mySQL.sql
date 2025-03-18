create database backhand;
use backhand;
create table student(
  id int primary key ,
  name varchar(60),
  city varchar(50) default "karachi",
  age int check (age>=10),
  marks int,
  grade char(20)
);
select * from student;

insert into student (id,name,city,age,marks,grade)
values(101,"usama",default,18,90,"A+"),
(102,"shayan","lahore",19,80,"A"),
(103,"hammad","islamabad",20,70,"B"),
(104,"wahab","peshawer",21,60,"C"),
(105,"hanzala",default,22,50,"D");

-- distinct
select distinct city from student;
 
-- clauses
-- >
-- <
-- >=
-- <=
-- in
-- between
-- or 
-- and

select * from student where city = "Islamabad";
select * from student where marks < 100;
select * from student where city in ("karachi" ,"lahore");
select * from  student where marks between 70 and 100;

-- Aggredate function
-- count 
-- min
-- max 
-- avg
select count(name) from student;
select min(age) from student;
select max(grade) from student;
select avg(marks) from student;

-- order by clause 
select * from student order by name asc limit 3;

-- group by clause
select marks,grade from student
group by marks,grade;

-- having clause 
select id , name , age from student 
group by id , name , age having (age>=20) limit 2;

-- General order Rule
-- select column
-- from table 
-- where conditon
-- group by 
-- having condition 
-- order by 
 select * from student;
 
select id,name,age,city,marks,grade from student 
where (age>=20) group by id,name,age,city,marks,grade Having max(marks>60)
order by name asc limit 4;

-- Foreign Key

create table employe(
  id int primary key auto_increment,
  name varchar(50)
);

insert into employe(id , name)
values(105,"Harry"),
(106,"potter");
select * from employe;

create table manager(
  id int primary key auto_increment,
  name varchar(50),
  f_id int,
  foreign key (f_id) references employe (id)
  on update cascade
  on delete cascade
);

insert into manager(name,f_id)
values("usama",105),
("pio",106);

select * from manager;
update employe set id = 555 where id = 106;
update manager set name = "arqam" where name = "usama";

--  Update 

create database updat;
use updat;

create table teacher(
  id int primary key ,
  name varchar(60),
  city varchar(50) default "karachi",
  age int check (age>=10),
  marks int,
  grade char(20)
);
select * from teacher;

insert into teacher (id,name,city,age,marks,grade)
values(101,"usama",default,18,90,"A+"),
(102,"shayan","lahore",19,80,"A"),
(103,"hammad","islamabad",20,70,"B");

set sql_safe_updates =0;
set sql_safe_updates =1;

select * from teacher;
update teacher set marks = marks+9;
update teacher set grade ="A+1"where marks = 99;
update teacher set grade = "A+1"  where  city = "karachi";
update teacher set grade ="C"where marks between 60 and 99;
update teacher set name = "riaz" where name =  "shayan";

-- Alter
select * from bachay;
alter table teacher add column country varchar(50);
update teacher set country = "pakistan";
update teacher set country ="uk" where id = 101;
alter table teacher modify country int;
alter table teacher modify country varchar(50);
alter table teacher change column country state varchar(50);
alter table teacher rename bachay;

-- empty record
truncate bachay;

-- Joins