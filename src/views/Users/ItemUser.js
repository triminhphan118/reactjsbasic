import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import './user.scss';


// class ItemUser extends  React.Component {
//     render() {
//         let {index, itemUser} = this.props
//         return (
//                 <li className="item__user">
//                 <a href="" className="item__user-link">
//                 {index + 1}. {itemUser.last_name} {itemUser.first_name}
//                 </a>
//                 </li>
//         )
//     }
// }

function ItemUser({index, itemUser}) {

    let nav = useNavigate();
    const handelClickDetail = (e, user) => {
        e.preventDefault();
         nav(`/users/${user.id}`)
    }
    return (
        <li className="item__user">
            <a
                href={`/users/${itemUser.id}`} 
                className="item__user-link"
                onClick={(e) => handelClickDetail(e, itemUser)}
            >
            {index + 1}. {itemUser.last_name} {itemUser.first_name}
            </a>
        </li>
    )
}

export default ItemUser;