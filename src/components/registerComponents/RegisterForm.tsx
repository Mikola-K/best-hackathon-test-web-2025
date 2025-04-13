import { Box, Typography, FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import {
  CustomButton,
  CustomInputs,
  CustomCheckbox,
} from "../common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";
import { useState } from "react";
import { authRegister } from "@/config/apiMethods";
import { DateRange } from "@mui/icons-material";

type FormProps = {
  formType: "volunteer" | "shelter";
  formTitle: string;
  image: any;
  additionalFields: any;
};

const RegisterForm = ({
  formType,
  formTitle,
  image,
  additionalFields,
}: FormProps) => {
  const { isMdScreen } = useMediaQueries();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    authRegister(data)
      .then((response) => {
        console.log("Registration successful:", response);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log("Registration failed:", error);
        console.log(error?.response);

        if (error?.response?.data) {
          console.log("processing errors");
          const formattedErrors = Object.entries(error.response.data.errors)
            .map(([field, messages]) => `${(messages as string[]).join(" \n")}`)
            .join("\n");
          console.log(formattedErrors);
          setErrorMessage(formattedErrors);
        } else {
          setErrorMessage(
            "Помилка при реєстрації. Можливо Ваш email вже використовується або пароль занадто простий."
          );
        }
      });

    console.log(data);
  };

  return (
    <Box className="main-bg-color flex flex-col items-center justify-center md:p-10 h-screen">
      <Box className="main-white-bg-color w-full md:max-w-[1040px] rounded-[20px] flex flex-col md:flex-row justify-center items-center">
        <Box
          sx={{
            maxHeight: 1024,
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            className="register-image"
            src={image}
            alt={formType === "volunteer" ? "Volunteer" : "Shelter"}
            layout="responsive"
            objectFit="cover"
            style={{
              transition: "transform 0.3s ease",
              borderTopLeftRadius: isMdScreen ? 20 : 0,
              borderBottomLeftRadius: isMdScreen ? 20 : 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          />
        </Box>
        <Box className="w-full md:h-full flex flex-col justify-evenly px-[15px] pt-[24px] pb-[24px] md:px-8 md:pt-6 md:pb-15">
          <Typography
            variant="h1"
            className="text-center"
            fontSize={36}
            fontWeight={700}
          >
            {formTitle}
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:justify-evenly w-full h-full md:space-y-4 mt-4"
          >
            {errorMessage && (
              <Typography
                variant="body1"
                color="error"
                className="mb-3 text-center"
                style={{ whiteSpace: "pre-line" }}
              >
                {errorMessage}
              </Typography>
            )}
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
                Email
              </Typography>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email обов'язковий",
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                }}
                render={({ field }) => (
                  <CustomInputs
                    {...field}
                    placeholder="email@gmail.com"
                    variant="outlined"
                    size="small"
                    error={!!errors.email}
                    helperText={
                      errors.email
                        ? typeof errors.email.message === "string"
                          ? errors.email.message
                          : " "
                        : " "
                    }
                  />
                )}
              />
            </Box>
            {formType === "shelter" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="" fontWeight={600}>
                  Назва та адреса притулку
                </Typography>
                <Controller
                  name="shelterName"
                  control={control}
                  rules={{ required: "Поле обов'язкове" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      placeholder="Песики і Патрони"
                      variant="outlined"
                      size="small"
                      error={!!errors.shelterName}
                      helperText={
                        errors.shelterName
                          ? typeof errors.shelterName.message === "string"
                            ? errors.shelterName.message
                            : " "
                          : " "
                      }
                    />
                  )}
                />
                <Controller
                  name="shelterAddress"
                  control={control}
                  rules={{ required: "Адреса притулку обов'язкова" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      placeholder="вул. Кульпарківська 17, м. Львів"
                      variant="outlined"
                      size="small"
                      error={!!errors.shelterName}
                      helperText={
                        errors.shelterName
                          ? typeof errors.shelterName.message === "string"
                            ? errors.shelterName.message
                            : " "
                          : " "
                      }
                    />
                  )}
                />
              </Box>
            )}
            {formType === "volunteer" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="" fontWeight={600}>
                  Ім'я та прізвище
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Поле обов'язкове" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      placeholder="Іван Петрович"
                      variant="outlined"
                      size="small"
                      error={!!errors.shelterName}
                      helperText={
                        errors.shelterName
                          ? typeof errors.shelterName.message === "string"
                            ? errors.shelterName.message
                            : " "
                          : " "
                      }
                    />
                  )}
                />
              </Box>
            )}
            {formType === "volunteer" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="mb-2" fontWeight={600}>
                  Дата народження
                </Typography>
                <Controller
                  name="birthday"
                  control={control}
                  rules={{ required: "Дата народження обов'язкова" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      type="date"
                      variant="outlined"
                      size="small"
                      error={!!errors.birthday}
                      helperText={
                        errors.birthday
                          ? typeof errors.birthday.message === "string"
                            ? errors.birthday.message
                            : " "
                          : " "
                      }
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </Box>
            )}
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
                Пароль
              </Typography>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Пароль обов'язковий" }}
                render={({ field }) => {
                  const [showPassword, setShowPassword] = useState(false);
                  return (
                    <CustomInputs
                      {...field}
                      placeholder="8+ символів, 1+ велика літера та 1+ спецсимвол"
                      variant="outlined"
                      size="small"
                      type={showPassword ? "text" : "password"}
                      error={!!errors.password}
                      helperText={
                        errors.password
                          ? typeof errors.password.message === "string"
                            ? errors.password.message
                            : " "
                          : " "
                      }
                      InputProps={{
                        endAdornment: (
                          <Box
                            onClick={() => setShowPassword(!showPassword)}
                            sx={{ cursor: "pointer" }}
                          >
                            {showPassword ? "❌" : "👁️"}
                          </Box>
                        ),
                      }}
                    />
                  );
                }}
              />
            </Box>
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
                Підтвердження паролю
              </Typography>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Підтвердження паролю обов'язкове",
                  validate: (value) =>
                    value === getValues("password") || "Паролі не співпадають",
                }}
                render={({ field }) => {
                  const [showConfirmPassword, setShowConfirmPassword] =
                    useState(false);
                  return (
                    <CustomInputs
                      {...field}
                      placeholder="Повторіть пароль"
                      variant="outlined"
                      size="small"
                      type={showConfirmPassword ? "text" : "password"}
                      error={!!errors.confirmPassword}
                      helperText={
                        errors.confirmPassword
                          ? typeof errors.confirmPassword.message === "string"
                            ? errors.confirmPassword.message
                            : " "
                          : " "
                      }
                      InputProps={{
                        endAdornment: (
                          <Box
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            sx={{ cursor: "pointer" }}
                          >
                            {showConfirmPassword ? "❌" : "👁️"}
                          </Box>
                        ),
                      }}
                    />
                  );
                }}
              />
            </Box>

            {formType === "shelter" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="mb-2" fontWeight={600}>
                  Категорія
                </Typography>
                <Controller
                  name="shelterType"
                  control={control}
                  rules={{ required: "Категорія обов'язкова" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      placeholder="Категорія"
                      variant="outlined"
                      size="small"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      error={!!errors.shelterType}
                      helperText={
                        errors.shelterType
                          ? typeof errors.shelterType.message === "string"
                            ? errors.shelterType.message
                            : " "
                          : " "
                      }
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    >
                      <option value="">Оберіть категорію</option>
                      <option value={0}>Ветклініка</option>
                      <option value={1}>Притулок для тварин</option>
                      <option value={2}>Розплідник</option>
                      <option value={3}>Інше</option>
                    </CustomInputs>
                  )}
                />
              </Box>
            )}
            <Box sx={{ mb: 0, mt: 2 }} className="flex flex-col ml-4">
              <Controller
                name="agreeToTerms"
                control={control}
                rules={{
                  validate: (value) =>
                    value ||
                    "Ви маєте погоджуватись з цим пунктом для завершення реєстрації",
                }}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        {...field}
                        checked={field.value || false}
                        sx={{ mr: 1 }}
                      />
                    }
                    label="Згода з Правилами реєстрації"
                  />
                )}
              />
              {errors.agreeToTerms && (
                <Typography variant="body2" color="error" className="ml-8 mt-1">
                  {/* @ts-ignore */}
                  {errors.agreeToTerms.message}
                </Typography>
              )}
              <Controller
                name="agreeToDataProcessing"
                control={control}
                rules={{
                  validate: (value) =>
                    value ||
                    "Ви маєте погоджуватись з цим пунктом для завершення реєстрації",
                }}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        {...field}
                        checked={field.value || false}
                        sx={{ mr: 1 }}
                      />
                    }
                    label="Згода на обробку персональних даних"
                    sx={{ mt: 2 }}
                  />
                )}
              />
              {errors.agreeToDataProcessing && (
                <Typography variant="body2" color="error" className="ml-8 mt-1">
                  {/* @ts-ignore */}
                  {errors.agreeToDataProcessing.message}
                </Typography>
              )}
            </Box>
            <CustomButton variant="contained" sx={{ mt: 4 }} type="submit">
              Зареєструватися
            </CustomButton>
            {/* <small>Lapka (c) 2025</small> */}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
