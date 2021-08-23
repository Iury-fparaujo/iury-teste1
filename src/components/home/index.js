import './index.scss' 

export const home = () => {

    let planos = [
        {id: 177, name: "Campeonato Mega Horse 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156778-130-130/FP_MEgaHorse2019-calendario.jpg?v=636746724307200000", price: 0.0},
        {id: 196 , name: "Campeonato de Team Penning - Haras Pati 2018", img: "https://clickqi.vteximg.com.br/arquivos/ids/156767-130-130/campeonato-haras-pati-2018.jpg?v=636742523750530000", price: 0.0}, 
        {id: 209, name: "Prova de Patrocínio - Team Penning. 2019", img: "https://clickqi.vteximg.com.br/arquivos/ids/156873-130-130/FP_ProvaPatrocinioMG1.jpg?v=636849600675170000", price: 0.0},
        {id: 175, name: "6° Prova de Team Penning  - Nossa Senhora Aparecida", img: "https://clickqi.vteximg.com.br/arquivos/ids/156769-130-130/6-prova-do-aureli-2018.jpg?v=636742540247170000", price: 0.0},
    ]

    $(window).on('load', function(){
        
        $('.test-btn').click(function(){     

            let key = parseInt($(this).attr('data-id'))
    
            $('.mini-cart').css('right', "0vw")
                 setTimeout(() => {
                    $('.cart-upside span').css('display', 'block')
             }, 500);

            planos = $.map(planos, (el) => {
                console.log(el.id)
                if(el.id === key){
                    
                    console.log(el.id)
                }                
            })
    
        })
    
        $('.cart-upside span').on('click', () => {
            $('.mini-cart').css('right', "-20vw")
            $('.cart-upside span').css('display', 'none')
        })

    })



}

