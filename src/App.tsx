import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import axios from './providers/axiosInstance';

import './App.css';
import SearchBar from './components/SearchBar';
import CarCard from './components/CarCard';

function App() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    getCarList();
  }, []);
  const getCarList = async () => {
    const carListRes = await axios.get(
      'https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car',
    );
    if (carListRes?.data?.items?.length > 0) {
      setCarList(carListRes?.data?.items);
    }
  };
  return (
    <div>
      <Header />
      <SearchBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {/* <div>Car listsss</div> */}
        {carList?.map((car: any, index) => (
          <CarCard {...car?.fields} />
        ))}
        {/* <div>Cart</div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
