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
<<<<<<< HEAD

    showPainelDeUsuario:(req, res)=>{
        res.render('painelDeUsuario.ejs')
    },

=======
    showPainel:(req, res)=>{
        res.render('painelDeUsuario.ejs')
    },

    // mostraCategoria:(req,res)=>{
    //     let id = req.params.id;
    // }
>>>>>>> 9143951b0f2f3f14e86c55937dbbb458978d5831
}

module.exports = paginasController;
