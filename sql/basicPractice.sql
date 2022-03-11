use nilesh;

select distinct * from customer3;

insert into customer3 values(1,'nilesh','nilesh@gmial.com');
insert into customer3 values(2,'shubham','shubham@gmial.com');
insert into customer3 values(3,'rahul','rahul@gmial.com');
insert into customer3 values(4,'saurabh','saurabh@gmial.com');
insert into customer3 values(5,'srikant','srikant@gmial.com');
insert into customer3 values(6,'akhilesh','akhilesh@gmial.com');
insert into customer3 values(7,'anita','anita@gmial.com');
insert into customer3 values(8,'sikha','sikha@gmial.com');
insert into customer3 values(9,'pratyusha','pratyusha@gmial.com');
insert into customer3 values(10,null,'abc@gmail.com');
insert into customer3 values(10,'nbc','abc@gmail.com');

select name2,id from customer3;

select distinct * from customer3;  /* distinct only show unique value */
select distinct name2 from customer3;
select count (distinct name2) from customer3; /*how many unique values are there*/


select distinct * from customer3 where id<5;  /*where caluse is used in update,delete,select*/
select distinct * from customer3 where name2='nilesh';  /* using distinct bcz there is duplicate vlues*/
select distinct * from customer3 where name2='nilesh' and email='nilesh@gmial.com';

select distinct * from customer3 where name2 like '%h';    /* in %h  that % is showing it will take all letters but last letter should be 'h' */
select distinct * from customer3 where name2 like 'n%';
select distinct * from customer3 where name2 like 'n__';   /* it should have */
select distinct * from customer3 where email like '%@%';  /* it will take before and after letters of @ */
select distinct * from customer3 where email like 'n%@';  /* not working */
select distinct * from customer3 where email not like 'n%';

select distinct * from customer3 where id in (1,2);
select distinct * from customer3 where id not in (1,2);

select distinct * from customer3 where id between 2 and 7;

select distinct * 
from customer3
where id not between 2 and 3
order by name2;

select distinct * 
from customer3 
order by name2 desc;  /*  'asc' is defalut and for decrement we use 'desc' */

select distinct  * from customer3 order by email asc, name2 desc; /* use case is not clear but this is also possible */


select distinct * from customer3 where id is not null;
select distinct * from customer3 where name2 is null;

update customer3
set name2='Mukesh' where name2 is null;

/* UPDATE Customer3
SET name2='Juan';   this query can make every name2 to 'Juan' */

delete from customer3 where name2='mukesh';
/* DELETE FROM Customer3; this can delete all records */

select top 3 * from customer3; /* it will give top 3 values */
select distinct top 50 percent * from customer3; /* 50 percent only sho half of the records */

select min(id) from customer3 ;
select max(id) from customer3 ;
select min(id) as smallestvalue from customer3 ;  /* aliasing */

select count(id) from customer3;  /* here distinct is not working */
select avg(id) from customer3;  /* avg() can only be performed on int */
select sum(id) from customer3; 
select distinct * from customer3;


select * from customer3 where name2 like '[ns]%';  /* it is taking name from n and s */


create table table1(id 