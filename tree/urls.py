from django.urls import path
from .views import index, list_tree, get_tree

urlpatterns = [
    path('', index, name='index'),
    path('arbol/<int:tree_id>/', get_tree, name='get_tree'),
    path('arbol/all/', list_tree, name='list_tree'),
]
