---
layout: post
title: "Compare the efficiency for different SQL statements"
description: "Compare the efficiency for different SQL statement"
category: Database
tags: [MySQL]
---
### forgot to get the screen shot... No image, No truth!

```
--显示行 0 - 4 ( 5 总计, 查询花费 3.0473 秒)
select distinct p.products_image,  p.products_quantity ,  p.products_id,  pd.products_name,  p.products_price,  p.products_tax_class_id, p.products_price_sorter, p.products_qty_box_status, p.master_categories_id 
FROM products p join  products_description pd on p.products_id = pd.products_id 
where p.products_status = 1 AND  pd.language_id = 1 and p.products_id in (
  select products_id from  
	( 
		(SELECT products_id from products_description where products_name LIKE '%methoxybenzofuran%') 	union 
		(select products_id from products where products_cas LIKE '%methoxybenzofuran%') 	UNION 
		(select products_id from products where products_mdl_number LIKE '%methoxybenzofuran%') UNION 
		(select products_id from products where products_symbol LIKE '%methoxybenzofuran%') 	UNION 
		(select products_id from products where products_synonyms    LIKE '%methoxybenzofuran%' ) 	UNION 
		(select products_id from products where products_catalog LIKE '%methoxybenzofuran%') 	UNION 
		(select products_id from products where products_description LIKE '%methoxybenzofuran%')
	) as t);


--include order by, 显示行 0 - 4 ( 5 总计, 查询花费 8.3814 秒)   no order by 查询花费 8.3678 秒   remove p2c, c tables 查询花费 4.6460 秒)
SELECT DISTINCT p.products_image, p.products_quantity , p.products_id, pd.products_name, p.products_price, p.products_tax_class_id, p.products_price_sorter, p.products_qty_box_status, p.master_categories_id 
FROM products p, products_description pd, categories c, products_to_categories p2c 
WHERE (p.products_status = 1 AND p.products_id = pd.products_id AND pd.language_id = 1 AND p.products_id = p2c.products_id AND p2c.categories_id = c.categories_id AND ((
pd.products_name LIKE '%methoxybenzofuran%' OR 
p.products_catalog LIKE '%methoxybenzofuran%' OR 
p.products_cas LIKE '%methoxybenzofuran%' OR 
p.products_mdl_number LIKE '%methoxybenzofuran%' OR 
p.products_symbol LIKE '%methoxybenzofuran%' OR 
p.products_synonyms    LIKE '%methoxybenzofuran%' OR 
pd.products_description LIKE '%methoxybenzofuran%') )) 
--order by p.products_sort_order, pd.products_name;





SELECT DISTINCT p.products_image, p.products_quantity , p.products_id, pd.products_name, p.products_price, p.products_tax_class_id, p.products_price_sorter, p.products_qty_box_status, p.master_categories_id 
FROM products p, products_description pd, categories c, products_to_categories p2c 
WHERE (p.products_status = 1 AND p.products_id = pd.products_id AND pd.language_id = 1 AND p.products_id = p2c.products_id AND p2c.categories_id = c.categories_id AND p2c.products_id = p.products_id AND p2c.products_id = pd.products_id AND (
p2c.categories_id = 1 OR 
p2c.categories_id in ( 24, 30, 31, 132, 133, 134, 32, 34, 35, 36, 37, 33, 135, 136, 137, 138, 25, 139, 44, 140, 57, 58, 70, 79, 89, 90, 99, 100, 107, 109, 141, 55, 56, 68, 75, 76, 78, 83, 84, 88, 98, 108, 142, 43, 53, 54, 72, 105, 143, 92, 104, 144, 59, 60, 61, 71, 80, 81, 82, 91, 93, 94, 101, 102, 145, 69, 85, 86, 87, 103, 146, 47, 48, 49, 50, 51, 52, 62, 63, 64, 65, 66, 67, 74, 95, 96, 97, 148, 45, 46, 73, 77, 106, 149, 26, 40, 110, 113, 114, 115, 160, 28, 161, 162, 29, 41, 42, 116, 117, 118, 119, 123, 125, 128, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 129, 130)) AND 
((pd.products_name LIKE '%5-methyl-2-acety%'))
)


-- get count
select count(*) as count 
from products_to_categories as pro2cat ,products as pro,products_description as pro_des 
where pro.products_status=1 and pro2cat.products_id=pro.products_id and pro.products_id=pro_des.products_id and pro2cat.categories_id = 140 --57

--get products details   显示行 0 - 29 ( 457 总计, 查询花费 8.7453 秒
select pro.products_id, pro.products_purity, pro.products_molecular_weight, pro.products_catalog, pro.products_cas, pro_des.products_name, pro_des.products_description 
from products_to_categories as pro2cat ,products as pro,products_description as pro_des 
where pro.products_status=1 and pro2cat.products_id=pro.products_id and pro.products_id=pro_des.products_id and pro2cat.categories_id=57 
order by pro.products_catalog --no order by, it just cost 1.5+ s
limit 0, 50 --显示行 0 - 49 ( 50 总计, 查询花费 4.8046 秒)

--after optimization
select pro.products_id, pro.products_purity, pro.products_molecular_weight, pro.products_catalog, pro.products_cas, pro_des.products_name, pro_des.products_description 
FROM products pro join  products_description pro_des on pro.products_id = pro_des.products_id 
where pro.products_status=1 and pro.products_id in (
	select products_id from  products_to_categories where categories_id=57 )
order by pro.products_catalog 
limit 0, 50   --显示行 0 - 49 ( 50 总计, 查询花费 0.6666 秒)



--get products details   显示行 0 - 49 ( 50 总计, 查询花费 9.1878 秒)
select pro.products_id, pro.products_purity, pro.products_molecular_weight, pro.products_catalog, pro.products_cas, pro_des.products_name, pro_des.products_description 
from products_to_categories as pro2cat ,products as pro,products_description as pro_des 
where pro.products_status=1 and pro2cat.products_id=pro.products_id and pro.products_id=pro_des.products_id and pro2cat.categories_id in (select categories_id from categories where parent_id=140)  
order by pro.products_catalog 
limit 0, 50


--after optimization   显示行 0 - 49 ( 50 总计, 查询花费 5.2722 秒)
select pro.products_id, pro.products_purity, pro.products_molecular_weight, pro.products_catalog, pro.products_cas, pro_des.products_name, pro_des.products_description 
FROM products pro join  products_description pro_des on pro.products_id = pro_des.products_id 
where pro.products_status=1 and pro.products_id in (
	select products_id from  products_to_categories where categories_id in (
	select categories_id from categories where parent_id=140
	) )
order by pro.products_catalog -- if remove order by 显示行 0 - 49 ( 50 总计, 查询花费 0.0950 秒)
limit 0, 50


```
