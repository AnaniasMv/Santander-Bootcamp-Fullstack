
let btn = document.getElementById("change-cat");
btn.addEventListener("click", fetchPics);

function fetchPics() {
    let catsImgDiv = document.querySelector(".cat")
    catsImgDiv.innerHTML = ''
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            let catsImgUrl = data[0].url

            let catsImgEl = document.createElement("img")
            catsImgEl.setAttribute('src', `${catsImgUrl}`)

            catsImgDiv.appendChild(catsImgEl)
        })
        .catch(err => console.log(err))
}