from django.urls import path, include

from . import views

urlpatterns = [
    path('list/', views.ReportListView.as_view()),
    path('detail/<int:pk>', views.ReportView.as_view()),
    path('create/', views.add_report, name="add_report"),
    path('get-bytree/<int:tree_id>', views.get_report_treeId, name="get_report"),
]