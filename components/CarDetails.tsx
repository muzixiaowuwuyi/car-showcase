import { Carprops } from '@/types';
import React from 'react';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Carprops;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>Cardetails</div>;
};

export default CarDetails;
