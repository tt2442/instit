php /app/bin/console m:rege Article
php /app/bin/console m:rege Categorie
php /app/bin/console m:rege Commande
php /app/bin/console m:rege Commentaire
php /app/bin/console m:rege Fichier
sudo rm -R templates/liens_externe
sudo rm -R templates/liens_interne
php /app/bin/console m:rege LiensExterne
php /app/bin/console m:rege LiensInterne
php /app/bin/console m:rege Materiel
php /app/bin/console m:rege Promotion
php /app/bin/console m:rege User

# docker exec instit bash -c " php /app/bin/console m:rege Articles"
# docker exec instit bash -c " php /app/bin/console m:rege Categorie"
# docker exec instit bash -c " php /app/bin/console m:rege Commande"
# docker exec instit bash -c " php /app/bin/console m:rege Commentaire"
# docker exec instit bash -c " php /app/bin/console m:rege Fichier"
# sudo rm -R templates/liens_externe
# sudo rm -R templates/liens_interne
# docker exec instit bash -c " php /app/bin/console m:rege LiensExternes"
# docker exec instit bash -c " php /app/bin/console m:rege LiensInternes"
# docker exec instit bash -c " php /app/bin/console m:rege Materiel"
# docker exec instit bash -c " php /app/bin/console m:rege Promotion"
# docker exec instit bash -c " php /app/bin/console m:rege User"
