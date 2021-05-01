import React, { useContext } from 'react'
import StoreContext from '~/context/StoreContext'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { NoteButton, NoteField } from './cartStyles'

const NOTE_HEADER = 'Opmerkingsveld voor bestelling'
const CONFIRM_NOTE = 'Bevestig opmerking'

const Cardnote = () => {
  const {
    addNote,
    store: { client, checkout },
  } = useContext(StoreContext)

  const onKeyDown = keyEvent => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  return (
    <div>
      <h5 className="check-out--note-header">{NOTE_HEADER}</h5>

      <Formik
        initialValues={{ note: '' }}
        onSubmit={
          (client,
          checkout.id,
          (values, { setSubmitting }) => {
            addNote(client, checkout.id, values.note)
            setSubmitting(false)
          })
        }
      >
        {({ isSubmitting }) => (
          <NoteField onKeyDown={onKeyDown}>
            {/* <Field type="text" name="note" /> */}
            <Field type="textarea" name="note" />

            <ErrorMessage name="note" component="div" />

            <NoteButton type="submit" disabled={isSubmitting}>
              <span className="check-out--checkout-button">{CONFIRM_NOTE}</span>
            </NoteButton>
          </NoteField>
        )}
      </Formik>
    </div>
  )
}

export default Cardnote
