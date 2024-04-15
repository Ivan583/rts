import React from "react";

interface CardProps {
    width?: string;
    height?: string;
}

const Card = ({width, height}: CardProps) => {
    return (
        <div style={{width, height, border: '2px solid teal'}}>

        </div>
    )
}
export default Card;
