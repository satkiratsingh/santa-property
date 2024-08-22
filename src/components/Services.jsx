import React from 'react';

function Services() {
  return (
    <div className="">
      <div className="container mx-auto py-20">
        <h1 className="text-[48px] font-semibold text-center text-[#048853] ">Layanan Kami</h1>
        <p className="text-center text-black mb-8 ">
          Rumah impian hadir menjadi solusi bagi kamu
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Property Baru</h2>
            <p className="text-black">
              Rumah impian kini jadi kenyataan. Beli rumah baru dengan fasilitas
              terbaik dengan lingkungan yang nyaman.
            </p>
          </div>
          <div className="bg-green-600 rounded-lg p-8 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 21h-2.82m0 0L9 17.17m3.3 4.24l5.17-5.17M13.5 21V9"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Sewa Rumah
            </h2>
            <p className="text-white">
              Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk
              tempat tinggal keluarga mu.
            </p>
          </div>
          <div className="bg-green-600 rounded-lg p-8 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 16h6m-3-7v10"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Beli Rumah</h2>
            <p className="text-white">
              Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari
              sumber terpercaya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
