import { animate } from "popmotion"
import sync from 'framesync'

export const B = (ref:HTMLElement) =>
{
     console.log(ref)
     animate( {
          from: 0,
          to: 100,
          onUpdate: latest => {
               console.log( latest )
               sync.render(()=>{
                    ref.style.transform = `translateX(${latest}px) translateY(${latest}px) rotate(${latest}deg) translateZ(0px)`
               })
          }
     } )
}

const A: any = {};

export const SomeA = () =>
{
     console.log( JSON.stringify( A ) );
     A.some = "1"
}