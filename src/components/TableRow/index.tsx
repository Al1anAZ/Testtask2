import { useState } from "react";

type Data = {
    Name : string,
    Company : string,
    Phone : string,
    Email : string,
    Country: string,
    Status: string
}

type TableRowProps ={
    data : Data 
}

export const TableRow : React.FC<TableRowProps> = ({data}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
    return (
        <>
          <tr className={`table__row${isChecked ? '--active' : ''}`}>
            {Object.values(data).map((value, index) =>{
                if(index<2)
                 return (
                    <td key={index} className="table__item">
                      {value}
                    </td>
                  )
            })}
            <td className="table__item">
              <input
                type="checkbox"
                className="table__toggle"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
            </td>
          </tr>
          {isChecked && Object.entries(data).map(([value,key], index,array)=>{
                if(index === array.length-1)
                 return  <tr className="table__row"> 
                 <td className="table__item"><span className="table__moreinfo">{value}</span></td>
                 <td className="table__item"><span className={`${key === "Active" ? "table__status table__status--active" : "table__status table__status--inactive"}`}>{key}</span></td>
              </tr>
                if(index>1)
                  return <tr className="table__row--active"> 
                     <td className="table__item"><span className="table__moreinfo">{value}</span></td>
                     <td className="table__item">{key}</td>
                  </tr>
              })
         }
          
        </>
      );
}