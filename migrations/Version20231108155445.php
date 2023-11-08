<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231108155445 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE reviews_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE reviews (id INT NOT NULL, user_name VARCHAR(50) NOT NULL, review_text VARCHAR(255) NOT NULL, rating VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE vehicles ADD color VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE vehicles DROP doors');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE reviews_id_seq CASCADE');
        $this->addSql('DROP TABLE reviews');
        $this->addSql('ALTER TABLE vehicles ADD doors SMALLINT DEFAULT NULL');
        $this->addSql('ALTER TABLE vehicles DROP color');
    }
}