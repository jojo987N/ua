import "./barchart.scss"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1200, Total1: 800 },
    { name: "February", Total: 2100, Total1: 1700 },
    { name: "March", Total: 800, Total1: 400 },
    { name: "April", Total: 1600, Total1: 1000 },
    { name: "May", Total: 900, Total1: 500 },
    { name: "June", Total: 1700, Total1: 1000 },
    { name: "July", Total: 1600, Total1: 800 },
    { name: "August", Total: 900, Total1: 500 },
    { name: "September", Total: 1700, Total1: 700 },
  ];

const Barchart = () => {
    return (
        <div className="barchart">
             <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#8884d8" />
          <Bar dataKey="Total1" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
}
export default Barchart