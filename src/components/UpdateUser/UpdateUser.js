import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:4000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));

    }, []);

    // update user

    const handleNameChange = e => {
        const updateName = e.target.value;
        const updatedUser = { name: updateName, email: user.email }
        setUser(updatedUser);
    }
    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { email: updatedEmail, name: user.name }
        setUser(updatedUser);

        // or

        // const updatedUser = { ...user };
        // updatedUser.email = updatedEmail
    }

    const handleUpdateUser = e => {
        const url = `http://localhost:4000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully');
                    setUser({});
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2>update:{user.name}</h2>
            <h4>user id:{id}</h4>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name} placeholder="name" />
                <input type="email"

                    placeholder="email" onChange={handleEmailChange}
                    value={user.email} />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UpdateUser;