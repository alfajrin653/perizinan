import React from "react";
import { useParams, Link } from "react-router-dom";
// Pastikan path import data ini sesuai dengan struktur folder kamu
import { locations } from "../../data/locations"; 
import ProductDetailPage from "../../components/element/ProductDetail";

export default function VirtualOfficeDetail() {
  const { id } = useParams();
  const targetData = locations.find((item) => item.id.toString() === id);

  return (
    <ProductDetailPage 
      data={targetData} 
      backLink="/virtual-office" 
    />
  );
}