import { useEffect, useState } from "react";
import * as Markup from "./fetch-user.styles";
import { URL_API } from "./constants";
import { User, UserResponse } from "./types/user.types";
import { Typography } from "@mui/material";
// import * as Feature from './features/

//<Feature.UserList> внутри UserContainer
//fetch-user/features/user-list
//Имя, Фамилию 
//Кнопка внутри которой корзина красного цвета
export const FetchUser = () => {
  const [users, setUser] = useState<User[]>();

  useEffect(() => {
    fetch(URL_API)
      .then((response) => {
        response.json().then((data: UserResponse) => {
          setUser(data.results);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Markup.UserContainer>
      {users?.map((user) => (
        <Markup.UserWrapper key={user.id.value}>
          <Typography>{user.name.first}</Typography>
        </Markup.UserWrapper>
      ))}
    </Markup.UserContainer>
  );
};
