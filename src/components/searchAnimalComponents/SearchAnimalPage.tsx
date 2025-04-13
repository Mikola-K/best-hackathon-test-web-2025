"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
  Modal,
  Grid,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AnimalAds, AnimalCard } from "../../utils/ui/AnimalAds";
import { CustomButton } from "../../components/common/styles/customStyledComponents/customStyledComponents";
import FilterComponent from "./FilterComponent";

const AnimalPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Бобік",
      age: 3,
      description: "Самі хороший у світі хлопчик, який чекає на твою любов",
      image: "/path/to/image.jpg",
      city: "Київ",
    },
    {
      id: 2,
      name: "Шерлок",
      age: 2,
      description: "Розумний та активний собака, готовий до нових пригод",
      image: "/path/to/image2.jpg",
      city: "Львів",
    },
  ]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [filters, setFilters] = useState({
    warAnimal: "all",
    gender: "all",
    breed: "all",
    isSterilized: "all",
    age: "all",
    hasPassport: "all",
    shelter: "all",
    city: "all",
    size: "all",
  });

  const { handleSubmit, control } = useForm();

  const handleApplyFilters = () => {
    setIsFilterOpen(false);
    // Логіка для застосування фільтрів
  };

  const handleEdit = (animal) => {
    console.log("Edit", animal);
  };

  const handleDelete = (animal) => {
    console.log("Delete", animal);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch("/api/animals");
  //       const result = await data.json();
  //       setAnimals(result);
  //       setFilteredAnimals(result);
  //     };

  //     fetchData();
  //   }, []);
  const applyFilters = (filters) => {
    setFilters(filters);

    const filtered = animals.filter((animal) => {
      return (
        (filters.warAnimal === "all" ||
          animal.warAnimal === filters.warAnimal) &&
        (filters.gender === "all" || animal.gender === filters.gender) &&
        (filters.breed === "all" || animal.breed === filters.breed) &&
        (filters.isSterilized === "all" ||
          animal.isSterilized === filters.isSterilized) &&
        (filters.age === "all" || animal.age === filters.age) &&
        (filters.hasPassport === "all" ||
          animal.hasPassport === filters.hasPassport) &&
        (filters.shelter === "all" || animal.shelter === filters.shelter) &&
        (filters.city === "all" || animal.city === filters.city) &&
        (filters.size === "all" || animal.size === filters.size)
      );
    });

    setFilteredAnimals(filtered);
  };
  return (
    <Box className="main-container">
      <Box>
        <CustomButton onClick={() => setIsFilterOpen(true)} variant="contained">
          Фільтр
        </CustomButton>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Шукайте оголошення
        </Typography>
      </Box>
      <Box>
        <Box className="flex flex-col md:flex-row">
          <FilterComponent onApplyFilters={applyFilters} />{" "}
          <div className="mt-4 md:mt-0 mx-auto">
            <AnimalAds
              animals={filteredAnimals}
              type="shelter"
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimalPage;
