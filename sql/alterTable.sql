select * from customer3;

alter table customer3 add age int ;  /* to add new column in table */

alter table customer3 alter column age int; /* to change data type of column */

alter table customer3 drop column age; /* it uses alot time and resources */

 /* alter table customer3 set unused column age;   sql server don't have 'unuse' key word */

exec sp_columns customer3;  /* use see desc(description) of table (structure) */
update customer3 set age=22;



