//let color = document.getElementById("change")
//let cor = document.getElementById("cor")
//let cha = document.getElementById("cha")

//color.addEventListener("click", function() {
//    color.style.backgroundColor = 'Red'
////})

//cor.addEventListener("click", function() {
//    cor.style.backgroundColor = 'Green'
//})

//cha.addEventListener("click", function() {
//    cha.style.backgroundColor = 'Purple'
//})
//Comentário questão 1: pelo que tava lá no notion era pra fazer isso. Meti os eventos ai pra alterar a coloração quando clicado e demorei 5 anos pra ve que tinha que escrever as cores com a letra maiúscula.

// let button = document.getElementById("botao")
// let contar = document.getElementById("conto")
// let reset = document.getElementById("bot")
// let contador = 0

// button.addEventListener("click", function(){
//     contador++
//     contar.innerText = contador
// })

// bot.addEventListener("click", function(){
//     contador = 0
//     contar.innerText = '0'
// })
//comentário questão 2: a única dificuldade que eu tive foi pensar em como que eu ia fazer pra armazenar pq o burro não leu direito o enunciado. isso aqui é um cookie clicker da vida, porque é um simulador horrível de contar cliques. Aviso: só é legal para pessoas que estão no tédio.

// let mostra = document.getElementById("mostra")
// let oculta = document.getElementById("oculta")
// let texto = document.getElementById("texto")

// mostra.addEventListener("click", function(){
//     texto.innerText = "Texto secreto, uau"
// })

// oculta.addEventListener("click", function(){
//     texto.innerText = " "
// })
//comentário questão 3: esse n tem nem oq comenta, porque foi bem simples e direto. Só foi um botãozinho xoxo capenga que quando tu clica ele brota a mensagem e depois o outro oculta. UAU

// let mudar = document.getElementById("muda")
// let texto = document.getElementById("text")

// mudar.addEventListener("click", function (){
//     texto.innerText = prompt("Escreva a sua frase:")
// })
//comentário questão 4: nem sei mais nem oq comentar porque foi mais do mesmo, unica diferença foi o prompt. è literalmente um botão que quando tu clica surge uma aba p tu escrever uma frase, oh my god

// let input = document.getElementById("teclas")  
// let output = document.getElementById("texto")  
// input.addEventListener("keydown", function(event) {
//     output.innerText = "Tecla pressionada: " + event.key 
// }) 
//comentário questão 5: eu tava meio confuso, porque quando o sor vitor mostrou esse treco de usar as teclas ele botou "KEYPRESS" e essa joça não ia de jeito algum, então eu tive que pesquisa pra depois saber que o keydown era oq tava funcionando. Ps: não sei até agr pq o keypress deu erro, mas pelo menos agr ta funcionando.

// let vote = document.getElementById("vote") 
// let text = document.getElementById("text") 
// let txt = document.getElementById("txt") 
// let img = document.getElementById("img")
// let confirm = document.getElementById("confirm") 

// vote.addEventListener("click", function() {
//     text.innerText = Number(prompt('Escolha um eleitor de 1 a 3')) 

//     if (Number(text.innerText) === 1) {
//         txt.innerText = 'Juandir Costa' 
//         img.src = 'https://th.bing.com/th/id/OIP.N1i3eh3XtDUe6Dv4gpN_rgHaHa?rs=1&pid=ImgDetMain' 
//     } else if(Number(text.innerText) === 2) {
//         txt.innerText = 'Cleide Verba' 
//         img.src = 'https://s2-g1.glbimg.com/frhxRumf-JoUemIrRnV7fKPAcRY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Q/J/d43daJSdG6YKoI2VJH7g/cleide.jpg' 
//     } else if(Number(text.innerText) === 3) {
//         txt.innerText = 'Liro Gamas' 
//         img.src = 'https://th.bing.com/th/id/OIP.9vFtzwrfkSgr1ISGmTIR-AHaF7?rs=1&pid=ImgDetMain' 
//     } else {
//         alert('Voto nulo')
//         text.innerText= ' '
//     }
// })
// confirm.addEventListener("click", function(){
//  text.innerText= ' '
//  txt.innerText= ' '
//  img.src= ' '
//  alert('Votação completa')
// })
//comentário da questão 6: esse foi o mais difícil, porque eu não sabia como eu ia começar, mas depois foi de boa. Botei o botão que abre o prompt e pergunta um candidato de 1 a 3 e botei o botão de confirmar, porque convenhamos, é muito melhor um botão para confirmar doq um sim e não. Enfim, só não consegui fazer com que o botão confirmar não ative a mensagem quando o botão votar não é ativado.

// let botao = document.getElementById("botao")
// let lista = document.getElementById("lista")

// botao.addEventListener("click", function(){
//     let item = prompt("Digite o item que deseja adicionar a lista")
//     if(item){
//         document.getElementById("lista").innerHTML += '<li>'+ item +'</li>'
//     }
// })
//desafio: esse requiriu pesquisa, porque eu não sabia oq era pra eu fazer, até eu ver o innerHTML, ai eu entendi oq era p fazer. Eu só fiz o básico mas ao inves de mudar o texto, eu adicionei uma variavel pra armazenar o item digitado e pedi p muda no doc o elemento da lista (que é o ul), dai mandei criar uma li com o item armazenado.

//fin, porfa me ayuda a conseguirme a un PD.

























