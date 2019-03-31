import React  from 'react';
import App from "./index.js";
const Tableitem = ({data}) => {
    return(
            <React.Fragment>
            <td id={data.cname+"name"} key={data.cname}>{data.cname}</td>
            <td id={data.cnumber} key={data.cnumber}>{data.cnumber}</td>
            <td  >
                <button id={data.cname} 

                onClick={(e) => window.pageComponent.Delete(data.cname) }
                className="btn btn-dark mt-10" >Delete
                </button>
            </td>
            </React.Fragment>
    )
}

const Table = (props) => {
    var data=props.data;
    //console.log(data,"table data")
    return (
        
            <React.Fragment>
            {data.map( data => (
            <tr key={data.cname}>
            <Tableitem data={data} />
            </tr>
            ))}
            </React.Fragment> 
    )
}
export default Table;