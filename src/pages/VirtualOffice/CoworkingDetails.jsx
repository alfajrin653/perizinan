import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailPage from '../../components/element/ProductDetail'; // Sesuaikan path-nya
// import { locations } from "../../data/Coworking"; // Data khusus VO
import { useEffect, useState } from 'react';

export default function VirtualOfficeDetail() {
  // panggil data coworking location
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('../../public/data/coworking-location.json')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.locations);
        setCategories(data.categories);
      });
  }, []);

  const { id } = useParams();
  const targetData = locations.find((item) => item.id.toString() === id);

  return <ProductDetailPage data={targetData} backLink='/coworking-space' />;
}
