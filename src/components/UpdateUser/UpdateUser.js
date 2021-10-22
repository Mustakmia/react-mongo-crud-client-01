import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:4000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));

    }, []);
    return (
        <div>
            <h2>update:{user.name}</h2>
            <h4>user id:{id}</h4>
        </div>
    );
};

export default UpdateUser;