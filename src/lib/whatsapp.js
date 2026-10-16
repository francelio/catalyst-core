import { SITE } from '../data/site'

export const whatsappLink = (message = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
