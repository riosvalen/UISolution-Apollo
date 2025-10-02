// cypress/support/utils/destinos.js
export const DESTINO_ALIASES = {
    "Cordoba": ["Córdoba", "cordoba"],
    "carlos paz": ["carlos paz", "villa carlos paz"],
    "mar del plata": ["mar del plata", "mdq"], // ajustá a tu UI real si aplica
    "buenos aires": ["buenos aires", "caba", "ciudad autonoma de buenos aires"],
  // por defecto: si no está, se usa el propio destino
};

export function posiblesMatches(destino) {
  const key = normalize(destino);
  const lista = DESTINO_ALIASES[key] || [destino];
  return lista.map(normalize);
}
