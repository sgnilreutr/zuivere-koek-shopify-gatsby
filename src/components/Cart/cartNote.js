import React, { useContext, useState } from "react"
import StoreContext from "~/context/StoreContext"
import { useForm } from "react-hook-form"
import { ConfirmMessage, NoteButton, NoteField } from "./cartStyles"
import { FiCheck } from "react-icons/fi"

const NOTE_HEADER = "Bestel je een wenskaart?"
const NOTE_INSTRUCTIONS =
  "Wil je dat wij er iets voor je opzetten? Laat dan hier je bericht achter."
const CONFIRM_NOTE = "Bevestig opmerking"
const CONFIRM_MESSAGE = "Opgeslagen"

const Cardnote = () => {
  const [success, setSuccess] = useState(false)
  const {
    addNote,
    store: { client, checkout },
  } = useContext(StoreContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" })
  const onSubmit = data => {
    addNote(client, checkout.id, data.Opmerking)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2500)
  }

  return (
    <>
      <h5 className="check-out--note-header">{NOTE_HEADER}</h5>
      <small className="landingpage-p">{NOTE_INSTRUCTIONS}</small>
      <NoteField onSubmit={handleSubmit(onSubmit)}>
        <textarea
          style={{ maxWidth: "85%" }}
          {...register("Opmerking", { required: true, min: 1 })}
          defaultValue={
            checkout && checkout.customAttributes.length > 0
              ? checkout.customAttributes[0].value
              : ""
          }
        />
        <NoteButton type="submit">
          <span className="check-out--checkout-button">{CONFIRM_NOTE}</span>
        </NoteButton>
      </NoteField>
      <ConfirmMessage success={success}>
        <FiCheck /> <span className="landingpage-p">{CONFIRM_MESSAGE}</span>
      </ConfirmMessage>
    </>
  )
}

export default Cardnote
