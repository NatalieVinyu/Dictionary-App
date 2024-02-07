/*console.log(fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello'))

response.data[0].meanings[0].definitions[0].definition*/

function showWord(response) {
    let h2 = document.querySelector("h2")
    let word = response.data[0].word
    h2.innerHTML = `${word}`

    let h3 = document.querySelector("h3")
    let definition = response.data[0].meanings[0].definitions[0].definition
    h3.innerHTML = `${definition}`

    console.log(response.data[0])
}

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
axios.get(url).then(showWord);




