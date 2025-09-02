import Layout from './components/layout/Layout';
import CryptoPanel from './components/crypto/CryptoPanel';
import WeatherPanel from './components/weather/WeatherPanel';
import JokePanel from './components/jokes/JokePanel';

function App() {
    return (
        <Layout>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <CryptoPanel />
                <WeatherPanel />
                <JokePanel />
            </div>
        </Layout>
    );
}

export default App;