''' 

Consume api de openweathermap para conseguir 
datos sobre el clima dado una latitud y longitud especificada

'''

import json
import requests
import urllib
from urllib.parse import quote, urlencode
from pprint import pprint
from dotenv import load_dotenv
from os import getenv

load_dotenv()

def get_weather(lugar=None):
	api_token = getenv("WEATHER_KEY")

	if lugar:

		api_token = getenv("WEATHER_KEY")
		api_url_base = 'https://api.openweathermap.org/data/2.5/weather?'

		lat = {'lat': lugar["location"]["lat"]}
		lat = urlencode(lat)
		lng = {'lon': lugar["location"]["lng"]}
		lng = urlencode(lng)
		key = {'appid': api_token}
		key = urlencode(key)

		api_url_base += lat + '&' + lng + '&' + 'units=metric' + '&' + key 
		response = requests.get(api_url_base)

		if response:

			json_response = json.loads(response.content.decode('utf-8'))
			humidity = json_response['main']['humidity']
			pressure = json_response['main']['pressure']
			temp_act = json_response['main']['temp']
			temp_max = json_response['main']['temp_max']
			temp_min = json_response['main']['temp_min']
			description_weather = json_response['weather'][0]['description']
			wind = json_response['wind']

			data = {
				"main": {
					"humidity": humidity,
					"pressure": pressure,
					"temp": temp_act,
					"temp_max": temp_max,
					"temp_min": temp_min,
				},
				"weather": description_weather,
				"wind": wind,

			}
			pprint(data)

			return json.dumps(data)

		else:

			data = {
				"ok": False,
				"status": 404,
				"error":{
					"message": 'Error',
				}
			}
			return json.dumps(data)

	else:
		
		data = {
			"ok": False,
			"status": 204,
			"error":{
				"message": 'Address not specified',
			}
		}
		return json.dumps(data)



''' 

https://openweathermap.org/current apartado "units format" las unidades estan en sistema metrico

'''