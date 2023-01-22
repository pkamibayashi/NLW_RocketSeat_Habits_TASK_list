const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pr-br").slice(0, 5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("O dia ja existe");
    return;
  }

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
  //JSON.stringify(nlwSetup.data) serve para salvar o nlwSetup.data como uma string devido o JSON.stringify
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
// JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};  Converte o string salvo com a chave NLWSetup@habits em objeto pois
// o metodo setData() só aceita objetos
nlwSetup.setData(data);
nlwSetup.load();

//DOCUMENTAÇÃO DISPONIVEL EM https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html
