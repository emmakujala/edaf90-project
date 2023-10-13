import { useEffect, useState } from "react";

export default function ShowCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    console.log(cocktails);

    useEffect(() => {

        async function getCocktails() {
            try {
                const response = await fetch(url);
                console.log(response);
                const result = await response.json();
                setCocktails(result.drinks);
                console.log(result);
                return result
            } catch (error) {
                console.error(error);
            }

        }
        getCocktails();
    }, [])
    return (

        <div>
            <ul>
                {cocktails.map(cock => (
                    <li key={cock}>{cock.strCategory}</li>
                ))}
            </ul>
        </div>
    )


}