import React, {useState} from 'react';

const array = [
    {id:1, text:'play cricket', checked: false},
    {id:2, text:'play video game', checked:false},
    {id:3, text:'read boook',checked: false},
    {id:4,text:'finish assignment', checked: false}
];

const Checkbox = () => {
    const [arrCopy, setArrCopy] = useState(array);

    const handleCheckboxChange = (id) => {
        setArrCopy(arrCopy.map((arr) => arr.id === id ? {...arr, checked: !arr.checked} : arr));
    };

    const handleDelete = (id) => {
        setArrCopy(arrCopy.filter((item) => item.id !== id));
    };

  return (
    <div>
        <h2>Render and delete Items:</h2>
        <ul>
            {arrCopy.map((arr) => {
                return(
                    <li key={arr.id}>
                        <input type='checkbox' checked={arr.checked} onChange={() => handleCheckboxChange(arr.id)} />
                        {arr.text}
                        {arr.checked && <button onClick={() => handleDelete(arr.id)}>Delete</button>}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Checkbox;