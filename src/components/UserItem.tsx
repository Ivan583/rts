import React, {FC} from "react";
import { IUser } from "./types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {    
    return (
        <div style={{padding: 15, border: '2px solid blue'}}>
            {user.id}.{user.name} live in city 
            {user.address.city} at street {user.address.street}        
        </div>
    )
}
export default UserItem;
