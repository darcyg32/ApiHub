package com.darcy.apiHub.apihub.services;

import com.darcy.apiHub.apihub.clients.CoinGeckoClient;
import com.darcy.apiHub.apihub.dtos.CryptoPriceDTO;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CryptoService {

    private final CoinGeckoClient coinGeckoClient;

    public CryptoService(CoinGeckoClient coinGeckoClient) {
        this.coinGeckoClient = coinGeckoClient;
    }

    public CryptoPriceDTO getBTCandETHinAUD() {
        Map<String, Map<String, Double>> resp = coinGeckoClient.getSimplePrice("bitcoin,ethereum", "aud");
        Double btc = extract(resp, "bitcoin", "aud");
        Double eth = extract(resp, "ethereum", "aud");
        return new CryptoPriceDTO(btc, eth);
    }

    private Double extract(Map<String, Map<String, Double>> m, String id, String cur) {
        if (m == null) return null;
        var inner = m.get(id);
        if (inner == null) return null;
        return inner.get(cur);
    }
}
