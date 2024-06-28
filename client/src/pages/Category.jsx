import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductItem from '../components/Products/productItem';
import { message } from 'antd';

const Category = () => {
  const { id } = useParams(); // URL'den 'id' parametresini alıyoruz
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

    console.log(products)

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/`);
        if (response.ok) {
          const data = await response.json();
          const filteredProducts = data.filter(product => product.category === id);
          setProducts(filteredProducts);
        } else {
          message.error('Ürünler getirilirken bir hata oluştu');
        }
      } catch (error) {
        console.error('API ile iletişimde bir hata oluştu:', error);
      }
    };

    fetchProductsByCategory(); // useEffect içinde fetch işlemini çağırıyoruz
  }, [apiUrl, id]); // useEffect'i dependency array içinde apiUrl ve id parametrelerine bağlıyoruz

  return (
    <section className="category">
      <div className="container">
        <h2>Ürünler</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={`../../public/${product.img[0]}`} alt={product.name} style={{ width: '200px', height: 'auto' }} /> 
                <h3>{product.name}</h3>
                <h5>{product.description}</h5>
                <span>{product.price.current}$</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
