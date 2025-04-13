import { useState, useEffect } from "react";
import { Box, Button, Select, MenuItem, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../common/styles/customStyledComponents/customStyledComponents";
import { filters } from "../../assets/data/data";

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
    <Box
      className="filter-sidebar px-4 h-full py-6 md:py-0"
      sx={{ width: 300 }}
    >
      <Typography variant="h6">Фільтри</Typography>
      {filters.map(({ name, label, options }) => (
        <Box key={name} sx={{ marginBottom: 1 }}>
          <Typography variant="body2" fontWeight={600}>
            {label}
          </Typography>
          <Controller
            // @ts-ignore
            name={name}
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth displayEmpty sx={{ height: 37 }}>
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
