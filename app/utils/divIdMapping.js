const divIdMapping = {
    pages: {
        dashboard: {
            id: "dashboard-page",
        },
        home: {
            id: "home-page",
        },
        filtro:{
            id: "filtro-page",
            idDivIncluirRegrasDeFiltro: 'dynamic-rule-rows',
            idDivIncluirNovoTipoArquivo: 'archive-content',
            idFilterRule: 'filter-rule-',
            idArchiveType: 'archive-'
        },
        cliente: {
            id: "adicionar-cliente-page",
            idClientVariant: 'variant-name-',
            idDivClientVariantList: 'lista-variantes-cliente',
            idClientName: 'client-name',
            idClientHighlightColor: 'client-highlight-color'
        },
        caixa_entrada: {
            id: "caixa-entrada-page"
        },
        processo: {
            id: "adicionar-processos-page",
            idNumeroProcessoGroupName: 'numero-processo-group-name',
            idNumeroProcessoHighlightColor: 'numero-processo-highlight-color',
            idModalMuitosNumerosProcessos: 'modal-muitos-numeros-processos',
            idListaProcessosInput: 'lista-processos-input',
            idButtonIncluirNumerosProcesso: 'incluir-numeros-processo',
            idSpanQuantidadeNumerosProcesso: 'quantidade-numeros-processo',
            idListaNumerosProcesso: 'lista-numeros-processo',
            idModalListaNumerosProcesso: 'modal-lista-numeros-processo',
            idButtonShowModal: 'button-visualizar-lista-muitos-processos'
        },
        tipo_recebimento: {
            id: "tipo-recebimento-page",
            idNomeTipoRecebimento: 'tipo-recebimento-name',
            idReceberEmail: 'receber-email',
            nameTipoRecebimento: 'tipo-recebimento'
        },
        notFound: {
            id: "404-page"
        },
        navbar: {
            dashboard:{
                id: "navbar-dashboard",
                href: "/app/modules/dashboard/view/dashboard.html"
            },
            caixa_entrada:{
                id: "navbar-caixa-entrada",
                href: "/app/modules/caixa_entrada/view/caixa_entrada.html"
            },
            home:{
                id: "navbar-dashboard",
                href: "/app/modules/home/view/home.html"
            },
            filtro:{
                id: "navbar-filtro",
                href: "/app/modules/filtro/view/filtro.html"
            },
            processo:{
                id: "navbar-processo",
                href: "/app/modules/adicionar_processo/view/adicionarProcesso.html"
            },
            cliente:{
                id:  "navbar-cliente",
                href: "/app/modules/adicionar_cliente/view/adicionarCliente.html"
            },
            tipo_recebimento:{
                id:  "navbar-tipo-recebimento",
                href: "/app/modules/tipo_recebimento/view/tipoRecebimento.html"
            },
        }
    },
    components: {
        header: "header",
        navbar: "navbar",
        footer: "footer"
    },
    tipoPrintarDados :{
        html: 'html',
        append: 'append',
        prepend: 'prepend',
        before: 'before',
        after: 'after',
    }
};


export default divIdMapping;