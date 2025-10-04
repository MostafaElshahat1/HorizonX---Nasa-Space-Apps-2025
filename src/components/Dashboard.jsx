import React from "react";
import data from "../data/data.json";
import { Rocket, LineChart as LineIcon, PieChart as PieIcon, BarChart3 } from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const COLORS = [
  "#FACC15", 
  "#EAB308", 
  "#2563EB", 
  "#38BDF8", 
  "#06B6D4", 
  "#818CF8"  
];


const THEME_COLORS = {
  bananas: "#FACC15",    // أصفر دافئ (Street Light)
  streetLight: "#FBBF24", 
  emotions: "#2563EB",   // أزرق عميق
  colors: "#38BDF8",     // سماوي
  children: "#06B6D4",   // تركواز
  nodes: "#818CF8"       // بنفسجي هادئ
};


const renderCustomLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem", textAlign: "center" }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: entry.color,
              borderRadius: "3px",
              marginRight: 8,
            }}
          ></div>
          <span style={{ color: "#fff", fontSize: "14px" }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};


export default function Dashboard() {
  const { yearlyData, distribution2023, distribution2024, categoriesComparison } = data;

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-10 pt-10">
         
          <span className="text-blue-400">NASA</span> Bioscience Dashboard
        </h2>

        {/* 1 Publications Timeline */}
        <Card className="w-full h-[500px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center animate-pulse">
  <LineIcon className="inline w-6 h-6 mr-2 text-blue-400" />
  Publications Growth (2023 - 2024)
</CardTitle>
          </CardHeader>
          <CardContent className="h-full p-20">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#0b1220" />
                <XAxis dataKey="year" tick={{ fill: "#9ca3af" }} />
                <YAxis tick={{ fill: "#9ca3af" }} />
                <Tooltip />
               <Legend content={renderCustomLegend} />

                <Line type="monotone" dataKey="papers" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 2 Distribution Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-full h-[500px] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
  <PieIcon className="inline w-6 h-6 mr-2 text-blue-400" />
  2023 Research Distribution
</CardTitle>
            </CardHeader>
            <CardContent className="h-full p-14">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribution2023}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >
                    {distribution2023.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                 <Legend content={renderCustomLegend} />

                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="w-full h-[500px] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center"><PieIcon className="inline w-6 h-6 mr-2 text-blue-400" />2024 Research Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-full p-14">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribution2024}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >
                    {distribution2024.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend content={renderCustomLegend} />

                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

       {/* 3 Category Comparison */}
<Card className="w-full h-[600px] shadow-lg">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold text-center">
      <BarChart3 className="inline w-6 h-6 mr-2 text-blue-400" /> 
      2023 vs 2024 by Research Category
    </CardTitle>
  </CardHeader>
  <CardContent className="h-full p-16">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={categoriesComparison} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#0b1220" />
        <XAxis dataKey="category" tick={{ fill: "#9ca3af" }} />
        <YAxis tick={{ fill: "#9ca3af" }} />
        <Tooltip />
       <Legend content={renderCustomLegend} />
<Bar dataKey="2023" fill="#2563EB" barSize={20} />   // Blue-600
<Bar dataKey="2024" fill="#FACC15" barSize={20} />

      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>

      </div>
    </section>
  );
}
