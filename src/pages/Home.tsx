import { useState } from 'react'
import Navbar from '../components/Navbar'
import IntroVideo from '../components/IntroVideo'
import TitleReveal from '../components/TitleReveal'
import HeroSlider from '../components/HeroSlider'

type Phase = 'intro' | 'title' | 'main'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro')

  return (
    <div>
      {phase === 'intro' && <IntroVideo onEnd={() => setPhase('title')} />}
      {phase === 'title' && <TitleReveal onEnd={() => setPhase('main')} />}
      {phase !== 'intro' && (
        <>
          <Navbar />
          <HeroSlider />
        </>
      )}
    </div>
  )
}
