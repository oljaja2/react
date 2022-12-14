const user = {
  name: "Вася",
  lastname: "Петров",
  email: "555@mail.ru",
  about: "чтото о себе",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

// const users = {
//   0: { name: "Татьяна", lastname: "Петрова", id: 4 },
//   1: { name: "Эдуард", lastname: "Мышкин", id: 17 },
//   2: { name: "Федор", lastname: "Павловский", id: 22 },
//   3: { name: "Михаил", lastname: "Зиновьев", id: 6 },
//   4: { name: "Надежда", lastname: "Шумова", id: 33 },
//   5: { name: "Елена", lastname: "Тимонова", id: 45 },
// };
let users = {};
export function getUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://aroma.stolga.p-host.in/getUsers");
  users = await response.json();
  return users;
}
