# Write your MySQL query statement below
SELECT customer_number from orders GROUP BY customer_number ORDER BY  count(customer_number) DESC limit 1