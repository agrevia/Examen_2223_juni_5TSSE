CREATE DATABASE db_steam;

USE db_steam;

create table tbl_games
(
    game_id        int auto_increment
        primary key,
    Title          varchar(255) null,
    Publisher      varchar(255) null,
    Space_required int          null,
    Play_time      int          null,
    Category       varchar(255) null
);