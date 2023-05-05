package com.example.uke_oppgave_sql2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class motorVognController {



        @Autowired
        private motorVognRepository rep;

        @GetMapping("/hentBiler")
        public List<Bil> hentBiler() {
            return rep.hentAlleBiler();
        }

        @PostMapping("/lagre")
        public void lagreKunde(motorVogn innmotorvogn){
            rep.lagreMotorvogn(innmotorvogn);
        }

        @GetMapping("/hentAlle")
        public List<motorVogn> hentAlleMotorvogner(){
            return rep.hentAlleMotorvogner();
        }

        @GetMapping("/henteEnMotorvogn")
        public motorVogn henteEnMotorvogn(int id){
            return rep.henteEnMotorvogn(id);
        }

        @PostMapping("/endre")
        public void endre(motorVogn innmotorvogn){
            rep.endreMotorvogn(innmotorvogn);
        }

        @GetMapping("/slettEnMotorvogn")
        public void slettEnMotorvogn(long personnummer){
            rep.slettEnMotorvogn(personnummer);
        }

        @GetMapping("/slettAlle")
        public void slettAlleMotorvogner(){
            rep.slettAlleMotorvogner();
        }
    }

