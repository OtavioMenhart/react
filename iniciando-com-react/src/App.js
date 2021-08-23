import React from "react";

class App extends React.Component {

  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criarComboBox = () => {
    const opcoes = ["fulano1", "fulano2"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log("Executou componentDidMount");
  }

  render() {
    console.log("Executou render");
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1> hello {this.state.nome}</h1>
        <h1> hello {this.props.nome}</h1>

        {this.criarComboBox()}
      </>
    )
  }
}

export default App;
