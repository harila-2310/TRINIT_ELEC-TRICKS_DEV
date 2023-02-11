// https://dog.ceo/api/breeds/image/random

import { Telegraf } from "telegraf";


import Axios from 'axios'


Axios.get('https://dog.ceo/api/breeds/image/random').then(resp => {

    console.log(resp.data);
});
