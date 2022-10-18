import "keen-slider/keen-slider.min.css"

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  ads: number;
}

export function GameBanner(props: Game) {
  return (        
    <div className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt=''/>
      <div className="w-full  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block mt-1'>{props.ads} anúncio(s)</span>
      </div>
    </div>
  )
}

        
             
     