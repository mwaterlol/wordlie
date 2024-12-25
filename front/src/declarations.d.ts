declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.svg?react' {
  const content: React.ComponentType<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module 'react-lottie'

declare module 'qs'
