const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => displayData(data))
  .catch((error) => console.log(error))

  function displayData(data){
    document.getElementById("set-up").innerText = data.setup;
    document.getElementById("punch-line").innerText = data.punchline;
    
  }
}
getJokeBtn.addEventListener("click", fetchJoke);