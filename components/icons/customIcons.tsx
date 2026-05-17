

export const InstagramIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const LinkedinIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon=({size=14,className=""})=>(
     <svg 
     width={size}
     height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
       strokeWidth={2} 
       strokeLinecap="round" 
       strokeLinejoin="round"
       className={className}
       >
      <path d="M4 4l16 16M4 20L20 4" />
    </svg>
)

export const YoutubeIcon=({size=14,className=""})=>(
     <svg 
     width={size}
     height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
       strokeWidth={2} 
       strokeLinecap="round" 
       strokeLinejoin="round"
       className={className}
       >
        <rect x="2" y="7" width="20" height="15" rx="2" />
      <path d="M10 12l5 3-5 3V12z" fill="currentColor" stroke="none" />
    </svg>
)



export const ForwardTriangleIcon = ({size=14,className=""}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
export const BackwardTriangleIcon = ({size=14,className=""}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 5 5 12l11 7z" />
    </svg>
  )
}