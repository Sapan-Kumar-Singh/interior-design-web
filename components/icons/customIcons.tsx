

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

export const WhatsappIcon = ({size=14, className=""}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
    >
      <path d="M16.001 3C8.821 3 3 8.821 3 16c0 2.543.741 5.02 2.143 7.143L3 29l5.999-2.099A12.932 12.932 0 0 0 16.001 29C23.18 29 29 23.179 29 16S23.18 3 16.001 3zm0 23.667a10.58 10.58 0 0 1-5.391-1.475l-.386-.229-3.56 1.245 1.191-3.462-.252-.399A10.57 10.57 0 0 1 5.333 16c0-5.882 4.785-10.667 10.668-10.667 5.881 0 10.666 4.785 10.666 10.667 0 5.881-4.785 10.667-10.666 10.667zm5.852-7.977c-.319-.159-1.885-.931-2.177-1.037-.293-.106-.506-.159-.719.16-.212.318-.824 1.037-1.01 1.25-.186.212-.372.239-.691.08-.319-.16-1.347-.496-2.565-1.582-.948-.845-1.588-1.887-1.774-2.206-.186-.319-.02-.491.139-.65.143-.142.319-.372.478-.558.16-.186.213-.319.319-.531.106-.213.053-.399-.026-.558-.08-.16-.719-1.727-.984-2.365-.259-.622-.523-.537-.719-.547l-.612-.011c-.213 0-.558.08-.851.399-.292.319-1.116 1.09-1.116 2.657 0 1.568 1.143 3.082 1.302 3.294.16.213 2.25 3.438 5.452 4.818.762.329 1.356.525 1.819.672.764.243 1.46.209 2.01.127.613-.091 1.885-.771 2.151-1.515.266-.744.266-1.382.186-1.515-.079-.133-.292-.213-.611-.372z" />
    </svg>
  );
};