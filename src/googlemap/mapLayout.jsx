
import StoreMap from "./storeMap";
import PropTypes from 'prop-types';

const MapLayout = ({onLocationChange}) => {
    // const [stores, setStores] = useState([]);
    // const [error, setError] = useState(null);

    // const fetchStores = async (location) => {
    //     try {
    //         const response = await fetch(`/api/stores_nearby?lat=${location.lat}&lng=${location.lng}`);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         setStores(data);
    //     } catch (error) {
    //         console.log("Error fetching stores:", error);
    //         setError(error.message);
    //     }
    // };

    // useEffect(() => {
    //     fetchStores({ lat: 6.5244, lng: 3.3792 }); // Replace with actual location data
    // }, []);

    return (
        <>
            <StoreMap onLocationChange={onLocationChange} />
            {/* {error && <p>Error: {error}</p>}
            <ul>
                {stores.map((store, index) => (
                    <li key={index}>{store.name} - {store.address}</li>
                ))}
            </ul> */}
        </>
    );
};

MapLayout.propTypes = {
    onLocationChange: PropTypes.func.isRequired,
};

export default MapLayout;
