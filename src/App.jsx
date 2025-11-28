import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppErrorBoundary } from './components/ErrorBoundary';
import Homepage from './pages/Homepage';
import NotFound from './pages/404';

function App() {
  return (
    <AppErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter basename="/rafilio">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Toast notifications */}
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                  border: '1px solid var(--toast-border)',
                },
              }}
            />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </AppErrorBoundary>
  );
}

export default App;
