import { styled } from "@mui/material/styles";
import {
  Accordion,
  Checkbox,
  Select,
  Radio,
  AccordionProps,
  CheckboxProps,
  SelectProps,
  RadioProps,
  Autocomplete,
  AutocompleteProps,
} from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
// import { useTheme } from '../../../ThemeContext';

type CustomButtonProps = LoadingButtonProps & {
  fontSize?: string;
  ml?: string | number;
  target?: string | number;
  disabled?: any;
  primaryColor?: string;
  secondaryColor?: string;
};

type CustomTextFieldProps = Omit<TextFieldProps, "borderRadius" | "border"> & {
  borderRadius?: string;
  border?: string;
  height?: string;
  bgHelperTextColor?: string;
  primaryColor?: string;
  grayColor?: string;
};

type CustomSelectProps = SelectProps & {
  borderBottomColor?: string;
  primaryColor?: string;
};

type CustomCheckboxProps = CheckboxProps & {
  primaryColor?: string;
};

type CustomRadioProps = RadioProps & {
  primaryColor?: string;
};

// breakpoints size in pixels
const StyledCustomButton = styled(LoadingButton)<CustomButtonProps>(
  ({ theme, fontSize, disabled, primaryColor, secondaryColor }) => ({
    display: "flex",
    alignItems: "center",
    // width: "100%",
    textTransform: "none",
    fontSize: fontSize || "20px",
    borderRadius: "5px",
    color: "#FFFFFF",
    fontWeight: 700,
    // height: "44px",
    padding: "12px 20px",
    backgroundColor: disabled
      ? "#969899"
      : primaryColor
        ? primaryColor
        : "#48896D",
    boxShadow: "0px 4px 8px 0px #0000000A",
    lineHeight: "24px",
    "&:hover": {
      backgroundColor: secondaryColor ? secondaryColor : "#08281A",
      boxShadow: "initial",
    },
    [theme.breakpoints.up(768)]: {
      fontSize: "16px",
      // width: "100%",
      lineHeight: "24px",
    },
  })
);

const StyledCustomInputs = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "borderRadius" && prop !== "border",
})<CustomTextFieldProps>(
  ({
    theme,
    borderRadius,
    border,
    height,
    bgHelperTextColor,
    primaryColor,
    grayColor,
  }) => ({
    width: "100%",
    borderRadius: borderRadius ? borderRadius : "4px",
    background: "#FFFFFF",
    "& label": {
      color: grayColor,
    },
    "& label.Mui-focused": {
      // color: "#1E1F24",
    },
    "& .MuiInput-underline:after": {
      // borderBottomColor: "#6c25be",
      height: "20px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: primaryColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: "12px",
      lineHeight: "15px",
      fontWeight: 400,
      color: "#717279",
      backgroundColor: bgHelperTextColor || "white",
      background: bgHelperTextColor || "white",
      width: "100%",
      display: "flex",
      // alignItems: "center",
      justifyContent: "start",
      paddingTop: 8,
      margin: 0,
    },
    "& .MuiInputBase-root": {
      borderRadius: borderRadius ? borderRadius : "4px",
      border: border && border,
      fontSize: "14px",
      lineHeight: "24px",
      height: height,
    },
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
    "& .MuiInputLabel-asterisk": {
      color: "#DC143C",
    },
    [theme.breakpoints.up(768)]: {
      width: "100%",
    },
  })
);

const StyledCustomAccordion = styled(Accordion)(({ theme }) => ({
  background: "#FFFFFF",
  boxShadow: "4px 4px 20px 0px #0000000F",
  padding: "4px 4px",
  "&.MuiPaper-root": {
    borderRadius: "20px",
  },
  [theme.breakpoints.up(768)]: {
    padding: "28px 24px",
  },
}));

const StyledCustomCheckbox = styled(Checkbox)<CustomCheckboxProps>(
  ({ theme, primaryColor }) => ({
    padding: 0,
    "& .MuiSvgIcon-root": {
      fill: primaryColor,
      fontSize: 26,
    },
    [theme.breakpoints.up(768)]: {},
  })
);

const StyledCustomSelect = styled(Select)<CustomSelectProps>(
  ({ theme, borderBottomColor, primaryColor }) => ({
    height: 50,
    borderRadius: "4px",
    // ".MuiOutlinedInput-notchedOutline": {},
    // "& label.Mui-focused": {},
    // "& .MuiSelect-select": {},
    "& .MuiInput-underline:after": {
      borderBottomColor: "#6c25be",
    },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {},
    //   "&:hover fieldset": {},
    //   "&.Mui-focused fieldset": {},
    // },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: borderBottomColor,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
    // "& .MuiFormHelperText-root": {
    //   backgroundColor: "white",
    //   background: "white",
    //   width: "100%",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   paddingTop: 5,
    //   margin: 0,
    // },

    [theme.breakpoints.up(768)]: {},
  })
);

const StyledCustomRadio = styled(Radio)<CustomRadioProps>(
  ({ theme, primaryColor }) => ({
    "& .MuiSvgIcon-root": {
      fill: primaryColor,
    },
    [theme.breakpoints.up(768)]: {},
  })
);

// const CustomButton = ({ children, ...props }: LoadingButtonProps) => {
//   return <StyledCustomButton {...props}>{children}</StyledCustomButton>;
// };

// const StyledCustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
//   width: '65vw',
//   background: '#FAFAFA',
//   borderRadius: '0.75rem',
//   '& label.Mui-focused': {
//     color: '#A0AAB4',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#6c25be',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#B2BAC2',
//     },
//   },
//   '& .MuiFormHelperText-root': {
//     backgroundColor: 'white',
//     background: 'white',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 5,
//     margin: 0,
//     borderRadius: '0rem',
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: '#B2BAC2',
//     '& fieldset': {
//       borderColor: '#E0E3E7',
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#B2BAC2',
//     },
//   },
//   '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot':
//     {
//       borderRadius: '1rem',
//       paddingRight: 16,
//     },
//   [theme.breakpoints.up(375)]: {
//     width: '70vw',
//   },
//   [theme.breakpoints.up(435)]: {
//     width: '19rem',
//   },
//   [theme.breakpoints.up(768)]: {
//     width: '26.25rem',
//   },
// }));

const CustomButton = (props: CustomButtonProps) => {
  return <StyledCustomButton {...props} />;
};

const CustomInputs = (props: CustomTextFieldProps) => {
  return <StyledCustomInputs {...props} />;
};

const CustomAccordion = (props: AccordionProps) => {
  return <StyledCustomAccordion {...props} />;
};

const CustomCheckbox = (props: CustomCheckboxProps) => {
  return <StyledCustomCheckbox {...props} />;
};

const CustomSelect = (props: CustomSelectProps) => {
  return <StyledCustomSelect {...props} />;
};

const CustomRadio = (props: CustomRadioProps) => {
  return <StyledCustomRadio {...props} />;
};

// const CustomAutocomplete = (props: AutocompleteProps) => {
//   return <StyledCustomAutocomplete {...props} />;
// };

export {
  CustomButton,
  CustomInputs,
  CustomAccordion,
  CustomCheckbox,
  CustomSelect,
  CustomRadio,
};
