import React, { useState } from 'react'
import DashSidebar from '../components/Dashboard/DashSidebar'
import DashPage from '../components/Dashboard/DashPage';
import DashProduct from '../components/Dashboard/DashProduct';
import DashInbox from '../components/Dashboard/DashInbox';
import DashOrder from '../components/Dashboard/DashOrder';
import DashStock from './DashStock';
import DashFavorite from '../components/Dashboard/DashFavorite';

export default function Dashboard() {
    const [tab, setTab] = useState("Dashboard");
  return (
    <div className='w-full h-screen flex'>
        <DashSidebar tab={tab} setTab={setTab} />
        <div className="flex-1 bg-background">
            {tab === "Dashboard" && <DashPage />}
            {tab === "Products" && <DashProduct />}
            {tab === "Favorites" && <DashFavorite />}
            {tab === "Inbox" && <DashInbox />}
            {tab === "Order Lists" && <DashOrder />}
            {tab === "Product Stock" && <DashStock />}
        </div>
    </div>
  )
}
