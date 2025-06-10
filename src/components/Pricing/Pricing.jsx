import React from 'react'
import Container from '../Layout/Container'
import user from '../../assets/pricinguser1.png'
import user1 from '../../assets/pricinguser2.png'
import user2 from '../../assets/pricinguser3.png'
import { GiCheckMark } from "react-icons/gi";
import Flex from '../Layout/Flex/Flex';

const item = [
    {   user:user,
        title: "Personal",
        price: "$10/mth",
        description: "Annual pricing (save 20%)",
        features: ["Calendar View",
            "Custom Templates",
            "List View",
            "Board View",
            "Assignees & Due Dates"
        ]


    },
    {   user:user1,
        title: "Team",
        price: "$25/mth",
        description: "Annual pricing (save 35%)",
        features: ["Timeline Review",
            "Custom fields",
            "Custom Templates",
            "Task dependencies",
            "Milestones Manage"
        ]
    },
    {   user:user2,
        title: "Enterprise",
        price: "$50/mth",
        description: "Annual pricing (save 40%)",
        features: ["Data export & deletion",
            "Block native integrations",
            "Custom branding",
            "Lock custom fields",
            "Priority support"
        ]

    },
    
]


const Pricing = () => {
    return (
        <section id='pages' className='py-[140px]'>
            <Container>
                <div className='text-center'>
                    <h2 className='md:w-[624px] font-bold text-[34px] md:text-[46px] text-title font-primary m-auto
                    leading-[56px]'>Pricing Designed To Fit Your Business</h2>
                    <p className='font-primary font-bold text-[24px] text-primary '>Monthly</p>
                </div>
                {/* <Flex className='justify-between mt-[77px]'>
                <div className='group duration-300 ease-in hover:bg-primary w-[450px] border border-[#DCE7FE] rounded-[20px]  py-[40px] text-center'>
                    <div className='w-[90px] h-[90px] rounded-full m-auto bg-[#E8F2FA] flex justify-center items-center'>
                        <img src={user} alt="#user" />

                    </div>
                    <div className='mt-[32px]'>
                        <h5 className='font-primary text-primary text-2xl font-bold duration-300 ease-in group-hover:text-[#43E7DF]'>Personal</h5>
                        <h3 className='group-hover:text-white duration-300 ease-in font-primary text-title text-[44px] font-bold leading-[54px]'>$10/mth</h3>
                        <p className='font-secondary text-discription font-medium text-lg mt-[2px] group-hover:text-white mb-[14px] duration-300 ease-in'>Annual pricing <span  className='group-hover:text-[#43E7DF] duration-300 ease-in text-primary'>(save 20%)</span></p>
                    </div>

                    <div className='my-[40px] px-[60px]'>
                        <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Calendar View</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Custom Templates</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>list view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>board view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Assignees & Due Dates</p>

                    </div>
                    </div>
                    <a className="font-secondary text-lg font-medium py-5 px-[104px] bg-primary rounded-[6px] text-white group-hover:bg-[#43E7DF] duration-300 ease-in group-hover:text-[#2C2643]">Purchase Now</a>
                </div>
                <div className='group duration-300 ease-in hover:bg-primary w-[450px] border border-[#DCE7FE] rounded-[20px]  py-[40px] text-center'>
                    <div className='w-[90px] h-[90px] rounded-full m-auto bg-[#E8F2FA] flex justify-center items-center'>
                        <img src={user} alt="#user" />

                    </div>
                    <div className='mt-[32px]'>
                        <h5 className='font-primary text-primary text-2xl font-bold duration-300 ease-in group-hover:text-[#43E7DF]'>Personal</h5>
                        <h3 className='group-hover:text-white duration-300 ease-in font-primary text-title text-[44px] font-bold leading-[54px]'>$10/mth</h3>
                        <p className='font-secondary text-discription font-medium text-lg mt-[2px] group-hover:text-white mb-[14px] duration-300 ease-in'>Annual pricing <span  className='group-hover:text-[#43E7DF] duration-300 ease-in text-primary'>(save 20%)</span></p>
                    </div>

                    <div className='my-[40px] px-[60px]'>
                        <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Calendar View</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Custom Templates</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>list view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>board view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Assignees & Due Dates</p>

                    </div>
                    </div>
                    <a className="font-secondary text-lg font-medium py-5 px-[104px] bg-primary rounded-[6px] text-white group-hover:bg-[#43E7DF] duration-300 ease-in group-hover:text-[#2C2643]">Purchase Now</a>
                </div>
                <div className='group duration-300 ease-in hover:bg-primary w-[450px] border border-[#DCE7FE] rounded-[20px]  py-[40px] text-center'>
                    <div className='w-[90px] h-[90px] rounded-full m-auto bg-[#E8F2FA] flex justify-center items-center'>
                        <img src={user} alt="#user" />

                    </div>
                    <div className='mt-[32px]'>
                        <h5 className='font-primary text-primary text-2xl font-bold duration-300 ease-in group-hover:text-[#43E7DF]'>Personal</h5>
                        <h3 className='group-hover:text-white duration-300 ease-in font-primary text-title text-[44px] font-bold leading-[54px]'>$10/mth</h3>
                        <p className='font-secondary text-discription font-medium text-lg mt-[2px] group-hover:text-white mb-[14px] duration-300 ease-in'>Annual pricing <span  className='group-hover:text-[#43E7DF] duration-300 ease-in text-primary'>(save 20%)</span></p>
                    </div>

                    <div className='my-[40px] px-[60px]'>
                        <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Calendar View</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Custom Templates</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>list view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>board view</p>

                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                            <GiCheckMark className='text-sm' />

                        </div>
                        <p className='font-secondary text-discription  text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>Assignees & Due Dates</p>

                    </div>
                    </div>
                    <a className="font-secondary text-lg font-medium py-5 px-[104px] bg-primary rounded-[6px] text-white group-hover:bg-[#43E7DF] duration-300 ease-in group-hover:text-[#2C2643]">Purchase Now</a>
                </div>
               </Flex> */}


                <Flex className='justify-between mt-[77px] gap-[20px] flex-wrap'>
                    {item.map((itmes, index) => (
                        <div
                            key={index}
                            className='group duration-300 ease-in hover:bg-primary w-[450px] border border-[#DCE7FE] rounded-[20px] py-[40px] text-center'
                        >
                            <div className='w-[90px] h-[90px] rounded-full m-auto bg-[#E8F2FA] flex justify-center items-center'>
                                <img src={itmes.user} alt="#user" />
                            </div>

                            <div className='mt-[32px]'>
                                <h5 className='font-primary text-primary text-2xl font-bold duration-300 ease-in group-hover:text-[#43E7DF]'>
                                    {itmes.title}
                                </h5>
                                <h3 className='group-hover:text-white duration-300 ease-in font-primary text-title text-[44px] font-bold leading-[54px]'>
                                    {itmes.price}
                                </h3>
                                <p className='font-secondary text-discription font-medium text-lg mt-[2px] group-hover:text-white mb-[14px] duration-300 ease-in'>
                                    {itmes.description.split(' (')[0]}{' '}
                                    <span className='group-hover:text-[#43E7DF] duration-300 ease-in text-primary'>
                                        ({itmes.description.split(' (')[1]})
                                    </span>
                                </p>
                            </div>

                            <div className='my-[40px] px-[60px]'>
                                {itmes.features.map((feature, i) => (
                                    <div key={i} className=' flex mb-[26px]'>
                                        <div className='w-[24px] h-[24px] rounded-full bg-[#E8F2FA] flex justify-center items-center'>
                                            <GiCheckMark className='text-sm' />
                                        </div>
                                        <p className='font-secondary text-discription text-lg font-medium ml-[22px] group-hover:text-white duration-300 ease-in'>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <a className='font-secondary text-lg font-medium py-5 px-[104px] bg-primary rounded-[6px] text-white group-hover:bg-[#43E7DF] duration-300 ease-in group-hover:text-[#2C2643]'>
                                Purchase Now
                            </a>
                        </div>
                    ))}
                </Flex>

            </Container>

        </section>
    )
}

export default Pricing
