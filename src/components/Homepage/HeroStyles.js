import styled from '@emotion/styled'

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // stretch to the full frame
  grid-template-rows: 600px; // 350 pixels tall
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;

  .banner-image-div {
    grid-area: 1 / 1 / 2 / 2;
  } // image
  .banner-overlay-div {
    grid-area: 1 / 1 / 2 / 2;
  } // gradient or other overlay
  .banner-text-div {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    height: 100px;
    width: 100px;
    place-self: center;
  } // overlay objects like text, buttons, etc.
`
