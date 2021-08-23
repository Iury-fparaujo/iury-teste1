import "./assets/stylesheets/_reset.scss";
import "./index-store.scss";
import {home} from './components/home/index.js'
import {header} from './components/header/index.js'
import {footer} from './components/footer/index.js'
import {produtos} from './components/produtos/index.js'
import {carrinho} from "./components/carrinho/index.js";


$(document).ready(function () {
    let $body = $("body");
    header()
    $body.hasClass(`home`) && home()
    $body.hasClass(`produto`) && produtos()
    carrinho()
    footer()
    // Code
});
