# poster
+ mariaDB
+ PHP 7.4.13 (cli) (built: Nov 24 2020 10:03:34) ( NTS )

## config.php example
```php
<?php

class Config
{
	static $host = '172.17.0.2';
	static $db_name = 'poster';
	static $username  = 'root';
	static $password  = 'root';
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
