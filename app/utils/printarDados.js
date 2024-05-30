const printarDados = {};

printarDados.mostrarHtmlNaTela = function (html, idElemento, tipo) {
    switch (tipo){
        case 'html':
            $("#" + idElemento).html(html);
            break;
        case 'append':
            $("#" + idElemento).append(html);
            break;
        case 'prepend':
            $("#" + idElemento).prepend(html);
            break;
        case 'before':
            $("#" + idElemento).before(html);
            break;
        case 'after':
            $("#" + idElemento).after(html);
            break;
    }
};

export default printarDados;