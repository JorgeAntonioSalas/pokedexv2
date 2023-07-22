import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';

const UserInput = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")

    const navigate = useNavigate();

    const dispatchUserName = ()=> {
        dispatch(changeName(userName, setUserName));
        navigate('/pokedex');
    }

    return (
        <div>
            <h1>Welcome !</h1>
            <h2>Enter your name to start the adventure!</h2>
            <input 
                type="text" 
                value={userName}
                onChange={e=> setUserName(e.target.value)}
            />
            <button onClick={dispatchUserName}>Send</button>
        </div>
    );
};

export default UserInput;