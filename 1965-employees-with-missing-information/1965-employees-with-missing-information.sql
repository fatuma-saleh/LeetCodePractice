# Write your MySQL query statement below
SELECT employee_id FROM Employees WHERE (employee_id NOT IN (SELECT employee_id FROM Salaries)) OR (name is null)union
SELECT employee_id from Salaries where (employee_id not in (SELECT employee_id FROM Employees )) or (salary is null)
ORDER BY Employee_id