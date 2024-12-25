import ReactDOM from 'react-dom/client'

import { AppRouter } from './AppRouter'

import './mockEnv.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRouter />)
