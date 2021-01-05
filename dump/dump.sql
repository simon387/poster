create table post
(
    id        int auto_increment primary key,
    timestamp timestamp default current_timestamp() not null on update current_timestamp(),
    text      varchar(1024)                         null
);
