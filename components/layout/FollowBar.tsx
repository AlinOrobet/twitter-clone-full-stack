const FollowBar = () => {
  return (
    <div className="hidden lg:inline col-span-1 lg:col-span-2 px-6 py-4 hidden">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">{/* TODO USER LSIT */}</div>
      </div>
    </div>
  );
};
export default FollowBar;
