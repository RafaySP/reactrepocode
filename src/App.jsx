import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    setdata(response.data);
  };
  useEffect(() => {
    getData()

  }, [])
  
  return (
    <>
      <div className="text-2xl font-bold text-center my-4">Picsum Gallery</div>
      <div className="flex justify-center mb-4">
        <button
          onClick={getData}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Get Data
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {data.map((e, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{e.author}</h2>
            <img className="h-40 w-full object-cover rounded" src={e.download_url} alt={e.author} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
