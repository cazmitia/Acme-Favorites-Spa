import React from 'react'

const Users = ({users}) => {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                    <ul>
                        {user.favorites.map(favorite => (
                            <li key={favorite.id}>{favorite.thing.name} (ranked: {favorite.rank})</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Users
