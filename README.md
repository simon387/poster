# poster

+ mariaDB
+ PHP 7.4.13 (cli) (built: Nov 24 2020 10:03:34) ( NTS )

## config.php example

```injectablephp
<?php

class Config
{
	static $db_host = 'localhost';
	static $db_name = 'poster';
	static $db_username  = 'root';
	static $db_password  = 'root';
	static $db_statement_0 = '';
}
```

## How to enable PHP log (linux redhat, fedora, centos)

Edit this in ```php.ini```:

```
error_reporting = E_ALL;& ~E_DEPRECATED & ~E_STRICT
display_errors = On;Off
```

Restart it

```
systemctl restart httpd.service;systemctl restart php-fpm.service;
```

Default Fedora33 log file locations:

```
tail -F /var/log/httpd/*
tail -F /var/log/php-fpm/www-error.log
```

## Links

+ https://startbootstrap.com/theme/sb-admin-2
+ https://www.simonecelia.it/poster/

## TODOs

+ switch to react fe?
