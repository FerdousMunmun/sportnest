import { Button, FieldError, Input, Label, ListBox, TextField,Select, TextArea, Card } from '@heroui/react'
import React from 'react'

const AddFacilityPage = () => {

   const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const facility = Object.fromEntries(formData.entries())

        console.log(facility)
  return (
    <div className='p-5 max-w-7xl mx-auto'>
     <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight my-5">
  Add{" "}
  <span className="text-orange-500">
    Facility
  </span>
</h1>
      <Card>
        <form
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="facilityName" isRequired>
                  <Label>Facility Name</Label>
                  <Input placeholder="Victory Basketball Cour" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input placeholder="Mohammadpur, Dhaka" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
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
              <TextField name="price" type="number" isRequired>
                <Label>Price PerHour</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="slots" type="number" isRequired>
                  <Label>slots</Label>
                  <Input type="1234" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
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
                <TextField name="description" isRequired>
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

            <Button
              type="submit"
              variant="outline"
             
              className=" rounded-none w-full bg-orange-500 text-white"
            >Add Facility
              
            </Button>
          </form>
      </Card>
    </div>
  )
}

export default AddFacilityPage