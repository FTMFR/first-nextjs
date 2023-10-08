export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '4224c9c4cfmshf5c9c55d360124cp19ef68jsnf53197c38ba4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;

};