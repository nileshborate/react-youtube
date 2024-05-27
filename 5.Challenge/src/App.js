import './App.css'

function App() {
  const hour = new Date().getHours()
  console.log('Hour = ', hour)

  let greetings = ''
  let colorStyle = {
    color: 'black',
  }

  if (hour >= 1 && hour < 12) {
    greetings = 'Good Morning'
    colorStyle.color = 'red'
  } else if (hour >= 12 && hour < 19) {
    greetings = 'Good Afternoon'
    colorStyle.color = 'green'
  } else {
    greetings = 'Good Night'
    colorStyle.color = 'orange'
  }

  return <h1 style={colorStyle}>Hello Sir, {greetings}</h1>
}

export default App
