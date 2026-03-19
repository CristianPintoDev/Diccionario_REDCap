# Proyecto: Extracción y Visualización de Libro de Códigos desde REDCap

Este proyecto permite **extraer el diccionario de datos (codebook)** de un proyecto REDCap mediante su API y presentarlo en una página web organizada, con secciones por formulario y detalles de cada variable.

---

## 🚀 Funcionalidades
- Conexión a la API de REDCap utilizando un token seguro.
- Obtención del *Data Dictionary* en formato JSON.
- Procesamiento de opciones largas (`select_choices_or_calculations`) para mostrar solo los primeros 10 elementos.
- Visualización estructurada del libro de códigos en una página web.
- Separación automática por formularios (*form_name*) como encabezados.

---

## 📁 Estructura del Proyecto
```
project/
│
├── src/
│   ├── main.py                # Script que extrae y procesa el codebook
│   ├── loader.py              # Funciones para consumir la API
│   └── utils.py               # Funciones auxiliares
│
├── web/
│   ├── index.html             # Visualización del codebook
│   ├── styles.css             # Estilos
│   └── script.js              # Lógica del frontend
│
├── .env                       # Variables sensibles (TOKEN, URL)
├── .gitignore                # Evita subir datos sensibles
└── README.md                 # Este archivo
```

---

## 🔐 Seguridad del Token y URL
Este proyecto usa variables de entorno para proteger la información crítica.

Ejemplo de archivo `.env`:
```
REDCAP_API_URL=https://tu-redcap.com/api/
REDCAP_API_TOKEN=123ABC...
```

En tu `main.py` puedes acceder a ellas mediante:
```python
import os
from dotenv import load_dotenv

load_dotenv()
API_URL = os.getenv("REDCAP_API_URL")
API_TOKEN = os.getenv("REDCAP_API_TOKEN")
```

---

## 🛠️ Uso
### 1. Instalar dependencias
```bash
pip install python-dotenv requests
```

### 2. Ejecutar extracción
```bash
python src/main.py
```
Esto generará un archivo `codebook.json` listo para usar en la web.

### 3. Abrir la visualización
Solo abre el archivo `web/index.html` en tu navegador.

---

## 🌐 Integración con Git
Este proyecto está listo para ser utilizado en un repositorio Git
