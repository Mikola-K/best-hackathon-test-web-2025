"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import {
  CustomButton,
  CustomInputs,
} from "../../components/common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";
import FilterComponent from "./FilterComponent";
import cardImage from "../../assets/images/cardImage.png";

const AnimalPage = () => {
  const router = useRouter();
  const { isMdScreen } = useMediaQueries();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [animals, setAnimals] = useState<any>([
    {
      id: 1,
      name: "Бобік",
      age: 3,
      description: "Самі хороший у світі хлопчик, який чекає на твою любов",
      image: cardImage,
      city: "Київ",
    },
    {
      id: 2,
      name: "Шерлок",
      age: 2,
      description: "Розумний та активний собака, готовий до нових пригод",
      image: cardImage,
      city: "Львів",
    },
    {
      id: 3,
      name: "Шерлок",
      age: 2,
      description: "Розумний та активний собака Розумний та активний собака, готовий до нових пригод",
      image: cardImage,
      city: "Львів",
    },
  ]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [filters, setFilters] = useState<any>({
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
    <Box className="main-container py-4 md:pb-10 px-1 md:px-6">
      <Box className="flex flex-col md:flex-row space-y-3 items-center md:justify-center px-4 md:px-0">
        {!isMdScreen && (
          <>
            <CustomButton
              onClick={() => setIsFilterOpen(true)}
              variant="contained"
              sx={{ mb: 2 }}
            >
              Фільтр
            </CustomButton>
          </>
        )}
        <CustomInputs
          label="Пошук оголошень"
          variant="outlined"
          size="small"
          style={{ maxWidth: "400px" }}
        />
        <Typography variant="h6" fontSize={20} mx={3} my={isMdScreen ? 0 : 2}>
          Не знайшли те що шукали?
        </Typography>
        <CustomButton
          onClick={() => router.push("/post-animal-ad")}
          variant="contained"
        >
          Зробити запит
        </CustomButton>
      </Box>
      <Box sx={{ paddingTop: 4 }}>
        <Box className="flex flex-col md:flex-row">
          {isMdScreen ? (
            <>
              <Box
                sx={{
                  padding: "20px",
                  border: "1.5px solid #161616",
                  borderRadius: "30px",
                  boxShadow: "0px 10px 20px 1px #00000040",
                  height: "100%",
                }}
              >
                <FilterComponent onApplyFilters={applyFilters} />
              </Box>
            </>
          ) : (
            <>
              <Modal
                open={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                className="p-4"
              >
                <Box
                  className="flex justify-center"
                  sx={{
                    width: "90%",
                    maxHeight: "95vh",
                    background: "white",
                    // margin: "auto",
                    borderRadius: 2,
                    position: "absolute",
                    overflow: "auto",
                  }}
                >
                  <FilterComponent
                    onApplyFilters={() => {
                      setIsFilterOpen(false), applyFilters;
                    }}
                  />
                </Box>
              </Modal>
            </>
          )}
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
