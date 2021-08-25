import React from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router';
import Card from '../../components/card';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    erros: [],
    atualizando: false
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo]: valor });
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        };

        try {
            this.service.salvar(produto);
            this.limpaCampos();
            this.setState({ sucesso: true });
        }
        catch (erro) {
            const erros = erro.erros;
            this.setState({ erros: erros });
        }
    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    componentDidMount() {
        const sku = this.props.match.params.sku;

        if (sku) {
            const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku);
            if (resultado.length === 1) {
                const produtoEncontrado = resultado[0];
                this.setState({ ...produtoEncontrado, atualizando: true });
            }
        }
    }

    render() {
        return (
            <Card header={this.state.atualizando ? "Atualização de Produto" : "Cadastro de Produto"}>
                {
                    this.state.sucesso &&
                    <div className="alert alert-dismissible alert-success">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Sucesso!</strong> Cadastro realizado com sucesso.
                    </div>

                }

                {
                    this.state.erros.length > 0 &&

                    this.state.erros.map(msg => {
                        return (
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Erro!</strong> {msg}
                            </div>
                        )
                    })
                }


                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nome: *</label>
                            <input type="text"
                                name="nome"
                                className="form-control"
                                value={this.state.nome}
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>SKU: *</label>
                            <input type="text" name="sku" className="form-control" value={this.state.sku} onChange={this.onChange} disabled={this.state.atualizando} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição: *</label>
                            <textarea className="form-control" name="descricao" value={this.state.descricao} onChange={this.onChange} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Preço: *</label>
                            <input type="text" name="preco" className="form-control" value={this.state.preco} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fornecedor: *</label>
                            <input type="text" name="fornecedor" className="form-control" value={this.state.fornecedor} onChange={this.onChange} />
                        </div>
                    </div>
                </div>

                <br />
                <div className="row">
                    <div className="col-md-1">
                        <button onClick={this.onSubmit} className="btn btn-success">{this.state.atualizando ? "Atualizar" : "Salvar"}</button>
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroProduto)