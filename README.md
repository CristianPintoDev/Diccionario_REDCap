# REDCap Data Dictionary Viewer

Herramienta para extraer y visualizar el diccionario de datos de REDCap en una interfaz web simple.

---

## 🚀 Funcionalidades

* Extracción de metadata desde la API de REDCap
* Generación automática de archivo JSON
* Visualización en tabla con búsqueda en tiempo real
* Agrupación por formularios

---

## 🛠️ Tecnologías

* Python (requests, dotenv)
* JavaScript
* HTML / CSS

---

## 📁 Estructura

```
project/
│
├── obtener_metadata.py   # Extracción desde REDCap API
├── requirements.txt
├── .env                  # Variables sensibles
│
├── web/
│   ├── index.html        # Interfaz web
│   ├── diccionario.js    # Renderizado y lógica
│   └── diccionario.json  # Datos generados
```

---

## ⚙️ Uso

1. Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Completar credenciales de REDCap

2. Instalar dependencias:

```bash
pip install -r requirements.txt
```

3. Ejecutar:

```bash
python obtener_metadata.py
```

4. Abrir:

```
web/index.html
```

---

## 🔐 Notas

* El JSON se genera automáticamente desde la API

---

## 👨‍💻 Autor

Cristian Pinto Estay

## License

This project is licensed under the MIT License.