import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes'
import { Fragment } from 'react';
import Default from './components/Default/Default'
import Admin from './pages/Admin/Admin';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div>
              <CartProvider>
        <Router> 
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              let Layout;
              if (route.path === '/login' || route.path === '/payment') {
                Layout = Fragment; // Không áp dụng layout Admin hoặc Default
              } else {
                Layout = route.isShowHeader ? Default : route.path.startsWith('/admin') ? Admin : Fragment;
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router> 
        </CartProvider>
      </div>
  );
}

export default App;
