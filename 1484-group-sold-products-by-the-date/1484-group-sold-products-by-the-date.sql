# Write your MySQL query statement below
SELECT sell_date,COUNT(Distinct product) As num_sold, GROUP_CONCAT(DISTINCT product ) AS products FROM Activities GROUP BY sell_date ORDER BY sell_date asc;