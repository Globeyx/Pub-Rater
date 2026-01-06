-- DATA SEEDING SCRIPT
-- Copy this into Supabase SQL Editor and run it to populate your database with initial data.

-- 1. Insert PUBS
insert into pubs (id, name, location, description, rating, reviews_count, total_rating_score, image_url, map_url)
values 
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Hradecký Klenot', 'Velké náměstí 25, Hradec Králové', 'Brewery in the heart of the city, restoring the tradition of HK brewing.', 4.8, 4, 19.0, 'public/images/pubs/klenot.png', 'https://maps.google.com/?q=Velké+náměstí+25,+Hradec+Králové'),
  
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Rodinný pivovar 713', 'Hradec Králové - Kukleny', 'Family brewery specializing in honest craft lagers and specials.', 4.7, 3, 14.0, null, 'https://maps.google.com/?q=Hradec+Králové+Kukleny+Pivovar+713'),
  
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'Pivovar Beránek', 'Stěžery (near HK)', 'Microbrewery offering unpasteurized beers like Jehně and Beran.', 4.6, 3, 14.0, null, 'https://maps.google.com/?q=Pivovar+Beránek+Stěžery'),
  
  ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 'Minipivovar Kubík', 'Profesora Smotlachy, Hradec Králové', 'Small local brewery focusing on quality ingredients.', 4.5, 2, 9.0, null, 'https://maps.google.com/?q=Minipivovar+Kubík+Hradec+Králové'),
  
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 'Pivovarská Brána', 'Hradec Králové - Velké náměstí', 'Excellent beer in the heart of the city with a friendly environment.', 4.5, 2, 9.0, null, 'https://maps.google.com/?q=Pivovarská+Brána+Hradec+Králové'),
  
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 'na JEDNO', 'Hradec Králové - Center', 'Beautiful little pub with vaulted ceilings, offering 5 taps of craft beer.', 5.0, 4, 20.0, null, 'https://maps.google.com/?q=na+JEDNO+Hradec+Králové'),
  
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 'Hostinec U Kohouta', 'Hradec Králové', 'Traditional Czech pub atmosphere offering classic pivo.', 4.5, 2, 9.0, null, 'https://maps.google.com/?q=Hostinec+U+Kohouta+Hradec+Králové'),
  
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 'Batalion u Draků', 'Hradec Králové - Old Town', 'Legendary underground spot with foosball, darts, and a cool vibe.', 4.7, 3, 14.0, null, 'https://maps.google.com/?q=Batalion+u+Draků+Hradec+Králové');


-- 2. Insert REVIEWS (linked to pubs via ID)
insert into reviews (pub_id, rating, text, created_at)
values
  -- Reviews for Hradecký Klenot
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 5, 'Absolutely amazing beer and atmosphere! The interior is stunning.', '2023-10-15 14:30:00+00'),
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 4, 'Great place but gets crowded on weekends.', '2023-10-12 18:00:00+00'),
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 5, 'Best Lager in town, hands down. Highly recommend the 11°.', '2023-09-28 20:15:00+00'),
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 5, 'Staff was very attentive even during rush hour.', '2023-11-20 19:00:00+00'),

  -- Reviews for Rodinný pivovar 713
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 5, 'Hidden gem in Kukleny. The owners are lovely people who care about beer.', '2023-11-01 16:00:00+00'),
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 4, 'A bit out of the way, but worth the trip for the specials.', '2023-10-20 19:30:00+00'),
  ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 5, 'Their IPA is surprisingly good for a traditional lager brewery.', '2023-12-01 18:00:00+00'),

  -- Reviews for Pivovar Beránek
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 5, 'Their "Beran" dark lager is a must-try! Perfect balance.', '2023-10-05 15:45:00+00'),
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 4, 'Nice garden for summer, cozy inside for winter.', '2023-09-10 12:00:00+00'),
  ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 5, 'Great food to go with the beer.', '2023-11-12 13:30:00+00'),

  -- Reviews for Minipivovar Kubík
  ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 4, 'Solid beers, though the menu is limited.', '2023-10-30 17:00:00+00'),
  ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 5, 'Friendly staff and quick service.', '2023-11-05 18:20:00+00'),

  -- Reviews for Pivovarská Brána
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 5, 'My favorite spot on the square. Always lively.', '2023-10-25 20:00:00+00'),
  ('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 4, 'Good selection of rotating taps from various breweries.', '2023-09-15 19:00:00+00'),

  -- Reviews for na JEDNO
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Incredible atmosphere. The vaulted ceilings are stunning.', '2023-11-20 21:00:00+00'),
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Top tier craft beer selection. Always something new.', '2023-11-10 18:00:00+00'),
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Best pub in HK. Period.', '2023-10-01 22:30:00+00'),
  ('f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 5, 'Small place but huge heart. Love the rotating taps.', '2023-12-05 20:00:00+00'),

  -- Reviews for Hostinec U Kohouta
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 4, 'Classic Czech pub. Nothing fancy, just good beer.', '2023-10-18 16:45:00+00'),
  ('00eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 5, 'Great Pilsner Urquell on tap! It is treated well here.', '2023-09-22 19:15:00+00'),

  -- Reviews for Batalion u Draků
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 5, 'Legendary spot. Great for late nights.', '2023-11-15 23:00:00+00'),
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 4, 'Can get smoky, but the vibe is unmatched.', '2023-10-05 21:30:00+00'),
  ('10eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 5, 'Foosball tables are top notch!', '2023-11-01 20:00:00+00');
