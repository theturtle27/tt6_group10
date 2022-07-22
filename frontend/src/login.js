import Axios from "axios";

async function login(username, password) {
  const res = await Axios.post("http://localhost:5000/api/users/login", {
    username,
    password,
  });
  const { data } = await res;
  if (data.error) {
    return data.error;
  } else {
    localStorage.setItem("token", data.token);
    return true;
  }
}

function check() {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
}

export { login, check };
