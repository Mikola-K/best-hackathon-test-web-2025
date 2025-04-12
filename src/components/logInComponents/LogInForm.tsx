import { Box, Typography, FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import {
  CustomButton,
  CustomInputs,
  CustomCheckbox,
} from "../common/styles/customStyledComponents/customStyledComponents";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";

type FormProps = {
  formType: "volunteer" | "shelter";
  formTitle: string;
  image: string;
  additionalFields: any;
};

const LogInForm = ({
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box className="main-bg-color flex flex-col items-center justify-center md:p-10 h-screen">
      <Box className="main-white-bg-color w-full md:max-w-[1040px] rounded-[20px] flex flex-col md:flex-row justify-center items-center">
        <Box sx={{ maxHeight: 1024, overflow: "hidden", width: "100%" }}>
          <Image
            src={image}
            alt={formType === "volunteer" ? "Volunteer" : "Shelter"}
            layout="responsive"
            objectFit="cover"
            style={{
              borderTopLeftRadius: isMdScreen ? 20 : 0,
              borderBottomLeftRadius: isMdScreen ? 20 : 0,
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
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
                e-mail
              </Typography>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "e-mail обов'язковий",
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                }}
                render={({ field }) => (
                  <CustomInputs
                    {...field}
                    placeholder="e-mail"
                    variant="outlined"
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email?.message || " "}
                  />
                )}
              />
            </Box>
            {formType === "shelter" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="mb-2" fontWeight={600}>
                  Назва притулку
                </Typography>
                <Controller
                  name="shelterName"
                  control={control}
                  rules={{ required: "Назва притулку обов'язкова" }}
                  render={({ field }) => (
                    <CustomInputs
                      {...field}
                      placeholder="Назва притулку"
                      variant="outlined"
                      size="small"
                      error={!!errors.shelterName}
                      helperText={errors.shelterName?.message || " "}
                    />
                  )}
                />
              </Box>
            )}
            {formType === "volunteer" && (
              <>
                <Box sx={{ mb: 0 }}>
                  <Typography variant="h6" className="mb-2" fontWeight={600}>
                    Ім’я
                  </Typography>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: "Ім'я обов'язкове" }}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        placeholder="Ім’я"
                        variant="outlined"
                        size="small"
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message || " "}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ mb: 0 }}>
                  <Typography variant="h6" className="mb-2" fontWeight={600}>
                    Прізвище
                  </Typography>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: "Прізвище обов'язкове" }}
                    render={({ field }) => (
                      <CustomInputs
                        {...field}
                        placeholder="Прізвище"
                        variant="outlined"
                        size="small"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message || " "}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ mb: 0 }}>
                  <Typography variant="h6" className="mb-2" fontWeight={600}>
                    Дата народження
                  </Typography>
                  <Box className="flex space-x-2">
                    <Box sx={{ mb: 0 }}>
                      <CustomInputs
                        placeholder="ДД"
                        variant="outlined"
                        size="small"
                        style={{ width: "40%" }}
                      />
                    </Box>
                    <Box>
                      <CustomInputs
                        placeholder="ММ"
                        variant="outlined"
                        size="small"
                        style={{ width: "40%" }}
                      />
                    </Box>
                    <Box>
                      <CustomInputs
                        placeholder="РРРР"
                        variant="outlined"
                        size="small"
                        style={{ width: "80%" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </>
            )}
            <Box sx={{ mb: 0 }}>
              <Typography variant="h6" className="mb-2" fontWeight={600}>
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
                    helperText={errors.password?.message || " "}
                  />
                )}
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
                render={({ field }) => (
                  <CustomInputs
                    {...field}
                    placeholder="Підтвердження паролю"
                    variant="outlined"
                    size="small"
                    type="password"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message || " "}
                  />
                )}
              />
            </Box>
            {formType === "shelter" && (
              <Box sx={{ mb: 0 }}>
                <Typography variant="h6" className="mb-2" fontWeight={600}>
                  Категорія
                </Typography>
                <CustomInputs
                  placeholder="Категорія"
                  variant="outlined"
                  size="small"
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="volunteer">Ветклініка</option>
                  <option value="shelter">Притулок для тварин</option>
                  <option value="shelter">Розплідник</option>
                  <option value="shelter">Інше</option>
                </CustomInputs>
              </Box>
            )}
            <Box sx={{ mb: 0, mt: 2 }} className="flex flex-col ml-4">
              <FormControlLabel
                control={<CustomCheckbox sx={{ mr: 1 }} />}
                label="Згода за Правилами реєстрації"
              />
              <FormControlLabel
                control={<CustomCheckbox sx={{ mr: 1 }} />}
                label="Згода на обробку персональних даних"
                sx={{ mt: 2 }}
              />
            </Box>
            <CustomButton variant="contained" sx={{ mt: 4 }} type="submit">
              Зареєструватися
            </CustomButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LogInForm;
