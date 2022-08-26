const checkDateFields = (startDate, endDate) => {
  const start = new Date(startDate) - 1 + 1;
  const end = new Date(endDate) - 1 + 1;

  // Разница 2 дня
  const oneDayinMs = 24 * 60 * 60 * 1000;
  const tomorrow = Date.now() - 1 + 1 + oneDayinMs;
  // Начало страховки раньше чем послезавтра

  if (tomorrow > start) {
    alert("Початок страховки раніше ніж післязавтра");
    return false;
  }
  // Указана дата оконцания до начала страховки
  if (start > end) {
    alert("Вказано дату закінчення до початку страховки");
    return false;
  }
  // Срок страховки меньше 30 дней
  if (start - end + oneDayinMs * 30 > 0) {
    alert("Строк страховки менше 30 днів");
    return false;
  }

  return true;
};

export default checkDateFields;
