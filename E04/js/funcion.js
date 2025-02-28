function calcular() {
    let energia = parseFloat(document.getElementById('energia').value);
    let plaques = parseFloat(document.getElementById('plaques').value);
    let aigua = parseFloat(document.getElementById('aigua').value);
    let consumibles = parseFloat(document.getElementById('consumibles').value);
    let neteja = parseFloat(document.getElementById('neteja').value);

    let energiaGenerada = plaques * 400; // Generación de energía por las placas solares (suponiendo 400 kWh por placa)
    let consumElectricAny = Math.max(energia - energiaGenerada, 0);
    let consumElectricCurs = (consumElectricAny / 12) * 10;
    
    // Calcular autoconsumo
    let autoconsumo = Math.min(energiaGenerada, energia); // El autoconsumo es el mínimo entre la energía generada y la consumida.
    let porcentajeAutoconsumo = (autoconsumo / energia) * 100; // Porcentaje de autoconsumo sobre el total de consumo

    // Calcular reducción del consumo
    let porcentajeReduccion = (energiaGenerada / energia) * 100; // Porcentaje de reducción de consumo gracias a las placas solares

    let consumAiguaAny = aigua;
    let consumAiguaCurs = (aigua / 12) * 10;
    let consumConsumiblesAny = consumibles;
    let consumConsumiblesCurs = (consumibles / 12) * 10;
    let consumNetejaAny = neteja;
    let consumNetejaCurs = (neteja / 12) * 10;

    document.getElementById('resultats').innerHTML = `
        <p>Consum elèctric pròxim any: ${consumElectricAny.toFixed(2)} kWh</p>
        <p>Consum elèctric durant el curs: ${consumElectricCurs.toFixed(2)} kWh</p>
        <p>Consum d’aigua pròxim any: ${consumAiguaAny.toFixed(2)} m³</p>
        <p>Consum d’aigua durant el curs: ${consumAiguaCurs.toFixed(2)} m³</p>
        <p>Consum de consumibles pròxim any: ${consumConsumiblesAny.toFixed(2)} unitats</p>
        <p>Consum de consumibles durant el curs: ${consumConsumiblesCurs.toFixed(2)} unitats</p>
        <p>Consum de productes de neteja pròxim any: ${consumNetejaAny.toFixed(2)} litres</p>
        <p>Consum de productes de neteja durant el curs: ${consumNetejaCurs.toFixed(2)} litres</p>
        <p>Autoconsumo (energia generada consumida directamente): ${autoconsumo.toFixed(2)} kWh</p>
        <p>Porcentaje de autoconsumo: ${porcentajeAutoconsumo.toFixed(2)}%</p>
        <p>Porcentaje de reducción del consumo gracias a las placas solares: ${porcentajeReduccion.toFixed(2)}%</p>
    `;
}


function resetear() {
    document.getElementById('energia').value = "";
    document.getElementById('plaques').value = "";
    document.getElementById('aigua').value = "";
    document.getElementById('consumibles').value = "";
    document.getElementById('neteja').value = "";
    document.getElementById('resultats').innerHTML = "";  // Borra los resultados
}
// Validate user input
function validarEntrada(valor) {
    if (isNaN(valor) || valor < 0) {
        return false;
    }
    return true;
}

// Convert kWh to Joules
function convertirKWhAJoules(kWh) {
    return kWh * 3600000;
}

// Calculate cost savings
function calcularEstalvi(energiaConsumida, preuPerKWh) {
    return energiaConsumida * preuPerKWh;
}

// Display summary of energy savings
function mostrarResumEstalvi(energiaConsumida, estalvi) {
    let resum = `Has consumit ${energiaConsumida} kWh i has estalviat ${estalvi} euros.`;
    document.getElementById("resum-estalvi").textContent = resum;
}

// Compare energy consumption between different months
function compararConsum(mes1, mes2) {
    if (mes1 > mes2) {
        return "El consum del primer mes és superior.";
    } else if (mes1 < mes2) {
        return "El consum del segon mes és superior.";
    } else {
        return "El consum dels dos mesos és igual.";
    }
}

// Generate a chart of energy consumption
function generarGraficaConsum(dades) {
    let ctx = document.getElementById('grafica-consum').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
            datasets: [{
                label: 'Consum Energètic (kWh)',
                data: dades,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Suggest energy-saving tips
function suggerirConsellsEstalvi() {
    let consells = [
        "Apaga els llums quan no els necessitis.",
        "Desendolla els aparells electrònics quan no els facis servir.",
        "Utilitza bombetes LED de baix consum.",
        "Ajusta el termòstat a una temperatura moderada.",
        "Utilitza electrodomèstics eficients energèticament."
    ];
    let consellAleatori = consells[Math.floor(Math.random() * consells.length)];
    document.getElementById("consell-estalvi").textContent = consellAleatori;
}

// Log user interactions for analytics
function registrarInteraccio(accio) {
    console.log(`Interacció registrada: ${accio}`);
}

// Example usage
document.addEventListener("DOMContentLoaded", function() {
    // Validate input example
    let inputValido = validarEntrada(50);
    console.log(`Entrada vàlida: ${inputValido}`);

    // Convert kWh to Joules example
    let joules = convertirKWhAJoules(10);
    console.log(`10 kWh en Joules: ${joules}`);

    // Calculate cost savings example
    let estalvi = calcularEstalvi(100, 0.15);
    console.log(`Estalvi: ${estalvi} euros`);

    // Display summary example
    mostrarResumEstalvi(100, estalvi);

    // Compare consumption example
    let comparacio = compararConsum(120, 100);
    console.log(comparacio);

    // Generate chart example
    let dadesConsum = [100, 120, 130, 110, 90, 80, 70, 60, 50, 40, 30, 20];
    generarGraficaConsum(dadesConsum);

    // Suggest energy-saving tips example
    suggerirConsellsEstalvi();

    // Log interaction example
    registrarInteraccio("Usuari ha calculat l'estalvi energètic.");
});

function toggleConsells() {
    var consells = document.getElementById("consells");
    if (consells.style.display === "none") {
        consells.style.display = "block";
    } else {
        consells.style.display = "none";
    }
}
