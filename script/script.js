// https://v2.jokeapi.dev/joke/Any
// https://official-joke-api.appspot.com/jokes/random
const url = "https://v2.jokeapi.dev/joke/Any";
const getJokeButton = document.querySelector("#genJokeBtn");
const setup = document.querySelector("#setup")
const delivery = document.querySelector("#delivery")
//const category = document.querySelector("#category")
//const type = document.querySelector("#type")

async function getJokes() {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    if (data.type==="twopart") {
      delivery.classList.remove("hidden")
      setup.innerHTML = data.setup
      delivery.innerHTML = data.delivery
    } else {
      delivery.classList.add("hidden")
      setup.innerHTML = data.joke
    }
  } catch (error) {
    console.error(error)
    delivery.innerHTML = "Please Check your internet connection!"
  }
}

getJokeButton.addEventListener("click", getJokes);