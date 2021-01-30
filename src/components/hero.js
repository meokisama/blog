import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: var(--color-background);
`

const ContentWrapper = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`

const Underlining = styled.span`
  box-shadow: inset 0 ${({ big }) => (big ? "-0.75rem" : "-.5rem")} 0
    ${'#FFF4D9'};
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: inset 0 ${({ big }) => (big ? "-2rem" : "-1rem")} 0
      ${'#FFF4D9'};
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  @font-face{
    font-family: 'JetBrainsMono';
    src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
      url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff') format('woff'),
      url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  && {
    width: 100%;
    height: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      margin-bottom: 3rem;
    }
    .greetings {
      font-size: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .title {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
    .button{
      margin-top: 4rem;
      font-family:'JetBrainsMono';
      font-weight: 700;
    }
    .fix{
      margin-top: 1.75rem;
      // font-size: 35px;
    }
    .subtitle {
      margin-top: 0.5rem;
    }
    .description {
      font-family: 'JetBrainsMono';
      margin-top: 1.25rem;
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = () => {
  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (1) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [eControls, gControls, sControls, uControls])

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gControls}
          data-testid="animated-heading"
        >
          <h1 className="title">
            <div className="greetings">
              Hiiii 😙
            </div>
            <div class="fix">
              Lại là tớ đây
            </div>
          </h1>
          <h2 className="subtitle">
            ...và đây là{" "}
            <AnimatedUnderlining animate={uControls} big>
              Blog của tớ
            </AnimatedUnderlining>
          </h2>
          <div className="description">
            Tớ chia sẻ kiến thức, kinh nghiệm và "lẽ sống" của tớ ở đây!
          </div>
          <div className="button">Okayy, check it out!</div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Hero
