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
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL)');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotions_id)');
        $this->addSql('CREATE TABLE article_categorie (article_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(article_id, categorie_id))');
        $this->addSql('CREATE INDEX IDX_62A97E97294869C ON article_categorie (article_id)');
        $this->addSql('CREATE INDEX IDX_62A97E9A21214B7 ON article_categorie (categorie_id)');
        $this->addSql('CREATE TABLE article_fichiers (article_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichiers_id))');
        $this->addSql('CREATE INDEX IDX_C37540C07294869C ON article_fichiers (article_id)');
        $this->addSql('CREATE INDEX IDX_C37540C0BD7BF362 ON article_fichiers (fichiers_id)');
        $this->addSql('CREATE TABLE article_materiels (article_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiels_id))');
        $this->addSql('CREATE INDEX IDX_462BEE4D7294869C ON article_materiels (article_id)');
        $this->addSql('CREATE INDEX IDX_462BEE4DA10E8B56 ON article_materiels (materiels_id)');
        $this->addSql('CREATE TABLE commandes_article (commandes_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, article_id))');
        $this->addSql('CREATE INDEX IDX_C49786368BF5C2E6 ON commandes_article (commandes_id)');
        $this->addSql('CREATE INDEX IDX_C49786367294869C ON commandes_article (article_id)');
        $this->addSql('CREATE TABLE user_article (user_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(user_id, article_id))');
        $this->addSql('CREATE INDEX IDX_5A37106CA76ED395 ON user_article (user_id)');
        $this->addSql('CREATE INDEX IDX_5A37106C7294869C ON user_article (article_id)');
        $this->addSql('DROP TABLE articles');
        $this->addSql('DROP TABLE articles_categorie');
        $this->addSql('DROP TABLE articles_fichiers');
        $this->addSql('DROP TABLE articles_materiels');
        $this->addSql('DROP TABLE commandes_articles');
        $this->addSql('DROP TABLE user_articles');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotions AS SELECT categorie_id, promotions_id FROM categorie_promotions');
        $this->addSql('DROP TABLE categorie_promotions');
        $this->addSql('CREATE TABLE categorie_promotions (categorie_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotions_id), CONSTRAINT FK_4B95703CA21214B7 FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_4B95703C10007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO categorie_promotions (categorie_id, promotions_id) SELECT categorie_id, promotions_id FROM __temp__categorie_promotions');
        $this->addSql('DROP TABLE __temp__categorie_promotions');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categorie_promotions (promotions_id)');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categorie_promotions (categorie_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_35D4282CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
        $this->addSql('DROP INDEX IDX_DD9AD35410007789');
        $this->addSql('DROP INDEX IDX_DD9AD3548BF5C2E6');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes_promotions AS SELECT commandes_id, promotions_id FROM commandes_promotions');
        $this->addSql('DROP TABLE commandes_promotions');
        $this->addSql('CREATE TABLE commandes_promotions (commandes_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, promotions_id), CONSTRAINT FK_DD9AD3548BF5C2E6 FOREIGN KEY (commandes_id) REFERENCES commandes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_DD9AD35410007789 FOREIGN KEY (promotions_id) REFERENCES promotions (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commandes_promotions (commandes_id, promotions_id) SELECT commandes_id, promotions_id FROM __temp__commandes_promotions');
        $this->addSql('DROP TABLE __temp__commandes_promotions');
        $this->addSql('CREATE INDEX IDX_DD9AD35410007789 ON commandes_promotions (promotions_id)');
        $this->addSql('CREATE INDEX IDX_DD9AD3548BF5C2E6 ON commandes_promotions (commandes_id)');
        $this->addSql('DROP INDEX IDX_D9BEC0C41EBAF6CC');
        $this->addSql('DROP INDEX IDX_D9BEC0C4A76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaires AS SELECT id, user_id, articles_id, etat, date, message FROM commentaires');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, date DATETIME NOT NULL, message CLOB NOT NULL COLLATE BINARY, CONSTRAINT FK_D9BEC0C4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D9BEC0C47294869C FOREIGN KEY (article_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaires (id, user_id, article_id, etat, date, message) SELECT id, user_id, articles_id, etat, date, message FROM __temp__commentaires');
        $this->addSql('DROP TABLE __temp__commentaires');
        $this->addSql('CREATE INDEX IDX_D9BEC0C4A76ED395 ON commentaires (user_id)');
        $this->addSql('CREATE INDEX IDX_D9BEC0C47294869C ON commentaires (article_id)');
        $this->addSql('DROP INDEX IDX_57B93FD69DA45D70');
        $this->addSql('DROP INDEX IDX_57B93FD6A10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_internes AS SELECT materiels_id, liens_internes_id FROM materiels_liens_internes');
        $this->addSql('DROP TABLE materiels_liens_internes');
        $this->addSql('CREATE TABLE materiels_liens_internes (materiels_id INTEGER NOT NULL, liens_internes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_internes_id), CONSTRAINT FK_57B93FD6A10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_57B93FD69DA45D70 FOREIGN KEY (liens_internes_id) REFERENCES liens_internes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiels_liens_internes (materiels_id, liens_internes_id) SELECT materiels_id, liens_internes_id FROM __temp__materiels_liens_internes');
        $this->addSql('DROP TABLE __temp__materiels_liens_internes');
        $this->addSql('CREATE INDEX IDX_57B93FD69DA45D70 ON materiels_liens_internes (liens_internes_id)');
        $this->addSql('CREATE INDEX IDX_57B93FD6A10E8B56 ON materiels_liens_internes (materiels_id)');
        $this->addSql('DROP INDEX IDX_418836DBD0E3E18');
        $this->addSql('DROP INDEX IDX_418836DA10E8B56');
        $this->addSql('CREATE TEMPORARY TABLE __temp__materiels_liens_externes AS SELECT materiels_id, liens_externes_id FROM materiels_liens_externes');
        $this->addSql('DROP TABLE materiels_liens_externes');
        $this->addSql('CREATE TABLE materiels_liens_externes (materiels_id INTEGER NOT NULL, liens_externes_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_externes_id), CONSTRAINT FK_418836DA10E8B56 FOREIGN KEY (materiels_id) REFERENCES materiels (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_418836DBD0E3E18 FOREIGN KEY (liens_externes_id) REFERENCES liens_externes (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO materiels_liens_externes (materiels_id, liens_externes_id) SELECT materiels_id, liens_externes_id FROM __temp__materiels_liens_externes');
        $this->addSql('DROP TABLE __temp__materiels_liens_externes');
        $this->addSql('CREATE INDEX IDX_418836DBD0E3E18 ON materiels_liens_externes (liens_externes_id)');
        $this->addSql('CREATE INDEX IDX_418836DA10E8B56 ON materiels_liens_externes (materiels_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotions_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, description CLOB DEFAULT NULL COLLATE BINARY)');
        $this->addSql('CREATE INDEX IDX_BFDD316810007789 ON articles (promotions_id)');
        $this->addSql('CREATE TABLE articles_categorie (articles_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(articles_id, categorie_id))');
        $this->addSql('CREATE INDEX IDX_DE004A0EA21214B7 ON articles_categorie (categorie_id)');
        $this->addSql('CREATE INDEX IDX_DE004A0E1EBAF6CC ON articles_categorie (articles_id)');
        $this->addSql('CREATE TABLE articles_fichiers (articles_id INTEGER NOT NULL, fichiers_id INTEGER NOT NULL, PRIMARY KEY(articles_id, fichiers_id))');
        $this->addSql('CREATE INDEX IDX_370942B1BD7BF362 ON articles_fichiers (fichiers_id)');
        $this->addSql('CREATE INDEX IDX_370942B11EBAF6CC ON articles_fichiers (articles_id)');
        $this->addSql('CREATE TABLE articles_materiels (articles_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(articles_id, materiels_id))');
        $this->addSql('CREATE INDEX IDX_61DDD3E5A10E8B56 ON articles_materiels (materiels_id)');
        $this->addSql('CREATE INDEX IDX_61DDD3E51EBAF6CC ON articles_materiels (articles_id)');
        $this->addSql('CREATE TABLE commandes_articles (commandes_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(commandes_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_D470CD141EBAF6CC ON commandes_articles (articles_id)');
        $this->addSql('CREATE INDEX IDX_D470CD148BF5C2E6 ON commandes_articles (commandes_id)');
        $this->addSql('CREATE TABLE user_articles (user_id INTEGER NOT NULL, articles_id INTEGER NOT NULL, PRIMARY KEY(user_id, articles_id))');
        $this->addSql('CREATE INDEX IDX_5F50D5681EBAF6CC ON user_articles (articles_id)');
        $this->addSql('CREATE INDEX IDX_5F50D568A76ED395 ON user_articles (user_id)');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE article_categorie');
        $this->addSql('DROP TABLE article_fichiers');
        $this->addSql('DROP TABLE article_materiels');
        $this->addSql('DROP TABLE commandes_article');
        $this->addSql('DROP TABLE user_article');
        $this->addSql('DROP INDEX IDX_4B95703CA21214B7');
        $this->addSql('DROP INDEX IDX_4B95703C10007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotions AS SELECT categorie_id, promotions_id FROM categorie_promotions');
        $this->addSql('DROP TABLE categorie_promotions');
        $this->addSql('CREATE TABLE categorie_promotions (categorie_id INTEGER NOT NULL, promotions_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotions_id))');
        $this->addSql('INSERT INTO categorie_promotions (categorie_id, promotions_id) SELECT categorie_id, promotions_id FROM __temp__categorie_promotions');
        $this->addSql('DROP TABLE __temp__categorie_promotions');
        $this->addSql('CREATE INDEX IDX_4B95703CA21214B7 ON categorie_promotions (categorie_id)');
        $this->addSql('CREATE INDEX IDX_4B95703C10007789 ON categorie_promotions (promotions_id)');
        $this->addSql('DROP INDEX IDX_35D4282CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commandes AS SELECT id, user_id, date FROM commandes');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commandes (id, user_id, date) SELECT id, user_id, date FROM __temp__commandes');
        $this->addSql('DROP TABLE __temp__commandes');
        $this->addSql('CREATE INDEX IDX_35D4282CA76ED395 ON commandes (user_id)');
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
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, articles_id INTEGER DEFAULT NULL, user_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL, message CLOB NOT NULL, date DATETIME NOT NULL, CONSTRAINT FK_D9BEC0C47294869C FOREIGN KEY (articles_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaires (id, user_id, articles_id, etat, message, date) SELECT id, user_id, article_id, etat, message, date FROM __temp__commentaires');
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
    }
}
