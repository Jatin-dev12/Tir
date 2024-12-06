import { Center, Stack, Text } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,Box,Heading
} from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"
import { MdKeyboardArrowDown } from "react-icons/md";


const items = [
  { value: "a", title: "Are you looking to escalate you business to global market?", text:"We estimate the time needed to complete your project based on the content of your presentation and our experience with similar projects." },
  { value: "b", title: "What do we provide? ", text: <LoremIpsum p={1} /> },
  { value: "c", title: "Lorem ipsum dolor sit amet consectetur?", text: <LoremIpsum p={1} /> },
  { value: "d", title: "Lorem ipsum dolor sit amet consectetur?", text: <LoremIpsum p={1} /> },

  { value: "e", title: "Lorem ipsum dolor sit amet consectetur?", text: <LoremIpsum p={1} /> },

]

const Faq = () => {
  return (
    <section className="Faq">
        <Box className="f-box" pb={5}>
        <Heading padding={10} colorPalette="white">
        Why Trust Us?
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id mattis placerat congue nam
          <br />
          Enim nunc vulputate in nunc risus aliquet mattis quisque.
        </p>
      </Box>
      <Box className="accordins">
    <AccordionRoot collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value} >
          <AccordionItemTrigger>
            <Stack gap="1">
              <Text className="text-active">{item.title}</Text>
              <span className="accordion-arrow"><MdKeyboardArrowDown />
              </span>
            </Stack>
          </AccordionItemTrigger>
          <AccordionItemContent color={'white'}>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
    </Box>
    </section>
  )
}

export default Faq;