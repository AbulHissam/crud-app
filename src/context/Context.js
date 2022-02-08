import React, { createContext, useContext, useReducer } from "react";
import faker from "@faker-js/faker";
import { usersReducer } from "./Reducers";

const Users = createContext();

faker.seed(99);

const Context = ({ children }) => {
  const users = [...Array(15)].map(() => {
    return {
      id: faker.datatype.uuid(),
      avatar: faker.internet.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.exampleEmail(),
      phoneNumber: faker.phone.phoneNumberFormat(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      country: faker.address.countryCode(),
    };
  });

  const [state, dispatch] = useReducer(usersReducer, { users: users });

  return (
    <Users.Provider value={{ state, dispatch }}>{children}</Users.Provider>
  );
};

export const UsersState = () => {
  return useContext(Users);
};

export default Context;
