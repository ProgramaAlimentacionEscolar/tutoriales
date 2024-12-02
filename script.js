// Definición de recetas
const recetas = {
    brownie: {
        "Porotos negros crudos": { cantidad: 60, unidad: 'g' },
        "Aceite": { cantidad: 100, unidad: 'cc' },
        "Agua": { cantidad: 150, unidad: 'cc' },
        "Huevo": { cantidad: 1, unidad: 'unidad' },
        "Vainilla": { cantidad: 12, unidad: 'cc' },
        "Avena": { cantidad: 70, unidad: 'g' },
        "Azúcar": { cantidad: 100, unidad: 'g' },
        "Almidón de maíz": { cantidad: 80, unidad: 'g' },
        "Polvo de hornear": { cantidad: 7, unidad: 'g' },
        "Cocoa": { cantidad: 150, unidad: 'g' },
        "Sal": { cantidad: 1, unidad: 'g' }
    },
    budin: {
        "Huevos": { cantidad: 1, unidad: 'unidad' },
        "Harina": { cantidad: 140, unidad: 'g' },
        "Banana": { cantidad: 125, unidad: 'g' },
        "Azúcar": { cantidad: 90, unidad: 'g' },
        "Aceite": { cantidad: 70, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Vainilla": { cantidad: 7.5, unidad: 'cc' }
    },
    faina: {
        "Huevos": { cantidad: 2, unidad: 'unidad' },
        "Harina": { cantidad: 160, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Leche": { cantidad: 120, unidad: 'cc' },
        "Agua": { cantidad: 50, unidad: 'cc' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Zanahoria": { cantidad: 125, unidad: 'g' },
        "Queso rallado": { cantidad: 50, unidad: 'g' },
        "Sal": { cantidad: 3, unidad: 'g' }
    },
    pastaFrola: {
        "Huevos": { cantidad: 1.5, unidad: 'unidad' },
        "Harina": { cantidad: 200, unidad: 'g' },
        "Azúcar": { cantidad: 65, unidad: 'g' },
        "Aceite": { cantidad: 55, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 7.5, unidad: 'g' },
        "Ralladura de limón o naranja": { cantidad: 'c/n', unidad: '' },
        "Dulce de membrillo": { cantidad: 200, unidad: 'g' }
    },
    tortaBasica: {
        "Huevo": { cantidad: 2, unidad: 'unidad' },
        "Azúcar": { cantidad: 125, unidad: 'g' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Harina": { cantidad: 220, unidad: 'g' },
        "Polvo de hornear": { cantidad: 5, unidad: 'g' },
        "Leche": { cantidad: 160, unidad: 'cc' },
        "Vainilla": { cantidad: 3, unidad: 'cc' },
        "Variantes": {
            "Manzana, pera, durazno, ciruela": { cantidad: 300, unidad: 'g' },
            "Zanahoria": { cantidad: 150, unidad: 'g' },
            "Ralladura de limón": { cantidad: 1, unidad: 'unidad' },
            "Coco": { cantidad: 50, unidad: 'g' },
            "Cacao": { cantidad: 25, unidad: 'g' }
        }
    },
    tortaCalabaza: {
        "Huevos": { cantidad: 1, unidad: 'unidad' },
        "Aceite": { cantidad: 100, unidad: 'cc' },
        "Azúcar": { cantidad: 110, unidad: 'g' },
        "Calabaza": { cantidad: 200, unidad: 'g' },
        "Harina": { cantidad: 180, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Canela": { cantidad: 5, unidad: 'g' }
    },
    tortaNaranja: {
        "Naranja con cáscara": { cantidad: 150, unidad: 'g' },
        "Harina": { cantidad: 160, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Huevo": { cantidad: 3, unidad: 'unidad' },
        "Aceite": { cantidad: 110, unidad: 'cc' },
        "Azúcar": { cantidad: 125, unidad: 'g' }
    },
    panCasero: {
        "Harina": { cantidad: 300, unidad: 'g' },
        "Levadura seca": { cantidad: 5, unidad: 'g' },
        "Azúcar": { cantidad: 5, unidad: 'g' },
        "Aceite": { cantidad: 10, unidad: 'cc' },
        "Agua tibia": { cantidad: 200, unidad: 'cc' },
        "Sal": { cantidad: 2.5, unidad: 'g' },
        "Variantes": {
            "Queso": { cantidad: 50, unidad: 'g' },
            "Hierbas aromáticas": { cantidad: 5, unidad: 'g' },
            "Remolacha": { cantidad: 1, unidad: 'unidad' },
            "Espinaca": { cantidad: 22, unidad: 'g' },
            "Morrón": { cantidad: 45, unidad: 'g' },
            "Salvado de trigo": { cantidad: 100, unidad: 'g' }
        }
    },
    panCalabaza: {
        "Harina": { cantidad: 300, unidad: 'g' },
        "Leche": { cantidad: 150, unidad: 'cc' },
        "Calabaza": { cantidad: 80, unidad: 'g' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Huevo": { cantidad: 1, unidad: 'unidad' },
        "Polvo de hornear": { cantidad: 25, unidad: 'g' },
        "Sal": { cantidad: 2.5, unidad: 'g' }
    },
    sconesQueso: {
        "Harina": { cantidad: 360, unidad: 'g' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Leche": { cantidad: 175, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 15, unidad: 'g' },
        "Sal": { cantidad: 3.5, unidad: 'g' },
        "Queso rallado": { cantidad: 40, unidad: 'g' },
        "Variantes": {
            "Espinaca o rúcula fresca": { cantidad: 150, unidad: 'g' },
            "Espinaca o rúcula congelada": { cantidad: 75, unidad: 'g' },
            "Hierbas aromáticas secas": { cantidad: 2.5, unidad: 'g' },
            "Hierbas aromáticas frescas": { cantidad: 10, unidad: 'g' }
        }
    },
    sconesDulces: {
        "Harina": { cantidad: 225, unidad: 'g' },
        "Azúcar": { cantidad: 75, unidad: 'g' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Sal": { cantidad: 1.25, unidad: 'g' },
        "Leche": { cantidad: 110, unidad: 'cc' },
        "Vainilla": { cantidad: 10, unidad: 'cc' }
    },
    hummus: {
        "Garbanzos": { cantidad: 140, unidad: 'g' },
        "Jugo de limón": { cantidad: 2.5, unidad: 'cc' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Sal": { cantidad: 1, unidad: 'g' },
        "Agua de cocción": { cantidad: "c/n", unidad: 'cc' }
    },
    untableRicota: {
        "Ricota": { cantidad: 170, unidad: 'g' },
        "Aceite": { cantidad: 30, unidad: 'cc' },
        "Sal": { cantidad: 1, unidad: 'g' },
        "Opcional": {
            "Hierbas": { cantidad: "c/n", unidad: 'g' }
        }
    },
    untableZanahoria: {
        "Zanahoria": { cantidad: 150, unidad: 'g' },
        "Jugo de limón": { cantidad: 2.5, unidad: 'cc' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Sal": { cantidad: 1, unidad: 'g' },
        "Agua de cocción": { cantidad: "c/n", unidad: 'cc' },
        "Opcional": {
            "Jengibre fresco": { cantidad: 1, unidad: 'g' }
        }
    },
        galletasAvenaPasas: {
            "Huevos": { cantidad: 2, unidad: 'unid.' },
            "Harina": { cantidad: 160, unidad: 'g' },
            "Avena": { cantidad: 100, unidad: 'g' },
            "Azúcar": { cantidad: 100, unidad: 'g' },
            "Pasas de uva": { cantidad: 50, unidad: 'g' },
            "Aceite": { cantidad: 60, unidad: 'g' },
            "Polvo de hornear": { cantidad: 5, unidad: 'g' },
            "Vainilla": { cantidad: 3, unidad: 'cc' },
            "Ralladura de limón": { cantidad: 'c/n', unidad: '' }
        },
        galletasAvenaQueso: {
            "Queso fresco rallado": { cantidad: 45, unidad: 'g' },
            "Avena": { cantidad: 240, unidad: 'g' },
            "Aceite": { cantidad: 60, unidad: 'cc' },
            "Agua": { cantidad: 180, unidad: 'cc' },
            "Leche en polvo": { cantidad: 60, unidad: 'g' },
            "Semillas de lino": { cantidad: 25, unidad: 'g' },
            "Semillas de sésamo": { cantidad: 25, unidad: 'g' },
            "Sal": { cantidad: 1.5, unidad: 'g' }
        },
        galletitasCitrica: {
            "Huevos": { cantidad: 1, unidad: 'unid.' },
            "Harina": { cantidad: 240, unidad: 'g' },
            "Azúcar": { cantidad: 100, unidad: 'g' },
            "Aceite": { cantidad: 50, unidad: 'g' },
            "Polvo de hornear": { cantidad: 10, unidad: 'g' },
            "Jugo de naranja": { cantidad: 0.5, unidad: 'unid.' },
            "Jugo de limón": { cantidad: 0.5, unidad: 'unid.' },
            "Ralladura de naranja": { cantidad: 0.5, unidad: 'unid.' },
            "Ralladura de limón": { cantidad: 0.5, unidad: 'unid.' },
            "Leche": { cantidad: 35, unidad: 'cc' },
            "Vainilla": { cantidad: 5, unidad: 'cc' }
        },
        ojitosCaseros: {
            "Huevos": { cantidad: 1, unidad: 'unid.' },
            "Azúcar": { cantidad: 60, unidad: 'g' },
            "Aceite": { cantidad: 40, unidad: 'g' },
            "Almidón de maíz": { cantidad: 45, unidad: 'g' },
            "Harina": { cantidad: 120, unidad: 'g' },
            "Polvo de hornear": { cantidad: 3.5, unidad: 'g' },
            "Vainilla": { cantidad: 2, unidad: 'cc' },
            "Dulce de membrillo": { cantidad: 100, unidad: 'g' }
        },
        alfajoresMaicena: {
            "Huevos": { cantidad: 1, unidad: 'unid.' },
            "Azúcar": { cantidad: 60, unidad: 'g' },
            "Aceite": { cantidad: 40, unidad: 'g' },
            "Almidón de maíz": { cantidad: 110, unidad: 'g' },
            "Harina": { cantidad: 90, unidad: 'g' },
            "Polvo de hornear": { cantidad: 3.5, unidad: 'g' },
            "Vainilla": { cantidad: 2, unidad: 'cc' },
            "Ralladura de limón": { cantidad: 2, unidad: 'g' },
            "Dulce de leche": { cantidad: 150, unidad: 'g' },
            "Coco rallado": { cantidad: 20, unidad: 'g' }
        },

        barracereales: {
            "Azúcar": { cantidad: 65, unidad: 'g' },
            "Huevos": { cantidad: 2, unidad: 'unid.' },
            "Avena": { cantidad: 80, unidad: 'g' },
            "Harina": { cantidad: 40, unidad: 'g' },
            "Polvo de hornear": { cantidad: 7, unidad: 'g' },
            "Pasas de uva": { cantidad: 75, unidad: 'g' },
            "Semillas de lino": { cantidad: 50, unidad: 'g' },
            "Semillas de girasol": { cantidad: 50, unidad: 'g' },
            "Maní sin sal": { cantidad: 50, unidad: 'g' },
            "Manzana rallada": { cantidad: 150, unidad: 'g' },
            "Ralladura de limón": { cantidad: 2, unidad: 'g' }
        },
       
        mixFrutosSecos: {
            "Frutos secos deshidratados": { cantidad: 150, unidad: 'g' },
            "Frutas deshidratadas": { cantidad: 150, unidad: 'g' }
        },
        cremaVainilla: {
            "Leche": { cantidad: 1500, unidad: 'cc' },
            "Almidón de maíz": { cantidad: 90, unidad: 'g' },
            "Azúcar": { cantidad: 150, unidad: 'g' },
            "Vainilla": { cantidad: 5, unidad: 'g' },
            "Cocoa": { cantidad: 50, unidad: 'g' },
            "Coco": { cantidad: 120, unidad: 'g' }
        },
        licuadoLecheFruta: {
            "Leche": { cantidad: 1500, unidad: 'cc' },
            "Fruta": { cantidad: 300, unidad: 'g' },
            "Azúcar": { cantidad: 80, unidad: 'g' }
        },
        ojitosMijo: {
            "Harina de mijo": { cantidad: 300, unidad: 'g' },
            "Huevo": { cantidad: 1, unidad: 'unid.' },
            "Azúcar": { cantidad: 100, unidad: 'g' },
            "Dulce de leche": { cantidad: 100, unidad: 'g' },
            "Aceite": { cantidad: 140, unidad: 'cc' },
            "Vainilla": { cantidad: 1, unidad: 'cc' }
        }
    }
;

// Función para calcular ingredientes
function calcularIngredientes() {
    const recetaSeleccionada = document.getElementById('recetas').value;
    const cantidadComensales = parseInt(document.getElementById('comensales').value);

    // Validar entrada de receta y cantidad
    if (!recetaSeleccionada || !recetas[recetaSeleccionada]) {
        document.getElementById('resultado').innerHTML = '<p>Receta no encontrada. Selecciona una receta válida.</p>';
        return;
    }

    if (isNaN(cantidadComensales) || cantidadComensales < 1 || cantidadComensales % 10 !== 0) {
        document.getElementById('resultado').innerHTML = '<p>Por favor, ingresa una cantidad de comensales válida y que sea un múltiplo de 10.</p>';
        return;
    }

    const ingredientes = recetas[recetaSeleccionada];
    let html = '<table><thead><tr><th>Ingrediente</th><th>Cantidad</th><th>Unidad</th></tr></thead><tbody>';
    
    // Calcular el factor de multiplicación
    const factor = cantidadComensales / 10;

    for (const [ingrediente, info] of Object.entries(ingredientes)) {
        if (ingrediente === 'Variantes') {
            html += '<tr><td colspan="3"><strong>Variantes:</strong></td></tr>';
            for (const [variante, varianteInfo] of Object.entries(info)) {
                const cantidad = varianteInfo.cantidad === 'c/n' ? 'c/n' : Math.round(parseFloat(varianteInfo.cantidad) * factor);
                html += `<tr><td>${variante}</td><td>${cantidad}</td><td>${varianteInfo.unidad}</td></tr>`;
            }
        } else {
            const cantidad = info.cantidad === 'c/n' ? 'c/n' : Math.round(parseFloat(info.cantidad) * factor);
            html += `<tr><td>${ingrediente}</td><td>${cantidad}</td><td>${info.unidad}</td></tr>`;
        }
    }

    html += '</tbody></table>';

    document.getElementById('resultado').innerHTML = html;
}

// Añadir event listener al botón al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const calcularButton = document.getElementById('calcular');
    calcularButton.addEventListener('click', calcularIngredientes);
});
