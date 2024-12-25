import { useMatches } from 'react-router-dom'

export const useRouteMatch = () => {
  const matches = useMatches()

  return (pathname: string) => {
    return matches.some((match) => match.pathname === pathname)
  }
}
