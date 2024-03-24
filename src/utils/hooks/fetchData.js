import { apiUrl } from './useFetch';

// async function fetchData(endpoint) {
//   try {
//     let rep = await fetch(apiUrl + endpoint);
//     let reponse = await rep.json();

//     console.log('fetchData : ' + JSON.stringify(reponse.data));
//     return await reponse;
//   } catch (err) {
//     console.error('error');
//   }
// }

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
