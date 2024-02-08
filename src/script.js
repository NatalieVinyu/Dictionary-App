/*console.log(fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello'))

response.data[0].meanings[0].definitions[0].definition

function mySearch() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    let word = document.getElementById("search");
    document.getElementById("word").innerHTML = `${word}`

   
}

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/bottle"
axios.get(url).then(showWord);
*/

function showWord(response) {
    let inputWord = document.querySelector("#word")
    let word = response.data[0].word
    inputWord.innerHTML = `${word}`

    let inputPhonetic = document.querySelector("#phonetic")
    let phonetic = response.data[0].phonetic
    let partOfSpeech = response.data[0].meanings[0].partOfSpeech
    inputPhonetic.innerHTML = `${partOfSpeech}  ${phonetic}`
    
    let inputDefinition = document.querySelector("#definition")
    let definition = response.data[0].meanings[0].definitions[0].definition
    inputDefinition.innerHTML = `${definition}`

    let inputVerb = document.querySelector("#verb")
    let verb = response.data[0].meanings[1].partOfSpeech
    inputVerb.innerHTML = `${verb}`

    let inputVerbDefinition = document.querySelector("#verbDefinition")
    let verbDefinition = response.data[0].meanings[1].definitions[0].definition
    inputVerbDefinition.innerHTML = `${verbDefinition}`

    let inputVerbExample = document.querySelector("#verbExample")
    let verbExample = response.data[0].meanings[1].definitions[0].example
    inputVerbExample.innerHTML = `Example: "${verbExample}"`

    /*let audio = document.querySelector("audio")
    let phonetics = response.data[0].phonetics[0].audio
    audio.innerHTML = `${phonetics}`*/

    console.log(response.data[0])
}

function submitButton(event) {
    event.preventDefault()
    let word = document.querySelector("#searchWord")

    let h2 = document.querySelector("h2")
    h2.innerHTML = `${word.value}`

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;

    axios.get(url).then(showWord);
}

let wordForm = document.querySelector("#searchBar")
wordForm.addEventListener("submit", submitButton)

/*function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }*/














