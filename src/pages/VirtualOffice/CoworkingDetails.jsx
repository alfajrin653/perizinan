import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailPage from "../../components/element/ProductDetail"; // Sesuaikan path-nya
import { locations } from "../../data/Coworking"; // Data khusus VO

export default function VirtualOfficeDetail() {
  const { id } = useParams();
  const targetData = locations.find((item) => item.id.toString() === id);

  return (
    <ProductDetailPage 
      data={targetData} 
      backLink="/coworking-space" 
    />
  );
}