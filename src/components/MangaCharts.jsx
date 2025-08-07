import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Diagrammalar uchun statik ma'lumotlar
const monthlySalesData = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 5000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2390, Revenue: 3800 },
  { name: 'Jul', Sales: 5500, Revenue: 4300 },
];

const categorySalesData = [
  { name: 'Phones', Sales: 8000 },
  { name: 'Laptops', Sales: 6500 },
  { name: 'Monitors', Sales: 3200 },
  { name: 'Peripherals', Sales: 1800 },
];

const websiteTrafficData = [
  { name: 'Week 1', Visits: 12000, Conversions: 400 },
  { name: 'Week 2', Visits: 15000, Conversions: 550 },
  { name: 'Week 3', Visits: 13500, Conversions: 480 },
  { name: 'Week 4', Visits: 18000, Conversions: 650 },
];

const customerSatisfactionData = [
  { name: 'Very Satisfied', count: 85 },
  { name: 'Satisfied', count: 10 },
  { name: 'Unsatisfied', count: 5 },
];

const revenueSourceData = [
  { name: 'Q1', 'Online Store': 5000, 'In-Store': 3500, 'Marketplace': 2000 },
  { name: 'Q2', 'Online Store': 6500, 'In-Store': 4000, 'Marketplace': 2500 },
  { name: 'Q3', 'Online Store': 7000, 'In-Store': 4200, 'Marketplace': 2200 },
  { name: 'Q4', 'Online Store': 8000, 'In-Store': 4500, 'Marketplace': 2800 },
];

const topProductSalesData = [
  { name: 'Product A', Sales: 1200 },
  { name: 'Product B', Sales: 950 },
  { name: 'Product C', Sales: 700 },
  { name: 'Product D', Sales: 550 },
];

const MangaCharts = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
        
        {/* Oylik savdo va daromad Line Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Monthly Sales & Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#80e8ff" activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Revenue" stroke="#f6ad55" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mahsulot kategoriyalari bo'yicha savdo Bar Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Sales by Product Category</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categorySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="Sales" fill="#81e6d9" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Veb-sayt trafigi va konversiyalar Line Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Website Traffic & Conversions</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={websiteTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Legend />
              <Line type="monotone" dataKey="Visits" stroke="#a78bfa" activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Conversions" stroke="#fb7185" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mijozlar ehtiyojini qondirish Bar Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Customer Satisfaction</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={customerSatisfactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="count" fill="#8884d8" barSize={40}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Daromad manbalari bo'yicha Line Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Revenue by Source</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueSourceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Legend />
              <Line type="monotone" dataKey="Online Store" stroke="#38b2ac" />
              <Line type="monotone" dataKey="In-Store" stroke="#e9d5ff" />
              <Line type="monotone" dataKey="Marketplace" stroke="#a0aec0" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Eng ko'p sotilgan mahsulotlar Bar Chart */}
        <div className="bg-black/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-white">Top Product Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProductSalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f01a" />
              <XAxis dataKey="name" stroke="#e2e8f0" />
              <YAxis stroke="#e2e8f0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="Sales" fill="#fbd38d" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MangaCharts;