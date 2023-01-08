import { creatingContent } from './listingWithCodeTest.js';
//test funkcji creatingContent
QUnit.test( "poprawność danych generowanych w nowym bloku kodu", function( assert ) {
    creatingContent("BlockTitleTest", "BlockDescTest","6","ContentTest","javascript");
     //const idCode = document.getElementById('cap-6');
     const idFigcaption = document.getElementById('Element-0');
     const idParagraph = document.getElementById('Element-0').nextElementSibling;
     const highlightedLanguage = document.querySelector('.language-javascript');
     console.log(highlightedLanguage);
     //const highlightedCode = document.querySelector('.language-SelectedCodeTest');
     assert.equal(idFigcaption.querySelector('#cap-6').textContent, "6", "Numer bloku zgadza się" );
     assert.equal(idFigcaption.textContent.split(" ")[1], "BlockTitleTest", "Tytuł bloku zgadza się" );
     assert.equal(idParagraph.textContent, "BlockDescTest", "Opis bloku zgadza się" );
    assert.equal(highlightedLanguage.textContent, "ContentTest", "Wybrany język zgadza się" );
  });