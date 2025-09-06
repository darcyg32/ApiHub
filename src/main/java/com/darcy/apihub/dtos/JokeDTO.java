package com.darcy.apihub.dtos;

public class JokeDTO {
    private String setup;
    private String punchline;

    public JokeDTO() {}

    public JokeDTO(String setup, String punchline) {
        this.setup = setup;
        this.punchline = punchline;
    }

    public String getSetup() { return this.setup; }
    public void setSetup(String setup) { this.setup = setup; }

    public String getPunchline() { return this.punchline; }
    public void setPunchline(String punchline) { this.punchline = punchline; }
}
