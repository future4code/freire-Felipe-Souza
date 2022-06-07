import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <div className='email'>
                <img src={ props.imagem1 }/>
                <p>{ props.email }</p>
            </div>
            <div className='endereco'>
                <img src={ props.imagem2 }/>
                <p> { props.endereco } </p>
            </div>
        </div>
    )
}

export default CardPequeno;