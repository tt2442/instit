<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210427202506 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user_promotions');
        $this->addSql('DROP INDEX IDX_BFDD316810007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles AS SELECT id, promotions_id, titre, multimedia, etat, quantite, frais_envoi, prix, description FROM articles');
        $this->addSql('DROP TABLE articles');
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, description CLOB DEFAULT NULL COLLATE BINARY, CONSTRAINT FK_BFDD316810007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO articles (id, promotions_id, titre, multimedia, etat, quantite, frais_envoi, prix, description) SELECT id, promotions_id, titre, multimedia, etat, quantite, frais_envoi, prix, description FROM __temp__articles');
        $this->addSql('DROP TABLE __temp__articles');
        $this->addSql('CREATE INDEX IDX_BFDD316810007789 ON articles (promotions_id)');
        $this->addSql('DROP INDEX IDX_DE004A0E1EBAF6CC');
        $this->addSql('DROP INDEX IDX_DE004A0EA21214B7');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_categories AS SELECT articles_id, categories_id FROM articles_categories');
        $this->addSql('DROP TABLE articles_categories');
        $this->addSql('CREATE TABLE articles_categories (articles_id INTEGER NOT NULL, categories_id INTEGER NOT NULL, PRIMARY KEY(articles_id, categories_id), CONSTRAINT FK_DE004A0E1EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DE004A0EA21214B7 FOREIGN KEY (categories_id) REFERENCES categories (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO articles_categories (articles_id, categories_id) SELECT articles_id, categories_id FROM __temp__articles_categories');
        $this->addSql('DROP TABLE __temp__articles_categories');
        $this->addSql('CREATE INDEX IDX_DE004A0E1EBAF6CC ON articles_categories (articles_id)');
        $this->addSql('CREATE INDEX IDX_DE004A0EA21214B7 ON articles_categories (categories_id)');
        $this->addSql('DROP INDEX IDX_370942B11EBAF6CC');
        $this->addSql('DROP INDEX IDX_370942B1BD7BF362');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_fichiers AS SELECT articles_id, fichiers_id FROM articles_fichiers');
        $this->addSql('DROP TABLE articles_fichiers');
        $this->addSql('CREATE TABLE articles_fichiers (articles_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(articles_id, fichiers_id), CONSTRAINT FK_370942B11EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_370942B1BD7BF362 FOREIGN KEY (fichiers_id) REFERENCES fichiers (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO articles_fichiers (articles_id, fichiers_id) SELECT articles_id, fichiers_id FROM __temp__articles_fichiers');
        $this->addSql('DROP TABLE __temp__articles_fichiers');
        $this->addSql('CREATE INDEX IDX_370942B11EBAF6CC ON articles_fichiers (articles_id)');
        $this->addSql('CREATE INDEX IDX_370942B1BD7BF362 ON articles_fichiers (fichiers_id)');
        $this->addSql('DROP INDEX IDX_61DDD3E51EBAF6CC');
        $this->addSql('DROP INDEX IDX_61DDD3E5A10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_materiels AS SELECT articles_id, materiels_id FROM articles_materiels');
        $this->addSql('DROP TABLE articles_materiels');
        $this->addSql('CREATE TABLE articles_materiels (articles_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(articles_id, materiels_id), CONSTRAINT FK_61DDD3E51EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_61DDD3E5A10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO articles_materiels (articles_id, materiels_id) SELECT articles_id, materiels_id FROM __temp__articles_materiels');
        $this->addSql('DROP TABLE __temp__articles_materiels');
        $this->addSql('CREATE INDEX IDX_61DDD3E51EBAF6CC ON articles_materiels (articles_id)');
        $this->addSql('CREATE INDEX IDX_61DDD3E5A10E8B56 ON articles_materiels (materiels_id)');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categories_promotions AS SELECT categories_id, promotions_id FROM categories_promotions');
        $this->addSql('DROP TABLE categories_promotions');
        $this->addSql('CREATE TABLE categories_promotions (categories_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categories_id, promotions_id), CONSTRAINT FK_4B95703CA21214B7 FOREIGN KEY (categories_id) REFERENCES categories (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_4B95703C10007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO categories_promotions (categories_id, promotions_id) SELECT categories_id, promotions_id FROM __temp__categories_promotions');
        $this->addSql('DROP TABLE __temp__categories_promotions');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categories_promotions (categories_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categories_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_35D4282CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('DROP INDEX IDX_D470CD148BF5C2E6');
        $this->addSql('DROP INDEX IDX_D470CD141EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_articles AS SELECT commandes_id, articles_id FROM commandes_articles');
        $this->addSql('DROP TABLE commandes_articles');
        $this->addSql('CREATE TABLE commandes_articles (commandes_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, articles_id), CONSTRAINT FK_D470CD148BF5C2E6 FOREIGN KEY (commandes_id) REFERENCES commandes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D470CD141EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes_articles (commandes_id, articles_id) SELECT commandes_id, articles_id FROM __temp__commandes_articles');
        $this->addSql('DROP TABLE __temp__commandes_articles');
        $this->addSql('CREATE INDEX IDX_D470CD148BF5C2E6 ON commandes_articles (commandes_id)');
        $this->addSql('CREATE INDEX IDX_D470CD141EBAF6CC ON commandes_articles (articles_id)');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_promotions AS SELECT commandes_id, promotions_id FROM commandes_promotions');
        $this->addSql('DROP TABLE commandes_promotions');
        $this->addSql('CREATE TABLE commandes_promotions (commandes_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, promotions_id), CONSTRAINT FK_DD9AD3548BF5C2E6 FOREIGN KEY (commandes_id) REFERENCES commandes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DD9AD35410007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes_promotions (commandes_id, promotions_id) SELECT commandes_id, promotions_id FROM __temp__commandes_promotions');
        $this->addSql('DROP TABLE __temp__commandes_promotions');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commandes_promotions (commandes_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commandes_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('DROP INDEX IDX_D9BEC0C41EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, user_id, articles_id, etat, date, message FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, articles_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, date DATETIME NOT NULL, message CLOB NOT NULL COLLATE BINARY, CONSTRAINT FK_D9BEC0C4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D9BEC0C41EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaires (id, user_id, articles_id, etat, date, message) SELECT id, user_id, articles_id, etat, date, message FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C41EBAF6CC ON commentaires (articles_id)');
        $this->addSql('DROP INDEX IDX_57B93FD6A10E8B56');
        $this->addSql('DROP INDEX IDX_57B93FD69DA45D70');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_internes AS SELECT materiels_id, liens_internes_id FROM materiels_liens_internes');
        $this->addSql('DROP TABLE materiels_liens_internes');
        $this->addSql('CREATE TABLE materiels_liens_internes (materiels_id INTEGER NOT NULL, liens_internes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_internes_id), CONSTRAINT FK_57B93FD6A10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_57B93FD69DA45D70 FOREIGN KEY (liens_internes_id) REFERENCES liens_internes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiels_liens_internes (materiels_id, liens_internes_id) SELECT materiels_id, liens_internes_id FROM __temp__materiels_liens_internes');
        $this->addSql('DROP TABLE __temp__materiels_liens_internes');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiels_liens_internes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiels_liens_internes (liens_internes_id)');
        $this->addSql('DROP INDEX IDX_418836DA10E8B56');
        $this->addSql('DROP INDEX IDX_418836DBD0E3E18');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_externes AS SELECT materiels_id, liens_externes_id FROM materiels_liens_externes');
        $this->addSql('DROP TABLE materiels_liens_externes');
        $this->addSql('CREATE TABLE materiels_liens_externes (materiels_id INTEGER NOT NULL, liens_externes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_externes_id), CONSTRAINT FK_418836DA10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_418836DBD0E3E18 FOREIGN KEY (liens_externes_id) REFERENCES liens_externes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiels_liens_externes (materiels_id, liens_externes_id) SELECT materiels_id, liens_externes_id FROM __temp__materiels_liens_externes');
        $this->addSql('DROP TABLE __temp__materiels_liens_externes');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiels_liens_externes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiels_liens_externes (liens_externes_id)');
        $this->addSql('DROP INDEX IDX_5F50D568A76ED395');
        $this->addSql('DROP INDEX IDX_5F50D5681EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_articles AS SELECT user_id, articles_id FROM user_articles');
        $this->addSql('DROP TABLE user_articles');
        $this->addSql('CREATE TABLE user_articles (user_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(user_id, articles_id), CONSTRAINT FK_5F50D568A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5F50D5681EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO user_articles (user_id, articles_id) SELECT user_id, articles_id FROM __temp__user_articles');
        $this->addSql('DROP TABLE __temp__user_articles');
        $this->addSql('CREATE INDEX IDX_5F50D568A76ED395 ON user_articles (user_id)');
        $this->addSql('CREATE INDEX IDX_5F50D5681EBAF6CC ON user_articles (articles_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_promotions (user_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(user_id, promotions_id))');
        $this->addSql('CREATE INDEX IDX_4D7CF6D810007789 ON user_promotions (promotions_id)');
        $this->addSql('CREATE INDEX IDX_4D7CF6D8A76ED395 ON user_promotions (user_id)');
        $this->addSql('DROP INDEX IDX_BFDD316810007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles AS SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM articles');
        $this->addSql('DROP TABLE articles');
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO articles (id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__articles');
        $this->addSql('DROP TABLE __temp__articles');
        $this->addSql('CREATE INDEX IDX_BFDD316810007789 ON articles (promotions_id)');
        $this->addSql('DROP INDEX IDX_DE004A0E1EBAF6CC');
        $this->addSql('DROP INDEX IDX_DE004A0EA21214B7');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_categories AS SELECT articles_id, categories_id FROM articles_categories');
        $this->addSql('DROP TABLE articles_categories');
        $this->addSql('CREATE TABLE articles_categories (articles_id INTEGER NOT NULL, categories_id INTEGER NOT NULL, PRIMARY KEY(articles_id, categories_id))');
        $this->addSql('INSERT INTO articles_categories (articles_id, categories_id) SELECT articles_id, categories_id FROM __temp__articles_categories');
        $this->addSql('DROP TABLE __temp__articles_categories');
        $this->addSql('CREATE INDEX IDX_DE004A0E1EBAF6CC ON articles_categories (articles_id)');
        $this->addSql('CREATE INDEX IDX_DE004A0EA21214B7 ON articles_categories (categories_id)');
        $this->addSql('DROP INDEX IDX_370942B11EBAF6CC');
        $this->addSql('DROP INDEX IDX_370942B1BD7BF362');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_fichiers AS SELECT articles_id, fichiers_id FROM articles_fichiers');
        $this->addSql('DROP TABLE articles_fichiers');
        $this->addSql('CREATE TABLE articles_fichiers (articles_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(articles_id, fichiers_id))');
        $this->addSql('INSERT INTO articles_fichiers (articles_id, fichiers_id) SELECT articles_id, fichiers_id FROM __temp__articles_fichiers');
        $this->addSql('DROP TABLE __temp__articles_fichiers');
        $this->addSql('CREATE INDEX IDX_370942B11EBAF6CC ON articles_fichiers (articles_id)');
        $this->addSql('CREATE INDEX IDX_370942B1BD7BF362 ON articles_fichiers (fichiers_id)');
        $this->addSql('DROP INDEX IDX_61DDD3E51EBAF6CC');
        $this->addSql('DROP INDEX IDX_61DDD3E5A10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles_materiels AS SELECT articles_id, materiels_id FROM articles_materiels');
        $this->addSql('DROP TABLE articles_materiels');
        $this->addSql('CREATE TABLE articles_materiels (articles_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(articles_id, materiels_id))');
        $this->addSql('INSERT INTO articles_materiels (articles_id, materiels_id) SELECT articles_id, materiels_id FROM __temp__articles_materiels');
        $this->addSql('DROP TABLE __temp__articles_materiels');
        $this->addSql('CREATE INDEX IDX_61DDD3E51EBAF6CC ON articles_materiels (articles_id)');
        $this->addSql('CREATE INDEX IDX_61DDD3E5A10E8B56 ON articles_materiels (materiels_id)');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categories_promotions AS SELECT categories_id, promotions_id FROM categories_promotions');
        $this->addSql('DROP TABLE categories_promotions');
        $this->addSql('CREATE TABLE categories_promotions (categories_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categories_id, promotions_id))');
        $this->addSql('INSERT INTO categories_promotions (categories_id, promotions_id) SELECT categories_id, promotions_id FROM __temp__categories_promotions');
        $this->addSql('DROP TABLE __temp__categories_promotions');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categories_promotions (categories_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categories_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('DROP INDEX IDX_D470CD148BF5C2E6');
        $this->addSql('DROP INDEX IDX_D470CD141EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_articles AS SELECT commandes_id, articles_id FROM commandes_articles');
        $this->addSql('DROP TABLE commandes_articles');
        $this->addSql('CREATE TABLE commandes_articles (commandes_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, articles_id))');
        $this->addSql('INSERT INTO commandes_articles (commandes_id, articles_id) SELECT commandes_id, articles_id FROM __temp__commandes_articles');
        $this->addSql('DROP TABLE __temp__commandes_articles');
        $this->addSql('CREATE INDEX IDX_D470CD148BF5C2E6 ON commandes_articles (commandes_id)');
        $this->addSql('CREATE INDEX IDX_D470CD141EBAF6CC ON commandes_articles (articles_id)');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_promotions AS SELECT commandes_id, promotions_id FROM commandes_promotions');
        $this->addSql('DROP TABLE commandes_promotions');
        $this->addSql('CREATE TABLE commandes_promotions (commandes_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, promotions_id))');
        $this->addSql('INSERT INTO commandes_promotions (commandes_id, promotions_id) SELECT commandes_id, promotions_id FROM __temp__commandes_promotions');
        $this->addSql('DROP TABLE __temp__commandes_promotions');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commandes_promotions (commandes_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commandes_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('DROP INDEX IDX_D9BEC0C41EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, user_id, articles_id, etat, message, date FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, articles_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL, message CLOB NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commentaires (id, user_id, articles_id, etat, message, date) SELECT id, user_id, articles_id, etat, message, date FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C41EBAF6CC ON commentaires (articles_id)');
        $this->addSql('DROP INDEX IDX_418836DA10E8B56');
        $this->addSql('DROP INDEX IDX_418836DBD0E3E18');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_externes AS SELECT materiels_id, liens_externes_id FROM materiels_liens_externes');
        $this->addSql('DROP TABLE materiels_liens_externes');
        $this->addSql('CREATE TABLE materiels_liens_externes (materiels_id INTEGER NOT NULL, liens_externes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_externes_id))');
        $this->addSql('INSERT INTO materiels_liens_externes (materiels_id, liens_externes_id) SELECT materiels_id, liens_externes_id FROM __temp__materiels_liens_externes');
        $this->addSql('DROP TABLE __temp__materiels_liens_externes');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiels_liens_externes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiels_liens_externes (liens_externes_id)');
        $this->addSql('DROP INDEX IDX_57B93FD6A10E8B56');
        $this->addSql('DROP INDEX IDX_57B93FD69DA45D70');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_internes AS SELECT materiels_id, liens_internes_id FROM materiels_liens_internes');
        $this->addSql('DROP TABLE materiels_liens_internes');
        $this->addSql('CREATE TABLE materiels_liens_internes (materiels_id INTEGER NOT NULL, liens_internes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_internes_id))');
        $this->addSql('INSERT INTO materiels_liens_internes (materiels_id, liens_internes_id) SELECT materiels_id, liens_internes_id FROM __temp__materiels_liens_internes');
        $this->addSql('DROP TABLE __temp__materiels_liens_internes');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiels_liens_internes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiels_liens_internes (liens_internes_id)');
        $this->addSql('DROP INDEX IDX_5F50D568A76ED395');
        $this->addSql('DROP INDEX IDX_5F50D5681EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_articles AS SELECT user_id, articles_id FROM user_articles');
        $this->addSql('DROP TABLE user_articles');
        $this->addSql('CREATE TABLE user_articles (user_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(user_id, articles_id))');
        $this->addSql('INSERT INTO user_articles (user_id, articles_id) SELECT user_id, articles_id FROM __temp__user_articles');
        $this->addSql('DROP TABLE __temp__user_articles');
        $this->addSql('CREATE INDEX IDX_5F50D568A76ED395 ON user_articles (user_id)');
        $this->addSql('CREATE INDEX IDX_5F50D5681EBAF6CC ON user_articles (articles_id)');
    }
}
