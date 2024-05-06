// import React from 'react';
import Filter from '../Filter/Filter';
import Title from "../Title/Title";
import MapToggle from '../MapToggle/MapToggle';
import "./MapController.css"

const MapController = ({ isUS, handleSetIsUS, filterOption, handleSetFilterOption, comparing }) => {
    return (
        <div id="map_controller">
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                comparing={comparing}
            />
            <Title isUS={isUS}/>
            <Filter filterOption={filterOption} handleSetFilterOption={handleSetFilterOption} />
        </div>
    )
}

export default MapController;