<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210509125835 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotion_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL)');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotion_id)');
        $this->addSql('CREATE TABLE article_categorie (article_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(article_id, categorie_id))');
        $this->addSql('CREATE INDEX IDX_62A97E97294869C ON article_categorie (article_id)');
        $this->addSql('CREATE INDEX IDX_62A97E9A21214B7 ON article_categorie (categorie_id)');
        $this->addSql('CREATE TABLE article_fichier (article_id INTEGER NOT NULL, fichier_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichier_id))');
        $this->addSql('CREATE INDEX IDX_C37540C07294869C ON article_fichier (article_id)');
        $this->addSql('CREATE INDEX IDX_C37540C0BD7BF362 ON article_fichier (fichier_id)');
        $this->addSql('CREATE TABLE article_materiel (article_id INTEGER NOT NULL, materiel_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiel_id))');
        $this->addSql('CREATE INDEX IDX_462BEE4D7294869C ON article_materiel (article_id)');
        $this->addSql('CREATE INDEX IDX_462BEE4DA10E8B56 ON article_materiel (materiel_id)');
        $this->addSql('CREATE TABLE commande_article (commande_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commande_id, article_id))');
        $this->addSql('CREATE INDEX IDX_C49786368BF5C2E6 ON commande_article (commande_id)');
        $this->addSql('CREATE INDEX IDX_C49786367294869C ON commande_article (article_id)');
        $this->addSql('CREATE TABLE user_article (user_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(user_id, article_id))');
        $this->addSql('CREATE INDEX IDX_5A37106CA76ED395 ON user_article (user_id)');
        $this->addSql('CREATE INDEX IDX_5A37106C7294869C ON user_article (article_id)');
        $this->addSql('DROP TABLE articles');
        $this->addSql('DROP TABLE articles_categorie');
        $this->addSql('DROP TABLE articles_fichier');
        $this->addSql('DROP TABLE articles_materiel');
        $this->addSql('DROP TABLE commande_articles');
        $this->addSql('DROP TABLE user_articles');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotion AS SELECT categorie_id, promotion_id FROM categorie_promotion');
        $this->addSql('DROP TABLE categorie_promotion');
        $this->addSql('CREATE TABLE categorie_promotion (categorie_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotion_id), CONSTRAINT FK_4B95703CA21214B7 FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_4B95703C10007789 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO categorie_promotion (categorie_id, promotion_id) SELECT categorie_id, promotion_id FROM __temp__categorie_promotion');
        $this->addSql('DROP TABLE __temp__categorie_promotion');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categorie_promotion (promotion_id)');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categorie_promotion (categorie_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande AS SELECT id, user_id, date FROM commande');
        $this->addSql('DROP TABLE commande');
        $this->addSql('CREATE TABLE commande (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_35D4282CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commande (id, user_id, date) SELECT id, user_id, date FROM __temp__commande');
        $this->addSql('DROP TABLE __temp__commande');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commande (user_id)');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_promotion AS SELECT commande_id, promotion_id FROM commande_promotion');
        $this->addSql('DROP TABLE commande_promotion');
        $this->addSql('CREATE TABLE commande_promotion (commande_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(commande_id, promotion_id), CONSTRAINT FK_DD9AD3548BF5C2E6 FOREIGN KEY (commande_id) REFERENCES commande (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DD9AD35410007789 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commande_promotion (commande_id, promotion_id) SELECT commande_id, promotion_id FROM __temp__commande_promotion');
        $this->addSql('DROP TABLE __temp__commande_promotion');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commande_promotion (promotion_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commande_promotion (commande_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C41EBAF6CC');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaire AS SELECT id, user_id, articles_id, etat, date, message FROM commentaire');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('CREATE TABLE commentaire (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, date DATETIME NOT NULL, message CLOB NOT NULL COLLATE BINARY, CONSTRAINT FK_D9BEC0C4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D9BEC0C47294869C FOREIGN KEY (article_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaire (id, user_id, article_id, etat, date, message) SELECT id, user_id, articles_id, etat, date, message FROM __temp__commentaire');
        $this->addSql('DROP TABLE __temp__commentaire');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaire (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C47294869C ON commentaire (article_id)');
        $this->addSql('DROP INDEX IDX_57B93FD69DA45D70');
        $this->addSql('DROP INDEX IDX_57B93FD6A10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiel_liens_interne AS SELECT materiel_id, liens_interne_id FROM materiel_liens_interne');
        $this->addSql('DROP TABLE materiel_liens_interne');
        $this->addSql('CREATE TABLE materiel_liens_interne (materiel_id INTEGER NOT NULL, liens_interne_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_interne_id), CONSTRAINT FK_57B93FD6A10E8B56 FOREIGN KEY (materiel_id) REFERENCES materiel (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_57B93FD69DA45D70 FOREIGN KEY (liens_interne_id) REFERENCES liens_interne (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiel_liens_interne (materiel_id, liens_interne_id) SELECT materiel_id, liens_interne_id FROM __temp__materiel_liens_interne');
        $this->addSql('DROP TABLE __temp__materiel_liens_interne');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiel_liens_interne (liens_interne_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiel_liens_interne (materiel_id)');
        $this->addSql('DROP INDEX IDX_418836DBD0E3E18');
        $this->addSql('DROP INDEX IDX_418836DA10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiel_liens_externe AS SELECT materiel_id, liens_externe_id FROM materiel_liens_externe');
        $this->addSql('DROP TABLE materiel_liens_externe');
        $this->addSql('CREATE TABLE materiel_liens_externe (materiel_id INTEGER NOT NULL, liens_externe_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_externe_id), CONSTRAINT FK_418836DA10E8B56 FOREIGN KEY (materiel_id) REFERENCES materiel (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_418836DBD0E3E18 FOREIGN KEY (liens_externe_id) REFERENCES liens_externe (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiel_liens_externe (materiel_id, liens_externe_id) SELECT materiel_id, liens_externe_id FROM __temp__materiel_liens_externe');
        $this->addSql('DROP TABLE __temp__materiel_liens_externe');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiel_liens_externe (liens_externe_id)');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiel_liens_externe (materiel_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotion_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, description CLOB DEFAULT NULL COLLATE BINARY)');
        $this->addSql('CREATE INDEX IDX_BFDD316810007789 ON articles (promotion_id)');
        $this->addSql('CREATE TABLE articles_categorie (articles_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(articles_id, categorie_id))');
        $this->addSql('CREATE INDEX IDX_DE004A0EA21214B7 ON articles_categorie (categorie_id)');
        $this->addSql('CREATE INDEX IDX_DE004A0E1EBAF6CC ON articles_categorie (articles_id)');
        $this->addSql('CREATE TABLE articles_fichier (articles_id INTEGER NOT NULL, fichier_id INTEGER NOT NULL, PRIMARY KEY(articles_id, fichier_id))');
        $this->addSql('CREATE INDEX IDX_370942B1BD7BF362 ON articles_fichier (fichier_id)');
        $this->addSql('CREATE INDEX IDX_370942B11EBAF6CC ON articles_fichier (articles_id)');
        $this->addSql('CREATE TABLE articles_materiel (articles_id INTEGER NOT NULL, materiel_id INTEGER NOT NULL, PRIMARY KEY(articles_id, materiel_id))');
        $this->addSql('CREATE INDEX IDX_61DDD3E5A10E8B56 ON articles_materiel (materiel_id)');
        $this->addSql('CREATE INDEX IDX_61DDD3E51EBAF6CC ON articles_materiel (articles_id)');
        $this->addSql('CREATE TABLE commande_articles (commande_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(commande_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_D470CD141EBAF6CC ON commande_articles (articles_id)');
        $this->addSql('CREATE INDEX IDX_D470CD148BF5C2E6 ON commande_articles (commande_id)');
        $this->addSql('CREATE TABLE user_articles (user_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(user_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_5F50D5681EBAF6CC ON user_articles (articles_id)');
        $this->addSql('CREATE INDEX IDX_5F50D568A76ED395 ON user_articles (user_id)');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE article_categorie');
        $this->addSql('DROP TABLE article_fichier');
        $this->addSql('DROP TABLE article_materiel');
        $this->addSql('DROP TABLE commande_article');
        $this->addSql('DROP TABLE user_article');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotion AS SELECT categorie_id, promotion_id FROM categorie_promotion');
        $this->addSql('DROP TABLE categorie_promotion');
        $this->addSql('CREATE TABLE categorie_promotion (categorie_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotion_id))');
        $this->addSql('INSERT INTO categorie_promotion (categorie_id, promotion_id) SELECT categorie_id, promotion_id FROM __temp__categorie_promotion');
        $this->addSql('DROP TABLE __temp__categorie_promotion');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categorie_promotion (categorie_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categorie_promotion (promotion_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande AS SELECT id, user_id, date FROM commande');
        $this->addSql('DROP TABLE commande');
        $this->addSql('CREATE TABLE commande (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commande (id, user_id, date) SELECT id, user_id, date FROM __temp__commande');
        $this->addSql('DROP TABLE __temp__commande');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commande (user_id)');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_promotion AS SELECT commande_id, promotion_id FROM commande_promotion');
        $this->addSql('DROP TABLE commande_promotion');
        $this->addSql('CREATE TABLE commande_promotion (commande_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(commande_id, promotion_id))');
        $this->addSql('INSERT INTO commande_promotion (commande_id, promotion_id) SELECT commande_id, promotion_id FROM __temp__commande_promotion');
        $this->addSql('DROP TABLE __temp__commande_promotion');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commande_promotion (commande_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commande_promotion (promotion_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('DROP INDEX IDX_D9BEC0C47294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaire AS SELECT id, user_id, article_id, etat, message, date FROM commentaire');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('CREATE TABLE commentaire (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, articles_id INTEGER DEFAULT NULL, user_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL, message CLOB NOT NULL, date DATETIME NOT NULL, CONSTRAINT FK_D9BEC0C47294869C FOREIGN KEY (articles_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaire (id, user_id, articles_id, etat, message, date) SELECT id, user_id, article_id, etat, message, date FROM __temp__commentaire');
        $this->addSql('DROP TABLE __temp__commentaire');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaire (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C41EBAF6CC ON commentaire (articles_id)');
        $this->addSql('DROP INDEX IDX_418836DA10E8B56');
        $this->addSql('DROP INDEX IDX_418836DBD0E3E18');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiel_liens_externe AS SELECT materiel_id, liens_externe_id FROM materiel_liens_externe');
        $this->addSql('DROP TABLE materiel_liens_externe');
        $this->addSql('CREATE TABLE materiel_liens_externe (materiel_id INTEGER NOT NULL, liens_externe_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_externe_id))');
        $this->addSql('INSERT INTO materiel_liens_externe (materiel_id, liens_externe_id) SELECT materiel_id, liens_externe_id FROM __temp__materiel_liens_externe');
        $this->addSql('DROP TABLE __temp__materiel_liens_externe');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiel_liens_externe (materiel_id)');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiel_liens_externe (liens_externe_id)');
        $this->addSql('DROP INDEX IDX_57B93FD6A10E8B56');
        $this->addSql('DROP INDEX IDX_57B93FD69DA45D70');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiel_liens_interne AS SELECT materiel_id, liens_interne_id FROM materiel_liens_interne');
        $this->addSql('DROP TABLE materiel_liens_interne');
        $this->addSql('CREATE TABLE materiel_liens_interne (materiel_id INTEGER NOT NULL, liens_interne_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_interne_id))');
        $this->addSql('INSERT INTO materiel_liens_interne (materiel_id, liens_interne_id) SELECT materiel_id, liens_interne_id FROM __temp__materiel_liens_interne');
        $this->addSql('DROP TABLE __temp__materiel_liens_interne');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiel_liens_interne (materiel_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiel_liens_interne (liens_interne_id)');
    }
}
