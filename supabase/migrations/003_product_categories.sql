alter table public.products add column if not exists category text not null default 'Cookies';

update public.products set category = 'Cookies' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('cookie-stack','red-velvet');
update public.products set category = 'Chinchin' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('classic-chinchin','coconut-chinchin');
update public.products set category = 'Gift Boxes' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('mix-combo','gift-box');
update public.products set category = 'Plantain Chips' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('plantain-chips-ripe','plantain-chips-unripe','plantain-chips-salted');
