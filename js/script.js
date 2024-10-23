const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e)-> {
    e.target
});

const Login = async () => {
  const response = await fetch("");
  const data = response.json();

  console.log(data);
};
