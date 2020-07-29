import React from 'react';

function ButtonLink(props){
//props=>{className="O QUE FOR PASSADO PARA O COMPONENT",href="Também o que for passado para o component"}

    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}


export default ButtonLink;