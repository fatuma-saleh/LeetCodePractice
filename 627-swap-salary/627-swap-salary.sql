# Write your MySQL query statement below
Update Salary SET sex = (
    CASE
    WHEN sex ='m' THEN 'f'
    else 'm'
    END
    
)