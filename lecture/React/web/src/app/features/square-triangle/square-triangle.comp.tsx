import { CustomButton } from "@/shared/components";
import { TextField, Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

//Аналог input - TextField
//Аналог текстового компонента - TextField
//onChange
//target внутри поля, value значение внутри поля

const SquareTrangle = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number>(0);
  const [click, setClick] = useState<boolean>(true);

  const calcSquareTrangle = useCallback(() => {
    setClick((prev) => !prev);
    setArea(width * height);
  }, [height, width]);

  const calcArea = useMemo(() => {
    return width * height;
  }, [height, width]);

  return (
    <>
      <TextField
        placeholder="12"
        name="width"
        label="Ширина"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setWidth(Number(e.target.value));
        }}
      />

      <TextField
        placeholder="10"
        name="height"
        label="Высота"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setHeight(Number(e.target.value));
        }}
      />
      <CustomButton color="error" onClick={calcSquareTrangle}>
        Вычислить
      </CustomButton>
      <Typography>Площадь прямоугольника:{area}</Typography>
      <Typography>Площадь прямоугольника:{calcArea}</Typography>
    </>
  );
};
export default SquareTrangle;
