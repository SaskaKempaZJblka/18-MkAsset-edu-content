//Zmienne do elementów
var codeBlocks = document.querySelectorAll('.codeBlock');
var createBlock = document.querySelector('.createBlock');
var deleteBlock = document.querySelectorAll('.deleteBlock');
var blockTitle = document.getElementById('blockTitle');
var blockDesc = document.getElementById('blockDesc');
var blockNumber = document.getElementById('blockNumber');
var createBlockForm = document.getElementById('createBlockForm');

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
//Funkcja do tworzenia elementów
function creatingContent(){
    //pobieranie rodzica dla nowo tworzonego elementu
    let parentNode = createBlockForm.parentNode;

    //pobieranie wartości z inputów
    let blockTitleText = blockTitle.value;
    let blockDescText = blockDesc.value;
    let blockNumberText = blockNumber.value;

    //pobieranie wartości z textarea
    let codeContent = document.getElementById('codeContent').value;
    //pobieranie wartości z selecta
    let codeLanguageSelect = document.getElementById("codeLanguageSelect");
    let codeLanguageSelected =codeLanguageSelect.value;
    
    var hightlitingCode;
    /*
    Ustawianie za pomocą switcha języka dla kolorowania składni Prism
    Prism.highlight(
        string z kodem który chcemy żeby został pokolorowany,
        obiekt typu Grammar zawierające tokeny odpowiadające wybranemu językowi (definicja języka),
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
    figure.className = "codeBlock grWh";
    //Dodawanie zawartości do elementu za pomocą template string
    Prism.highlightAll;
    figure.innerHTML = `
    <figcaption id="Element-${countElements}"><a id="cap-${blockNumberText}">${blockNumberText}</a> ${blockTitleText}</figcaption>
    <p>${blockDescText}</p>
    <pre><code class="language-${codeLanguageSelected}">${hightlitingCode}</code></pre>
    <button class="gtkButton deleteBlock" onclick="parentDelete(this)">Usun blok</button><br>
    `
    //Dodawanie elementu do rodzica
    parentNode.insertBefore(figure, createBlockForm);
    countElements++;
}
