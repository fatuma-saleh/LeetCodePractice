# Write your MySQL query statement below
SELECT distinct  person1.email as Email from person person1 Join person person2 on person1.email = person2.email where person1.id <> person2.id;