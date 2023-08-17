import React from 'react'
import { Navigate, useParams } from 'react-router'
import { getHeroById } from '../helpers';

export const Hero = () => {
    const { id, ...rest } = useParams();

    const hero = getHeroById(id);
    console.log(hero);


    if (!hero) return (<Navigate to={'./marvel'}> </Navigate>)

    return (
        <>
            <h1>{hero.superhero} </h1>
        </>

    )
}
