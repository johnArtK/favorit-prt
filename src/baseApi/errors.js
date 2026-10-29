const API_ERRORS = {
  'Empty key!': 'Не указан ключ доступа к API',
  'Invalid key client!': 'Неверный ключ доступа к API',
  'Empty number goods!': 'Не указан артикул',
  'Request quota exceeded!': 'Превышен лимит запросов. Попробуйте позже',
}

const NETWORK_ERRORS = {
  FETCH_ERROR: 'Нет соединения с сервером',
  TIMEOUT_ERROR: 'Сервер не отвечает',
  PARSING_ERROR: 'Некорректный ответ сервера',
}

export const normalizeError = (error) => {
  const status = error.originalStatus ?? error.status
  const apiMessage = error.data?.error

  let message
  if (apiMessage) message = API_ERRORS[apiMessage] ?? apiMessage
  else if (typeof status === 'number' && status >= 500) message = 'Сервер поставщика недоступен'
  else message = NETWORK_ERRORS[error.status] ?? 'Что-то пошло не так'

  return { status, message }
}
