// frontend/src/components/PlacesAutocomplete.js


import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import PropTypes from 'prop-types';

const PlacesAutocomplete = ({ onSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onSelect({ lat, lng }); // Ensure onSelect passes the correct data
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={ready}
        placeholder="Search an address"
        className="search-input"
      />
      <ComboboxPopover>
        {status === "OK" && (
          <ComboboxList>
            {data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
          </ComboboxList>
        )}
      </ComboboxPopover>
    </Combobox>
  );
};


PlacesAutocomplete.propTypes = {
    onSelect: PropTypes.func.isRequired,
  };




export default PlacesAutocomplete;
