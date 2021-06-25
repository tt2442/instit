git pull
export result=${PWD##*/}
rm migrations/*
docker exec $result php bin/console m:mi -n
docker exec $result php bin/console d:m:mi -n
docker exec $result php bin/console cache:clear

docker exec $result composer update
docker exec $result yarn install
docker exec $result yarn build
chown www-data: var/data.bd
