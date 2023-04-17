import React, { useContext } from 'react';
import { SavatContext } from '../../context/savatContext';
import Card from '../../ui/Card';

function Fovourites() {
    const { likes } = useContext(SavatContext)
    return (
        <>
            <div className="container mx-auto">
                {
                    likes.length > 0 ? likes.map(item => {
                        return <div className='mt-5'><Card key={item} item={item}/></div>
                    }): ""
            }
            </div>
        </>
    );
}

export default Fovourites;