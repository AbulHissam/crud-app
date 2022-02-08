import faker from "@faker-js/faker";

faker.seed(99);

export const users = [...Array(15)].map(() => {
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
