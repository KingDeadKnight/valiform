import ValiForm from "@/components/valiform";
import { email, minLength, object, string } from "valibot";

function App() {

  const TestSchema = object({
    test: object({
      cc: string()
    }),
    email: string([email()]),
    password: string([minLength(8, 'Error')]),
  });

  return (
    <>
      <div>
        <ValiForm schema={TestSchema}/>
      </div>
    </>
  )
}

export default App