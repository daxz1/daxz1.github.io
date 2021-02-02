// @ts-nocheck
import React from "react";

interface INav {
    setPage: any;
}

function Nav ({setPage}: INav):JSX.Element {

    const handleOnClick = (e:React.SyntheticEvent<{ dataset: { value: string} }>) => {
        if (e && e.currentTarget && e.currentTarget.dataset !== undefined) {
            setPage(e.currentTarget.dataset.value)
        }
    }

    return (
        <>
            <ul>
                <li onClick={handleOnClick} data-value='planets'>Planets</li>
                <li onClick={handleOnClick} data-value='people'>Peoples</li>
            </ul>
        </>)
}

export default Nav;