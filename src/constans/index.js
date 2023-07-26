export const MARCAS = [
  { id: 1, nombre: "Europa" },
  { id: 2, nombre: "Estados Unidos" },
  { id: 3, nombre: "Asia" },
  { id: 4, nombre: "Brasil" },
  { id: 5, nombre: "Argentina" },
  { id: 6, nombre: "Mexico" },
  { id: 7, nombre: "Oceania" },
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },
];
