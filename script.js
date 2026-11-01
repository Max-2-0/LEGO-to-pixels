var valeurInput = document.getElementById('valeur');
var valeurResultat = document.getElementById('resultat');

const btn = document.getElementById('convertir');

valeurInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value.trim() !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }


});

btn.addEventListener('click', function() {
    const cm = parseFloat(valeurInput.value);
    if (isNaN(cm)) {
        alert('Veuillez entrer une valeur numérique valide.');
        return;
    }

    const px = cm * (96 / 2.54);

    valeurResultat.value = px.toFixed(2);

});
    