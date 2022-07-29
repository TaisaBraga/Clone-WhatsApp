import axios from "axios";

const APIURL = "http://localhost:3000"

export async function getContacts() {
  const response = await axios.get(APIURL+"/contato")
  return response.data
}

export async function getMessage() {
  const response = await axios.get(APIURL+"/mensagem")
  return response.data
}