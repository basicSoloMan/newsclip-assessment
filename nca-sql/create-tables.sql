create table if not exists heroku_07c69e1a6223cb9.Items (
	item_id int auto_increment,
    item_code varchar(10) not null,
    item_name varchar(50) not null,
    primary key (item_id)
);

create table if not exists heroku_07c69e1a6223cb9.Variants (
	variant_id int auto_increment,
    variant_code varchar(10),
    variant_description varchar(50),
    variant_color varchar(15),
    variant_name varchar(50),
    primary key (variant_id)
);

create table if not exists heroku_07c69e1a6223cb9.ItemVariantStock (
	ivs_id int auto_increment,
    ivs_item_id int not null,
    ivs_variant_id int not null,
    ivs_quantity int default 0,
    primary key (ivs_id),
    foreign key (ivs_item_id)
		references heroku_07c69e1a6223cb9.Items (item_id),
	foreign key (ivs_variant_id)
		references heroku_07c69e1a6223cb9.Variants (variant_id)
);