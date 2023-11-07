import useAuth from "../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-4 md:px-5 lg:px-0 md:h-[700px] my-20 ">
      <div className=" md:col-span-3 border rounded-2xl">
        <img
          className="rounded-full mx-auto my-5"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="text-xl font-playfair font-bold text-center">
          {user?.displayName}
        </h1>
        <p className="text-xs my-2 text-center">{user?.email}</p>
      </div>
      <div className="md:col-span-9 border rounded-2xl"></div>
    </div>
  );
};

export default Profile;
