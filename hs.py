import numpy as np
import pandas as pd

def calcular_consumo_anual(consumo_base, variabilidad, estacionalidad):
    meses = np.arange(1, 13)
    consumo_mensual = consumo_base + variabilidad * np.random.randn(12)
    consumo_mensual *= estacionalidad
    consumo_anual = np.sum(consumo_mensual)
    return consumo_anual, consumo_mensual

def calcular_consumo_periodo(consumo_base, variabilidad, estacionalidad, inicio, fin):
    meses = np.arange(inicio, fin + 1)
    consumo_mensual = consumo_base + variabilidad * np.random.randn(len(meses))
    consumo_mensual *= estacionalidad[inicio-1:fin]
    consumo_periodo = np.sum(consumo_mensual)
    return consumo_periodo, consumo_mensual

def calcular_consumo_futuro(consumo_base, variabilidad, estacionalidad, años):
    consumos_anuales = []
    for _ in range(años):
        consumo_anual, _ = calcular_consumo_anual(consumo_base, variabilidad, estacionalidad)
        consumos_anuales.append(float(consumo_anual))  # Convertir a tipo de dato nativo de Python
    return consumos_anuales

# Parámetros de ejemplo
consumo_base_electricidad = 100  
variabilidad_electricidad = 20  
estacionalidad_electricidad = np.array([1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1])

consumo_base_agua = 4000  
variabilidad_agua = 500  
estacionalidad_agua = np.array([0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9])

consumo_base_oficina = 300  
variabilidad_oficina = 50  
estacionalidad_oficina = np.array([1.0] * 12)  # Sin estacionalidad

consumo_base_limpieza = 200  
variabilidad_limpieza = 30  
estacionalidad_limpieza = np.array([1.0] * 12)  # Sin estacionalidad

# Cálculos
consumo_anual_electricidad, consumo_mensual_electricidad = calcular_consumo_anual(consumo_base_electricidad, variabilidad_electricidad, estacionalidad_electricidad)
consumo_periodo_electricidad, _ = calcular_consumo_periodo(consumo_base_electricidad, variabilidad_electricidad, estacionalidad_electricidad, 9, 6)

consumo_anual_agua, consumo_mensual_agua = calcular_consumo_anual(consumo_base_agua, variabilidad_agua, estacionalidad_agua)
consumo_periodo_agua, _ = calcular_consumo_periodo(consumo_base_agua, variabilidad_agua, estacionalidad_agua, 9, 6)

consumo_anual_oficina, consumo_mensual_oficina = calcular_consumo_anual(consumo_base_oficina, variabilidad_oficina, estacionalidad_oficina)
consumo_periodo_oficina, _ = calcular_consumo_periodo(consumo_base_oficina, variabilidad_oficina, estacionalidad_oficina, 9, 6)

consumo_anual_limpieza, consumo_mensual_limpieza = calcular_consumo_anual(consumo_base_limpieza, variabilidad_limpieza, estacionalidad_limpieza)
consumo_periodo_limpieza, _ = calcular_consumo_periodo(consumo_base_limpieza, variabilidad_limpieza, estacionalidad_limpieza, 9, 6)

consumo_futuro_electricidad = calcular_consumo_futuro(consumo_base_electricidad, variabilidad_electricidad, estacionalidad_electricidad, 5)
consumo_futuro_agua = calcular_consumo_futuro(consumo_base_agua, variabilidad_agua, estacionalidad_agua, 5)
consumo_futuro_oficina = calcular_consumo_futuro(consumo_base_oficina, variabilidad_oficina, estacionalidad_oficina, 5)
consumo_futuro_limpieza = calcular_consumo_futuro(consumo_base_limpieza, variabilidad_limpieza, estacionalidad_limpieza, 5)

# Resultados
print(f"Consumo eléctrico anual: {consumo_anual_electricidad:.2f} kWh")
print(f"Consumo eléctrico de septiembre a junio: {consumo_periodo_electricidad:.2f} kWh")
print(f"Consumo de agua anual: {consumo_anual_agua:.2f} litros")
print(f"Consumo de agua de septiembre a junio: {consumo_periodo_agua:.2f} litros")
print(f"Consumo de oficina anual: {consumo_anual_oficina:.2f} unidades")
print(f"Consumo de oficina de septiembre a junio: {consumo_periodo_oficina:.2f} unidades")
print(f"Consumo de limpieza anual: {consumo_anual_limpieza:.2f} unidades")
print(f"Consumo de limpieza de septiembre a junio: {consumo_periodo_limpieza:.2f} unidades")
print(f"Consumo eléctrico futuro (5 años): {consumo_futuro_electricidad}")
print(f"Consumo de agua futuro (5 años): {consumo_futuro_agua}")
print(f"Consumo de oficina futuro (5 años): {consumo_futuro_oficina}")
print(f"Consumo de limpieza futuro (5 años): {consumo_futuro_limpieza}")


print("\nRecomendaciones para Reducir el Consumo:")
print("Para reducir el consumo eléctrico, considera usar bombillas LED y desconectar dispositivos cuando no estén en uso.")
print("Para reducir el consumo de agua, repara fugas y utiliza dispositivos de ahorro de agua.")
print("Para reducir el consumo de oficina, imprime solo lo necesario y reutiliza papel siempre que sea posible.")
print("Para reducir el consumo de productos de limpieza, utiliza productos concentrados y en cantidades adecuadas.")