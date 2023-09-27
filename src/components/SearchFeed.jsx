
import { useState, useEffect } from "react"
import {Box,  Typography} from '@mui/material'
import{useParams} from 'react-router-dom'
import { Videos} from "./"
import { fetchFromAPI } from "../utils/fetchFromApi"



const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  return (
  

    <Box p={2} sx={{overflowY: 'auto', flex:2 , height: "90vh"}}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{color :"white"}}>
        Search Result for :
        <span style={{color : '#f31503'}}>{searchTerm}</span>video
      </Typography>
      <Videos videos= {videos}/>
    </Box>

  )
}

export default SearchFeed