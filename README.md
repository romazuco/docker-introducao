
## INVOCAR O DOCKER FILE A PARTIR DA RAIZ
```console
docker build -t mysql-image -f api/db/Dockerfile .
```
## INSTANCIAR A IMAGEM CRIANDO O CONTAINER SEM VOLUME
```console
docker run -d --rm --name mysql-container mysql-image 
```
## INSTANCIAR A IMAGEM CRIANDO O CONTAINER COM VOLUME
### Win
```console
docker run -d -v c:/projectsMazuco/docker-introducao/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```
### Linux
```console
docker run -d -v /home/mazuco/projectsMazuco/docker-introducao/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```
## CHAMAR O SCRIPT PARA CRIAR A BASE E POPULAR

```console
docker exec -i mysql-container  mysql -uroot -pprogramadorabordo < api/db/script.sql
```

## COMANDO PARA ACESSAR O TERMINAL DA IMAGEM
```console
docker exec -it mysql-container /bin/bash
```

## COMANDO PARA ACESSAR A BASE DE DADOS
```console
mysql -uroot -pprogramadorabordo
```

## DESCOBRIR O IP DO CONTAINER SQL
```console
docker inspect mysql-container
```



## CRIAR A IMAGEM DA API
```console
docker build -t node-image -f api/Dockerfile .
```


## CRIAR O CONTAINER DA IMAGEM DA API COM VOLUME
### Windows
```console
docker run -d -v c:/projectsMazuco/docker-introducao/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image
```
### Linux
```console
docker run -d -v /home/mazuco/projectsMazuco/docker-introducao/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image
```



## CASO NÃO CONECTE NO BANCO TENTAR 
```console
npm install --save-dev mysql2
```
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server



## AO FINAL CRIAR A IMAGEM E O CONTAINER DO PHP
```console
docker build -t php-image -f website/Dockerfile .

docker run -d -v c:/projectsMazuco/docker-introducao/website:/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image
```