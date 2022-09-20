# Write your MySQL query statement below
SELECT  score,DENSE_RANK() over(ORDER BY score desc) AS "rank" FROM scores