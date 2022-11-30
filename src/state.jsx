const user = {
  name: "Вася",
  lastname: "Петров",
  email: "555@mail.ru",
  about: "чтото о себе",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};
const users = {
  0: { name: "Татьяна", lastname: "Петрова" },
  1: { name: "Эдуард", lastname: "Мышкин" },
  2: { name: "Федор", lastname: "Павловский" },
  3: { name: "Михаил", lastname: "Зиновьев" },
  4: { name: "Надежда", lastname: "Шумова" },
  5: { name: "Елена", lastname: "Тимонова" },
};
export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
