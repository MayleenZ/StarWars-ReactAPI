

export const getAllStarships = async () => {
    try{
    const response = await fetch (
        `https://swapi.dev/api/starships/`
    );
    const data = await response.json()
    return data;
    } catch (error) {
        console.log(error);
    }
}

//This is an AJAX request. The getAllStarships function uses the fetch API to make an AJAX request to the Star Wars API to retrieve starship data (endpoint), and returns the parsed JSON response. This is also contained in a try and catch to handle errors that can occur in async code during AJAX request. 