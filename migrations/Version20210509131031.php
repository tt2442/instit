<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210509131031 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article_materiel (article_id INTEGER NOT NULL, materiel_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiel_id))');
        $this->addSql('CREATE INDEX IDX_4D3A44FA7294869C ON article_materiel (article_id)');
        $this->addSql('CREATE INDEX IDX_4D3A44FA16880AAF ON article_materiel (materiel_id)');
        $this->addSql('CREATE TABLE materiel (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, quantite INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE materiel_liens_interne (materiel_id INTEGER NOT NULL, liens_interne_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_interne_id))');
        $this->addSql('CREATE INDEX IDX_ECD51E8C16880AAF ON materiel_liens_interne (materiel_id)');
        $this->addSql('CREATE INDEX IDX_ECD51E8CBFBAFD8B ON materiel_liens_interne (liens_interne_id)');
        $this->addSql('CREATE TABLE materiel_liens_externe (materiel_id INTEGER NOT NULL, liens_externe_id INTEGER NOT NULL, PRIMARY KEY(materiel_id, liens_externe_id))');
        $this->addSql('CREATE INDEX IDX_FEFA957E16880AAF ON materiel_liens_externe (materiel_id)');
        $this->addSql('CREATE INDEX IDX_FEFA957E7A5C26FE ON materiel_liens_externe (liens_externe_id)');
        $this->addSql('DROP TABLE article_materiels');
        $this->addSql('DROP TABLE materiels');
        $this->addSql('DROP TABLE materiels_liens_externe');
        $this->addSql('DROP TABLE materiels_liens_interne');
        $this->addSql('DROP INDEX IDX_23A0E6610007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article AS SELECT id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM article');
        $this->addSql('DROP TABLE article');
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotion_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL COLLATE BINARY, description CLOB DEFAULT NULL COLLATE BINARY, multimedia VARCHAR(255) DEFAULT NULL COLLATE BINARY, etat VARCHAR(255) NOT NULL COLLATE BINARY, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL, CONSTRAINT FK_23A0E6610007789 FOREIGN KEY (promotion_id) REFERENCES promotion (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article (id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__article');
        $this->addSql('DROP TABLE __temp__article');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotion_id)');
        $this->addSql('DROP INDEX IDX_934886107294869C');
        $this->addSql('DROP INDEX IDX_93488610BCF5E72D');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_categorie AS SELECT article_id, categorie_id FROM article_categorie');
        $this->addSql('DROP TABLE article_categorie');
        $this->addSql('CREATE TABLE article_categorie (article_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(article_id, categorie_id), CONSTRAINT FK_934886107294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_93488610BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article_categorie (article_id, categorie_id) SELECT article_id, categorie_id FROM __temp__article_categorie');
        $this->addSql('DROP TABLE __temp__article_categorie');
        $this->addSql('CREATE INDEX IDX_934886107294869C ON article_categorie (article_id)');
        $this->addSql('CREATE INDEX IDX_93488610BCF5E72D ON article_categorie (categorie_id)');
        $this->addSql('DROP INDEX IDX_76A411A8F915CFE');
        $this->addSql('DROP INDEX IDX_76A411A87294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_fichier AS SELECT article_id, fichier_id FROM article_fichier');
        $this->addSql('DROP TABLE article_fichier');
        $this->addSql('CREATE TABLE article_fichier (article_id INTEGER NOT NULL, fichier_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichier_id), CONSTRAINT FK_76A411A87294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_76A411A8F915CFE FOREIGN KEY (fichier_id) REFERENCES fichier (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO article_fichier (article_id, fichier_id) SELECT article_id, fichier_id FROM __temp__article_fichier');
        $this->addSql('DROP TABLE __temp__article_fichier');
        $this->addSql('CREATE INDEX IDX_76A411A8F915CFE ON article_fichier (fichier_id)');
        $this->addSql('CREATE INDEX IDX_76A411A87294869C ON article_fichier (article_id)');
        $this->addSql('DROP INDEX IDX_74D2FA98BCF5E72D');
        $this->addSql('DROP INDEX IDX_74D2FA9810007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotion AS SELECT categorie_id, promotion_id FROM categorie_promotion');
        $this->addSql('DROP TABLE categorie_promotion');
        $this->addSql('CREATE TABLE categorie_promotion (categorie_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotion_id), CONSTRAINT FK_74D2FA98BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_74D2FA9810007789 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO categorie_promotion (categorie_id, promotion_id) SELECT categorie_id, promotion_id FROM __temp__categorie_promotion');
        $this->addSql('DROP TABLE __temp__categorie_promotion');
        $this->addSql('CREATE INDEX IDX_74D2FA98BCF5E72D ON categorie_promotion (categorie_id)');
        $this->addSql('CREATE INDEX IDX_74D2FA9810007789 ON categorie_promotion (promotion_id)');
        $this->addSql('DROP INDEX IDX_6EEAA67DA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande AS SELECT id, user_id, date FROM commande');
        $this->addSql('DROP TABLE commande');
        $this->addSql('CREATE TABLE commande (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL, CONSTRAINT FK_6EEAA67DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commande (id, user_id, date) SELECT id, user_id, date FROM __temp__commande');
        $this->addSql('DROP TABLE __temp__commande');
        $this->addSql('CREATE INDEX IDX_6EEAA67DA76ED395 ON commande (user_id)');
        $this->addSql('DROP INDEX IDX_F4817CC67294869C');
        $this->addSql('DROP INDEX IDX_F4817CC682EA2E54');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_article AS SELECT commande_id, article_id FROM commande_article');
        $this->addSql('DROP TABLE commande_article');
        $this->addSql('CREATE TABLE commande_article (commande_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commande_id, article_id), CONSTRAINT FK_F4817CC682EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F4817CC67294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commande_article (commande_id, article_id) SELECT commande_id, article_id FROM __temp__commande_article');
        $this->addSql('DROP TABLE __temp__commande_article');
        $this->addSql('CREATE INDEX IDX_F4817CC67294869C ON commande_article (article_id)');
        $this->addSql('CREATE INDEX IDX_F4817CC682EA2E54 ON commande_article (commande_id)');
        $this->addSql('DROP INDEX IDX_72D91CD210007789');
        $this->addSql('DROP INDEX IDX_72D91CD282EA2E54');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_promotion AS SELECT commande_id, promotion_id FROM commande_promotion');
        $this->addSql('DROP TABLE commande_promotion');
        $this->addSql('CREATE TABLE commande_promotion (commande_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(commande_id, promotion_id), CONSTRAINT FK_72D91CD282EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_72D91CD210007789 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commande_promotion (commande_id, promotion_id) SELECT commande_id, promotion_id FROM __temp__commande_promotion');
        $this->addSql('DROP TABLE __temp__commande_promotion');
        $this->addSql('CREATE INDEX IDX_72D91CD210007789 ON commande_promotion (promotion_id)');
        $this->addSql('CREATE INDEX IDX_72D91CD282EA2E54 ON commande_promotion (commande_id)');
        $this->addSql('DROP INDEX IDX_67F068BCA76ED395');
        $this->addSql('DROP INDEX IDX_67F068BC7294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaire AS SELECT id, user_id, article_id, etat, message, date FROM commentaire');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('CREATE TABLE commentaire (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL COLLATE BINARY, message CLOB NOT NULL COLLATE BINARY, date DATETIME NOT NULL, CONSTRAINT FK_67F068BCA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_67F068BC7294869C FOREIGN KEY (article_id) REFERENCES article (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO commentaire (id, user_id, article_id, etat, message, date) SELECT id, user_id, article_id, etat, message, date FROM __temp__commentaire');
        $this->addSql('DROP TABLE __temp__commentaire');
        $this->addSql('CREATE INDEX IDX_67F068BCA76ED395 ON commentaire (user_id)');
        $this->addSql('CREATE INDEX IDX_67F068BC7294869C ON commentaire (article_id)');
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
        $this->addSql('CREATE TABLE article_materiels (article_id INTEGER NOT NULL, materiels_id INTEGER NOT NULL, PRIMARY KEY(article_id, materiels_id))');
        $this->addSql('CREATE INDEX IDX_462BEE4DA10E8B56 ON article_materiels (materiels_id)');
        $this->addSql('CREATE INDEX IDX_462BEE4D7294869C ON article_materiels (article_id)');
        $this->addSql('CREATE TABLE materiels (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL COLLATE BINARY, description VARCHAR(255) DEFAULT NULL COLLATE BINARY, quantite INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE materiels_liens_externe (materiels_id INTEGER NOT NULL, liens_externe_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_externe_id))');
        $this->addSql('CREATE INDEX IDX_CCCF08D3A10E8B56 ON materiels_liens_externe (materiels_id)');
        $this->addSql('CREATE INDEX IDX_CCCF08D37A5C26FE ON materiels_liens_externe (liens_externe_id)');
        $this->addSql('CREATE TABLE materiels_liens_interne (materiels_id INTEGER NOT NULL, liens_interne_id INTEGER NOT NULL, PRIMARY KEY(materiels_id, liens_interne_id))');
        $this->addSql('CREATE INDEX IDX_DEE08321BFBAFD8B ON materiels_liens_interne (liens_interne_id)');
        $this->addSql('CREATE INDEX IDX_DEE08321A10E8B56 ON materiels_liens_interne (materiels_id)');
        $this->addSql('DROP TABLE article_materiel');
        $this->addSql('DROP TABLE materiel');
        $this->addSql('DROP TABLE materiel_liens_interne');
        $this->addSql('DROP TABLE materiel_liens_externe');
        $this->addSql('DROP INDEX IDX_23A0E6610007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article AS SELECT id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM article');
        $this->addSql('DROP TABLE article');
        $this->addSql('CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, promotion_id INTEGER DEFAULT NULL, titre VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL, prix INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO article (id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix) SELECT id, promotion_id, titre, description, multimedia, etat, quantite, frais_envoi, prix FROM __temp__article');
        $this->addSql('DROP TABLE __temp__article');
        $this->addSql('CREATE INDEX IDX_23A0E6610007789 ON article (promotion_id)');
        $this->addSql('DROP INDEX IDX_934886107294869C');
        $this->addSql('DROP INDEX IDX_93488610BCF5E72D');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_categorie AS SELECT article_id, categorie_id FROM article_categorie');
        $this->addSql('DROP TABLE article_categorie');
        $this->addSql('CREATE TABLE article_categorie (article_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, PRIMARY KEY(article_id, categorie_id))');
        $this->addSql('INSERT INTO article_categorie (article_id, categorie_id) SELECT article_id, categorie_id FROM __temp__article_categorie');
        $this->addSql('DROP TABLE __temp__article_categorie');
        $this->addSql('CREATE INDEX IDX_934886107294869C ON article_categorie (article_id)');
        $this->addSql('CREATE INDEX IDX_93488610BCF5E72D ON article_categorie (categorie_id)');
        $this->addSql('DROP INDEX IDX_76A411A87294869C');
        $this->addSql('DROP INDEX IDX_76A411A8F915CFE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__article_fichier AS SELECT article_id, fichier_id FROM article_fichier');
        $this->addSql('DROP TABLE article_fichier');
        $this->addSql('CREATE TABLE article_fichier (article_id INTEGER NOT NULL, fichier_id INTEGER NOT NULL, PRIMARY KEY(article_id, fichier_id))');
        $this->addSql('INSERT INTO article_fichier (article_id, fichier_id) SELECT article_id, fichier_id FROM __temp__article_fichier');
        $this->addSql('DROP TABLE __temp__article_fichier');
        $this->addSql('CREATE INDEX IDX_76A411A87294869C ON article_fichier (article_id)');
        $this->addSql('CREATE INDEX IDX_76A411A8F915CFE ON article_fichier (fichier_id)');
        $this->addSql('DROP INDEX IDX_74D2FA98BCF5E72D');
        $this->addSql('DROP INDEX IDX_74D2FA9810007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__categorie_promotion AS SELECT categorie_id, promotion_id FROM categorie_promotion');
        $this->addSql('DROP TABLE categorie_promotion');
        $this->addSql('CREATE TABLE categorie_promotion (categorie_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(categorie_id, promotion_id))');
        $this->addSql('INSERT INTO categorie_promotion (categorie_id, promotion_id) SELECT categorie_id, promotion_id FROM __temp__categorie_promotion');
        $this->addSql('DROP TABLE __temp__categorie_promotion');
        $this->addSql('CREATE INDEX IDX_74D2FA98BCF5E72D ON categorie_promotion (categorie_id)');
        $this->addSql('CREATE INDEX IDX_74D2FA9810007789 ON categorie_promotion (promotion_id)');
        $this->addSql('DROP INDEX IDX_6EEAA67DA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande AS SELECT id, user_id, date FROM commande');
        $this->addSql('DROP TABLE commande');
        $this->addSql('CREATE TABLE commande (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commande (id, user_id, date) SELECT id, user_id, date FROM __temp__commande');
        $this->addSql('DROP TABLE __temp__commande');
        $this->addSql('CREATE INDEX IDX_6EEAA67DA76ED395 ON commande (user_id)');
        $this->addSql('DROP INDEX IDX_F4817CC682EA2E54');
        $this->addSql('DROP INDEX IDX_F4817CC67294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_article AS SELECT commande_id, article_id FROM commande_article');
        $this->addSql('DROP TABLE commande_article');
        $this->addSql('CREATE TABLE commande_article (commande_id INTEGER NOT NULL, article_id INTEGER NOT NULL, PRIMARY KEY(commande_id, article_id))');
        $this->addSql('INSERT INTO commande_article (commande_id, article_id) SELECT commande_id, article_id FROM __temp__commande_article');
        $this->addSql('DROP TABLE __temp__commande_article');
        $this->addSql('CREATE INDEX IDX_F4817CC682EA2E54 ON commande_article (commande_id)');
        $this->addSql('CREATE INDEX IDX_F4817CC67294869C ON commande_article (article_id)');
        $this->addSql('DROP INDEX IDX_72D91CD282EA2E54');
        $this->addSql('DROP INDEX IDX_72D91CD210007789');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commande_promotion AS SELECT commande_id, promotion_id FROM commande_promotion');
        $this->addSql('DROP TABLE commande_promotion');
        $this->addSql('CREATE TABLE commande_promotion (commande_id INTEGER NOT NULL, promotion_id INTEGER NOT NULL, PRIMARY KEY(commande_id, promotion_id))');
        $this->addSql('INSERT INTO commande_promotion (commande_id, promotion_id) SELECT commande_id, promotion_id FROM __temp__commande_promotion');
        $this->addSql('DROP TABLE __temp__commande_promotion');
        $this->addSql('CREATE INDEX IDX_72D91CD282EA2E54 ON commande_promotion (commande_id)');
        $this->addSql('CREATE INDEX IDX_72D91CD210007789 ON commande_promotion (promotion_id)');
        $this->addSql('DROP INDEX IDX_67F068BCA76ED395');
        $this->addSql('DROP INDEX IDX_67F068BC7294869C');
        $this->addSql('CREATE TEMPORARY TABLE __temp__commentaire AS SELECT id, user_id, article_id, etat, message, date FROM commentaire');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('CREATE TABLE commentaire (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, article_id INTEGER DEFAULT NULL, etat VARCHAR(255) NOT NULL, message CLOB NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('INSERT INTO commentaire (id, user_id, article_id, etat, message, date) SELECT id, user_id, article_id, etat, message, date FROM __temp__commentaire');
        $this->addSql('DROP TABLE __temp__commentaire');
        $this->addSql('CREATE INDEX IDX_67F068BCA76ED395 ON commentaire (user_id)');
        $this->addSql('CREATE INDEX IDX_67F068BC7294869C ON commentaire (article_id)');
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
