import {NextApiRequest, NextApiResponse} from "next";
import axios from 'axios'

const data = {
  price: [],
  volume: [],
  tps: [],
  transactions: []
};
const apiKey = 'bf3f0e65-ee49-4276-8f9e-aef85e96402d';
const apiUrl = 'https://sandbox-api.coinmarketcap.com/v1'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {data} = await axios.get(`${apiUrl}/cryptocurrency/listings/latest`, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });
    res.status(200).json(data)

  } catch (ex) {
    // error
    console.log(ex);
  }
}