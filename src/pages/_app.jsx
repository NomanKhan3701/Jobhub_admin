import Layout from "@/containers/Layout/Layout"
import { store } from "@/store/configureStore"
import { Provider, useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "@/assets/styles/globals.scss"
import "@/assets/styles/utils.scss"

export default function App({ Component, pageProps }) {

  return <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}
