import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/";
import {Component} from "react";
import './assets/index.css';
import "./assets/App.css"

class App extends Component {

    criarNota(titulo, texto) {
        console.log(`Uma nova nota foi criada: ` + titulo + " " + texto)
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota = {this.criarNota}/>
                <ListaDeNotas/>
            </section>
        );
    }
}

export default App;
