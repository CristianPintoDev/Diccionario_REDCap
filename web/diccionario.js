// Cargar JSON
fetch("diccionario.json")
    .then(response => response.json())
    .then(data => mostrarDiccionario(data));

// Renderizar tabla
function mostrarDiccionario(diccionario) {
    const tbody = document.querySelector("#tablaDiccionario tbody");
    const buscador = document.getElementById("buscador");

    // Ordenar por formulario y luego por nombre de variable
    diccionario.sort((a, b) => {
        if (a.form_name < b.form_name) return -1;
        if (a.form_name > b.form_name) return 1;
        return a.field_name.localeCompare(b.field_name);
    });

    function render(filtro = "") {
        tbody.innerHTML = "";
        let ultimoFormulario = "";

        diccionario
            .filter(item =>
                item.field_name.toLowerCase().includes(filtro) ||
                item.form_name.toLowerCase().includes(filtro) ||
                limpiarHTML(item.field_label).toLowerCase().includes(filtro)
            )
            .forEach(v => {
                // Si cambia el formulario: insertar cabecera
                if (v.form_name !== ultimoFormulario) {
                    ultimoFormulario = v.form_name;
                    const headerRow = document.createElement("tr");
                    headerRow.style.backgroundColor = "#e0e0e0";
                    headerRow.style.fontWeight = "bold";

                    headerRow.innerHTML = `
                        <td colspan="5" style="padding:10px; font-size:16px;">
                            📌 ${ultimoFormulario}
                        </td>
                    `;

                    tbody.appendChild(headerRow);
                }

                // Insertar fila normal
                const fila = document.createElement("tr");

                fila.innerHTML = `
                    <td>${v.field_name}</td>
                    <td>${v.form_name}</td>
                    <td>${v.field_type}</td>
                    <td>${limpiarHTML(v.field_label)}</td>
                    <td>${formatearOpciones(v.select_choices_or_calculations)}</td>
                `;

                tbody.appendChild(fila);
            });
    }

    buscador.addEventListener("input", () => {
        render(buscador.value.toLowerCase());
    });

    render();
}


// Quitar HTML y etiquetas <p> o <span>
function limpiarHTML(texto) {
    if (!texto) return "";
    const div = document.createElement("div");
    div.innerHTML = texto;
    return div.textContent || div.innerText || "";
}

// Formatear "1, si | 2, no | 3, NS/NR" a lista legible, en caso de mas de 10 opciones muestra "N opciones más"
function formatearOpciones(cadena) {
    if (!cadena) return "";

    // Convertir la cadena en lista de opciones limpias
    const opciones = cadena
        .split("|")
        .map(op => op.trim())
        .map(op => {
            const [valor, texto] = op.split(",").map(x => x.trim());
            return `<strong>${valor}</strong>: ${texto}`;
        });

    // Si hay más de 10 opciones, cortar y agregar mensaje
    if (opciones.length > 10) {
        const restantes = opciones.length - 10;
        return (
            opciones.slice(0, 10).join("<br>") +
            `<br><strong>... ${restantes} opciones más</strong>`
        );
    }

    return opciones.join("<br>");
}

