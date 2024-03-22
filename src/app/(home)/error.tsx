"use client";

import { useEffect } from "react";

interface ErrorProps{
    error: Error;
    resert: () => void;
}

export default function Error({error, resert}: ErrorProps){

    useEffect(() => {
        console.log(error)
    }, [])

    return(
        <div style={{
            padding: '10rem'
        }}>
            <h1>404</h1>
            <p>Ha ocurrido un error</p>

            <button onClick={resert}>Intentar de nuevo</button>
        </div>
    )
}