package com.darcy.apiHub.apihub.services;

import com.darcy.apiHub.apihub.clients.OfficialJokeClient;
import com.darcy.apiHub.apihub.dtos.JokeDTO;
import org.springframework.stereotype.Service;

@Service
public class JokeService {

    private final OfficialJokeClient jokeClient;

    public JokeService(OfficialJokeClient jokeClient) {
        this.jokeClient = jokeClient;
    }

    public JokeDTO randomJoke() {
        var resp = jokeClient.getRandomJoke();
        return new JokeDTO(
                resp != null ? resp.setup : null,
                resp != null ? resp.punchline : null
        );
    }
}
