//Zmienne do elementów
var codeBlocks = document.querySelectorAll('.codeBlock');
var createBlock = document.querySelector('.createBlock');
var deleteBlock = document.querySelectorAll('.deleteBlock');
var blockTitle = document.getElementById('blockTitle');
var blockDesc = document.getElementById('blockDesc');
var blockNumber = document.getElementById('blockNumber');

//Prism.highlight(codeContent, Prism.languages.codeLanguage, codeLanguage)

//Zmienne do języków w inny sposób nie chce działać
//https://prismjs.com/docs/Prism.html#.highlight parametr 'grammar' jest typem Grammar
var javascriptSyntax = Prism.languages.javascript;
var htmlSyntax = Prism.languages.html
var cssSyntax = Prism.languages.css;
var pythonSyntax = Prism.languages.python;
var cppSyntax = Prism.languages.cpp;
var javaSyntax = Prism.languages.java;

var countElements = 0;
//Funkcja do usuwania elementu
function parentDelete(e){
    e.parentElement.remove();
}
//Funkcja do tworzenia elementów, parametry są przypisywane przez test, jeśli nie są podane to pobierane są wartości z inputów
function creatingContent(blockTitleTextTest= "", blockDescTextTest= "", blockNumberTextTest= "", codeContentTest= "", codeLanguageSelectedTest= ""){
    //pobieranie rodzica dla nowo tworzonego elementu
    let parentNode = createBlock.parentNode;
    //Jeśli parametr jest pusty to pobieramy wartość z inputa
    let blockTitleText = (blockTitleTextTest == "")?blockTitle.value : blockTitleTextTest;
    let blockDescText = (blockDescTextTest == "")?blockDesc.value : blockDescTextTest;
    let blockNumberText = (blockNumberTextTest == "")?blockNumber.value : blockNumberTextTest;

    let codeContent = (codeContentTest == "")?document.getElementById('codeContent').value : codeContentTest;
    let codeLanguageSelect = document.getElementById("codeLanguageSelect");
    let codeLanguageSelected = (codeLanguageSelectedTest == "")?codeLanguageSelect.value:codeLanguageSelectedTest;
    console.log(codeLanguageSelected);
    var hightlitingCode;

    /*
    Ustawianie za pomocą switcha języka dla kolorowania składni Prism
    Prism.highlight(
        string z kodem który chcemy żeby został pokolorowany,
        obiekt typu Grammar zawierający tokeny odpowiadające wybranemu językowi (definicja języka),
        string z nazwą języka)
    */
    switch(codeLanguageSelected){
        case 'javascript':
            hightlitingCode = Prism.highlight(codeContent,javascriptSyntax,codeLanguageSelected);
            break;
        case 'html':
            hightlitingCode = Prism.highlight(codeContent,htmlSyntax,codeLanguageSelected);
            break;
        case 'css':
            hightlitingCode = Prism.highlight(codeContent,cssSyntax,codeLanguageSelected);
            break;
        case 'python':
            hightlitingCode = Prism.highlight(codeContent,pythonSyntax,codeLanguageSelected);
            break;
        case 'cpp':
            hightlitingCode = Prism.highlight(codeContent,cppSyntax,codeLanguageSelected);
            break;
        case 'java':
            hightlitingCode = Prism.highlight(codeContent,javaSyntax,codeLanguageSelected);
            break;
    }
    //Tworzenie nowego elementu wraz z klasą i zawartością
    let figure = document.createElement('figure');
    Prism.highlightAll;
    figure.className = "codeBlock grWh";
    //Dodawanie zawartości do elementu za pomocą template string
    figure.innerHTML = `
    <figcaption id="Element-${countElements}"><a id="cap-${blockNumberText}">${blockNumberText}</a> ${blockTitleText}</figcaption>
    <p>${blockDescText}</p>
    <pre><code class="language-${codeLanguageSelected}">${hightlitingCode}</code></pre>
    <button class="gtkButton deleteBlock" onclick="parentDelete(this)">Usun blok</button><br>
    `
    //Dodawanie elementu do rodzica
    parentNode.insertBefore(figure, createBlock);
    countElements++;
    //return hightlitingCode;
}
export {creatingContent};