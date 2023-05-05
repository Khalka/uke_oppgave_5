CREATE TABLE Motorvog (
                          id INTEGER AUTO_INCREMENT NOT NULL,
                          personnummer INT unique NOT NULL,
                          navn  varchar(255) NOT NULL ,
                          addresse varchar(255) NOT NULL ,
                          kjennetegn varchar(255) NOT NULL ,
                          bilmerke VARCHAR(255) NOT NULL,
                          biltype varchar(200) NOT NULL ,
                          primary key (id)

);


CREATE TABLE Bil
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    bilmerke VARCHAR(200) NOT NULL,
    biltype VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);