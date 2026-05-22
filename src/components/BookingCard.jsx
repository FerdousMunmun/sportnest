"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";

const BookingCard = ({ facility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

   const { price, _id, facilityName,imageUrl, category,slots,bookingDate  } = facility;

  const handleBooking = async () => {
    const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        facilityId: _id,
       facilityName,
        price,
        imageUrl,
        slots,
        category,
        bookingDate: new Date( departureDate)
    }


    const {data:tokenData} = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
    })

    const data = await res.json();
    console.log(data)

    toast.success("You booked successfully!")





  }


 
  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-orange-500">${price}</h2>
      <p className="text-sm text-muted">per hour</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Booking Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      {/* <Button className={"w-full rounded-none bg-cyan-500"}>Book Now</Button> */}
       <Link href={'/my-bookings'}>
       <Button onClick={handleBooking} className="w-full md:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-300 shadow-lg">
            Book This Facility
          </Button>
       </Link>
    </Card>
  );
};

export default BookingCard;