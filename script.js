function textTypeW(element){
  
    const textArray = element.innerHTML.split(''); // > separa cada letra dos elementos
   // > console.log(textArray)  > teste no console
   element.innerHTML = ""; // > zera o elemento <p>
    textArray.forEach((letra, i) => {
       setTimeout(() => element.innerHTML += letra , 75 * i )
       // > cria animacao passando a funcao que recebe as letras e faz 75ms vezes o index, em nova sintaxe
    }) 
    // > para cada = 'forEach' , letra e index
}
const texto = document.querySelector('p') // > atribui a variavel texto o elemento <p>
textTypeW(texto); // > chama a função pode ser o mesmo efeito somente trocando p documento.querySelector
