"use client";
import { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  CustomButton,
  CustomInputs,
} from "../common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";
import Image from "next/image";
import volunteerIcon from "../../assets/images/volunteerIcon.png";
import { authSignIn } from "../../config/apiMethods";
import { setAccessToken } from "../../store/features/authSlice";
import { setUserData, setUserRole } from "../../store/features/userSlise";

const LogInPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isMdScreen } = useMediaQueries();
  const {
    handleSubmit,
    control,
    formState: { errors },
    // Removed unused getValues
  } = useForm();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    authSignIn(data.email, data.password)
      .then((response) => {
        console.log("Login successful:", response);
        dispatch(setAccessToken(response?.data.accessToken));
        dispatch(setUserData(response?.data));
        dispatch(setUserRole(response?.data?.roles?.[0]));
        router.push("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setErrorMessage("Неправильний email або пароль");
      });
    console.log(data);
  };

  return (
    <Box className="main-bg-color flex justify-center">
      <Box className="main-bg-color flex flex-col items-center justify-center p-10 h-screen">
        <Box className="main-white-bg-color w-full md:w-auto px-[15px] pt-[24px] pb-[24px] md:px-[60px] md:pt-[25px] md:pb-[40px] rounded-[20px] flex flex-col md:flex-row justify-between items-center ">
          <Box className="flex flex-col items-center text-center min-w-[218px]">
            <Image
              src={volunteerIcon}
              alt="Volunteer Icon"
              width={116}
              height={195}
            />
            <b style={{ marginTop: 20 }}>Ви вже близько!</b>
            <span style={{ marginTop: 10, fontSize: 14 }}>
              Завершіть вхід та отримайте доступ
              <br />
              до функціоналу платформи ♡
            </span>
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:justify-evenly mt-4"
          >
            <Typography
              variant="h6"
              className="mb-3 text-center"
              fontWeight={600}
            >
              Вхід
            </Typography>
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
                Email
              </Typography>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email обов'язковий",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Неправильний формат email",
                  },
                }}
                render={({ field }) => (
                  <CustomInputs
                    {...field}
                    placeholder="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    error={!!errors.email}
                    helperText={
                      errorMessage || (errors.email?.message as string) || " "
                    }
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" fontWeight={600}>
                Пароль
              </Typography>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Пароль обов'язковий" }}
                render={({ field }) => (
                  <CustomInputs
                    {...field}
                    placeholder="Пароль"
                    variant="outlined"
                    size="small"
                    type="password"
                    error={!!errors.password}
                    helperText={
                      errors.password
                        ? typeof errors.password.message === "string"
                          ? errors.password.message
                          : " "
                        : " "
                    }
                  />
                )}
              />
            </Box>
            <CustomButton variant="contained" sx={{ mt: 2 }} type="submit">
              Увійти
            </CustomButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LogInPage;
