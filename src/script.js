
const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   
    //captura o texto na box e formata para minuscula, tirando os caracteres indesejados.
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    words = typedText.split(/\s/);
    const letterCounts = {};
    const wordCounts = {};

    const letters = document.getElementById("lettersDiv");
    letters.innerHTML =""
    const wordReset = document.getElementById("wordsDiv");
    wordReset.innerHTML =""
    
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }

    for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
    }

    for(let i = 0; i< words.length; i++){
        currentWord = words[i];
        if(wordCounts[currentWord] === undefined){
            wordCounts[currentWord] =1;
        } else{
            wordCounts[currentWord]++;
        }
    }

    for (let word in wordCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span); 
    }

    
});