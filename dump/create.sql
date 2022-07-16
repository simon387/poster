create schema poster;

use poster;

create table post
(
    id        int auto_increment primary key,
    timestamp timestamp  default current_timestamp() not null on update current_timestamp(),
    text      mediumtext                             null,
    deleted   tinyint(1) default 0                   not null
);
