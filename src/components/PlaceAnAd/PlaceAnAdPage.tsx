"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  CustomButton,
  CustomInputs,
  CustomRadio,
} from "../common/styles/customStyledComponents/customStyledComponents";
import { selectUserStore } from "../../store/features/userSlise";
import { postAnimals } from "../../config/apiMethods";

type FormData = {
  role: string;
  name: string;
  age: string;
  gender: string;
  breed: string;
  hasPassport: boolean;
  isSterilized: boolean;
  isWarAnimal: boolean;
  healthStatus: string;
  detailedDescription: string;
  photos: string[];
  contactName: string;
  email: string;
  phone: string;
  location: string;
  weight: number;
  height: number | string;
};

const AnimalForm = () => {
  const selectUser = useSelector(selectUserStore);
  const role = selectUser?.userRole || "volunteer";

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const animalsData = await postAnimals(data);
    console.log("response", animalsData);
  };

  return (
    <Box className="flex flex-col items-center justify-center py-10 md:p-10">
      <Box className="main-white-bg-color w-full max-w-[1040px] rounded-[20px] flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
        <Box className="w-full h-full justify-evenly flex flex-col space-y-4 px-[15px] pb-[24px] md:px-8 md:pt-6 md:pb-8">
          <Typography
            variant="h1"
            className="text-center"
            fontSize={36}
            fontWeight={700}
          >
            {role === "volunteer" ? "Здати тварину" : "Створити оголошення"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <Box className="space-y-4 main-bg-color p-4 md:p-10 rounded-[20px]">
              <Box className="flex flex-row w-full space-x-3">
                <Box className="w-full">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Ім'я тварини обов'язкове" }}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        label="Кличка"
                        variant="outlined"
                        size="small"
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                      />
                    )}
                  />
                </Box>
                <Box className="w-full">
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        label="Вік"
                        variant="outlined"
                        fullWidth
                        size="small"
                        placeholder="Роки / Місяці"
                      />
                    )}
                  />
                </Box>
              </Box>
              <Box className="flex space-x-3">
                <Box className="w-full">
                  <Controller
                    name="height"
                    control={control}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        label="Ріст"
                        variant="outlined"
                        fullWidth
                        size="small"
                        placeholder="См"
                      />
                    )}
                  />
                </Box>
                <Controller
                  name="weight"
                  control={control}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      label="Вага"
                      variant="outlined"
                      fullWidth
                      size="small"
                      placeholder="Кг / г"
                    />
                  )}
                />
              </Box>
              <Box className="flex md:space-x-3">
                <Controller
                  name="breed"
                  control={control}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      label="Порода"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Box>
              <Box className="flex flex-col md:flex-row space-x-2 justify-between">
                <Box>
                  <Typography variant="h6">Стать</Typography>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        row
                        {...field}
                        defaultValue="female"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <FormControlLabel
                          value="female"
                          control={<CustomRadio />}
                          label="Ж"
                        />
                        <FormControlLabel
                          value="male"
                          control={<CustomRadio />}
                          label="Ч"
                        />
                      </RadioGroup>
                    )}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">Має ветеринарний паспорт</Typography>
                  <Controller
                    name="hasPassport"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup row {...field} defaultValue="false">
                        <FormControlLabel
                          value="true"
                          control={<CustomRadio />}
                          label="Так"
                        />
                        <FormControlLabel
                          value="false"
                          control={<CustomRadio />}
                          label="Ні"
                        />
                      </RadioGroup>
                    )}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">Стерилізована</Typography>
                  <Controller
                    name="isSterilized"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup row {...field} defaultValue="false">
                        <FormControlLabel
                          value="true"
                          control={<CustomRadio />}
                          label="Так"
                        />
                        <FormControlLabel
                          value="false"
                          control={<CustomRadio />}
                          label="Ні"
                        />
                      </RadioGroup>
                    )}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">Тварина війни</Typography>
                  <Box className="w-full">
                    <Controller
                      name="isWarAnimal"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup row {...field} defaultValue="false">
                          <FormControlLabel
                            value="true"
                            control={<CustomRadio />}
                            label="Так"
                          />
                          <FormControlLabel
                            value="false"
                            control={<CustomRadio />}
                            label="Ні"
                          />
                        </RadioGroup>
                      )}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-col md:flex-row justify-between md:space-x-3 space-y-3 md:space-y-0">
                <Box className="w-full">
                  <Controller
                    name="healthStatus"
                    control={control}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        label="Стан здоров’я"
                        variant="outlined"
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                        placeholder="Опишіть стан здоров’я тваринки"
                      />
                    )}
                  />
                </Box>
                <Box className="w-full">
                  <Controller
                    name="detailedDescription"
                    control={control}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        label="Детальний опис"
                        variant="outlined"
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                        placeholder="Опишіть вигляд та характер тваринки. ЇЇ звички та вподобання."
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="flex space-x-4">
              <Button variant="outlined" component="label">
                Додати фото
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={(e) => console.log(e.target.files)}
                />
              </Button>
            </Box>
            {role === "volunteer" && (
              <Box className="space-y-4 main-bg-color p-10 rounded-[20px]">
                <>
                  <Box>
                    <Controller
                      name="contactName"
                      control={control}
                      render={({ field }) => (
                        <CustomInputs
                          {...field}
                          label="Контактна особа"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <CustomInputs
                          {...field}
                          label="E-mail адреса"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <CustomInputs
                          {...field}
                          label="Номер телефону"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="location"
                      control={control}
                      render={({ field }) => (
                        <CustomInputs
                          {...field}
                          label="Місцезнаходження"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      )}
                    />
                  </Box>
                </>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CustomButton
                variant="contained"
                type="submit"
                sx={{ width: "450px" }}
              >
                {role === "volunteer" ? "Здати тварину" : "Створити оголошення"}
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimalForm;
