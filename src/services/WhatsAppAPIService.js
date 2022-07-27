import axios from "axios";

const APIURL = "http://localhost:3000/contato"

export async function getContacts() {
  const response = await axios.get(APIURL)
  return response.data
}
