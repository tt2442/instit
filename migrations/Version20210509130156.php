<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210509130156 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article_categorie (article_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(article_id, categorie_id))');
        $this->addSql('CREATE INDEX IDX_934886107294869C ON article_categorie (article_id)');
        $this->addSql('CREATE INDEX IDX_93488610BCF5E72D ON article_categorie (categorie_id)');
        $this->addSql('CREATE TABLE categorie (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, etat BOOLEAN NOT NULL)');
        $this->addSql('CREATE TABLE categorie_promotions (categorie_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotions_id))');
        $this->addSql('CREATE INDEX IDX_74D2FA98BCF5E72D ON categorie_promotions (categorie_id)');
        $this->addSql('CREATE INDEX IDX_74D2FA9810007789 ON categorie_promotions (promotions_id)');
        $this->addSql('DROP TABLE article_categories');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE categories_promotions');
        $this->addSql('DROP INDEX IDX_23A0E6610007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article AS SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM article');
        $this->addSql('DROP TABLE article');
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, description CLOB DEFAULT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, CONSTRAINT FK_23A0E6610007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article (id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__article');
        $this->addSql('DROP TABLE __temp__article');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotions_id)');
        $this->addSql('DROP INDEX IDX_C37540C0BD7BF362');
        $this->addSql('DROP INDEX IDX_C37540C07294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_fichiers AS SELECT article_id, fichiers_id FROM article_fichiers');
        $this->addSql('DROP TABLE article_fichiers');
        $this->addSql('CREATE TABLE article_fichiers (article_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichiers_id), CONSTRAINT FK_C37540C07294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_C37540C0BD7BF362 FOREIGN KEY (fichiers_id) REFERENCES fichiers (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article_fichiers (article_id, fichiers_id) SELECT article_id, fichiers_id FROM __temp__article_fichiers');
        $this->addSql('DROP TABLE __temp__article_fichiers');
        $this->addSql('CREATE INDEX IDX_C37540C0BD7BF362 ON article_fichiers (fichiers_id)');
        $this->addSql('CREATE INDEX IDX_C37540C07294869C ON article_fichiers (article_id)');
        $this->addSql('DROP INDEX IDX_462BEE4DA10E8B56');
        $this->addSql('DROP INDEX IDX_462BEE4D7294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_materiels AS SELECT article_id, materiels_id FROM article_materiels');
        $this->addSql('DROP TABLE article_materiels');
        $this->addSql('CREATE TABLE article_materiels (article_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiels_id), CONSTRAINT FK_462BEE4D7294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_462BEE4DA10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article_materiels (article_id, materiels_id) SELECT article_id, materiels_id FROM __temp__article_materiels');
        $this->addSql('DROP TABLE __temp__article_materiels');
        $this->addSql('CREATE INDEX IDX_462BEE4DA10E8B56 ON article_materiels (materiels_id)');
        $this->addSql('CREATE INDEX IDX_462BEE4D7294869C ON article_materiels (article_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_35D4282CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('DROP INDEX IDX_C49786367294869C');
        $this->addSql('DROP INDEX IDX_C49786368BF5C2E6');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_article AS SELECT commandes_id, article_id FROM commandes_article');
        $this->addSql('DROP TABLE commandes_article');
        $this->addSql('CREATE TABLE commandes_article (commandes_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, article_id), CONSTRAINT FK_C49786368BF5C2E6 FOREIGN KEY (commandes_id) REFERENCES commandes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_C49786367294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes_article (commandes_id, article_id) SELECT commandes_id, article_id FROM __temp__commandes_article');
        $this->addSql('DROP TABLE __temp__commandes_article');
        $this->addSql('CREATE INDEX IDX_C49786367294869C ON commandes_article (article_id)');
        $this->addSql('CREATE INDEX IDX_C49786368BF5C2E6 ON commandes_article (commandes_id)');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_promotions AS SELECT commandes_id, promotions_id FROM commandes_promotions');
        $this->addSql('DROP TABLE commandes_promotions');
        $this->addSql('CREATE TABLE commandes_promotions (commandes_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, promotions_id), CONSTRAINT FK_DD9AD3548BF5C2E6 FOREIGN KEY (commandes_id) REFERENCES commandes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DD9AD35410007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes_promotions (commandes_id, promotions_id) SELECT commandes_id, promotions_id FROM __temp__commandes_promotions');
        $this->addSql('DROP TABLE __temp__commandes_promotions');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commandes_promotions (commandes_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commandes_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C47294869C');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, user_id, article_id, etat, date, message FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, date DATETIME NOT NULL, message CLOB NOT NULL COLLATE BINARY, CONSTRAINT FK_D9BEC0C4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D9BEC0C47294869C FOREIGN KEY (article_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaires (id, user_id, article_id, etat, date, message) SELECT id, user_id, article_id, etat, date, message FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C47294869C ON commentaires (article_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
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
        $this->addSql('DROP INDEX IDX_5A37106C7294869C');
        $this->addSql('DROP INDEX IDX_5A37106CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_article AS SELECT user_id, article_id FROM user_article');
        $this->addSql('DROP TABLE user_article');
        $this->addSql('CREATE TABLE user_article (user_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(user_id, article_id), CONSTRAINT FK_5A37106CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5A37106C7294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO user_article (user_id, article_id) SELECT user_id, article_id FROM __temp__user_article');
        $this->addSql('DROP TABLE __temp__user_article');
        $this->addSql('CREATE INDEX IDX_5A37106C7294869C ON user_article (article_id)');
        $this->addSql('CREATE INDEX IDX_5A37106CA76ED395 ON user_article (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article_categories (article_id INTEGER NOT NULL, categories_id INTEGER NOT NULL, PRIMARY KEY(article_id, categories_id))');
        $this->addSql('CREATE INDEX IDX_62A97E9A21214B7 ON article_categories (categories_id)');
        $this->addSql('CREATE INDEX IDX_62A97E97294869C ON article_categories (article_id)');
        $this->addSql('CREATE TABLE categories (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL COLLATE BINARY, etat BOOLEAN NOT NULL, description CLOB DEFAULT NULL COLLATE BINARY)');
        $this->addSql('CREATE TABLE categories_promotions (categories_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categories_id, promotions_id))');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categories_promotions (categories_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categories_promotions (promotions_id)');
        $this->addSql('DROP TABLE article_categorie');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE categorie_promotions');
        $this->addSql('DROP INDEX IDX_23A0E6610007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article AS SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM article');
        $this->addSql('DROP TABLE article');
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO article (id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, promotions_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__article');
        $this->addSql('DROP TABLE __temp__article');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotions_id)');
        $this->addSql('DROP INDEX IDX_C37540C07294869C');
        $this->addSql('DROP INDEX IDX_C37540C0BD7BF362');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_fichiers AS SELECT article_id, fichiers_id FROM article_fichiers');
        $this->addSql('DROP TABLE article_fichiers');
        $this->addSql('CREATE TABLE article_fichiers (article_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichiers_id))');
        $this->addSql('INSERT INTO article_fichiers (article_id, fichiers_id) SELECT article_id, fichiers_id FROM __temp__article_fichiers');
        $this->addSql('DROP TABLE __temp__article_fichiers');
        $this->addSql('CREATE INDEX IDX_C37540C07294869C ON article_fichiers (article_id)');
        $this->addSql('CREATE INDEX IDX_C37540C0BD7BF362 ON article_fichiers (fichiers_id)');
        $this->addSql('DROP INDEX IDX_462BEE4D7294869C');
        $this->addSql('DROP INDEX IDX_462BEE4DA10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_materiels AS SELECT article_id, materiels_id FROM article_materiels');
        $this->addSql('DROP TABLE article_materiels');
        $this->addSql('CREATE TABLE article_materiels (article_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiels_id))');
        $this->addSql('INSERT INTO article_materiels (article_id, materiels_id) SELECT article_id, materiels_id FROM __temp__article_materiels');
        $this->addSql('DROP TABLE __temp__article_materiels');
        $this->addSql('CREATE INDEX IDX_462BEE4D7294869C ON article_materiels (article_id)');
        $this->addSql('CREATE INDEX IDX_462BEE4DA10E8B56 ON article_materiels (materiels_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('DROP INDEX IDX_C49786368BF5C2E6');
        $this->addSql('DROP INDEX IDX_C49786367294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_article AS SELECT commandes_id, article_id FROM commandes_article');
        $this->addSql('DROP TABLE commandes_article');
        $this->addSql('CREATE TABLE commandes_article (commandes_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, article_id))');
        $this->addSql('INSERT INTO commandes_article (commandes_id, article_id) SELECT commandes_id, article_id FROM __temp__commandes_article');
        $this->addSql('DROP TABLE __temp__commandes_article');
        $this->addSql('CREATE INDEX IDX_C49786368BF5C2E6 ON commandes_article (commandes_id)');
        $this->addSql('CREATE INDEX IDX_C49786367294869C ON commandes_article (article_id)');
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
        $this->addSql('DROP INDEX IDX_D9BEC0C47294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, user_id, article_id, etat, message, date FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL, message CLOB NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commentaires (id, user_id, article_id, etat, message, date) SELECT id, user_id, article_id, etat, message, date FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C47294869C ON commentaires (article_id)');
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
        $this->addSql('DROP INDEX IDX_5A37106CA76ED395');
        $this->addSql('DROP INDEX IDX_5A37106C7294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_article AS SELECT user_id, article_id FROM user_article');
        $this->addSql('DROP TABLE user_article');
        $this->addSql('CREATE TABLE user_article (user_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(user_id, article_id))');
        $this->addSql('INSERT INTO user_article (user_id, article_id) SELECT user_id, article_id FROM __temp__user_article');
        $this->addSql('DROP TABLE __temp__user_article');
        $this->addSql('CREATE INDEX IDX_5A37106CA76ED395 ON user_article (user_id)');
        $this->addSql('CREATE INDEX IDX_5A37106C7294869C ON user_article (article_id)');
    }
}
