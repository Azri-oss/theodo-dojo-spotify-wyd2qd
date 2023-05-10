



const apiToken = 'BQC-ipTcSU3NwPo0LJdWYzxaUmzj-CH5apUrJrdyaDJTEHcKh5WHSUw_zvRqeWXq92hcgCGgoQRIZnqfwHgXSFgi8uwZyDiV-lj5vou_raWGaM_g6HXGlQVjlplP575EH2-Q5UExdn0PcKaoupFZiH9RpW9FIBn70JgyDX1VRblSFAxvKAZBwqUSLkyfINE';

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
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};