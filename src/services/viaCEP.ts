import axios from 'axios'

const BASE_URL = 'https://viacep.com.br/ws/'

interface AddressTypeViaCep {
  cep: string
  logradouro: string
  localidade: string
}

export default {
  getCEP: async (cep: string) => {
    const req = await axios.get<AddressTypeViaCep>(`${BASE_URL}/${cep}/json`)
    return req.data
  }
}
