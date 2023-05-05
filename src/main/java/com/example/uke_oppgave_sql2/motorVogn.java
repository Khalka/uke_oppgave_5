package com.example.uke_oppgave_sql2;

public class motorVogn {
    private int id;
    private int personnummer;
    private  String navn;
    private String addresse;
    private String kjennetegn;
private String bilmerke;
    private String biltype;


    public motorVogn(){

    }


    public motorVogn(int id, int personnummer, String navn, String addresse, String kjennetegn, String bilmerke, String biltype){

        this.id = id;

        this.personnummer = personnummer;
        this.navn = navn;
        this.addresse = addresse;
        this.kjennetegn = kjennetegn;
this.bilmerke = bilmerke;
        this.biltype = biltype;
    }

    public void setId(int id) {
        this.id = id;
    };

    public int getId() {
        return id;
    };

    public void setPersonnummer(int personnummer) {
        this.personnummer = personnummer;
    }

    public int getPersonnummer() {
        return personnummer;
    }


    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getNavn(){
        return navn;
    }

    public void setAddresse(String addresse) {
        this.addresse = addresse;
    }

    public String getAddresse() {
        return addresse;
    }

    public void setKjennetegn(String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }

    public String getKjennetegn() {
        return kjennetegn;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBilmerke() {
        return bilmerke;
    }

    public void setBiltype(String biltype) {
        this.biltype = biltype;
    }

    public String getBiltype() {
        return biltype;
    }
}
