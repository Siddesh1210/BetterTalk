function userLocation()
{

let searchCity=document.getElementById("search-city").value;

const API_KEY = 'V43HQ5YO6LJUVIA7EQ';
const LOCATION = searchCity;

const apiUrl = `https://www.eventbriteapi.com/v3/events/search/?location.address=${LOCATION}&location.within=10km&sort_by=date&token=${API_KEY}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

}

function fetchApi()
{
const API_KEY = 'V43HQ5YO6LJUVIA7EQ'; 
const latitude = 'YUHS980KKSN'; 
const longitude = 'DKS0OM4GSQS';


const apiUrl = `https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&sig_id=YOUR_SIG_ID&lon=${longitude}&lat=${latitude}&sig=YOUR_SIG`;


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching events:', error);
  });

}