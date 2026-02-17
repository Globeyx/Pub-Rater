-- MORE REVIEWS SEED DATA
-- Run this in Supabase SQL Editor to add more depth to your pub ratings.

insert into reviews (pub_id, rating, text, created_at)
values
  -- Hradecký Klenot
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 5, 'Best service I''ve had in Hradec. The staff really knows their beer.', '2024-01-15 14:30:00+00'),
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 5, 'The food is unexpectedly good too. Perfect pairing with the 11° lager.', '2024-01-20 18:00:00+00'),
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 4, 'Love the design of the place. Modern yet traditional.', '2024-01-25 10:15:00+00'),

  -- Rodinný pivovar 713
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 5, 'Authentic atmosphere. You can tell it''s family-run.', '2024-01-05 16:00:00+00'),
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 4, 'The brewmaster knows his stuff. Very unique flavors.', '2024-01-12 19:30:00+00'),
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 5, 'Great place for a birthday party. Very accommodating.', '2023-12-28 18:00:00+00'),

  -- Pivovar Beránek
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 5, 'The garden is a paradise in summer. So peaceful.', '2024-02-01 15:45:00+00'),
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 4, 'Try the lamb burger! It goes perfectly with the dark beer.', '2024-01-22 12:00:00+00'),
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 5, 'Fresh beer every day. You can really taste the difference.', '2024-01-30 13:30:00+00'),

  -- Minipivovar Kubík
  ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 5, 'Small but mighty. Some of the best experiments I''ve tasted.', '2024-01-10 17:00:00+00'),
  ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 5, 'Excellent craft selection. A must-visit for enthusiasts.', '2024-01-18 18:20:00+00'),

  -- Pivovarská Brána
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 5, 'Always a great selection of guest taps. Never bored here.', '2024-01-08 20:00:00+00'),
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 4, 'Perfect location for a night out in HK.', '2024-01-14 19:00:00+00'),
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 4, 'Good snacks. The pickled cheese is top notch.', '2024-01-22 21:00:00+00'),

  -- na JEDNO
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'The best craft beer in HK. Expertly curated.', '2024-02-10 21:00:00+00'),
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Minimalist and stylish. Just what the city needed.', '2024-02-05 18:00:00+00'),
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Always something new to taste. The staff is very knowledgeable.', '2024-01-28 22:30:00+00'),

  -- Hostinec U Kohouta
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 5, 'Classic Pilsner, perfectly served. The foam is like cream.', '2024-01-12 16:45:00+00'),
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 5, 'Very old school and comfortable. Feels like home.', '2024-01-02 19:15:00+00'),
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 5, 'The meat dishes are excellent. Traditional Czech cuisine at its best.', '2023-12-20 12:00:00+00'),

  -- Batalion u Draků
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 5, 'Best underground bar in town. Period.', '2024-02-14 23:00:00+00'),
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 5, 'Great music and atmosphere. Perfect for late nights.', '2024-02-01 21:30:00+00'),
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 4, 'Good place for students. Lively and affordable.', '2024-01-15 20:00:00+00')
on conflict do nothing;
