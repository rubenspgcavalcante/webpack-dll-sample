import users from "./common";

export default function ComponentA() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<ul>
    ${users.map(
      user => `
      <li>${user.name.first} ${user.name.last}</li>
    `
    )}
  </ul>`.trim();

  return wrapper.firstChild;
}
