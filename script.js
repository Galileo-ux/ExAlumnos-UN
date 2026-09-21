const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

function filtrarEventos(tipo) {
    const eventos = document.querySelectorAll('.evento');
    const filtros = document.querySelectorAll('.filter');

    filtros.forEach((boton) => {
        const activo = boton.textContent.trim().toLowerCase();
        const tipoBoton = tipo === 'todos' ? 'todos' : tipo;

        boton.classList.toggle('active', (
            tipo === 'todos' && activo === 'todos'
        ) || (
            tipo !== 'todos' && activo === tipoBoton
        ));
    });

    eventos.forEach((evento) => {
        const esTipo = evento.dataset.tipo === tipo;
        const mostrar = tipo === 'todos' || esTipo;
        evento.classList.toggle('hidden', !mostrar);
    });
}

const botonesFiltro = document.querySelectorAll('.filter');
botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
        const tipo = boton.textContent.trim().toLowerCase();
        const valor = tipo === 'todos' ? 'todos' : tipo;
        filtrarEventos(valor);
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700 && menu) {
        menu.classList.remove('open');
    }
});
