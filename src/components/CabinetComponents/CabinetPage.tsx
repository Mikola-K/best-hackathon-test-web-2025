"use client";
// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ProfileCard from "../../utils/ui/ProfileCard";
import { selectUserStore } from "../../store/features/userSlise";
import { AnimalAds } from "../../utils/ui/AnimalAds";
import volenteerImage from "../../assets/images/volenteerImage.png";

const fetchShelterData = async (id: string) => {
  const data = {
    shelter: {
      name: "Притулок 'Домівка'",
      email: "prytilokdomivka@gmail.com",
      address: "вул. Притулок 17, м. Львів",
      description: "Ми вільний, неприбутковий притулок для вуличних тварин.",
      phone: "+38 (097) xxx xx xx",
      imageUrl: volenteerImage,
    },
    animals: [
      {
        id: "1",
        name: "Кіт Котофей",
        description: "Добрий кіт шукає новий дім.",
      },
      {
        id: "2",
        name: "Собака Шерлок",
        description: "Розумний пес чекає на люблячого господаря.",
      },
    ],
  };

  return data;
};

const CabinetPage = () => {
  // const router = useRouter();
  // const { id } = router.query;
  const selectUser = useSelector(selectUserStore);
  const id = "2";
  const [shelterData, setShelterData] = useState<any>(null);
  const [animals, setAnimals] = useState<any>([]);

  useEffect(() => {
    if (id) {
      fetchShelterData(id as string).then((data) => {
        setShelterData(data?.shelter);
        setAnimals(data?.animals);
      });
    }
  }, [id]);

  if (!shelterData) {
    return <Typography variant="h5">Завантаження...</Typography>;
  }

  return (
    <Box className="main-white-bg-color p-10 flex flex-col md:flex-row">
      <ProfileCard
        type={selectUser?.userRole || "volunteer"}
        name={shelterData.name}
        email={shelterData.email}
        address={shelterData.address}
        description={shelterData.description}
        phone={shelterData.phone}
        imageUrl={shelterData.imageUrl}
        buttonText={
          selectUser?.userRole === "volunteer"
            ? "Здати тварину"
            : "Розмістити оголошення"
        }
        editProfileUrl="/edit-shelter-profile"
      />
      <div className="mt-4 md:mt-0 mx-auto">
        <AnimalAds
          animals={animals}
          type={selectUser?.userRole || "volunteer"}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    </Box>
  );
};

export default CabinetPage;
