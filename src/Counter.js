import React from 'react';
import './Counter.css';

const Counter = () => {
    const [value, setValue] = React.useState(0);

    const updateCounter = (newValue) => {
        if (Number.isNaN(newValue)) {
            newValue = 0;
        }

        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className='container col redborder'>
                <div className='input-group my-3'>
                    <input
                        type='number'
                        id='assign'
                        className='form-control'
                        placeholder='Put a number'
                    />
                    <button
                        id='assignbutton'
                        className='input-group-text'
                        onClick={() => {
                            let assignedValue = parseInt(
                                document.getElementById('assign').value,
                                10
                            );

                            updateCounter(assignedValue);
                        }}
                    >
                        Assign
                    </button>
                </div>
                <div className='btn-group'>
                    <button
                        className='btn btn-warning'
                        onClick={() => {
                            setValue(value + 1);
                        }}
                    >
                        Up
                    </button>
                    <button
                        className='btn btn-info'
                        onClick={() => {
                            setValue(value - 1);
                        }}
                    >
                        Down
                    </button>
                </div>
            </div>
            <div className='container col'>
                <div className='redborder my-3'>
                    <h1 className='left'>{value}</h1>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;
