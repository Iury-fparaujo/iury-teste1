import './index.scss' 

export const header = () => {
    $(window).on('load', function(){
        $('.logo-carrinho').on('click', () => {
            $('.mini-cart').css('right', "0vw") 
            setTimeout(() => {
                $('.cart-upside span').css('display', 'block')   
            }, 500);
        })

        $('.cart-upside span').on('click', () => {
            $('.mini-cart').css('right', "-20vw")
            $('.cart-upside span').css('display', 'none')
        })
    })
}

