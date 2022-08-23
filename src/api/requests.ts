const BASE_URL = 'https://bloggy-api.herokuapp.com/';

export const GetFromServer = async (specify:string) => {
  const result = await fetch(`${BASE_URL}${specify}`);

  return result.json();
};
