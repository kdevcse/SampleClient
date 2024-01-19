import { base_url } from "./base-api";

export async function get_user(user_id) {
  const response = await fetch(`${base_url}/User/${user_id}`, 
  { 
    method: 'GET'
  });
  return await response.json();
}

export async function create_user(user_info) {
  const response = await fetch(`${base_url}/User`, 
  { 
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user_info)
  });
  return await response.json();
}

export async function update_user(user_info) {
  const response = await fetch(`${base_url}/User`, 
  { 
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user_info)
  });
  return await response.json();
}

export async function delete_user(user_id) {
  const response = await fetch(`${base_url}/User/${user_id}`, 
  {
    method: 'DELETE'
  });
  return await response.json();
}