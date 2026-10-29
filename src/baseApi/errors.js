const API_ERRORS = {
  'Empty key!': 'Не указан ключ доступа к API',
  'Invalid key client!': 'Неверный ключ доступа к API',
  'Empty number goods!': 'Не указан артикул',
  'Request quota exceeded!': 'Поставщик не отдаёт данные по этому производителю: лимит ключа API',
}

const NETWORK_ERRORS = {
  FETCH_ERROR: 'Нет соединения с сервером',
  TIMEOUT_ERROR: 'Сервер не отвечает',
  PARSING_ERROR: 'Некорректный ответ сервера',
}

const RETRYABLE_ERRORS = ['FETCH_ERROR', 'TIMEOUT_ERROR']

export const normalizeError = (error) => {
  const status = error.originalStatus ?? error.status
  const apiMessage = error.data?.error
  const isServerError = typeof status === 'number' && status >= 500

  let message
  if (apiMessage) message = API_ERRORS[apiMessage] ?? apiMessage
  else if (status === 504) message = 'Поставщик слишком долго отвечает. Попробуйте ещё раз'
  else if (isServerError) message = 'Сервер поставщика недоступен'
  else message = NETWORK_ERRORS[error.status] ?? 'Что-то пошло не так'

  const retryable = !apiMessage && (isServerError || RETRYABLE_ERRORS.includes(error.status))

  return { status, message, retryable }
}
