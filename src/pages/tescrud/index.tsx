import React, { FormEvent, useEffect, useState } from "react";

type DataSatwaType = {
  idSatwa: string;
  name: string;
  description: string;
  location: string;
  image: string;
}[];

type UserType = {
  id: string;
  name: string;
  age: string;
};

const index = () => {
  const [dataJSON, setDataJSON] = useState<UserType[]>();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/hello");
      const result = await response.json();

      setDataJSON(result);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  const postData = async (reqBody: Omit<UserType, "id">) => {
    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify(reqBody),
    }).then(() => fetchData());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);

    const formDataObject = Object.fromEntries(formData.entries()) as Omit<
      UserType,
      "id"
    >;

    postData(formDataObject);
  };

  useEffect(() => {
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
            <tr className="border-b border-gray-700" key={data.id}>
              <td className="px-6 py-3">{data.name}</td>
              <td className="px-6 py-3 text-center">{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-4 w-1/2 border border-black"
      >
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-md border border-black"
          />
        </div>
        <div className="">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            className="rounded-md border border-black"
          />
        </div>
        <button type="submit" className="bg-teal-300 px-1 py-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default index;
