import React from "react"
import * as S from "./overlayStyles"
import SubscribeForm from "./Subscribeform/Subscribeform"

const OVERLAY_HEADER = "WE ZIJN NIET WEG!"
const OVERLAY_SUB_HEADER = "Blijf op de hoogte van de volgende bakdag!"
const BADGE_1 = "Tijdelijk"
const BADGE_2 = "gesloten"

const Overlay = () => {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <h2 className="hero-title" style={{ fontSize: "3.052rem" }}>
          {OVERLAY_HEADER}
        </h2>
        <S.StyledBadge>
          <span>{BADGE_1}</span>
          <span>{BADGE_2}</span>
        </S.StyledBadge>
        <h3 className="page-title" style={{ marginTop: 0 }}>
          {OVERLAY_SUB_HEADER}
        </h3>
        <SubscribeForm />
      </S.TextContainer>
    </S.Wrapper>
  )
}

export default Overlay
