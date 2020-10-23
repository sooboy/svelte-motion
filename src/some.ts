import { animate } from "popmotion"
import sync from 'framesync'

export const B = (ref:HTMLElement) =>
{
     console.log(ref)
     animate( {
          from: 0,
          to: 500,
          onUpdate: latest => {
               console.log( latest )
               sync.render(()=>{
                    ref.style.transform = `translateX(${latest}px) translateY(${latest}px) rotate(${latest}deg) translateZ(0px)`
               },false,true)
          },
          duration:5000,
          repeat:1
     } )
}

const A: any = {};

export const SomeA = () =>
{
     console.log( JSON.stringify( A ) );
     A.some = "1"
}