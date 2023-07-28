
const clientId='9cb95fa3f27a439bb811ee1123af24bd';
const clientSecret= 'fda7ebe84ea2423388077331a8a71fa5';

export async function getToken(api) {
  const response = await fetch(api, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  if (!response.ok){
    throw new Error('Error: ' + response.status);
  }
  return response.json(); // parses JSON response into native JavaScript objects
};

async function getTracks(){

  const accessTokenData= await getToken(api);
  const accessToken = accessTokenData.access_token;

  let endpoint='https://api.spotify.com/v1/tracks?market=US&ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';
  const response= await fetch (endpoint, {
    method:"GET",
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  })
  if (!response.ok){
    throw new Error('Error: ' + response.status);
  }
  return response.json();
};

export async function searchData(searchValue, accessToken){
  let endpoint= `https://api.spotify.com/v1/search?q=${searchValue}&type=track%2Cartist%2Calbum&market=US&limit=15&include_external=audio`;
  const response= await fetch(endpoint, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  })
  if (!response.ok){
    throw new Error('Error: ' + response.status);
  }
  return response.json();
  }
  /*
  --url 'https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track%2Cartist%2Calbum&market=US&limit=15&include_external=audio' \
 
  TODO: q= needs to redirects to search value in search box */



 /* getTracks(api)
  .then(data => console.log(data))
  .catch(error=> {
    console.error(error);
  }); */
 