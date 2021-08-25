
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(erros){
    this.erros = erros;
}

export default class ProdutoService{

    validar = (produto) => {
        const erros = [];

        if(!produto.nome){
            erros.push("O campo nome é obrigatório");
        }

        if(!produto.sku){
            erros.push("O campo sku é obrigatório");
        }

        if(!produto.descricao){
            erros.push("O campo descrição é obrigatório");
        }

        if(!produto.descricao){
            erros.push("O campo fornecedor é obrigatório");
        }

        if(!produto.preco || produto.preco <= 0){
            erros.push("O campo preço deve ter um valor maior que zero");
        }

        if(erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);

        if(!produtos){
            produtos = [];
        }
        else{
            produtos = JSON.parse(produtos);
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}