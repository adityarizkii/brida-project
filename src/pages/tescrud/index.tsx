import React, { useEffect, useState } from "react";

type DataSatwaType = {
  idSatwa: string;
  name: string;
  description: string;
  location: string;
  image: string;
}[];

const index = () => {
  const [dataJSON, setDataJSON] = useState<DataSatwaType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data-satwa");
        const result = await response.json();

        setDataJSON(result);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="my-4 text-center text-xl font-medium">database request</h1>

      <table className="mx-auto w-[300px] overflow-hidden rounded-md border bg-gray-100">
        <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {dataJSON?.map((data) => (
            <tr className="border-b border-gray-700" key={data.idSatwa}>
              <td className="px-6 py-3">{data.name}</td>
              <td className="px-6 py-3 text-center">{data.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
