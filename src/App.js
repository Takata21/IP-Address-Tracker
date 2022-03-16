import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Banner from './components/Banner';
import Map from './components/Map';
import { ROOT_URL, ROOT_URL_IP, SECRET_KEY, getData } from './api/getData';
function App() {
  const [ip, setIp] = useState('');
  const [coordinates, setCoordinates] = useState([37.38605, -122.08385]);
  const [ipInfo, setIpInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getIpData = async () => {
    setIsLoading(true);
    const response = await getData(
      `${ROOT_URL}?apiKey=${SECRET_KEY}&ipAddress=${ip}`
    );
    setIpInfo(response.data);
    setCoordinates([response.data.location.lat, response.data.location.lng]);
    setIsLoading(false);
  };
  useEffect(() => {
    getIpData();
  }, []);

  return (
    <div className="min-h-screen xl:text-lg">
      <header className="relative">
        <h1 className="p-4 text-xl text-white font-medium text-center capitalize">
          IP address tracker
        </h1>
        <Search setIp={setIp} ip={ip} getIpData={getIpData} />
        <Banner isLoading={isLoading} ipInfo={ipInfo} />
      </header>
      <div>
        <Map coordinates={coordinates} isLoading={isLoading} ipInfo={ipInfo} />
      </div>
    </div>
  );
}

export default App;
