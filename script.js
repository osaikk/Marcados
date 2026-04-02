unction toggleInfo() {
    let info = document.getElementById("info");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display="none";
    }
}

unction Arannis() {
    let info = document.getElementById("info");
    let ficha = document.getElementById("ficha-arannis");
    if (ficha) {
        info.removeChild(ficha);
    } else {
        info.innerHTML += `
        <aside class="ficha">
        <img src="Arannis.png" alt="Arannis">
        <button onclick="toggleInfo()" style="cursor: pointer;">Informações</button>
        <div id="info" style="display: none;">
        <section><b>Nome:</b> Arannis</section>
        <section><b>Idade:</b> 433 anos</section>
        <section><b>Raça:</b> Elfo</section>
        <section><b>Classe:</b> Caçador</section>
        </div>
        </aside>
;`
    }
}

unction Informações() {
    location.href="Arannis.html";
}


unction Kamish() {
    let info = document.getElementById("info");
         let ficha = document.getElementById("ficha-arannis");
    if (ficha) {
        info.removeChild(ficha);
    } else {
        info.innerHTML += `
        <aside class="ficha">
        <img src="Kamish.png" alt="Kamish">

        <section><b>Nome:</b> Kamish Trash</section>
        <section><b>Idade:</b> 430 anos</section>
        <section><b>Raça:</b> Elfo</section>
        <section><b>Classe:</b> Mago</section>
            
        </aside>
        ;`
}




unction Toryo() {
    document.getElementById("info").innerHTML= "teste do palavreado forte ";
}