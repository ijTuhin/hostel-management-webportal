import React, { useEffect, useState } from 'react'
import TableHead from './TableHead';
import TableData from './TableData';
import { useLoaderData } from 'react-router-dom';

const UtilityTable = () => {
  const utilityData = useLoaderData();
  const data = Object.values(utilityData);
    /* const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/utility/current")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []); */
    return (
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <TableHead />
                <tbody>
                  {data?.slice(1,6).map((item) => (
                    <TableData key={item.name} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default UtilityTable