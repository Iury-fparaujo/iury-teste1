import './index.scss' 

export const home = () => {
    let planos = [
        {id: 177, name: "Campeonato Mega Horse 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156778-130-130/FP_MEgaHorse2019-calendario.jpg?v=636746724307200000", price: 0.0},
        {id: 196 , name: "Campeonato de Team Penning - Haras Pati 2018", img: "https://clickqi.vteximg.com.br/arquivos/ids/156767-130-130/campeonato-haras-pati-2018.jpg?v=636742523750530000", price: 0.0}, 
        {id: 209, name: "Prova de Patrocínio - Team Penning. 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156873-130-130/FP_ProvaPatrocinioMG1.jpg?v=636849600675170000", price: 0.0},
        {id: 175, name: "6° Prova de Team Penning  - Nossa Senhora Aparecida", img: "https://clickqi.vteximg.com.br/arquivos/ids/156769-130-130/6-prova-do-aureli-2018.jpg?v=636742540247170000", price: 0.0},
    ]

    let carrinho = []

    $(window).on('load', function(){

        $('.cart-middle').find('ul').html('')

        //Função para adicionar o item ao carrinho
        $('.btn-teste').click(function(){     
            var key = parseInt($(this).attr('data-id'))
            console.log(key)

            
            const atualizaCarrinho = () => {
                $('.cart-middle').find('ul').html('')
                $.map(carrinho, (el) => {
                    document.querySelector('.cart-middle ul').innerHTML += 
                    `<li><img src=${el.img}/> <div class="informacoes-produto"><p>${el.name}</p></div></li>`
                })
                console.log(carrinho)
            }

            const limparCarrinho = () => {
                $('.cart-middle').find('ul').html('')
            }

            //Exibe o item no carrinho
            $.map(planos, (el) => {
                if(el.id === key){
                    let objeto = {
                        id: el.id,
                        img: el.img,
                        name: el.name
                    }
                    carrinho.push(objeto)
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

