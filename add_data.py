import json
import requests

data = open('data.json', 'r')
data = data.read()
data = json.loads(data)

for d in data:
	requests.post("http://www.comunitree.tk:8080/arbol/agregar/", data=d)
