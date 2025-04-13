import { useState, useEffect } from "react";
import { Box, Button, Select, MenuItem, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../common/styles/customStyledComponents/customStyledComponents";

const filters = [
  {
    name: "warAnimal",
    label: "Тварина війни",
    options: ["Усі", "Так", "Ні"],
  },
  {
    name: "gender",
    label: "Стать",
    options: ["Усі", "Дівчинка", "Хлопчик"],
  },
  {
    name: "breed",
    label: "Порода",
    options: ["Усі", "Так", "Ні"],
  },
  {
    name: "isSterilized",
    label: "Стерилізована тварина",
    options: ["Усі", "Так", "Ні"],
  },
  {
    name: "age",
    label: "Вік",
    options: ["Усі", "До 1 року", "1-3 роки", "5-9 років", "10 років"],
  },
  {
    name: "hasPassport",
    label: "Чи має паспорт",
    options: ["Усі", "Так", "Ні"],
  },
  {
    name: "shelter",
    label: "Притулки",
    options: ["Усі", "Притулок 1", "Притулок 2"],
  },
  {
    name: "city",
    label: "Місто",
    options: ["Усі міста", "Київ", "Львів", "Харків"],
  },
  {
    name: "size",
    label: "Розмір",
    options: [
      "Усі",
      "Маленький до 10 кг",
      "Середній 11-25 кг",
      "Великий 26-45 кг",
      "Гігантський від 46 кг",
    ],
  },
];

const FilterComponent = ({ onApplyFilters }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: filters.reduce((acc, filter) => {
      acc[filter.name] = "all";
      return acc;
    }, {}),
  });

  const onSubmit = (data) => {
    onApplyFilters(data);
  };

  return (
    <Box className="filter-sidebar" sx={{ width: 300 }}>
      <Typography variant="h6">Фільтри</Typography>
      {filters.map(({ name, label, options }) => (
        <Box key={name} sx={{ marginBottom: 2 }}>
          <Typography variant="body2" fontWeight={600}>
            {label}
          </Typography>
          <Controller
          // @ts-ignore
            name={name}
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth displayEmpty>
                {options.map((option, index) => (
                  <MenuItem
                    key={index}
                    value={option === "Усі" ? "all" : option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Box>
      ))}
      <CustomButton
        fullWidth
        variant="contained"
        sx={{ marginTop: 2 }}
        onClick={handleSubmit(onSubmit)}
      >
        Застосувати
      </CustomButton>
    </Box>
  );
};

export default FilterComponent;
