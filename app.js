console.log("Let's get this party started!");

async function getGif(search) {
  let response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=AZYfF3rn5W6vbmDeUBXvt4LsH8FgBO0W`
  );
  const arrLength = response.data.data.length;
  randNum = Math.floor(Math.random() * arrLength);
  // console.log(arrLength);
  // console.log("got", response);
  if (arrLength) {
    makeGif(`${response.data.data[randNum].images.original.url}`);
  }
}

const gifs = document.getElementById("gif-holder");
function makeGif(gif) {
  const div = document.createElement("div");
  const newGif = document.createElement("img");
  // newGif.src = `https://i.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.webp`;
  newGif.src = gif;
  console.log(newGif);
  div.append(newGif);
  gifs.append(div);
}

const form = document.getElementById("searchForm");
form.addEventListener("submit", function (e) {
  const input = document.getElementById("search");
  e.preventDefault();
  getGif(input.value);
  input.value = "";
});

const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", function () {
  gifs.innerHTML = "";
});
// var xhr = $.get(
//   "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
// );
