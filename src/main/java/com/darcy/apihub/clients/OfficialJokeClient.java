package com.darcy.apihub.clients;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class OfficialJokeClient {

    private final WebClient client;

    public OfficialJokeClient(WebClient.Builder builder) {
        this.client = builder
                .baseUrl("https://official-joke-api.appspot.com")
                .build();
    }

    public JokeResponse getRandomJoke() {
        return client.get()
                .uri("/random_joke")
                .retrieve()
                .bodyToMono(JokeResponse.class)
                .block();
    }

    public static class JokeResponse {
        public String type;
        public String setup;
        public String punchline;
        public Integer id;
    }
}
