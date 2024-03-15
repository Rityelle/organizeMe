import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';


import Routes from '../Routes';

const App: React.FC = () => {
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
            <Toast />
        </GestureHandlerRootView>
    )
}

export default App;