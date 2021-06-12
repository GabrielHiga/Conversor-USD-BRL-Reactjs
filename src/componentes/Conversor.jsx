import React, { Component } from 'react'
import '../componentes/Conversor.css'
import brasil from '../Assets/brasil.png'
import usa from '../Assets/estados-unidos.png'

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter() {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let url = `https://economia.awesomeapi.com.br/json/daily/${de_para}/1`

        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[0].high;
            let moedaB_valor = ((parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2).replace('.', ','))
            this.setState({moedaB_valor})

            console.log(json[0])
        })
    }

    render() {
        return (
            <div className="conversor">
                <div className="wrap-dolar">
                    <h2><span className="icone-usa"><img src={usa} width="30px"/></span>{this.props.moedaA}</h2>
                    <input className="inputNumber" type="number" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/> 
                </div>
                <button className="button" type="button" onClick={this.converter}>Converter</button>
                <div className="wrap-real">
                    <h2><span className="icone-brasil"><img src={brasil} width="30px"/></span>{this.props.moedaB}</h2>
                    <div className="resultado-real" >R$ {this.state.moedaB_valor}</div>
                </div>
                
            </div>
        )
    }
}