export interface JokeDTO {
    setup: string | null;
    punchline: string | null;
}

export interface JokeData {
    data: JokeDTO | null;
    loading: boolean;
    error: string | null;
}
