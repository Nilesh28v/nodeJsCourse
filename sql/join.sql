create table student(stid int, sname varchar(20), smailid varchar(30),courseid int);

create table course(courseid int, cname varchar(20),cfee int);

update student set courseid=40 where stid = 104;
select * from student;
select * from course;

/* INNER JOIN (matching data)*/

select * from student inner join course on student.courseid= course.courseid;


/* OUTER JOIN (matching and unmatching)*/
/*LEFT OUTER JOIN*/
select * from student;
select * from course;
select * from student s left outer join course c on s.courseid=c.courseid;

/* RIGHT OUTER JOIN */
select * from student;
select * from course;
select * from student s right outer join course c on s.courseid= c.courseid;

/*FULL OUTER JOIN */
select * from student;
select * from course;
select * from student s full outer join course c on s.courseid = c.courseid;


/*CROSS JOIN (join 2 or more than 2 table without any condition )
(there is no requred  common column in tables*/
select * from student;
select * from course;
select * from student cross join course;


/* NATURAL JOIN (avoid duplicate columns from join table)(not supported in sql server) */
