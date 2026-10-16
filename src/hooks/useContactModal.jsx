import { createContext, useContext, useState, useCallback } from 'react'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])
  return (
    <ContactModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export const useContactModal = () => useContext(ContactModalContext)
