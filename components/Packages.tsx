import Link from "next/link";

export default function Packages() {

    const plans = [
        {
            name: "Basic plan",
            buy: "https://buy.stripe.com/dRmfZgeA24Rx61u3sU24001",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 150,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "Startup",
            buy: "https://buy.stripe.com/bJe7sKeA22Jp1LebZq24002",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 350,
            isMostPop: true,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Enterprise",
            buy: "https://buy.stripe.com/aFa7sKdvYes7cpSbZq24003",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 550,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section className='py-14 bg-white'>
            <div className="max-w-screen-xl mx-auto px-4 text-[#22240c] md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-[#22240c] text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Choose the package that best fits your needs. Whether you are a startup, an established business, or an enterprise, we have a plan for you. Each package is designed to provide the best value and features to help you succeed.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-green-700 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-[#22240c] text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-[#22240c] font-normal">/mo</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <Link href={item.buy}>
                                        <button className='cursor-pointer w-full px-4 py-2 bg-[#22240c] text-white rounded-md hover:bg-green-700 transition-colors duration-200'>
                                            Buy now
                                        </button>
                                    </Link>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-[#22240c] font-medium">
                                        <p>Features</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-green-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clipRule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
