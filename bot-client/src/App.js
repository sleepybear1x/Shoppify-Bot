import Card from "./Card"

function App() {
  return (
    <div className="App">
      <p>
      <div className="flexbox">
      <Card 
      color="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
      label="View your"
      title="Preferences"
      description="Hello there, my name is jack and I like to eat pie!"
      />
      <Card 
      color="linear-gradient(130deg, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)"
      label="Check your "
      title="Tasks"
      description="View and create all of your automations."
      />
    </div>
    </p>
    </div>
  );
}
export default App;
