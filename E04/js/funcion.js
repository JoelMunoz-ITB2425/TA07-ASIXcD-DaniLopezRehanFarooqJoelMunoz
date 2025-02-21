document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregat correctament.");

    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "orange";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "white";
        });
    });

    // Simulació de tendències temporals
    function generarDades(variacioBase, estacionalitat) {
        let dades = [];
        for (let mes = 0; mes < 12; mes++) {
            let variabilitat = Math.random() * 10;
            let valor = variacioBase + variabilitat + (estacionalitat[mes] || 0);
            dades.push(valor.toFixed(2));
        }
        return dades;
    }

    // Exemples de generació de dades
    let consumEnergia = generarDades(200, [30, 25, 20, 15, 10, 5, 5, 10, 15, 20, 25, 30]);
    let consumAigua = generarDades(100, [10, 15, 20, 25, 30, 35, 40, 35, 30, 25, 20, 15]);

    console.log("Consum Energia (kWh):", consumEnergia);
    console.log("Consum Aigua (litres):", consumAigua);

    // Calculadora de consums
    document.getElementById("calcular").addEventListener("click", function() {
        let tipus = document.getElementById("tipus-consum").value;
        let mesos = parseInt(document.getElementById("temps").value);
        let resultat = 0;
        
        if (tipus === "energia") {
            resultat = consumEnergia.slice(0, mesos).reduce((acc, val) => acc + parseFloat(val), 0);
        } else if (tipus === "aigua") {
            resultat = consumAigua.slice(0, mesos).reduce((acc, val) => acc + parseFloat(val), 0);
        }

        document.getElementById("resultat").textContent = `Consum estimat: ${resultat.toFixed(2)}`;
    });
});
