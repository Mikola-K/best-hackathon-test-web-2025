"use client";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { CustomButton } from "../common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";
import Image from "next/image";
import volunteerIcon from "../../assets/images/volunteerIcon.png";
import shelterIcon from "../../assets/images/shelterIcon.png";
import logInVolunteerImage from "../../assets/images/logInVolunteerImage.png";
import logInShelterImage from "../../assets/images/logInShelterImage.png";
import RegisterForm from "./RegisterForm";

const RegisterPage: React.FC = () => {
  const { isMdScreen } = useMediaQueries();
  const [formType, setFormType] = useState<"select" | "volunteer" | "shelter">(
    "select"
  );

  const handleFormTypeChange = (type: "volunteer" | "shelter") => {
    setFormType(type);
  };

  return (
    <Box className="main-bg-color flex justify-center">
      {formType === "select" && (
        <Box className="main-bg-color flex flex-col items-center justify-center p-10 h-screen">
          <Box className="main-white-bg-color w-full md:w-auto px-[15px] pt-[24px] pb-[24px] md:px-[60px] md:pt-[25px] md:pb-[40px] rounded-[20px] flex flex-col md:flex-row justify-between items-center ">
            <Box className="flex flex-col items-center text-center min-w-[218px]">
              <Image
                src={volunteerIcon}
                alt="Volunteer Icon"
                width={116}
                height={195}
              />
              <CustomButton
                variant="contained"
                sx={{ mt: 5 }}
                onClick={() => handleFormTypeChange("volunteer")}
              >
                Я волонтер
              </CustomButton>
            </Box>
            <Divider
              orientation={isMdScreen ? "vertical" : "horizontal"}
              flexItem
              sx={{
                borderColor: "#05334A",
                borderWidth: 1.5,
                mx: isMdScreen ? 7.5 : 0,
                my: isMdScreen ? 0 : 3.5,
              }}
            />
            <Box className="flex flex-col">
              <Image
                src={shelterIcon}
                alt="Shelter Icon"
                width={218}
                height={201}
              />
              <CustomButton
                variant="contained"
                sx={{ mt: 4 }}
                onClick={() => handleFormTypeChange("shelter")}
              >
                Ми притулок
              </CustomButton>
            </Box>
          </Box>
        </Box>
      )}
      {formType === "volunteer" && (
        <RegisterForm
          formType="volunteer"
          formTitle="Приєднуйтесь до нас як Волонтер"
          image={logInVolunteerImage}
          additionalFields={null}
        />
      )}
      {formType === "shelter" && (
        <RegisterForm
          formType="shelter"
          formTitle="Приєднуйтесь до нас як Притулок"
          image={logInShelterImage}
          additionalFields={null}
        />
      )}
    </Box>
  );
};

export default RegisterPage;
