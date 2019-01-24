---
title: docker-composer
---
<center>
<h1>docker-compose</h1>
</center>

> see [docker-compose 手册](https://docs.docker.com/compose/)

## Install Compose on Linux systems
1. Download the latest version of Docker Compose
```bash
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
2. Apply executable permissions to the binary:
```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```
## Uninstallation
```bash
$ sudo rm /usr/local/bin/docker-compose
```
## Usage(lnmp)
> 依赖

虚拟技术：docker、 docker-compose

文件名：docker-composer.yml
```
mysql:
    image: mysql
    environment:
        - MYSQL_USER=root
        - MYSQL_PASSWORD=root
        - MYSQL_ROOT_PASSWORD=root
    container_name: mysql
    ports:
        - 3308:3306
    restart: always
php5.6-fpm:
    image: registry.cn-hangzhou.aliyuncs.com/liuwen/php5.6-fpm
    volumes:
        - ./www:/var/www
    links:
        - mysql
    container_name: php5.6-fpm
    restart: always
php7-fpm:
    image: registry.cn-hangzhou.aliyuncs.com/liuwen/php7-fpm
    volumes:
        - ./www:/var/www
    links:
        - mysql
    container_name: php7-fpm
    restart: always
nginx:
    image: nginx
    volumes_from:
        - php5.6-fpm
    volumes:
        - ./vhost:/etc/nginx/conf.d
        - ./log/nginx/:/var/log/nginx/
    ports:
        - 8000:80
    links:
        - php5.6-fpm
        - php7-fpm
    container_name: nginx
    restart: always
phpmyadmin:
    image: phpmyadmin/phpmyadmin
    ports:
        - 8081:80
    environment:
        - PMA_HOST=mysql
    container_name: phpmyadmin
    restart: always
    links:
        - mysql
```