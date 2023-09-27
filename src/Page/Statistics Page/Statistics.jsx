import { PieChart, Pie, Cell } from "recharts";
import { getStoreDonationData } from "../../utility/localstore";
import { useEffect, useState } from "react";
const COLORS = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Statistics = () => {
  const localStorage = getStoreDonationData();
  const[doneted, setdoneted] = useState([]);
  useEffect(()=>{
    setdoneted(localStorage.length)
  },[])

  const [totalDonation, settotalDonation] = useState(12);
  useEffect(()=>{
    settotalDonation(totalDonation-doneted)
  },[doneted])

  // console.log(totalDonation)


  const data = [
    { name: "Group A", value: totalDonation},
    { name: "Group B", value: doneted}
  ];
    return (
        <div className=" md:pt-28 flex justify-evenly">
        <div>
            <PieChart className=" md:scale-150 " width={300} height={300} >
                <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
                <div className="grid grid-cols-2 gap-5">
                    <div className="text-center">
                        <p className="inline-block">Your Donation</p>
                        <div className="px-5 rounded-md inline-block py-1 ml-1 bg-[#00c49f]"></div>
                    </div>
                    <div className="text-center">
                        <p className="inline-block">Total Donation</p>
                        <div className="px-5 rounded-md inline-block py-1 ml-1 bg-[#FF444A]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;