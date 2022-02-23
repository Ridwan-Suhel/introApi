// const user = { id: 1, name: "Ridwan", profession: "student" };
// console.log(user);
// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  name: "Niyaz Enterprize",
  address: "wapda",
  city: "moulvibazar",
  products: ["Soap", "Biscuits", "Rice", "Lentil", "lights"],
  owner: {
    name: "Ridwan",
    age: 23,
    address: "Moulvibazar",
    skills: {
      name: "It Skills",
      frontEnd: "Front End Developer",
      backEnd: "Back End Developer",
      graphic: "UI UX Designer",
      programmingLang: {
        lang1: "Html",
        lang2: "css",
        lang3: "js",
        lang4: "react",
      },
    },
  },
  income: 15000,
};
// console.log(shop);
const stringified = JSON.stringify(shop);
console.log(stringified);
const converted = JSON.parse(stringified);
console.log(converted);
