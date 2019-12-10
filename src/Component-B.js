import users from "./common";

export default function ComponentB() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div>
    ${users.map(
      user => `
      <span>${user.email}</span>
    `
    )}
  </div>`.trim();

  return wrapper.firstChild;
}
