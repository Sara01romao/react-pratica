
type Props={
    nota: number
}


export const Vidas = ({nota}:Props) =>{

    if (nota > 5) nota= 5;
    if (nota < 0 )nota = 0;

    const notaInt = Math.floor(nota); //arredonda para baixo

    const heart = '❤️'.repeat(notaInt) + '🩶'.repeat(5 - notaInt);
    



   return(

        <div>
            <h1>Vidas : {nota.toFixed(1)} {heart}</h1>
            
            <br/>

            <hr />

            <br/>

            <h1 className="text-center">Ou</h1>
            <br/>

            {nota >=1 &&  nota < 2 && <div>❤️🩶🩶🩶🩶 </div>  }
            {nota >=2 &&  nota < 3 && <div>❤️❤️🩶🩶🩶</div>  }
            {nota >=3 &&  nota < 4 && <div>❤️❤️❤️🩶🩶</div>  }
            {nota >=4 &&  nota < 5 && <div>❤️❤️❤️❤️🩶</div>  }
            {nota >4 &&  nota === 5 && <div>❤️❤️❤️❤️❤️</div>  }
        </div>

        

   )

}