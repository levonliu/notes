---
title: docker
---
<center>
<h1>docker</h1>
</center>

> see [docker手册](https://docs.docker.com/install/)

## Get Docker CE for Ubuntu

### OS requirements

- Cosmic 18.10

- Bionic 18.04 (LTS)

- Xenial 16.04 (LTS)

### Uninstall old versions
```bash 
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```
### Install Docker CE

1. Update the apt package index:
```bash
$ sudo apt-get update
```

2. Install packages to allow apt to use a repository over HTTPS:
```bash
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
```

3.Add Docker’s official GPG key:
```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

4.Set up the stable repository(x86_64 / amd64)
```bash
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

5.Install
```bash
$ sudo apt-get update
```
```bash
$ sudo apt-get install docker-ce
```

### Adding your user to the “docker” group
```bash
$ sudo usermod -aG docker your-user
```

## Usage(mysql)
```bash
#!/usr/bin/env bash
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d --restart="always" -v ~/.docker/volumes/mysql:/var/lib/mysql -v ~/.docker/volumes/etc/mysql/conf.d:/etc/mysql/conf.d mysql:5.7
~                                     
```