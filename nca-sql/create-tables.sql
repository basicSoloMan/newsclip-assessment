create table if not exists NCA.Items (
	item_id int auto_increment,
    item_code varchar(10) not null,
    item_name varchar(50) not null,
    primary key (item_id)
);

create table if not exists NCA.Variants (
	variant_id int auto_increment,
    variant_item_id int not null,
    variant_code varchar(10),
    variant_description varchar(50),
    variant_price decimal(6,2),
    variant_color varchar(15),
    primary key (variant_id),
    foreign key (variant_item_id)
		references NCA.Items (item_id)
        on update restrict on delete cascade
);

create table if not exists NCA.ItemVariantStock (
	ivs_id int auto_increment,
    ivs_variant_id int not null,
    ivs_quantity int default 0,
    primary key (ivs_id),
	foreign key (ivs_variant_id)
		references NCA.Variants (variant_id)
);

create table if not exists NCA.Users (
	user_id int auto_increment,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    user_firstname varchar(255),
    user_lastname varchar(255),
    primary key (user_id)
);