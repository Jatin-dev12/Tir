import { Stack, Text } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"

const items = [
  { value: "a", title: "First Item", text: <LoremIpsum p={1} /> },
  { value: "b", title: "Second Item", text: <LoremIpsum p={1} /> },
  { value: "c", title: "Third Item", text: <LoremIpsum p={1} /> },
]

const Faq = () => {
  return (
    <section className="Faq">
    <AccordionRoot collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>
            <Stack gap="1">
              <Text>{item.title}</Text>
              <Text fontSize="sm" color="fg.muted">
                Click to expand
              </Text>
            </Stack>
          </AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
    </section>
  )
}

export default Faq;