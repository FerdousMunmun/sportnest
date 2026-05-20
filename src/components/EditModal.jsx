"use client";


import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";


 
const EditModal = ({facility}) => {
const {_id,
facilityName,
location,
category,
slots,
bookingDate,imageUrl,price,
description} = facility

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());  
    console.log(facility);
    const res = await fetch(`http://localhost:5000/facilities/${_id}`,{
      method: 'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(facility),
    })
const data = await res.json();
console.log(data);

    
}
  return   (
    <Modal>

      <Button variant="outline" className={"rounded-none"}>
          <BiEdit /> Edit
        </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Manage Facilities</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
        onSubmit={onSubmit}
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField  defaultValue={facilityName}
                name="facilityName" isRequired>
                  <Label>Facility Name</Label>
                  <Input
                 
                   placeholder="Victory Basketball Cour" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField defaultValue={location}
              name="location" isRequired>
                <Label>Location</Label>
                <Input placeholder="Mohammadpur, Dhaka" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                defaultValue={category}
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Footbal" textValue="Footbal">
                       Footbal
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Baskball" textValue="Baskball">
                      Baskball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Badminton" textValue="Badminton">
                       Badminton
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Tennis" textValue="Tennis">
                        Tennis
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Gym" textValue="Gym">
                        Gym
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cricket" textValue="Cricketl">
                        Cricket
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Swimming" textValue="Swimming">
                      Swimming
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField defaultValue={price}
              name="price" type="number" isRequired>
                <Label>Price PerHour</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField defaultValue={slots}
              name="slots" isRequired>
                <Label>slots</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField defaultValue={bookingDate}
                name="bookingDate" type="date" isRequired>
                  <Label>Booking Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField defaultValue={imageUrl}
                name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/cricket-filed.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField defaultValue={description}
                name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the all facilities..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            {/* <Button
              type="submit"
              variant="outline"
             
              className=" rounded-none w-full bg-orange-500 text-white"
            >Add Facility
              
            </Button> */}

            <Modal.Footer>
                    <Button type="submit" slot="close" className={"bg-orange-600"}>
                      Save
                    </Button>
                  </Modal.Footer>
          </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default EditModal