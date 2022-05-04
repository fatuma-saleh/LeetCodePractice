# Write your MySQL query statement below
SELECT d1.id FROM Weather d1 join Weather d2 WhERE d1.Temperature > d2.temperature AND DATEDIFF(d1.recordDate , d2.recordDate)=1