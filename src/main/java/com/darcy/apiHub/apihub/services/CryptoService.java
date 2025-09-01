package com.darcy.apiHub.apihub.services;

import com.darcy.apiHub.apihub.clients.CoinGeckoClient;
import com.darcy.apiHub.apihub.dtos.CryptoPriceDTO;
import org.springframework.stereotype.Service;

@Service
public class CryptoService {

    private final CoinGeckoClient coinGeckoClient;

    public CryptoService(CoinGeckoClient coinGeckoClient) {
        this.coinGeckoClient = coinGeckoClient;
    }

    public CryptoPriceDTO getBTCandETHinAUD() {
        CoinGeckoClient.CoinGeckoResponse resp = coinGeckoClient.getSimplePrice("bitcoin,ethereum", "aud");

        if (resp == null || resp.getPrices() == null) {
            return new CryptoPriceDTO(null, null);
        }

        Double btc = extract(resp, "bitcoin", "aud");
        Double eth = extract(resp, "ethereum", "aud");

        return new CryptoPriceDTO(btc, eth);
    }

    private Double extract(CoinGeckoClient.CoinGeckoResponse resp, String id, String cur) {
        var inner = resp.getPrices().get(id);
        if (inner == null) return null;
        return inner.get(cur);
    }
}
