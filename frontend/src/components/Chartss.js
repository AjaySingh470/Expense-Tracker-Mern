import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { sortCategoryWise } from '../utils/seperator';

ChartJS.register(ArcElement, Tooltip, Legend);


export function Chartss(props) {
//  console.log(props.exdata)
  // const [expdata ,] = useState(props.exdata);
  // const [totalexp , setTotalexp] = useState([]);
  let categories = ['Grocery', 'Vehicle', 'Shopping', 'Travel', 'Food','Fun','Other'];
  const totalexp = sortCategoryWise(props.exdata , categories);
  // console.log(totalexp)
///////////////////////////////////////////////////////////////////////////
const data = {
  labels: ['Grocery', 'Vehicle', 'Shopping', 'Travel', 'Food','Fun','Other'],
  datasets: [
    {
      label: "Rs",
      data: totalexp,
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(230, 57, 70,0.4)',
        'rgba(255, 159, 64, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(230, 57, 70,1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
  options: {
    
    plugins: {

     labels: {
          // formatter: function (value, context) {
          //     return context.chart.data.labels[ context.dataIndex ] + ": ₹";
          // },
          // render : 'categories',
          arc : false,
          percision : 1,
          fontSize : 20
      },
  },
  },
}


;

  //////////////////////////////////////////////////////////////////
  return <Doughnut className='w-full h-full' data={data} />;
}

