import requests
import json
from dotenv import load_dotenv
import os

# Cargar credenciales del .env
load_dotenv()

API_URL = os.getenv("REDCAP_URL")
API_TOKEN = os.getenv("REDCAP_TOKEN")

if not API_URL or not API_TOKEN:
    raise ValueError("Faltan variables REDCAP_URL o REDCAP_TOKEN en .env")

def obtener_diccionario():
    data = {
        "token": API_TOKEN,
        "content": "metadata",
        "format": "json"
    }

    response = requests.post(API_URL, data=data)

    if response.status_code != 200:
        raise Exception(f"Error al obtener metadata: {response.status_code}\n{response.text}")

    return response.json()

if __name__ == "__main__":
    metadata = obtener_diccionario()

    # Mostrar en pantalla (opcional)
    print(json.dumps(metadata, indent=2, ensure_ascii=False))

    # 🔹 Guardar en un archivo JSON (el punto 6)
    with open("web/diccionario.json", "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)

    print("\nArchivo diccionario.json generado exitosamente.")