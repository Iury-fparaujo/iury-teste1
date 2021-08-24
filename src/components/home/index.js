import './index.scss' 

export const home = () => {
    let planos = [
        {id: 177, name: "Campeonato Mega Horse 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156778-130-130/FP_MEgaHorse2019-calendario.jpg?v=636746724307200000", price: 10.0},
        {id: 196 , name: "Campeonato de Team Penning - Haras Pati 2018", img: "https://clickqi.vteximg.com.br/arquivos/ids/156767-130-130/campeonato-haras-pati-2018.jpg?v=636742523750530000", price: 20.0}, 
        {id: 209, name: "Prova de Patrocínio - Team Penning. 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156873-130-130/FP_ProvaPatrocinioMG1.jpg?v=636849600675170000", price: 30.0},
        {id: 175, name: "6° Prova de Team Penning  - Nossa Senhora Aparecida", img: "https://clickqi.vteximg.com.br/arquivos/ids/156769-130-130/6-prova-do-aureli-2018.jpg?v=636742540247170000", price: 40.0},
        {id: 198, name: "Estatísticas", img: "https://clickqi.vteximg.com.br/arquivos/ids/156783-130-130/estatisticas.jpg?v=636747614024300000", price: 50.0},
        {id: 197, name: "Prova da Família", img: "https://clickqi.vteximg.com.br/arquivos/ids/156782-130-130/FP_ProvaFamilia-SaveTheDate.jpg?v=636746943083470000", price: 60.0}
    ]

    let carrinho = []
    let qntd = 0

    $(window).on('load', function(){

        $('.cart-middle').find('ul').html('')

        //Função para adicionar o item ao carrinho
        $('.btn-teste').click(function(){     
            var key = parseInt($(this).attr('data-id'))
            console.log(key)
            
            const atualizaCarrinho = () => {
                $('.cart-middle').find('ul').html('')
                $.map(carrinho, (el, i) => {
                    document.querySelector('.cart-middle ul').innerHTML += 
                    `<li><img src=${el.img}/> <div class="informacoes-produto"><p>${el.name}</p><span>R$: ${el.price},00</span></div></li>`
                })
                console.log(carrinho)
            }

            //Limpar carrinho
            const limparCarrinho = () => {
                $('.cart-middle').find('ul').html('')
            }

            //Exibe o item no carrinho
            $.map(planos, (el, i) => {
                if(el.id === key){
                    console.log(carrinho.indexOf(key))
                    let objeto = {
                        id: el.id,
                        img: el.img,
                        qntd: qntd++,
                        name: el.name,
                        price: el.price
                    }
                    carrinho.push(objeto)
                    console.log(carrinho[i])
                    atualizaCarrinho()  
                }     
       
            })

            //Animação que abre a sidebar do carrinho
            $('.mini-cart').css('right', "0vw")
                 setTimeout(() => {
                    $('.cart-upside span').css('display', 'block')
             }, 500);         
    
        })
        
        //Animação que fecha a sidebar do carrinho
        $('.cart-upside span').on('click', () => {
            $('.mini-cart').css('right', "-20vw")
            $('.cart-upside span').css('display', 'none')
        })
    })
}

