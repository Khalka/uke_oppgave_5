package com.example.uke_oppgave_sql2;

public class Bil {
    private String bilmerke;
    private String biltype;


    public Bil() {
    }

    public Bil(String bilmerke, String biltype) {
        this.bilmerke = bilmerke;
        this.biltype = biltype;
    }



    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBiltype() {
        return biltype;
    }

    public void setBilype(String biltype) {
        this.biltype = biltype;
    }
}
