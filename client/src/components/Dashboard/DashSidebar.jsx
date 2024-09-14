export default function DashSidebar({tab, setTab}) {
  const tabs = [
    { name: "Dashboard" },
    { name: "Products" },
    { name: "Favorites" },
    { name: "Inbox" },
    { name: "Order Lists" },
    { name: "Product Stock" },
  ];
  
  return (
    <div className="w-60 space-y-2 p-4">
      {tabs.map(({ name }) => (
        <div
          className={`rounded-md w-full text-center px-4 py-2 cursor-pointer ${
            tab === name ? `bg-black text-white` : `hover:bg-background`
          }`}
          onClick={() => setTab(name)}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
