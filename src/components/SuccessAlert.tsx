
const SuccessAlert = ({ setShowSuccess }: any) => {
    return (
        <>
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 ">
                <div
                    className="w-full mt-3 p-4 pb-2 mx-5  overflow-hidden bg-white rounded-[3px]  max-w-2xl "
                    role="dialog">
                    <div className="flex justify-center">
                        <svg className="w-[100px] h-[100px] " viewBox="0 0 151 151" fill="none">
                            <path d="M64.6238 4.61684C62.9433 6.59903 61.4351 8.34422 61.2843 8.47349C61.0473 8.6674 60.0131 8.27958 56.5443 6.66367C54.1096 5.5433 52.0197 4.61684 51.9335 4.61684C51.8258 4.61684 50.7054 6.59903 49.4127 9.03368C48.1415 11.4683 46.978 13.4505 46.8488 13.4505C46.7195 13.4505 44.4788 12.955 41.8718 12.3732C40.4112 12.0473 39.0995 11.762 38.2244 11.5779C37.4881 11.4229 36.9843 11.7219 36.7773 12.4452C36.5259 13.3238 36.1567 14.6534 35.7528 16.1222C35.0203 18.7076 34.3739 20.9268 34.3093 21.013C34.2446 21.1207 31.9393 21.2069 29.1814 21.2069H26.1477C25.0304 21.2069 24.1048 22.0741 24.0321 23.1891V23.1891C23.9459 24.2879 23.8166 26.5717 23.752 28.2738C23.6011 31.1609 23.5796 31.3548 23.1487 31.441C22.8901 31.5057 20.7356 31.9797 18.3225 32.5183C15.9309 33.0354 13.8841 33.5094 13.7979 33.574C13.6902 33.6387 13.9918 35.901 14.4227 38.5941C14.756 40.5775 15.0074 42.3389 15.0823 43.164C15.1123 43.4939 14.9463 43.7374 14.6491 43.8835C13.9197 44.242 12.3743 44.9763 10.6307 45.7688C9.19081 46.4233 7.88609 47.0381 7.06448 47.4343C6.46701 47.7224 6.22655 48.2107 6.44105 48.8383C6.73501 49.6985 7.24257 51.0531 7.85136 52.5557C8.84245 55.0334 9.66118 57.1664 9.66118 57.2957C9.66118 57.4034 7.85136 58.8685 5.67526 60.5275C3.47762 62.1865 1.68934 63.5654 1.68934 63.6085C1.68934 63.6301 2.91743 65.4614 4.40407 67.6591C5.52877 69.2979 6.49771 70.793 6.92667 71.5099C7.09675 71.7941 7.09756 72.0995 6.90684 72.3703C6.46889 72.9921 5.51126 74.2063 4.38253 75.5232C2.8528 77.333 1.40924 79.0567 1.17224 79.3367V79.3367C0.952335 79.6177 0.982031 80.0199 1.24083 80.2655L3.3268 82.2454C4.7488 83.5597 6.40781 85.154 7.03263 85.7358V85.7358C7.71934 86.3843 7.88635 87.4126 7.44019 88.2452L5.78299 91.3376C3.99471 94.7203 3.45607 95.8622 3.67153 96.013C3.82234 96.0992 5.76144 97.2626 7.98063 98.5985C10.2214 99.9343 12.0312 101.141 12.0312 101.292C12.0312 101.442 11.4495 103.662 10.7385 106.226C10.3259 107.67 9.96795 108.97 9.7417 109.839C9.552 110.567 9.84902 111.074 10.5601 111.319C11.426 111.619 12.7358 112.068 14.1857 112.56C16.7281 113.422 18.8827 114.176 18.9689 114.262C19.0335 114.327 18.9689 116.611 18.818 119.347C18.7561 120.323 18.7025 121.24 18.6612 122.016C18.5808 123.528 19.3881 124.474 20.8927 124.648C21.6655 124.737 22.5811 124.84 23.5581 124.949C26.2512 125.25 28.5351 125.552 28.5997 125.617C28.6643 125.681 29.0737 127.922 29.5262 130.594C29.7728 132.11 30.0053 133.486 30.1672 134.393C30.2993 135.134 30.7705 135.499 31.5197 135.429C32.4232 135.345 33.7823 135.202 35.2788 135.032C37.9289 134.752 40.2127 134.558 40.342 134.601C40.4928 134.666 41.3547 136.626 42.2811 138.975C43.2076 141.345 44.0479 143.413 44.1556 143.607C44.3064 143.887 44.9743 143.715 49.0033 142.357C51.5888 141.496 53.7649 140.785 53.8511 140.785C53.9373 140.785 55.2946 142.681 56.8244 144.986V144.986C58.4013 147.321 61.5397 148.03 63.9559 146.58V146.58C66.3259 145.158 68.3728 144.016 68.4805 144.06C68.5882 144.103 70.2903 145.654 72.251 147.528V147.528C74.2384 149.444 77.3821 149.453 79.3805 147.549L79.4472 147.485C81.4509 145.568 83.1745 144.016 83.2823 144.016C83.3685 144.016 85.3722 145.18 87.7206 146.58L88.5838 147.102C90.483 148.249 92.9473 147.718 94.2059 145.891V145.891C95.434 144.081 96.7051 142.207 97.0283 141.69C97.3515 141.194 97.6962 140.785 97.7609 140.785C97.8471 140.785 99.937 141.474 102.415 142.293C104.914 143.133 107.069 143.779 107.219 143.758C107.392 143.715 108.297 141.69 109.266 139.233C109.979 137.442 110.635 135.838 110.965 135.089C111.099 134.786 111.347 134.613 111.678 134.625C112.434 134.651 113.971 134.781 115.708 134.967C118.121 135.226 120.362 135.441 120.707 135.463V135.463C121.061 135.487 121.375 135.238 121.432 134.888L122.129 130.594C122.581 127.9 122.991 125.638 123.034 125.595C123.098 125.53 125.339 125.25 128.054 124.949C130.747 124.647 133.009 124.367 133.052 124.324C133.096 124.281 133.031 122.471 132.902 120.295C132.794 118.119 132.665 115.856 132.643 115.275V115.275C132.605 114.652 132.989 114.08 133.58 113.88L137.297 112.625C138.673 112.17 139.928 111.745 140.814 111.436C141.686 111.131 142.056 110.475 141.83 109.579C141.6 108.67 141.257 107.389 140.873 105.989C140.441 104.455 140.072 103.071 139.844 102.162C139.661 101.432 139.932 100.859 140.577 100.472C141.351 100.008 142.511 99.3131 143.782 98.5554C146.044 97.2195 147.962 96.0561 148.07 95.9484C148.156 95.8622 147.337 94.0523 146.195 91.9409C145.075 89.8294 143.998 87.8041 143.825 87.4379V87.4379C143.621 87.043 143.706 86.5608 144.031 86.2583L147.143 83.3658C149.147 81.4913 150.784 79.8969 150.784 79.8108C150.784 79.7461 149.319 77.9578 147.531 75.8679C146.227 74.3194 145.308 73.1649 144.829 72.4798C144.52 72.0375 144.609 71.5535 144.913 71.1071C145.415 70.3693 146.263 69.1088 147.186 67.7453C148.237 66.2173 149.158 64.8304 149.594 64.1579C149.774 63.8799 149.776 63.5952 149.532 63.3707C148.934 62.8188 147.577 61.725 146.001 60.5275C144.528 59.4189 143.223 58.4287 142.52 57.8915C142.153 57.6115 142.013 57.2419 142.166 56.807C142.457 55.9761 143.045 54.4491 143.739 52.728C144.752 50.1641 145.549 48.0095 145.506 47.9234C145.463 47.8372 143.437 46.8676 141.046 45.7688C138.633 44.67 136.607 43.722 136.521 43.6358C136.414 43.5281 137.189 38.4433 137.965 34.2204V34.2204C138.025 33.8459 137.782 33.4897 137.411 33.4095L133.289 32.5183C130.639 31.9366 128.377 31.3764 128.248 31.2471C128.097 31.0963 127.946 29.6743 127.86 27.5628C127.774 25.6668 127.666 23.4692 127.601 22.672V22.672C127.516 21.8378 126.816 21.2015 125.978 21.1944L122.387 21.1638L122.289 21.1626C119.334 21.125 116.758 19.1418 115.967 16.2945V16.2945C115.234 13.6444 114.609 11.4468 114.566 11.4037C114.523 11.3606 112.347 11.813 109.74 12.3948C107.133 12.9765 104.914 13.4505 104.785 13.4505C104.677 13.4505 103.514 11.4683 102.242 9.03368C100.95 6.59903 99.8292 4.61684 99.7431 4.61684C99.6569 4.61684 97.5885 5.5433 95.1323 6.66367C92.6977 7.78403 90.6508 8.71049 90.6078 8.71049C90.5431 8.71049 89.0134 6.9653 87.2251 4.8323L85.0401 2.24483C84.4308 1.52329 83.3611 1.41016 82.6144 1.98829V1.98829C81.9034 2.57002 80.072 3.97047 78.5638 5.11239L77.7056 5.76947C76.5887 6.62457 75.0336 6.61127 73.9315 5.73721V5.73721C72.8758 4.94002 71.066 3.53956 69.8594 2.63465V2.63465C68.6381 1.71569 66.9119 1.90983 65.9253 3.0771L64.6238 4.61684Z" fill="#99C997" />
                            <circle cx="75.7845" cy="75.9539" r="56.6395" fill="#3CA631" />
                            <path d="M50.479 81.5532L68.4965 95.6015L103.601 56.3062" stroke="white" stroke-width="8" stroke-linecap="round" />
                        </svg>
                    </div>

                    <h1 className="text-center font-semibold text-2xl my-4 text-[#13797D] leading-none tracking-wide">Self verfication done <br />successfully</h1>
                    <div className="space-y-1">
                        <div className="flex justify-between items-center">
                            <p className="label text-sm">Pass number</p>
                            <p className="value text-sm text-[#112C35]">
                                TPASS2145877
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="label text-sm">Pass type</p>
                            <p className="value text-sm text-[#112C35]">
                                monthly
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="label text-sm">Pass valid till</p>
                            <p className="value text-sm text-[#112C35]">
                                29 Nov 2023, 11:59 PM
                            </p>
                        </div>
                    </div>
                    <hr className="my-2 text-gray/70" />

                    <div className="flex justify-between items-center">
                        <p className=" text-lg font-medium text-[#112C35]">
                            Pass fare
                        </p>
                        <p className="label text-lg font-medium text-[#112C35]">
                            ₹ 1050.0
                        </p>
                    </div>

                    <div className="flex justify-center items-center my-2">
                        <div onClick={() => { setShowSuccess(!setShowSuccess) }} className="px-6 py-3 bg-[#112C35] text-white rounded-lg">OK</div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SuccessAlert