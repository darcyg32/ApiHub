## ApiHub — Spring Boot + React Demo

A small full‑stack demo showing a Spring Boot (Java 17, Gradle) backend that aggregates public APIs and a Vite + React + TypeScript frontend. It demonstrates REST design, WebClient (reactive HTTP), validation, simple security, JPA/H2, and a modern React UI with Tailwind.

### Index

- [Stack](#stack)
- [Architecture](#architecture)
- [API Surface](#api-surface)
- [Data Model](#data-model)
- [External Integrations](#external-integrations)
- [Security](#security)
- [Local Setup](#local-setup)
  - [Windows](#windows)
  - [macOS](#macos)
- [Run](#run)
- [Build](#build)
- [Troubleshooting](#troubleshooting)

### Stack

- Backend: Spring Boot 3.5, Java 17, Gradle, Spring Web, WebFlux (WebClient), Spring Data JPA, Validation (Jakarta), H2 (runtime), Spring Security
- Frontend: Vite, React 19, TypeScript, Tailwind CSS 4

### Architecture

- Monorepo layout
  - Backend: `src/main/java/com/darcy/apihub/**`
  - Frontend: `frontend/**`
- Responsibilities
  - Controllers: `controllers/*` define REST endpoints under `/api/**`, `/users/**`, `/api-entries/**`
  - Services: orchestration and mapping to DTOs
  - Clients: HTTP calls to third‑party APIs using `WebClient`
  - Persistence: JPA entities `User`, `ApiEntry` with repositories; H2 provided at runtime
  - Config: `WebClient` timeouts/memory limits, permissive CORS for local dev, basic security

### API Surface

Public (no auth):

- GET `/api/crypto` → `CryptoPriceDTO` { btcAud, ethAud }
- GET `/api/weather?lat=<lat>&lon=<lon>` → `WeatherDTO` (falls back to Adelaide if params missing)
- GET `/api/joke` → `JokeDTO` { setup, punchline }

Protected (HTTP Basic) — currently unused in the UI (experimental):

- `/users/**` CRUD for `User`
- `/api-entries/**` CRUD for `ApiEntry`

Notes

- The shipped frontend only uses the public `/api/**` endpoints (crypto, weather, joke). The `/users/**` and `/api-entries/**` endpoints are leftover learning scaffolding and not wired into the UI yet.
- Security uses HTTP Basic and requires authentication for the protected groups. With default Spring Security (no custom users configured), a generated password is printed at startup for user `user`. You can override via standard Spring Security properties if needed.

### Data Model

- `User` (id, username, email) — experimental, not used by the current UI
- `ApiEntry` (id, name, url, description, owner → `User`) — experimental, not used by the current UI

DTOs returned to the frontend:

- `CryptoPriceDTO` { btcAud?: number, ethAud?: number }
- `WeatherDTO` { latitude, longitude, temperature?, windspeed?, timeISO?, timezone?, timezoneAbbreviation?, utcOffsetSeconds? }
- `JokeDTO` { setup?, punchline? }

### External Integrations

- CoinGecko: simple price endpoint for BTC/ETH in AUD (`CoinGeckoClient`)
- Open‑Meteo: current weather by coordinates (`OpenMeteoClient`)
- Official Joke API: random jokes (`OfficialJokeClient`)

HTTP is performed with `WebClient` (reactive) and sensible defaults:

- Connection timeout: 3s, read/write: 5s, response timeout: 5s
- Codec memory limit: 512 KiB

### Security

- `SecurityConfig` disables CSRF for APIs and permits:
  - `OPTIONS /**`
  - `GET /api/**` (public demo endpoints)
  - All `/users/**` and `/api-entries/**` require auth (HTTP Basic). These are not used by the current frontend and can be ignored unless you want to exercise the CRUD endpoints manually.
- Non-GET requests under `/api/**` and any other unmatched routes are authenticated by default due to the catch-all rule (`anyRequest().authenticated()`).
- CORS (`CorsConfig`): allows `http://localhost:5173` and `http://localhost:3000` for common local frontend ports.

### Local Setup

Prerequisites

- Java 17 (JDK)
- Node.js 20+ and npm
- Git
- Optional: IntelliJ IDEA (recommended)

Backend ports and config

- Spring Boot defaults to `http://localhost:8080`
- App name: `ApiHub` (`application.properties`)
- H2 is on the classpath; in this demo no explicit datasource properties are set, so JPA can be enabled with Spring Boot defaults if you add them. For running the demo features shown here, H2 is not strictly required.

Frontend

- Vite dev server defaults to `http://localhost:5173`
- The frontend calls backend at `http://localhost:8080/api`

#### Windows

1. Install JDK 17 (Adoptium Temurin or Microsoft Build of OpenJDK) and ensure `java -version` prints 17.x.
2. Install Node.js 20+ from nodejs.org; ensure `node -v` and `npm -v` work.
3. Clone the repo and open it in IntelliJ.
4. Let IntelliJ import the Gradle project.
5. In IntelliJ, run `ApiHubApplication` (run configuration or right‑click class → Run).
6. In a terminal: `cd frontend && npm install && npm run dev`.

#### macOS

1. `brew install --cask temurin@17` (or use SDKMAN) and verify `java -version` is 17.x.
2. `brew install node@20` (or use `nvm`); verify `node -v` and `npm -v`.
3. Clone and open in IntelliJ; import Gradle.
4. Run `ApiHubApplication` from IntelliJ.
5. In a terminal: `cd frontend && npm install && npm run dev`.

### Run

- Backend: run `ApiHubApplication` from IntelliJ (current workflow) or via Gradle:

```bash
./gradlew bootRun
```

- Frontend: in another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build

- Backend JAR:

```bash
./gradlew build
# outputs: build/libs/ApiHub-0.0.1-SNAPSHOT.jar
```

- Frontend production build:

```bash
cd frontend
npm run build
# outputs: frontend/dist
```

### Troubleshooting

- CORS errors in browser: ensure backend is on 8080 and frontend on 5173/3000; `CorsConfig` already allows those origins.
- Port in use: change Vite dev port (`--port`) or Spring `server.port`.
- 401 Unauthorized on `/users/**` or `/api-entries/**`: authenticate with HTTP Basic. By default Spring creates user `user` with a generated password logged at startup. You can also configure your own users.
- Slow or failing external API calls: `WebClient` timeouts are ~5s; transient failures return partial/null fields in DTOs by design.

### Frontend Notes

- Main layout: `frontend/src/components/layout/Layout.tsx` with `Header` and `Footer`.
- Panels:
  - `WeatherPanel` (default coordinates to Adelaide when none provided)
  - `CryptoPanel`
  - `JokePanel`
- Data fetching flows through `frontend/src/utils/api.ts` with a small `fetchApi<T>` helper.

- ### Backend Modules (map)

- `controllers`: `CryptoController`, `WeatherController`, `JokeController` (used), `UserController`, `ApiEntryController` (experimental)
- `services`: `CryptoService`, `WeatherService`, `JokeService` (used), `UserService`, `ApiEntryService` (experimental)
- `clients`: `CoinGeckoClient`, `OpenMeteoClient`, `OfficialJokeClient`
- `dtos`: `CryptoPriceDTO`, `WeatherDTO`, `JokeDTO` (used), `UserDTO`, `ApiEntryDTO` (experimental)
- `models`: `User`, `ApiEntry` (experimental)
- `repositories`: `UserRepository`, `ApiEntryRepository` (experimental)
- `config`: `SecurityConfig`, `CorsConfig`, `WebClientConfig`

---

Current dev workflow: run `ApiHubApplication` in IntelliJ, then `npm run dev` in `frontend/`.
