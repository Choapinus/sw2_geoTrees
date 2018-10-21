from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Tree, Root
from .serializers import TreeSerializer, RootSerializer
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

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

def get_tree(request, tree_id=None):
	if tree_id:
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
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			trees = Tree.objects.all()[skip-1:to+1]
			serializer = TreeSerializer(trees, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# roots
def list_root(request):
	if request.method == 'GET':
		roots = Root.objects.filter(active=True)
		serializer = RootSerializer(roots, many=True)
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

def get_root(request, root_id=None):
	if root_id:
		try:
			root = Root.objects.get(pk=root_id)
			serializer = RootSerializer(root)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Root.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no root with id {}'.format(root_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			roots = Root.objects.all()[skip-1:to+1]
			serializer = RootSerializer(roots, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# trunks
def list_trunk(request):
	if request.method == 'GET':
		trunk = Trunk.objects.filter(active=True)
		serializer = RootSerializer(trunk, many=True)
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

def get_trunk(request, trunk_id=None):
	if trunk_id:
		try:
			trunk = Trunk.objects.get(pk=trunk_id)
			serializer = TrunkSerializer(trunk)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Trunk.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no trunk with id {}'.format(trunk_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			trunks = Trunk.objects.all()[skip-1:to+1]
			serializer = TrunkSerializer(trunks, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# leaf
def list_leaf(request):
	if request.method == 'GET':
		leaf = Leaf.objects.filter(active=True)
		serializer = LeafSerializer(leaf, many=True)
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

def get_leaf(request, leaf_id=None):
	if leaf_id:
		try:
			leaf = Leaf.objects.get(pk=leaf_id)
			serializer = LeafSerializer(leaf)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Leaf.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no leaf with id {}'.format(leaf_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			leafs = Leaf.objects.all()[skip-1:to+1]
			serializer = LeafSerializer(leafs, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# branch
def list_branch(request):
	if request.method == 'GET':
		branch = Branch.objects.filter(active=True)
		serializer = BranchSerializer(branch, many=True)
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

def get_branch(request, branch_id=None):
	if branch_id:
		try:
			branch = Branch.objects.get(pk=branch_id)
			serializer = BranchSerializer(branch)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Branch.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no branch with id {}'.format(branch_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			branches = Branch.objects.all()[skip-1:to+1]
			serializer = BranchSerializer(branches, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)

# flower
def list_flower(request):
	if request.method == 'GET':
		flower = flower.objects.filter(active=True)
		serializer = FlowerSerializer(flower, many=True)
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

def get_flower(request, flower_id=None):
	if flower_id:
		try:
			flower = Flower.objects.get(pk=flower_id)
			serializer = BranchSerializer(flower)
			data = {
				'ok': True,
				'data': serializer.data
			}
			return JSONResponse(data)

		except Flower.DoesNotExist:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no flower with id {}'.format(flower_id),
				}
			}
			return JsonResponse(response)
	else:
		skip = request.GET.get('desde', None)
		to = request.GET.get('hasta', None)
		if skip and to:
			skip, to = int(skip), int(to)
			flowers = Flower.objects.all()[skip-1:to+1]
			serializer = FlowerSerializer(flowers, many=True)
			data = {
				'ok': True,
				'data': serializer.data,
			}
			return JSONResponse(data)
		else:
			response = {
				'ok': False,
				'status': 204,
				'error': {
					'message': 'There is no limits specified',
				}
			}
			return JsonResponse(response)



@csrf_exempt
def add_tree(request):
	if request.method == 'POST':
		data = {
			'ok': True,
			'message': 'not implemented :P'
		}
		return JSONResponse(data)
	else:
		response = {
			'ok': False,
			'status': 204,
			'error': {
				'message': 'There is no limits specified',
			}
		}
		return JsonResponse(response)




def index(request):
	return HttpResponse('index')