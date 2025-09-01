package com.darcy.apiHub.apihub.clients;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Component
public class CoinGeckoClient {

    private final WebClient client;

    public CoinGeckoClient(WebClient.Builder builder) {
        this.client = builder
                .baseUrl("https://api.coingecko.com/api/v3")
                .build();
    }

    @SuppressWarnings("unchecked")
    public Map<String, Map<String, Double>> getSimplePrice(String idsCsv, String vsCurrenciesCsv) {
        return client.get()
                .uri(uri -> uri
                        .path("/simple/price")
                        .queryParam("ids", idsCsv)
                        .queryParam("vs_currencies", vsCurrenciesCsv)
                        .build())
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }
}
