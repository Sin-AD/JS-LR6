const transliterateBtn = document.getElementById('transliterate-btn');
const reverseTransliterateBtn = document.getElementById('reverse-transliterate-btn');
const sourceText = document.getElementById('source-text');
const result = document.getElementById('result');

const translitMap = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'h',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sch',
  'ъ': '',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya'
};

function transliterate() {
  const text = sourceText.value;
  let resultText = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const translitChar = translitMap[char] || char;
    resultText += (text[i] === char.toUpperCase()) ? translitChar.toUpperCase() : translitChar;
  }

  result.textContent = resultText;
}

function reverseTransliterate() {
  const text = sourceText.value;
  let resultText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const reversedChar = Object.keys(translitMap).find(key => translitMap[key] === char.toLowerCase()) || char;
    resultText += (text[i] === char.toUpperCase()) ? reversedChar.toUpperCase() : reversedChar;
  }

  result.textContent = resultText;
}

transliterateBtn.addEventListener('click', transliterate);
reverseTransliterateBtn.addEventListener('click', reverseTransliterate);