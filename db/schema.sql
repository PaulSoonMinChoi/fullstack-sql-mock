DROP DATABASE IF EXISTS ebayDB;

CREATE DATABASE ebayDB;

USE ebayDB;

CREATE TABLE entry (
  id int auto_increment not null primary key,
  item varchar(255) not null,
  min_cost int not null,
  curr_bid int not null,
  ends_in int not null,
  image varchar(500) not null
);