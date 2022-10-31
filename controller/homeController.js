const paginasController = {
    showLogin:(req,res)=>{
        res.render('login.ejs')
    },
    showHome:(req, res)=>{
        res.render('home.ejs')
    },
    showListagem:(req,res)=>{
        res.render('listagemProduto.ejs')
    },
    showProdutoInterno:(req,res)=>{
        res.render('produtoInterno.ejs');
        
    },
    showCarrinho:(req, res)=>{
        res.render('carrinho.ejs')
    },
    showFinalizacao:(req, res)=>{
        res.render('finalizacao.ejs')
    },

    showPainelDeUsuario:(req, res)=>{
        res.render('painelDeUsuario.ejs')
    },

}

module.exports = paginasController;
