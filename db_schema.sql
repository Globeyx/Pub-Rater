-- Create Pubs Table
create table pubs (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  location text not null,
  description text,
  rating numeric default 0,
  reviews_count integer default 0,
  total_rating_score numeric default 0,
  image_url text,
  map_url text
);

-- Create Reviews Table
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  pub_id uuid references pubs(id) on delete cascade,
  rating integer not null,
  text text,
  user_name text default 'Anonymous'
);

-- Turn on Row Level Security (optional but recommended later, for now we keep it open for demo)
alter table pubs enable row level security;
alter table reviews enable row level security;

-- Create policies to allow public read/write (SIMPLIFIED FOR DEMO - NOT FOR PRODUCTION)
create policy "Public pubs are viewable by everyone" on pubs for select using (true);
create policy "Public pubs are insertable by everyone" on pubs for insert with check (true);
create policy "Public pubs aredeletable by everyone" on pubs for delete using (true);

create policy "Public reviews are viewable by everyone" on reviews for select using (true);
create policy "Public reviews are insertable by everyone" on reviews for insert with check (true);
