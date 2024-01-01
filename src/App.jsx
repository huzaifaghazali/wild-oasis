import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";

function App() {

  return (
    <>
    <GlobalStyles />
      <Heading as='h1'>The Wild Oasis</Heading>
      <Heading as='h2'>Check in and out</Heading>
      <Button>Hello</Button>
      <Input />
      <Heading as='h3'>Form</Heading>
    </>
  )
}

export default App
