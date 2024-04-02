import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Section from "./components/Section"

function App() {

  return (
    <div className="">
      <Layout className="bg-slate-200">
        <Hero />
        <Section>
          <h2>Hello World</h2>
        </Section>
        <Section customStyle="">
          <h2>Second Section</h2>
        </Section>
     </Layout>
    </div>
  )
}

export default App
