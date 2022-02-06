import React, { useState } from "react"
import * as S from "./subscribeFormStyles"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { FiCheckCircle } from "react-icons/fi"

const PLACEHOLDER = "Je e-mailadres"
const BUTTON = "Bevestig"
const SUCCESS_TEXT = "Je bent aangemeld!"
const FAILED_TEXT = "Oeps - probeer het opnieuw."

const SubscribeForm = () => {
  const [emailValue, setEmailValue] = useState("")
  const [formState, setFormState] = useState("idle")

  const handleInputChange = e => {
    setEmailValue(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(emailValue)
    if (result.result === "error") {
      setFormState("failed")
      setTimeout(() => {
        setFormState("idle")
      }, 2000)
    } else {
      setFormState("success")
    }
  }

  return (
    <>
      {formState !== "success" ? (
        <S.StyledForm onSubmit={handleSubmit}>
          <label>
            <S.StyledInput
              type="email"
              name="email"
              placeholder={PLACEHOLDER}
              value={emailValue}
              onChange={handleInputChange}
            />
          </label>
          <S.SubscribeButton type="submit">
            <span>{BUTTON}</span>
          </S.SubscribeButton>
          {formState === "failed" && (
            <span className="product-price--detail">{FAILED_TEXT}</span>
          )}
        </S.StyledForm>
      ) : (
        <S.Success>
          <FiCheckCircle size={20} color="white" />
          <p className="product-price--detail"> {SUCCESS_TEXT}</p>
        </S.Success>
      )}
    </>
  )
}

export default SubscribeForm
