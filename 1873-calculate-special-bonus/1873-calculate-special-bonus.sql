# Write your MySQL query statement below
Select employee_id ,if (employee_id mod 2 NOT LIKE 0 AND name NOT LIKE 'm%',salary,0) AS bonus from employees order by employee_id; 