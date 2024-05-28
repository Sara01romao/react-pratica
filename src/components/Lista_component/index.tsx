import { students } from "../../data/list_students"


export const ListaData = () =>{
    

   
   return(

     <>
    
     
     <table className="table-auto w-full min-w-max table-auto text-left">
         <thead>
            <tr  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
               <th className="">Name</th>
               <th>Status</th>
               <th>Grade 1</th>
               <th>Grade 2</th>
               <th>Final Grade</th>
            </tr>
         </thead>
         <tbody>


            {students.map(student => {
               return(
                  <tr className="" key={student.id}>
                     <td> 
                        <div className="flex">
                           <img className="w-10 h-10"  src={student.avatar} alt={student.name}  />
                           <div>
                              <h3>{student.name} </h3>
                              <p>{student.email} </p>
                           </div>
                           
                       
                        </div>
                     </td>
                     <td><p>{  student.active ? "Active" : "Inactive"} </p></td>
                     <td><p>{student.grade1} </p></td>
                     <td><p>{student.grade2} </p></td>
                     <td><p>{((student.grade1 + student.grade2) / 2).toFixed(1) } </p></td>
                  </tr>
               
               )}
               
               )
            } 
           
         </tbody>
      </table>



     

     
     </>
      

   )


}