# Write your MySQL query statement below
Select emp.name as Employee  from Employee emp Join Employee mng on
emp.managerId = mng.id 
where emp.salary > mng.salary;