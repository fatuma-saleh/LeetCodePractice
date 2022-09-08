# Write your MySQL query statement below
SELECT distinct user_id, max(time_stamp) AS last_stamp from logins where YEAR(time_stamp ) = '2020'group by user_id