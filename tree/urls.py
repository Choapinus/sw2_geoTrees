from django.urls import path
from .views import (index, 
	list_tree, get_tree, add_tree, # tree functions
	get_root, list_root, # root functions
)

urlpatterns = [
    path('', index, name='index'),

    # tree paths
    path('arbol/', get_tree, name='get_tree'),
    path('arbol/<int:tree_id>/', get_tree, name='get_tree'),
    path('arbol/all/', list_tree, name='list_tree'),
    path('arbol/agregar/', add_tree, name='add_tree'),

    # root paths
    path('raiz/', get_root, name='get_root'),
    path('raiz/<int:root_id>/', get_root, name='get_root'),
    path('raiz/all/', list_root, name='list_root'),
]
