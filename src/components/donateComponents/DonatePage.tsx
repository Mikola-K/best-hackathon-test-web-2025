"use client";
import { Box, Typography, Divider } from "@mui/material";
import { CustomButton } from "../common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";
import Image from "next/image";
import shelterIcon from "../../assets/images/shelterIcon.png";

const DonatePage: React.FC = () => {
  const { isMdScreen } = useMediaQueries();

  return (
    <Box className="main-bg-color flex justify-center">
      <Box className="main-bg-color flex flex-col items-center justify-center p-10 h-screen">
        <Box className="main-white-bg-color w-full md:w-auto px-[15px] pt-[24px] pb-[24px] md:px-[60px] md:pt-[25px] md:pb-[40px] rounded-[20px] flex flex-col md:flex-row justify-between items-center ">
          <Box className="flex flex-col items-center text-center min-w-[218px]">
            <Image
              src={shelterIcon}
              alt="Volunteer Icon"
              width={116}
              height={195}
            />
            <Typography mt={2} fontWeight={700} fontSize={24}>
              Зроби світ кращим!
            </Typography>
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
          <Box>
            <CustomButton
              onClick={() => window.open("https://monobank.ua/", "_blank")}
            >
              Задонатити
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DonatePage;
