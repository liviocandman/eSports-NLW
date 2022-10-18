import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import "keen-slider/keen-slider.min.css"
import './styles/main.css';
import logoImg from './assets/logo.svg';

import { CreateAdBanner } from './components/CreateAdBanner';

import { CreateAdModal } from './components/CreateAdModal';
import { GameBanner } from './components/GameBanner';

import { useKeenSlider } from "keen-slider/react"
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}


export default function App() {
  const [games, setGames] = useState<Game[]>([])

  const slidesPerView = 1
  const numberSlides = slidesPerView + 1

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>
      
      <div className="grid grid-cols-6 gap-5 mt-16"> 
      {games.map(game =>  (
          <GameBanner 
            key={game.id} 
            id={game.id} 
            title={game.title} 
            bannerUrl={game.bannerUrl} 
            ads={game._count.ads} 
          />
        )
      )}
      </div>
            
      
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )

    
}


