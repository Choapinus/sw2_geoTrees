from django.contrib import admin
from .models import *

# Register your models here.

class RootAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class TrunkAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class LeafAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class BranchAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class FlowerAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class SpecieAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class HabitatAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'description', 'updated', )

class TypeTreeAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	list_display = ('name', 'scientific_name', 'description', 'family', 'clase', 'specie', 'updated', )

class TreeAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()
	# _type = models.ForeignKey(TypeTree, on_delete=models.CASCADE, verbose_name='Tipo de Árbol')
	# description = models.TextField(verbose_name='Descripción')
	# lon = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Longitud')
	# lat = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Latitud')
	# size = models.PositiveSmallIntegerField(verbose_name='Altura en centimetros aproximada')
	# grounded = models.DateTimeField(auto_now_add=False, verbose_name='Fecha de plantación')
	# active = models.BooleanField(default=True, verbose_name='Activo')
	# created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
	# updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')



class BenefictAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class HazardAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class PhotoAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class ActivityAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class StateAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

class WaterAdmin(admin.ModelAdmin):
	readonly_fields = ('created', 'updated')
	# list_display = ()

admin.site.register(Root, RootAdmin)
admin.site.register(Trunk, TrunkAdmin)
admin.site.register(Leaf, LeafAdmin)
admin.site.register(Branch, BranchAdmin)
admin.site.register(Flower, FlowerAdmin)
admin.site.register(Specie, SpecieAdmin)
admin.site.register(Habitat, HabitatAdmin)
admin.site.register(TypeTree, TypeTreeAdmin)
admin.site.register(Tree, TreeAdmin)
admin.site.register(Benefict, BenefictAdmin)
admin.site.register(Hazard, HazardAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(State, StateAdmin)
admin.site.register(Water, WaterAdmin)