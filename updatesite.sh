if [ -x "$(command -v docker)" ]; then
    git pull
    result=${PWD##*/}
    docker exec -i $result /bin/bash ./maintenance.sh on
    docker exec -i $result composer update
    docker exec -i $result yarn install --force
    docker exec -i $result yarn build
    docker exec -i $result bin/console cache:clear
    docker exec -i $result /bin/bash ./maintenance.sh off
else
    echo "à exécuter à l'extérieur du site"
fi
