import MainPlain from './components/planes/MainPlane';
import Sidebar from './components/system/SideBar';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className={'flex flex-row h-full'}>
        <Sidebar />
        <MainPlain />
      </div>
    </Provider>
  )
}

export default App
