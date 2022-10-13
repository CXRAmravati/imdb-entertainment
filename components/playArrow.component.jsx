import * as React from "react"

function PlayButton(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_2_7381)">
        <circle cx={28} cy={28} r={28} fill="#151411" fillOpacity={0.6} />
      </g>
      <path d="M39 28.392l-18 9.393V19l18 9.392z" fill="#fff" />
      <defs>
        <filter
          id="filter0_b_2_7381"
          x={-40}
          y={-40}
          width={136}
          height={136}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={20} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2_7381"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2_7381"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default PlayButton
