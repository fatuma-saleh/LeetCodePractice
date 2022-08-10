# Write your MySQL query statement below
SELECT customers.name AS Customers FROM Customers left Join Orders ON CustomerId = Customers.id where customerId IS null