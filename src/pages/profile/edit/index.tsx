import Header from "@/components/Fragments/Header";
import React, { useEffect, useState } from "react";

type DataUserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  score: number;
};

const EditProfilePage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<DataUserType>();

  const fetchDataUser = async () => {
    const response = await fetch("http://localhost:3000/api/single-user");
    const result = await response.json();
    // console.log(result);
    setDataUser(result);
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  return (
    <div>
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <h1 className="mb-6 mt-32 text-center text-2xl font-semibold text-primary">
        Profile Pengguna
      </h1>
      <div className="flex items-center justify-center">
        <div className="relative grid w-[850px] grid-cols-2 gap-x-14 gap-y-6 rounded-md border bg-white p-10 shadow-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-neutral500">
              Email
            </label>
            <input
              type="text"
              className="rounded-md border border-[#E5E5E7] bg-[#F8F9FB] p-3 text-sm"
              placeholder={dataUser?.email}
              disabled
            />
          </div>
          <div className="col-start-1 flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-neutral500">
              Nama Pertama
            </label>
            <input
              type="text"
              className="rounded-md border border-[#E5E5E7] bg-[#F8F9FB] p-3 text-sm"
              placeholder={dataUser?.firstName}
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-neutral500">
              Nama Akhir
            </label>
            <input
              type="text"
              className="rounded-md border border-[#E5E5E7] bg-[#F8F9FB] p-3 text-sm"
              placeholder={dataUser?.lastName}
              disabled
            />
          </div>
          <div className="col-start-2 flex flex-row-reverse">
            <button className="h-fit w-fit rounded-md bg-primary px-10 py-2 text-sm font-medium text-white">
              Edit
            </button>
          </div>
          <div className="absolute left-4 top-4 -z-10 h-full w-full rounded-md bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
