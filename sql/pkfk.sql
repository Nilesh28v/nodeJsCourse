use nilesh;
create table practicepk
(id int primary key ,name varchar(20));

insert into practicepk values(1,'nilesh');
insert into practicepk values(2,'nilesh1');
insert into practicepk values(3,'nilesh2');

select * from practicepk;

create table practicefk
(id int foreign key references practicepk, lname varchar(20));

insert into practicefk values(1,'varma'); 
insert into practicefk values(4,'varma');  /* this will not accepted bcz in pk table there are only 1,2,3 values */
insert into practicefk values(2,'vishwakarma');
select * from practicefk;