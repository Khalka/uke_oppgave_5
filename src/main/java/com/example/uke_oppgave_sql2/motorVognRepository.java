package com.example.uke_oppgave_sql2;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class motorVognRepository {


    @Autowired
    private  JdbcTemplate db;

   private Logger logger = LoggerFactory.getLogger(motorVognRepository.class);

    public void lagreMotorvogn(motorVogn m) {
        String sql = "INSERT INTO motorvog (personnummer,navn,addresse,kjennetegn,bilmerke,biltype) VALUES(?,?,?,?,?,?)";
        db.update(sql, m.getPersonnummer(), m.getNavn(), m.getAddresse(), m.getKjennetegn(), m.getBilmerke(), m.getBiltype());
    }

    public List<motorVogn> hentAlleMotorvogner() {
        String sql = "SELECT * FROM motorvog";
        return db.query(sql, new BeanPropertyRowMapper(motorVogn.class));
    }


    public motorVogn henteEnMotorvogn(int id) {
        String sql = "SELECT * FROM motorvog WHERE id=?";
        List<motorVogn> enMotorvogn = db.query(sql, new BeanPropertyRowMapper(motorVogn.class), id);
        return enMotorvogn.get(0);
    }

    public void endreMotorvogn(motorVogn m) {
        String sql = "UPDATE Motorvog SET personnummer=?, navn=?,addresse=?,kjennetegn=?,bilmerke=?,biltype=? where id=?";
        db.update(sql, m.getPersonnummer(), m.getNavn(), m.getAddresse(), m.getKjennetegn(), m.getBilmerke(), m.getBiltype(), m.getId());
    }

    public void slettEnMotorvogn(long personnummer) {
        String sql = "DELETE FROM Motorvog WHERE id=?";
        db.update(sql, personnummer);
    }

    public void slettAlleMotorvogner() {
        String sql = "DELETE FROM Motorvog";
        db.update(sql);
    }

    public List<Bil> hentAlleBiler() {
        String sql = "SELECT * FROM Bil";
        return db.query(sql, new BeanPropertyRowMapper(Bil.class));
    }
}
