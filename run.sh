docker kill instit
docker rm instit
 docker run -d -p 80:80 --name instit -v /home/theo/sites/instit:/app cadotinfo/symfony5
