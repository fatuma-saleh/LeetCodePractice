# Write your MySQL query statement below
select activity_date as day,count(distinct(user_id))
AS active_users From activity
where datediff('2019-07-27',activity_date)<30 
And activity_date <= '2019-07-27' 
group by activity_date 
having active_users > 0;