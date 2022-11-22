import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(["Harry Potter"]);
    
    const onAddCategory = ( newCategory ) => {
        // categories.push("Simpson");

        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [...cat, "Valorant"]);

    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory ={ (value) => onAddCategory(value) }
            />

            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}