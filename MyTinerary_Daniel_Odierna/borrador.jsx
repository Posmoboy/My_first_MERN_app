import { useState } from 'react';
import '../SearchBar/searchbar.css';



function SearchBar() {

    const [search, setSearch] = useState("");

    const CitiesList = () => [
        {
            id: 1,
            img: " imagen_bangkok.jpg	",
            name: "Bangkok",
            country: "Thailand",
            population: "Approx. 8.280.925",
            currency: "Baht",
            tourist_spots: "Temple of the Dawn, Grand Palace, Damnoen Saduak Floating Market",
        },
        {
            id: 2,
            img: "Paris: imagen_paris.jpg	",
            name: "París",
            country: "France",
            population: "Approx. 2.148.271",
            currency: "Euro",
            tourist_spots: "Eiffel Tower, Louvre Museum, Notre Dame Cathedral",
        },
        {
            id: 3,
            img: "London: imagen_londres.jpg	",
            name: "London",
            country: "UK",
            population: "Approx. 8.982.000",
            currency: "Pound",
            tourist_spots: "Buckingham Palace, Tower of London, British Museum",
        },
        {
            id: 4,
            img: "Dubai: imagen_dubai.jpg	",
            name: "Dubai",
            country: "UAE",
            population: "Approx. 3.137.000",
            currency: "Dirham",
            tourist_spots: "Burj Khalifa, Palm Jumeirah, Dubai Mall",
        },
        {
            id: 5,
            img: "Barcelona: imagen_barcelona.jpg	",
            name: "Barcelona",
            country: "Spain",
            population: "Approx. 1.608.746",
            currency: "Euro",
            tourist_spots: "Sagrada Familia, Park Güell, Las Ramblas",
        },
        {
            id: 6,
            img: "				Singapur: imagen_singapur.jpg	",
            name: "Singapore",
            country: "Singapore",
            population: "Approx. 5.638.676",
            currency: "Singapore dollar",
            tourist_spots: "Marina Bay Sands, Gardens by the Bay, Sri Mariamman Temple",
        },
        {
            id: 7,
            img: "Kuala Lumpur: imagen_kuala_lumpur.jpg	",
            name: "Kuala Lumpur",
            country: "Malaysia",
            population: "Approx. 1.790.000",
            currency: "Ringgit",
            tourist_spots: "Petronas Towers, Batu Caves, Perdana Lake Gardens",
        },
        {
            id: 8,
            img: "Nueva York: imagen_nueva_york.jpg",
            name: "New York",
            country: "USA",
            population: "Approx. 8.336.817",
            currency: "US dollar",
            tourist_spots: "Statue of Liberty, Times Square, Central Park",
        },
        {
            id: 9,
            img: "Estambul: imagen_estambul.jpg	",
            name: "Istanbul",
            country: "Turkey",
            population: "Approx. 15.067.724",
            currency: "Turkish lira",
            tourist_spots: "Blue Mosque, Hagia Sophia, Grand Bazaar",
        },
        {
            id: 10,
            img: "				Buenos Aires: imagen_buenos_aires.jpg	",
            name: "Buenos Aires",
            country: "Argentina",
            population: "Approx. 3.050.728",
            currency: "Argentine peso",
            tourist_spots: "Obelisk, Plaza de Mayo, Caminito",
        },
        {
            id: 11,
            img: "				Río de Janeiro: imagen_rio_de_janeiro.jpg	",
            name: "Río de Janeiro",
            country: "Brazil",
            population: "Approx. 6.747.815",
            currency: "Brazilian real",
            tourist_spots: "Christ the Redeemer, Sugarloaf Mountain, Copacabana Beach",
        },
        {
            id: 12,
            img: "				Los Ángeles: imagen_los_angeles.jpg	",
            name: "Los Ángeles",
            country: "USA",
            population: "Approx. 4.085.014",
            currency: "US dollar",
            tourist_spots: "Hollywood, Walk of Fame, Los Angeles County Museum of Art",
        },
        {
            id: 13,
            img: "				Ciudad de México: imagen_ciudad_de_mexico.jpg	",
            name: "Mexico City",
            country: "Mexico",
            population: "Approx. 8.918.653",
            currency: "Mexican peso",
            tourist_spots: "Zócalo, Palacio de Bellas Artes, Teotihuacán Pyramids",
        },
        {
            id: 14,
            img: "			Ámsterdam: imagen_ámsterdam.jpg	",
            name: "Amsterdam",
            country: "Netherlands",
            population: "Approx. 881.000",
            currency: "Euro",
            tourist_spots: "Van Gogh Museum, Anne Frank House, Red Light District",
        },
        {
            id: 15,
            img: "				Madrid: imagen_madrid.jpg	",
            name: "Madrid",
            country: "Spain",
            population: "Approx. 3.334.730",
            currency: "Euro",
            tourist_spots: "Prado Museum, Royal Palace, Retiro Park",
        }

    ];

    const cities = CitiesList;

    console.log(search);

    const getFilteredCities = (search, cities) => {
        if (!search) {
            return cities;
        }
        return cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()));

    };

    const filteredCities = getFilteredCities(search, cities);


    return (
        <>
            <div className='searchBar_container'>
                <div >
                    <form action="/index.html">
                        <div> <input className="searchBar__input" type="text" placeholder="Search Cities..." name="search" onChange={e => setSearch(e.target.value)} /></div>
                        <div> <button className="searchBar__button" type="submit">
                            <i>Search Cities</i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="seachSvg" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button></div>
                    </form>
                </div>

                <div>
                    {filteredCities.map((element) => (
                        <div key={element.id}>
                            <div key={element.id} class="card col">
                                <img src={element.img} alt={element.name}></img>
                                <div class="card-body">
                                    <h5 class="card-title"><mark key={element.id}>{element.name}</mark></h5>
                                    <p class="card-text h5 "><mark>Country:</mark></p>
                                    <p class="card-text">{element.country}</p>
                                    <p class="card-text h5 "><mark>Population:</mark></p>
                                    <p class="card-text">{element.population}</p>
                                    <p class="card-text h5"><mark>Currency:</mark></p>
                                    <p class="card-text">{element.currency}</p>
                                    <p class="card-text h5"><mark>Tourist Spots:</mark></p>
                                    <p class="card-text">{element.tourist_spots}</p>
                                    <Link to={`/cities/${element.id}`} />
                                </div>
                            </div>
                        </div>


                    )
                    )
                    };
                </div>

            </div>
        </>
    );








};
export default SearchBar;

{filteredCities.map(city => (
                <div key={city.id}>
                    <h2>{city.name}</h2>
                    <p>Country: {city.country}</p>
                    <p>Population: {city.population}</p>
                    <p>Currency: {city.currency}</p>
                    <p>Tourist spots: {city.tourist_spots}</p>
                </div>
            ))}

/***************************************************

            {filteredCities.map(city => (
                
                <div key={city.id}>
                <div key={element.id} class="card col">
                    <img src={city.img} alt={city.name}></img>
                    <div class="card-body">
                        <h5 class="card-title"><mark key={city.id}>{element.name}</mark></h5>
                        <p class="card-text h5 "><mark>Country:</mark></p>
                        <p class="card-text">{city.country}</p>
                        <p class="card-text h5 "><mark>Population:</mark></p>
                        <p class="card-text">{city.population}</p>
                        <p class="card-text h5"><mark>Currency:</mark></p>
                        <p class="card-text">{city.currency}</p>
                        <p class="card-text h5"><mark>Tourist Spots:</mark></p>
                        <p class="card-text">{city.tourist_spots}</p>
                        <Link to={`/cities/${city.id}`} />
                    </div>
                </div>
            </div>
            
            ))}

