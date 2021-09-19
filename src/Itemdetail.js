import React, {useEffect, useState} from 'react'

function Itemdetail( {match} ) {

    const [item,setItem] = useState();

    useEffect(() => {
        
        const fetchItem2 = async() => {
            const fetchItem1 = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
            const item = await fetchItem1.json();
            setItem(item);
        }

        fetchItem2();
    }, [match.params.id]);

    return (
        item ? (
        <div>
            <h1>{item.data.item.name} </h1>
            <img src={item.data.item.images.icon} alt='' /> 
            <h4>{item.data.item.backpack.description}</h4> 
        </div>
        ) : null
    )
}

export default Itemdetail;
