import Image from "next/image"
import star from "@/public/assets/icons/Star-2.svg"
import Pill from "./Pill"
import axios from "axios"
import { PropertyProps } from "@/interfaces"
import { useEffect, useState } from "react"
import Link from "next/link"



const Card = () => {

    // const cardFeatures: TCardFeatures[] = [
    //     { id: 1, image: "/assets/image1.png", title: "Villa Arrecife Beach House", location: "Sidemen, Bali, Indonesia", bedsCount: 4, bathroom: 2, people: "2-4", price: 2450 },
    //     { id: 2, image: "/assets/image2.png", title: "Entire cabin ", location: "Nova Friburgo, Brazil", bedsCount: 1, bathroom: 1, people: "3", price: 62 },
    //     { id: 3, image: "/assets/image3.png", title: "Earthen home ", location: "Santa Marta, Colombia", bedsCount: 4, bathroom: 2, people: "6", price: 386 },
    //     { id: 4, image: "/assets/image4.png", title: "Private room ", location: "Moeda, Brazil", bedsCount: 1, bathroom: 1, people: "2", price: 134 },
    //     { id: 5, image: "/assets/image5.png", title: "Gokce Gemile Estate", location: "Kayaköy, Turkey", bedsCount: 6, bathroom: 6, people: "12", price: 980 },
    //     { id: 6, image: "/assets/image6.png", title: "Luxury 1000 sqm Villa...", location: "Marrakech, Morocco", bedsCount: 6, bathroom: 6, people: "12", price: 1430 },
    //     { id: 7, image: "/assets/image7.png", title: "Palais Hassoun Marrakech", location: "Marrakech, Morocco", bedsCount: 13, bathroom: 13, people: "26", price: 3450 },
    //     { id: 8, image: "/assets/image8.png", title: "Villa Lamp", location: "Benahavis, Spain, Morocco", bedsCount: 7, bathroom: 7, people: "12", price: 2041 },
    //     { id: 9, image: "/assets/image9.png", title: "Villa l 'Oui d' Or", location: "Marrakech, Morocco", bedsCount: 8, bathroom: 7, people: "14", price: 1009 },
    //     { id: 10, image: "/assets/image10.png", title: "Designer villa, pool not ...", location: "Marrakech, Morocco", bedsCount: 6, bathroom: 6, people: "12", price: 1289 },
    //     { id: 11, image: "/assets/image11.png", title: "Royal Zephyr - Marrakech", location: "Marrakech, Morocco", bedsCount: 6, bathroom: 7, people: "12", price: 1692 },
    //     { id: 12, image: "/assets/image12.png", title: "Rïad Mayo & Bungalows", location: "Sidi Abdallah Ghiat, Morocco", bedsCount: 21, bathroom: 18, people: "16+", price: 865 },
    //     { id: 13, image: "/assets/image13.png", title: "Casa de Carolina", location: "Playas de Vera, Spain", bedsCount: 1, bathroom: 1, people: "4", price: 215 },
    //     { id: 14, image: "/assets/image14.png", title: "Happy Valley Villa, Tuni...", location: "Qaroun, Egypt", bedsCount: 7, bathroom: 3, people: "8", price: 100 },
    //     { id: 15, image: "/assets/image15.png", title: "Almyros Residence ", location: "Lasithi, Greece", bedsCount: 6, bathroom: 4, people: "10", price: 747 },
    //     { id: 16, image: "/assets/image16.png", title: "Villa White Stone mode...", location: "Marrakech, Morocco", bedsCount: 7, bathroom: 6, people: "12", price: 1798 }
    // ]
    const [propertyData, setPropertyData] = useState<PropertyProps[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getCardData = async () => {

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`)
                // console.log(response.data)
                setPropertyData(response.data)

            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        }

        getCardData()
    }, [])


    if (loading) {
        return <p>Loading Properties...</p>;
    }


    return (
        <div className="max-w-[1728px] grid grid-cols-1 min-[900px]:grid-cols-2 2xl:grid-cols-4 gap-[37.13px] min-md:gap-[31px] justify-items-center 2xl:min-w-[1607.23px] lg:w-[944px] m-auto mt-[30px]">
            {propertyData?.map((item) => (

                <Link href={`/property/${item.id}`} key={item.id} className="h-[435px] lg:h-[505px] lg:w-[378.56px] md:w-[453.43px] 2xl:h-[422.7px] w-[360px] cursor-pointer  flex flex-col justify-between">
                    <div className="h-[308.41px]  lg:h-[358.58px] 2xl:h-[299.37px] relative">
                        <Image className="rounded-lg h-[262.71px] 2xl:h-[255px] lg:h-[305.44px]" src={item.image} alt={item.name} fill />

                    </div>
                    <div className="py-2 flex gap-2 mt-2">
                        {item.category.map((category, i) => (
                            <span key={`${category}-${i}`}>
                                <Pill title={category} />
                            </span>

                        ))}


                    </div>
                    <div className="flex items-start justify-between h-[52.68px] lg:h-[61.12px] 2xl:h-[51.6px] ">
                        <div>
                            <h3 className=" font-semibold text-[22px] line-clamp-1">{item.name}</h3>
                            <p className=" font-medium text-[17.5px] text-secondaryDarkColor">{item.address.state}, {item.address.city}, {item.address.country}</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={star} alt="star" className="w-[20.42] h-[19.42]" />
                            <p className=" font-medium text-[17.51px] ml-2">{item.rating.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 h-[38.12px] lg:h-[44.32px] 2xl:h-[37px]">
                        <div className=" grid grid-cols-3 border-[1.34px] border-shimmer min-w-[156px] rounded-full px-2 py-1">
                            <div className="flex items-center">
                                <Image src={"/assets/icons/bed.svg"} alt="bed" width={20.36} height={20.36} />
                                <p className="ml-1 text-[12.95px] font-medium">{item.offers.bed}</p>
                            </div>
                            <div className="flex items-center">
                                <Image src={"/assets/icons/bathtub.svg"} alt="shower" width={20.36} height={20.36} />

                                <p className="ml-1 text-[12.95px] font-medium">{item.offers.shower}</p>
                            </div>
                            <div className="flex items-center">
                                <Image src={"/assets/icons/people.svg"} alt="people" width={20.36} height={20.36} />

                                <p className="ml-1 text-[12.95px] font-medium">{item.offers.occupants}</p>
                            </div>
                        </div>
                        <p className=" text-[22px] font-semibold">${item.price}<span className=" text-[14px] text-secondaryDarkColor">/n</span></p>

                    </div>
                </Link>

            )

            )}
        </div>
    )
}

export default Card
