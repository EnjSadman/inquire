import { PostDataType, Comment } from '../react-app-env';

const BASE_URL = 'https://bloggy-api.herokuapp.com/';

export const GetFromServer = async (specify:string) => {
  const result = await fetch(`${BASE_URL}${specify}`);

  return result.json();
};

export const PutOnServer = async (specifyType: string, specifyData: PostDataType | Comment) => {
  const result = await fetch(`${BASE_URL}${specifyType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(specifyData),
  });

  return result.json();
};

export const DeleteFromServer = async (id:number) => {
  const result = await fetch(`${BASE_URL}posts/${id}`, {
    method: 'DELETE',
  });

  return result.json();
};

export const UpdateOnServer = async (specifyData: PostDataType) => {
  const obj = { title: specifyData.title, body: specifyData.body };

  const result = fetch(`${BASE_URL}posts/${specifyData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result;
};
