# Write your MySQL query statement below
SELECT day1.id FROM Weather day1 join Weather day2 WHERE day1.Temperature > day2.temperature AND DATEDIFF(day1.recordDate , day2.recordDate)=1