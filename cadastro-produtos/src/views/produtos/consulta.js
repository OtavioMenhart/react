import React from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router';
import Card from '../../components/card';

class ConsultaProdutos extends React.Component {

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    state = {
        produtos: []
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        if (produtos != null) {
            this.setState({ produtos: produtos });
        }
    }

    preparaEditar = (sku) => {
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({ produtos: produtos });
    }

    render() {
        return (
            <Card header="Consulta de Produtos">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map((produto, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.sku}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.fornecedor}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => this.preparaEditar(produto.sku)}>Editar</button>
                                            <button className="btn btn-danger" onClick={() => this.deletar(produto.sku)}>Remover</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos)