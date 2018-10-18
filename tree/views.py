from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Tree
from .serializers import TreeSerializer
from .models import Tree
from django.shortcuts import get_object_or_404

# Create your views here.
class JSONResponse(HttpResponse):
	"""
	An HttpResponse that renders its content into JSON.
	"""
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(JSONResponse, self).__init__(content, **kwargs)

def list_tree(request):
	"""
	List all code tree
	"""
	if request.method == 'GET':
		trees = Tree.objects.filter(active=True)
		serializer = TreeSerializer(trees, many=True)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)
		
	else:
		response = {
			'ok': False,
			'error': {
				'message': 'There is no POST method implemented'
			}
		}
		return JsonResponse(response)

def get_tree(request, tree_id):
	try:
		tree = Tree.objects.get(pk=tree_id)
		serializer = TreeSerializer(tree)
		data = {
			'ok': True,
			'data': serializer.data
		}
		return JSONResponse(data)

	except Tree.DoesNotExist:
		response = {
			'ok': False,
			'status': 204,
			'error': {
				'message': 'There is no tree with id {}'.format(tree_id),
			}
		}
		return JsonResponse(response)


def index(request):
	return HttpResponse('index')