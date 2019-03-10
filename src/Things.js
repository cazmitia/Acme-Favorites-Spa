import React from 'react'

const Things = ({things}) => {
    return (
        <ul>
            {things.map(thing => (
                <li key={thing.id}>
                    {thing.name}
                    <ul>
                    {thing.favorites.map(favorite => (
                            <li key={favorite.id}>Favorited by: {favorite.user.name}</li>
                        )) }
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Things
