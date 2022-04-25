# Write your MySQL query statement below
SELECT customers.name AS Customers FROM Customers left Join Orders ON Customers.id = customerId where customerId IS null