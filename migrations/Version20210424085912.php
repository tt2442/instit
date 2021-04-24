<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210424085912 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, prix INTEGER NOT NULL, multimedia VARCHAR(255) DEFAULT NULL, etat VARCHAR(255) NOT NULL, quantite INTEGER NOT NULL, frais_envoi INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE categories (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, etat BOOLEAN NOT NULL)');
        $this->addSql('CREATE TABLE commandes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE commentaires (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, etat VARCHAR(255) NOT NULL, message VARCHAR(255) NOT NULL, date DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE fichiers (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, image VARCHAR(255) DEFAULT NULL, tag BOOLEAN NOT NULL, degrade BOOLEAN NOT NULL, enligne BOOLEAN NOT NULL)');
        $this->addSql('CREATE TABLE liens_externes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, site VARCHAR(255) DEFAULT NULL, url VARCHAR(255) DEFAULT NULL, prix INTEGER DEFAULT NULL, observation VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE liens_internes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, observation VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE materiels (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, quantite INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE promotions (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, date_start DATETIME NOT NULL, date_end DATETIME DEFAULT NULL, etat BOOLEAN NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, type VARCHAR(255) NOT NULL, valeur INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles CLOB NOT NULL --(DC2Type:json)
        , password VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, sexe VARCHAR(255) DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, code_postal INTEGER DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, region VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) DEFAULT NULL, fixe VARCHAR(255) DEFAULT NULL, pays VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE articles');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE commandes');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('DROP TABLE fichiers');
        $this->addSql('DROP TABLE liens_externes');
        $this->addSql('DROP TABLE liens_internes');
        $this->addSql('DROP TABLE materiels');
        $this->addSql('DROP TABLE promotions');
        $this->addSql('DROP TABLE user');
    }
}
