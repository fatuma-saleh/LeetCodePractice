# Write your MySQL query statement below
SELECT u.user_id as buyer_id,u.join_date,IFNULL(COUNT(o.order_id), 0)as orders_in_2019 FROM users u 
LEFT JOIN orders o on 
u.user_id = o.buyer_id
AND year(order_date)="2019"
GROUP BY U.USER_ID;