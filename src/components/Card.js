import React from "react";
import "./Card.css";

const Card = ({pokemon}) => {
    return <div className="card">
        <div className="cartImg">
            <img src={pokemon.sprites.front_default} alt="text"/>
        </div>
        <h3 className="cardName">{pokemon.name}</h3>
        <div>
        <div>Type</div>
        {pokemon.types.map((type) => {
            <span className="typeName">{type.type.name}</span>
        })}
        </div>
        
        <div className="cardInfo">
            <div className="cardData">
                <p className="title">重さ：{pokemon.weight}</p>
            </div>
            <div className="cardData">
                <p className="title">高さ：{pokemon.height}</p>
            </div>
            <div className="cardData">
                <p className="title">アビリティ：{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>
};

export default Card;