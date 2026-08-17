update public.products set price = 300.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'gift-box';
update public.products set price = 100.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'classic-chinchin';
update public.products set price = 50.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'cookie-stack';
update public.products set price = 50.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'red-velvet';
update public.products set price = 50.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'coconut-chinchin';
update public.products set price = 50.00 where merchant_id = (select id from public.merchants where slug = 'crunch-and-crumbs') and external_id = 'mix-combo';

insert into public.products (merchant_id, external_id, name, description, price, image)
select m.id, p.external_id, p.name, p.description, p.price, p.image from public.merchants m cross join (values
  ('plantain-chips-ripe','Plantain Chips – Ripe','Sweet, golden plantain chips, sliced and fried to a perfect crisp.',150.00,'/assets/products/plantain-chips-ripe.png'),
  ('plantain-chips-unripe','Plantain Chips – Unripe','Savoury unripe plantain chips with a satisfying crunch in every bite.',150.00,'/assets/products/plantain-chips-unripe.png'),
  ('plantain-chips-salted','Plantain Chips – Salted','Crispy plantain chips finished with a touch of sea salt.',150.00,'/assets/products/plantain-chips-salted.png')
) as p(external_id,name,description,price,image) where m.slug = 'crunch-and-crumbs' on conflict do nothing;
