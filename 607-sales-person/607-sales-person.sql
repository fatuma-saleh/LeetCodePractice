# Write your MySQL query statement below
Select name  FROM Salesperson where sales_id not in ( select sales_id from orders join Company  on company.com_id = orders.com_id where name= 'RED' ) 