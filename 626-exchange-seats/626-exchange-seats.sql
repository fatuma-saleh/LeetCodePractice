# Write your MySQL query statement below
Select (case when mod(id,2)!=0 and id!=(select count(*) from seat)then id+1 when mod(id,2)=0 then id -1 else id
end )as id,student
from seat
order by id