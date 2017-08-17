CREATE TABLE burgers (
`id` INTEGER(10) AUTO_INCREMENT NOT NULL,
`burger_name` VARCHAR(50) NOT NULL,
`devoured` BOOLEAN DEFAULT FALSE NOT NULL,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

USE zyg2nd17ryy4avvn;

INSERT INTO burgers SET burger_name='Bacon Cheeseburger', devoured=false;
INSERT INTO burgers SET burger_name='Bleu Cheeseburger', devoured=false;
INSERT INTO burgers SET burger_name='BBQ Onion Fry Burger', devoured=false;
INSERT INTO burgers SET burger_name='Veggie Burger', devoured=false;
INSERT INTO burgers SET burger_name='BlackBean Chili Cheeseburger', devoured=false;
SELECT * FROM burgers;