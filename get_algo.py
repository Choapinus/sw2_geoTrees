import json
import requests
import urllib
from urllib.parse import quote, urlencode
from pprint import pprint
from dotenv import load_dotenv
from os import getenv


load_dotenv()

#api_token = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'


def get_location(lugar=None):
	api_token = getenv("API_KEY")
	api_url_base = 'https://maps.googleapis.com/maps/api/geocode/json?'

	if lugar:
		lugar = {'address': lugar}
		address = urlencode(lugar)
		key = {'key': api_token}
		key = urlencode(key)
		api_url_base += address + '&' + key
		response = requests.get(api_url_base)

		if response:
			json_response = json.loads(response.content.decode('utf-8'))
			latitud = json_response["results"][0]["geometry"]["location"]["lat"]
			longitud = json_response["results"][0]["geometry"]["location"]["lng"]
			data = {
				"address": json_response["results"][0]["formatted_address"],
				"location": {
					"lat": latitud,
					"lng": longitud,
				}
			}
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

#print(api_token)
#lugar = input()
#lugar = "antonio varas, providencia"

get_location(lugar)
