import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
      </div>

<<<<<<< HEAD
      <Button type="button" size="sm" className=" bg-sky-950 ">
Seguir
=======

      <Button type="button" size="sm" className=" bg-sky-950 ">
Seguir

>>>>>>> 8301d42bc04e9f56086a3055dd7a3d2a2d6f2391
      </Button>
    </Link>
  );
};

export default UserCard;
