from django.urls import path
from .views import *

urlpatterns = [
    path('usuarios', listar_usuarios),
    path('users', UsuarioView.as_view()),
    path('usuario/<int:pk>', UsuarioDetailView.as_view()),

    path('imoveis', listar_imoveis),
    path('property', ImovelView.as_view()),
    path('imovel/<int:pk>', ImovelDetailView.as_view()),

    path('contratos', listar_contratos),
    path('contracts', ContratoView.as_view()),
    path('contrato/<int:pk>', ContratoDetailView.as_view()),
    
    path('pagamentos', listar_pagamentos),
    path('payment', PagamentoView.as_view()),
    path('pagamento/<int:pk>', PagamentoDetailView.as_view())
]