const validacionVariacionGenetica = (total) => {
  if (total < 0.01617) {
    return "Bajo";
  }
  if (total >= 0.01617 && total <= 0.1007) {
    return "Medio";
  }
  if (total > 0.1007) {
    return "Alto";
  }
};

module.exports = validacionVariacionGenetica;
