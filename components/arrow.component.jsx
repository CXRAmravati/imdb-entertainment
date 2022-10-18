import * as React from "react"

function Arrow(props) {
  return (
    <svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_2_5589)">
        <rect
          width={52}
          height={52}
          rx={26}
          transform="matrix(-1 0 0 1 52 0)"
          fill="#151411"
          fillOpacity={0.6}
        />
        <path
          d="M22.91 33.92l6.52-6.52c.77-.77.77-2.03 0-2.8l-6.52-6.52"
          stroke="#fff"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2_5589"
          x={-15}
          y={-15}
          width={82}
          height={82}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={7.5} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2_5589"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2_5589"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Arrow
