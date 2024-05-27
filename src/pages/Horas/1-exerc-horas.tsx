
export const Exer1Horas = () =>{

     const fullTime = new Intl.DateTimeFormat('pt-BR', {
       timeStyle: 'short',
       hour12: false

     }).format();

     const hour = new Date().getHours();
     let greeting = '';

     if(hour >= 0 && hour < 12){
      greeting = "Bom dia 🌞";
     
     }else if(hour >= 12 && hour <= 18){
       greeting = "Boa Tarde 🌅";

     }else if(hour >= 18 && hour <= 23){
       greeting = "Boa Noite 🌛";
     }


    return(
  
      <div className=" h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">

         <div className="text-9xl">{fullTime}</div>

         <div className="text-5xl font-bold">{greeting} </div>

        {/* 
         <div className="text-5xl font-bold">
            {hour >= 0 && hour < 12 && "Bom dia 🌞"}
            {hour >= 12 && hour < 18 && "Boa Tarde 🌞"}
            {hour >= 18 && hour <= 23 && "Boa Tarde 🌞"}
         </div> */}
          


      </div>
  
  
    )
  
  }