import { Button } from "@mui/material";
import React, { ReactNode } from "react";

// Использовали props.
// const CustomButton = (props) => {
//   console.log(props);
//   return (
//     <Button
//       variant="outlined"
//       color={props.color}
//       sx={{ width: "120px", height: "50px" }}
//     >
//         {props.children}
//     </Button>
//   );
// };
type CustomButtonProps = {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children: ReactNode;
  onClick?: () => void;
};

// научится передовать onClick
const CustomButton = React.memo(({ color, children, onClick }: CustomButtonProps) => {
  console.log("!");
  return (
    <Button
      variant="outlined"
      color={color}
      sx={{ width: "120px", height: "50px" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

export default CustomButton;
