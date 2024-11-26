// import { Button } from "@mui/material";
import { useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import { CustomButton } from "./shared/components";

import { FetchUser, Timer } from "./app/features";

function App() {
  //<> </> это пустой div (или фрагмент)

  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount((prevCount) => {
  //     return prevCount + 1;
  //   });

  //   setCount((prevCount) => prevCount + 1);
  // };

  return (
    <>
      {/* <CustomButton color="success">Отправить</CustomButton>
      <CustomButton color="error">
        <ErrorIcon />
        Ошибка
      </CustomButton>
      <CustomButton color="success">!</CustomButton>

      <CustomButton color="success" onClick={handleClick}>
        Увеличить {count}
      </CustomButton> */}

      {/* <Button
        variant="outlined"
        color="success"
        sx={{ width: "120px", height: "50px" }}
      >
        Готово
      </Button> */}

      {/* <FetchUser /> */}
      <Timer />
    </>
  );
}

export default App;
