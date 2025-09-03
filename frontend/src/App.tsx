import Layout from './components/layout/Layout';
import CryptoPanel from './components/crypto/CryptoPanel';
import WeatherPanel from './components/weather/WeatherPanel';
import JokePanel from './components/jokes/JokePanel';

function App() {
    return (
        <Layout>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
                <div className="xl:col-span-12">
                    <WeatherPanel />
                </div>
                <div className="xl:col-span-6">
                    <CryptoPanel />
                </div>
                <div className="xl:col-span-6">
                    <JokePanel />
                </div>
            </div>
        </Layout>
    );
}

export default App;
