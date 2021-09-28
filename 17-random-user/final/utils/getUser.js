// API URL
// API DOCS
// https://randomuser.me/documentation

// const URL = "https://randomuser.me/api/";
const URL = "https://randomuser.me/api/?gender=female";

const getUser = async () => {
  const data = await fetch(URL);
  const response = await data.json();

  //   destructure
  const person = response.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  //   console.log(person);

  return {
    phone,
    image,
    password,
    age,
    email,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
