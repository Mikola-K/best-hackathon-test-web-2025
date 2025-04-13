import { Box, Typography, Button } from "@mui/material";
import { CustomButton } from "../../components/common/styles/customStyledComponents/customStyledComponents";
import Image from "next/image";

type ProfileCardProps = {
  type: "volunteer" | "shelter";
  name: string | null;
  email: string;
  address: string;
  description: string;
  phone: string;
  imageUrl: string;
  age?: number;
  buttonText: string;
  editProfileUrl: string;
};

const ProfileCard = ({
  type,
  name,
  email,
  address,
  description,
  phone,
  imageUrl,
  age,
  buttonText,
  editProfileUrl,
}: ProfileCardProps) => {
  return (
    <Box
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full"
      sx={{ width: 300 }}
    >
      <Button
        variant="text"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => {
          window.location.href = editProfileUrl;
        }}
      >
        Редагувати профіль
      </Button>
      <Image
        src={imageUrl}
        alt={`${name}'s profile`}
        width={180}
        height={180}
        style={{ borderRadius: "50%" }}
      />
      <Typography variant="h6" className="mt-4" fontSize={32} fontWeight={700}>
        {name}, {age && age}
      </Typography>
      <Typography variant="body2" className="mt-2">
        <strong>e-mail:</strong> <br /> {email}
      </Typography>
      <Typography variant="body2" className="mt-1">
        <strong>Адреса:</strong> <br /> {address}
      </Typography>
      <Typography variant="body2" className="mt-2 text-center">
        <strong>Про {type === "volunteer" ? "мене" : "нас"}:</strong> <br />
        {description}
      </Typography>
      <Typography variant="body2" className="mt-2">
        <strong>{type === "volunteer" ? "Мій номер" : "Наші номери"}:</strong>{" "}
        <br />
        {phone}
      </Typography>
      <CustomButton
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => {
          if (type === "volunteer") {
            window.location.href = "/post-animal-ad";
          } else if (type === "shelter") {
            window.location.href = "/post-animal-ad";
          }
        }}
      >
        {buttonText}
      </CustomButton>
    </Box>
  );
};

export default ProfileCard;
