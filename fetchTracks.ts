import { SavedTrack } from 'spotify-types';




const apiToken = 'BQBFt7WiPftpY1BU6vk4izGcS_093aqwQEptAH420R9SYCS98lxJ5ImcC35ZdjuoYv_ivSijhcrmxARvmuPucDbiHvTF5wDNcTbRDicdU40CpIFeeOHDrLGto2waYLHo4jdSR0kR8WYj8F8LIqpACrVOomXEcZ6OSLH3ttzWjCHI5J6iCC-33dp-F7qdBkE';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};