/*console.log(fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello'))

response.data[0].meanings[0].definitions[0].definition

function mySearch() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    let word = document.getElementById("search");
    document.getElementById("word").innerHTML = `${word}`

   
}
*/

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
axios.get(url).then(showWord);

function showWord(response) {
    let h2 = document.querySelector("h2")
    let word = response.data[0].word
    h2.innerHTML = `${word}`

    let h3 = document.querySelector("h3")
    let definition = response.data[0].meanings[0].definitions[0].definition
    h3.innerHTML = `${definition}`

    let audio = document.querySelector("audio")
    let phonetics = response.data[0].phonetics[0].audio
    audio.innerHTML = `${phonetics}`

    console.log(response.data[0].phonetics[0])
}



/*function submitButton(event) {
    event.preventDefault()
    let word = document.querySelector("#searchWord")

    let h2 = document.querySelector("h2")
    h2.innerHTML = `${word.value}`

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;

    axios.get(url).then(showWord);
}

let wordForm = document.querySelector("#searchBar")
wordForm.addEventListener("submit", submitButton)*/














