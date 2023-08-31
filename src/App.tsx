import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import axios from './providers/axiosInstance';

import './App.css';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';

// {
//   "metadata": {
//     "tags": []
//   },
//   "sys": {
//     "space": {
//       "sys": {
//         "type": "Link",
//         "linkType": "Space",
//         "id": "vveq832fsd73"
//       }
//     },
//     "id": "b5HfCbDzL7ZqVrZZjDcW4",
//     "type": "Entry",
//     "createdAt": "2022-08-03T05:08:42.916Z",
//     "updatedAt": "2022-08-03T05:08:42.916Z",
//     "environment": {
//       "sys": {
//         "id": "master",
//         "type": "Link",
//         "linkType": "Environment"
//       }
//     },
//     "revision": 1,
//     "contentType": {
//       "sys": {
//         "type": "Link",
//         "linkType": "ContentType",
//         "id": "car"
//       }
//     },
//     "locale": "en-US"
//   },
//   "fields": {
//     "title": "Honda CIVIC",
//     "price": 1400,
//     "photo": "https://www.autotirechecking.com/wp-content/uploads/Honda-Civic-eHEV-2022-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2-3.jpg"
//   }
// }

const url =
  'https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car';

function App() {
  const [carList, setCarList] = useState([]);
  const [cartList, setCartList] = useState<any[]>([]);
  useEffect(() => {
    const getCartList = JSON.parse(localStorage.getItem('cartList') ?? '');

    if (getCartList?.length > 0) {
      setCartList(getCartList);
    }

    getCarList();
  }, []);

  const [orderBy, setOrderBy] = useState('&order=fields.price');
  const [searchBy, setSearchBy] = useState('&fields.title[match]=');

  const getCarList = async () => {
    const carListRes = await axios.get(`${url}${orderBy}${searchBy}`);
    if (carListRes?.data?.items?.length > 0) {
      setCarList(carListRes?.data?.items);
    }
  };

  const getQueryTitleCarList = async (title: string) => {
    let searchQuery = '';
    if (title == '' || title == null) {
      searchQuery = '&fields.title[match]=';
    } else {
      searchQuery = `&fields.title[match]=${title}`;
    }
    const carListRes = await axios.get(`${url}${orderBy}${searchQuery}`);
    if (carListRes?.data?.items?.length > 0) {
      setCarList(carListRes?.data?.items);
    }
    setSearchBy(searchQuery);
  };

  const getQueryOrderCarList = async (attr: string, order: string) => {
    let orderQuery = '';
    if (order === 'asc') {
      orderQuery = `&order=${attr}`;
    } else if (order === 'desc') {
      orderQuery = `&order=-${attr}`;
    }
    const carListRes = await axios.get(
      `https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car${orderQuery}${searchBy}`,
    );
    if (carListRes?.data?.items?.length > 0) {
      setCarList(carListRes?.data?.items);
    }
    setOrderBy(orderQuery);
  };

  const handleAddToCart = (car: any) => {
    const findCarInCart = cartList?.find(
      (cart: any) => cart?.sys?.id === car?.sys?.id,
    );
    if (findCarInCart == null) {
      const update = [...cartList, { ...car, count: 1 }];
      setCartList(update);
      localStorage.setItem('cartList', JSON.stringify(update));
    } else {
      const updateCartList = cartList?.map((cart, index) => {
        if (cart?.sys?.id === car?.sys?.id) {
          cart.count = cart?.count + 1;
        }
        return cart;
      });
      localStorage.setItem('cartList', JSON.stringify(updateCartList));
      setCartList(updateCartList);
    }
  };

  const handleIncreaseCar = (car: any) => {
    const updateCartList = cartList?.map((cart, index) => {
      if (cart?.sys?.id === car?.sys?.id) {
        cart.count = cart?.count + 1;
      }
      return cart;
    });
    localStorage.setItem('cartList', JSON.stringify(updateCartList));
    setCartList(updateCartList);
  };

  const handleDecreaseCar = (car: any) => {
    if (car?.count === 1) {
      const updateCartList = cartList?.filter(
        cart => cart?.sys?.id !== car?.sys?.id,
      );
      localStorage.setItem('cartList', JSON.stringify(updateCartList));
      setCartList(updateCartList);
    } else {
      const updateCartList = cartList?.map((cart, index) => {
        if (cart?.sys?.id === car?.sys?.id) {
          cart.count = cart?.count - 1;
        }
        return cart;
      });
      localStorage.setItem('cartList', JSON.stringify(updateCartList));
      setCartList(updateCartList);
    }
  };

  return (
    <div>
      <Header
        cartList={cartList}
        handleIncreaseCar={handleIncreaseCar}
        handleDecreaseCar={handleDecreaseCar}
      />
      <SearchBar
        getQueryOrderCarList={getQueryOrderCarList}
        getQueryTitleCarList={getQueryTitleCarList}
      />
      <CarList
        carList={carList}
        handleAddToCart={handleAddToCart}
        cartList={cartList}
      />
      <Footer />
    </div>
  );
}

export default App;
