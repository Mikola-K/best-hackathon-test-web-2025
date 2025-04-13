import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";

import { Edit, Delete } from "@mui/icons-material";
import { CustomButton } from "@/components/common/styles/customStyledComponents/customStyledComponents";

const AnimalCard = ({ animal, type, onEdit, onDelete }) => (
  <Card className="shadow-lg rounded-lg" sx={{ width: 240, margin: "0 16px" }}>
    <CardContent>
      <Typography variant="h6" fontWeight={700}>
        {animal.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" className="mt-2">
        {animal.description}
      </Typography>

      {type === "volunteer" ? (
        <Box className="mt-2 flex space-x-2">
          <IconButton color="primary" onClick={() => onEdit(animal)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(animal)}>
            <Delete />
          </IconButton>
        </Box>
      ) : (
        <CustomButton
          variant="contained"
          className="mt-4"
          sx={{ height: "30px" }}
        >
          Дізнатися більше
        </CustomButton>
      )}
    </CardContent>
  </Card>
);
const AnimalAds = ({ animals, type, onEdit, onDelete }) => {
  return (
    <Box className="w-full">
      <Typography
        variant="h5"
        className="mb-4 text-center"
        fontSize={32}
        fontWeight={700}
      >
        Оголошення про тварин
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "24px",
          alignItems: "center",
          mt: 4,
        }}
      >
        {animals.slice(0, 2).map((animal: any) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            type={type}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "24px",
          alignItems: "center",
        }}
      >
        {animals.slice(2).map((animal: any) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            type={type}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </Box>
  );
};
export { AnimalCard, AnimalAds };
