
//import './App.css'
import { Provider, useSelector } from 'react-redux'
import { ContainerMap } from './components/ContainerMap/ContainerMap'
import GeoLocation from './components/GeoLocation/GeoLocation'
import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { Panel } from './components/Panel/Panel'
import { RootState, store } from './store/store'
import { Title } from './components/Title/Title'

function App() {
  const geo = useSelector((state: RootState) => state.geo);

  return (
    <Provider store={store}>
      <div style={{position: "relative"}}>
        <Header>
          <Title label="IP Address Tracker" />
          <Input />
          <GeoLocation ip={geo.ip } />
          <Panel />
        </Header>
        
        <ContainerMap />
      </div>
    </Provider>
  )
}

export default App
