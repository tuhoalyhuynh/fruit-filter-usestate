import React, { useState } from 'react';

function Input(props) {
    const [object, setObject] = useState({

    })

    return (
        <div>
                <label htmlFor="fruit-filter">Filter These Fruits: </label>
                <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
        </div>
    )
}

export default Input