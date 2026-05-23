// Função utilitária para converter 'dd/MM/yyyy' para 'yyyy-MM-dd'
function formatDateToMySQL(dateStr) {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('/');
  return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
}

// formata a data para o formato brasileiro 'dd/MM/yyyy'
function formatDateToBR(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return day+'/'+month+'/'+year;
}

module.exports = {
  formatDateToMySQL,
  formatDateToBR
};