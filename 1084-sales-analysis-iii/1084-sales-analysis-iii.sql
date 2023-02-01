# Write your MySQL query statement below
SELECT product.product_id,product_name From Product join sales on product.product_id = sales.product_id
GROUP BY product.product_id Having MIN(sale_date) >= '2019-01-01' And MAX(sale_date)<= '2019-03-31'; 