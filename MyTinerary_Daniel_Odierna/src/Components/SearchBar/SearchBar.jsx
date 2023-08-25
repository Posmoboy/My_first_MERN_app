import { useState, useEffect } from 'react';
import '../SearchBar/searchbar.css';
const CitiesList = [
    {
        id: 1,
        img: '\Cities Images\bangkok.jpg',
        name: "Bangkok",
        country: "Thailand",
        population: "Approx. 8.280.925",
        currency: "Baht",
        tourist_spots: "Temple of the Dawn, Grand Palace, Damnoen Saduak Floating Market",
    },
    {
        id: 2,
        img: "\Cities Images\paris.jpg",
        name: "París",
        country: "France",
        population: "Approx. 2.148.271",
        currency: "Euro",
        tourist_spots: "Eiffel Tower, Louvre Museum, Notre Dame Cathedral",
    },
    {
        id: 3,
        img: "\Cities Images\london.jpg",
        name: "London",
        country: "UK",
        population: "Approx. 8.982.000",
        currency: "Pound",
        tourist_spots: "Buckingham Palace, Tower of London, British Museum",
    },
    {
        id: 4,
        img: "\Cities Images\dubai.jpg",
        name: "Dubai",
        country: "UAE",
        population: "Approx. 3.137.000",
        currency: "Dirham",
        tourist_spots: "Burj Khalifa, Palm Jumeirah, Dubai Mall",
    },
    {
        id: 5,
        img: "\Cities Images\barcelona.jpg",
        name: "Barcelona",
        country: "Spain",
        population: "Approx. 1.608.746",
        currency: "Euro",
        tourist_spots: "Sagrada Familia, Park Güell, Las Ramblas",
    },
    {
        id: 6,
        img: "\Cities Images\singapore.jpg",
        name: "Singapore",
        country: "Singapore",
        population: "Approx. 5.638.676",
        currency: "Singapore dollar",
        tourist_spots: "Marina Bay Sands, Gardens by the Bay, Sri Mariamman Temple",
    },
    {
        id: 7,
        img: "\Cities Images\kuala-lumpur.jpg",
        name: "Kuala Lumpur",
        country: "Malaysia",
        population: "Approx. 1.790.000",
        currency: "Ringgit",
        tourist_spots: "Petronas Towers, Batu Caves, Perdana Lake Gardens",
    },
    {
        id: 8,
        img: "\Cities Images\newyork.jpg",
        name: "New York",
        country: "USA",
        population: "Approx. 8.336.817",
        currency: "US dollar",
        tourist_spots: "Statue of Liberty, Times Square, Central Park",
    },
    {
        id: 9,
        img: "\Cities Images\Istanbul.jpg",
        name: "Istanbul",
        country: "Turkey",
        population: "Approx. 15.067.724",
        currency: "Turkish lira",
        tourist_spots: "Blue Mosque, Hagia Sophia, Grand Bazaar",
    },
    {
        id: 10,
        img: "\Cities Images\BuenosAires.jpg",
        name: "Buenos Aires",
        country: "Argentina",
        population: "Approx. 3.050.728",
        currency: "Argentine peso",
        tourist_spots: "Obelisk, Plaza de Mayo, Caminito",
    },
    {
        id: 11,
        img: "\Cities Images\riojaneiro.jpg",
        name: "Río de Janeiro",
        country: "Brazil",
        population: "Approx. 6.747.815",
        currency: "Brazilian real",
        tourist_spots: "Christ the Redeemer, Sugarloaf Mountain, Copacabana Beach",
    },
    {
        id: 12,
        img: "\Cities Images\los_angeles.jpg",
        name: "Los Ángeles",
        country: "USA",
        population: "Approx. 4.085.014",
        currency: "US dollar",
        tourist_spots: "Hollywood, Walk of Fame, Los Angeles County Museum of Art",
    },
    {
        id: 13,
        img: "\Cities Images\mexico_xochimilco.jpg",
        name: "Mexico City",
        country: "Mexico",
        population: "Approx. 8.918.653",
        currency: "Mexican peso",
        tourist_spots: "Zócalo, Palacio de Bellas Artes, Teotihuacán Pyramids",
    },
    {
        id: 14,
        img: "\Cities Images\amsterdam.jpg",
        name: "Amsterdam",
        country: "Netherlands",
        population: "Approx. 881.000",
        currency: "Euro",
        tourist_spots: "Van Gogh Museum, Anne Frank House, Red Light District",
    },
    {
        id: 15,
        img: "\Cities Images\madrid.jpg",
        name: "Madrid",
        country: "Spain",
        population: "Approx. 3.334.730",
        currency: "Euro",
        tourist_spots: "Prado Museum, Royal Palace, Retiro Park",
    }

];

const SearchBar = ({ cities }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [cityDetails, setCityDetails] = useState(null);

    useEffect(() => {
        setResults(CitiesList.filter(city => city.name.toLowerCase().startsWith(searchTerm.toLowerCase())));
    }, [searchTerm]);

    const handleClick = () => {
        setCityDetails(results[0]);
    };

    return (
        <div className='searchBar_container'> 
            <input
                type="text"
                placeholder="Buscar ciudad"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                {results.map(result => (
                    <li key={result.id}>
                         <img src={result.img} alt={result.name} />
                        <a  href="/*" className="searchBar_link_cityDetails" onClick={handleClick}>
                        {result.country}
                           
                        </a>
                    </li>
                ))}
            </ul>
            {results.length === 0 && (
                <p>No se encontraron ciudades que coincidan con tu búsqueda.</p>
            )}
            {cityDetails && (
                <div>
                    <h3>Detalles de la ciudad</h3>
                    <p>Nombre: {cityDetails.name}</p>
                    <p>País: {cityDetails.country}</p>
                    <p>Población: {cityDetails.population}</p>
                    <p>Moneda: {cityDetails.currency}</p>
                    <p>Lugares turísticos: {cityDetails.tourist_spots}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;