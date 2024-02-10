import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useState } from 'react';
import Contex from '../contextApi/Contex';

const SearchRooms = () => {
  
  return (
    <div className="p-2">
      <div className="m-4 mx-auto p-4 px-20 rounded-xl bg-[#fcf2dd]  w-fit flex flex-col md:flex-row justify-center gap-10 items-center">
        <div>
          <span> </span>
          <h3 className="text-4xl">Discover & Explore </h3>
        </div>
      </div>
    </div>
  );
};

export default SearchRooms;


 function valuetext(value) {
     console.log(value)
    return value;
 }


function GuestsComponenet({ title, option }) {
  const {Guest, setGuest} = useContext(Contex)
  
    const handleChange = event => setGuest(event.target.value) ;
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>{title}</InputLabel>
          <Select value={Guest} label="Guest" onChange={handleChange}>
            {option.map(item => <MenuItem value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    );
}

const RoomComponents = ({ Roomtitle, RoomOption }) =>{
  const {Room, setRoom} = useContext(Contex)
  const handleChange = event => setRoom(event.target.value) ;
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel>{Roomtitle}</InputLabel>
      <Select value={Room} label="Room" onChange={handleChange}>
        {RoomOption.map(item => <MenuItem value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  </Box>
);
}