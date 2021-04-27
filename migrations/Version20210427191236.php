<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210427191236 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE articles_categories (articles_id INTEGER NOT NULL, categories_id INTEGER NOT NULL, PRIMARY KEY(articles_id, categories_id))');
        $this->addSql('CREATE INDEX IDX_DE004A0E1EBAF6CC ON articles_categories (articles_id)');
        $this->addSql('CREATE INDEX IDX_DE004A0EA21214B7 ON articles_categories (categories_id)');
        $this->addSql('CREATE TABLE articles_fichiers (articles_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(articles_id, fichiers_id))');
        $this->addSql('CREATE INDEX IDX_370942B11EBAF6CC ON articles_fichiers (articles_id)');
        $this->addSql('CREATE INDEX IDX_370942B1BD7BF362 ON articles_fichiers (fichiers_id)');
        $this->addSql('CREATE TABLE articles_materiels (articles_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(articles_id, materiels_id))');
        $this->addSql('CREATE INDEX IDX_61DDD3E51EBAF6CC ON articles_materiels (articles_id)');
        $this->addSql('CREATE INDEX IDX_61DDD3E5A10E8B56 ON articles_materiels (materiels_id)');
        $this->addSql('CREATE TABLE categories_promotions (categories_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categories_id, promotions_id))');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categories_promotions (categories_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categories_promotions (promotions_id)');
        $this->addSql('CREATE TABLE commandes_articles (commandes_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_D470CD148BF5C2E6 ON commandes_articles (commandes_id)');
        $this->addSql('CREATE INDEX IDX_D470CD141EBAF6CC ON commandes_articles (articles_id)');
        $this->addSql('CREATE TABLE commandes_promotions (commandes_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, promotions_id))');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commandes_promotions (commandes_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commandes_promotions (promotions_id)');
        $this->addSql('CREATE TABLE materiels_liens_internes (materiels_id INTEGER NOT NULL, liens_internes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_internes_id))');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiels_liens_internes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiels_liens_internes (liens_internes_id)');
        $this->addSql('CREATE TABLE materiels_liens_externes (materiels_id INTEGER NOT NULL, liens_externes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_externes_id))');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiels_liens_externes (materiels_id)');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiels_liens_externes (liens_externes_id)');
        $this->addSql('CREATE TABLE user_articles (user_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(user_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_5F50D568A76ED395 ON user_articles (user_id)');
        $this->addSql('CREATE INDEX IDX_5F50D5681EBAF6CC ON user_articles (articles_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles AS SELECT id, titre, description, prix, multimedia, etat, quantite, frais_envoi FROM articles');
        $this->addSql('DROP TABLE articles');
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, description VARCHAR(255) DEFAULT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, CONSTRAINT FK_BFDD316810007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO articles (id, titre, description, prix, multimedia, etat, quantite, frais_envoi) SELECT id, titre, description, prix, multimedia, etat, quantite, frais_envoi FROM __temp__articles');
        $this->addSql('DROP TABLE __temp__articles');
        $this->addSql('CREATE INDEX IDX_BFDD316810007789 ON articles (promotions_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_35D4282CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes (id, date) SELECT id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, etat, message, date FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, articles_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, message VARCHAR(255) NOT NULL COLLATE BINARY, date DATETIME NOT NULL, CONSTRAINT FK_D9BEC0C4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D9BEC0C41EBAF6CC FOREIGN KEY (articles_id) REFERENCES articles (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaires (id, etat, message, date) SELECT id, etat, message, date FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C41EBAF6CC ON commentaires (articles_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE articles_categories');
        $this->addSql('DROP TABLE articles_fichiers');
        $this->addSql('DROP TABLE articles_materiels');
        $this->addSql('DROP TABLE categories_promotions');
        $this->addSql('DROP TABLE commandes_articles');
        $this->addSql('DROP TABLE commandes_promotions');
        $this->addSql('DROP TABLE materiels_liens_internes');
        $this->addSql('DROP TABLE materiels_liens_externes');
        $this->addSql('DROP TABLE user_articles');
        $this->addSql('DROP INDEX IDX_BFDD316810007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__articles AS SELECT id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM articles');
        $this->addSql('DROP TABLE articles');
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER NOT NULL)');
        $this->addSql('INSERT INTO articles (id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__articles');
        $this->addSql('DROP TABLE __temp__articles');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commandes (id, date) SELECT id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('DROP INDEX IDX_D9BEC0C41EBAF6CC');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, etat, message, date FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, etat VARCHAR(255) NOT NULL, message VARCHAR(255) NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commentaires (id, etat, message, date) SELECT id, etat, message, date FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
    }
}
