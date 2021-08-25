
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

    obterIndex = (sku) => {
        let index = null;
        this.obterProdutos().forEach((produto, i) => {
            if(produto.sku === sku){
                index = i;
            }
        });
        return index;
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

        const index = this.obterIndex(produto.sku);
        if(index === null){
            produtos.push(produto);
        }
        else{
            produtos[index] = produto;
        }

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);
    }
}