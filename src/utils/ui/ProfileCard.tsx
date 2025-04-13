import { Box, Typography, Button } from "@mui/material";
import { CustomButton } from "../../components/common/styles/customStyledComponents/customStyledComponents";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ProfileCardProps = {
  type: "volunteer" | "shelter" | string;
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
  const router = useRouter();
  return (
    <Box
      className="bg-white p-6 px-10 rounded-lg  flex flex-col items-center w-full"
      sx={{ maxWidth: 370, boxShadow: "0px 10px 20px 1px #00000040" }}
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
      <Typography
        variant="h6"
        className="mt-4 text-center"
        fontSize={32}
        fontWeight={700}
      >
        {name} {age && age}
      </Typography>
      <Box className="flex flex-col space-y-3 h-full">
        <Typography variant="body2" className="mt-2">
          <strong>e-mail:</strong> <br /> {email}
        </Typography>
        <Typography variant="body2" className="mt-1">
          <strong>Адреса:</strong> <br /> {address}
        </Typography>
        <Typography variant="body2" className="mt-2">
          <strong>Про {type === "volunteer" ? "мене" : "нас"}:</strong> <br />
          {description}
        </Typography>
        <Typography variant="body2" className="mt-2">
          <strong>{type === "volunteer" ? "Мій номер" : "Наші номери"}:</strong>{" "}
          <br />
          {phone}
        </Typography>
      </Box>
      <CustomButton
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => router.push("/post-animal-ad")}
      >
        {buttonText}
      </CustomButton>
    </Box>
  );
};

export default ProfileCard;
