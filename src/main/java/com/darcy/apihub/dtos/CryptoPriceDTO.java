package com.darcy.apihub.dtos;

public class CryptoPriceDTO {
    private Double btcAud;
    private Double ethAud;

    public CryptoPriceDTO() {}

    public CryptoPriceDTO(Double btcAud, Double ethAud) {
        this.btcAud = btcAud;
        this.ethAud = ethAud;
    }

    public Double getBtcAud() { return this.btcAud; }
    public void setBtcAud(Double btcAud) { this.btcAud = btcAud; }

    public Double getEthAud() { return this.ethAud; }
    public void setEthAud(Double ethAud) { this.ethAud = ethAud; }
}
