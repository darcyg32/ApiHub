package com.darcy.apiHub.apihub.clients;

import com.fasterxml.jackson.annotation.JsonAnySetter;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.Map;

@Component
public class CoinGeckoClient {

    private final WebClient client;

    public CoinGeckoClient(WebClient.Builder builder) {
        this.client = builder
                .baseUrl("https://api.coingecko.com/api/v3")
                .build();
    }

    public CoinGeckoResponse getSimplePrice(String idsCsv, String vsCurrenciesCsv) {
        return client.get()
                .uri(uri -> uri
                        .path("/simple/price")
                        .queryParam("ids", idsCsv)
                        .queryParam("vs_currencies", vsCurrenciesCsv)
                        .build())
                .retrieve()
                .bodyToMono(CoinGeckoResponse.class)
                .block();
    }

    public static class CoinGeckoResponse {
        private Map<String, Map<String, Double>> prices = new HashMap<>();

        @JsonAnySetter
        public void setPrice(String key, Map<String, Double> value) {
            prices.put(key, value);
        }

        public Map<String, Map<String, Double>> getPrices() {
            return prices;
        }
    }
}
