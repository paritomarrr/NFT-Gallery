import { Provider, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import Nav from './components/nav';

function App() {
  // initialize wagmi library connectors for Metamask and Walletconnect
  // const connectors = () => {
  //   return [
  //     new InjectedConnector({ defaultChains }),
  //   ]
  // }
  //
  // return (
  //   <Provider autoConnect connectors={connectors}>
  //     <Nav>
  //     </Nav>
  //   </Provider>
  // );
}

export default App;
