import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };


        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user successfully added')
                    e.target.reset();
                    // setUser({});
                }


            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>This is Add User</h2>

            <form onSubmit={handleUser}>
                <input type="text" placeholder="name" ref={nameRef} />
                <input type="email" placeholder="email" ref={emailRef} />
                <input type="submit" value="addUser" />
            </form>
        </div>
    );
};

export default AddUser;