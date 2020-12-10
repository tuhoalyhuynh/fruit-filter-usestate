import React, { useState } from 'react';

function List(props) {
    const [object, setObject] = useState({

    })

    const fruitItems = props.fruits.map((eachFruit, index) => {
        return <li key={index}>{eachFruit}</li>
    })

    return (
        <div>
            <ul>
                {fruitItems}
            </ul>
        </div>
    )
}

export default List