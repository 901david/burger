INSERT INTO burgers SET burger_name='Bacon Cheeseburger', devoured=false;
INSERT INTO burgers SET burger_name='Bleu Cheeseburger', devoured=false;
INSERT INTO burgers SET burger_name='BBQ Onion Fry Burger', devoured=false;
INSERT INTO burgers SET burger_name='Veggie Burger', devoured=false;
INSERT INTO burgers SET burger_name='BlackBean Chili Cheeseburger', devoured=false;

UPDATE burgers SET devoured=true WHERE id=1; 

SELECT * FROM burgers;