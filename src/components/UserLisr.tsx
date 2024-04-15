import React, {FC} from "react";
import { IUser } from "./types/types";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {    
    return (
        <div>
            {users.map(user => 
                <div key={user.id} style={{padding: 15, border: '2px solid blue'}} >
                    {user.id}.{user.name} live in city 
                    {user.address.city} at street {user.address.street}
                </div>
            )}
        </div>
    )
}
export default UserList;
