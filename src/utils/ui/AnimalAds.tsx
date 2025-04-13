import Image from "next/image";
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
  <Card
    sx={{
      borderRadius: "20px",
      maxWidth: 460,
      margin: "0 16px",
      boxShadow: "0px 10px 20px 1px #00000040",
    }}
  >
    <CardContent>
      {animal.image && animal.image != null && (
        <>
          <Box sx={{ maxHeight: 450, maxWidth: 450 }}>
            <Image
              src={animal?.image}
              alt="Volunteer Icon"
              layout="responsive"
              objectFit="cover"
              style={{ borderRadius: 20 }}
            />
          </Box>
        </>
      )}
      <Typography variant="h6" fontWeight={600} fontSize={24}>
        {animal.name}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className="mt-2"
        fontWeight={600}
        fontSize={16}
      >
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
