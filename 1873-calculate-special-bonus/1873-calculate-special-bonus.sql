# Write your MySQL query statement below
Select employee_id ,if (employee_id mod 2 <> 0 AND name not like 'm%',salary,0) as bonus from employees order by employee_id; 