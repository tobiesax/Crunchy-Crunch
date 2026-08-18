alter table public.products add column if not exists weight text not null default '';

update public.products set weight = '200g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('cookie-stack','red-velvet');
update public.products set weight = '500g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'classic-chinchin';
update public.products set weight = '250g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'coconut-chinchin';
update public.products set weight = '300g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'mix-combo';
update public.products set weight = '750g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'gift-box';
update public.products set weight = '200g' where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id in ('plantain-chips-ripe','plantain-chips-unripe','plantain-chips-salted');
