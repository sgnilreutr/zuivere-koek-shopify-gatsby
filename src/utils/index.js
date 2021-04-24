import DOMPurify from 'dompurify'

export const ERROR_MESSAGE = 'Er is iets mis gegaan'

export const formatPrice = (amount, currencyCode) => {
  let numberFormat = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode ? currencyCode : 'EUR',
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(amount)
}

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = content => {
  return process.browser ? DOMPurify.sanitize(content) : content
}
