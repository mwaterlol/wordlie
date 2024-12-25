import {
  ButtonProps,
  createPolymorphicComponent,
  UnstyledButton,
  Box,
} from '@mantine/core'
import { forwardRef } from 'react'

export const MetallicButton = createPolymorphicComponent<
  'button',
  ButtonProps & { withShine?: boolean }
>(
  forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    ({ children, ...props }, ref) => (
      <UnstyledButton
        ref={ref}
        w={'100%'}
        h={31}
        px={12.5}
        sx={() => ({
          borderRadius: 29,
          cursor: 'default',
          position: 'relative',
          fontSize: 13.25,
          lineHeight: '20.54px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '0.828px solid #FFF',
          fontWeight: 600,
          boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.1), 
        `,
          ...(props.sx as any),
        })}
        maw="fit-content"
        {...props}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            background: 'white',
            left: '50%',
            bottom: -3.67,
            transform: 'translate(-50%)',
            filter: 'blur(3.3128833770751953px)',
            opacity: 0.2,
          }}
          w={57}
          h={6}
        />
        <Box
          w={24}
          h={24}
          sx={{
            position: 'absolute',
            left: -4.5,
            top: -5,
            transform: 'rotate(15deg)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.8" filter="url(#filter0_f_2_350)">
              <path
                d="M6.92784 8.87667C8.99339 4.79074 15.6558 2.3044 18.5542 2.40868C16.1467 3.52498 13.3509 4.57401 10.924 6.13378C8.37523 8.40117 5.56809 13.7932 6.35858 16.4685C6.13998 19.3939 6.88785 24.3188 6.01469 21.4652C5.14152 18.6115 4.3459 13.9841 6.92784 8.87667Z"
                fill="url(#paint0_linear_2_350)"
              />
            </g>
            <g opacity="0.5" filter="url(#filter1_f_2_350)">
              <path
                d="M6.92784 8.87667C8.99339 4.79074 15.6558 2.3044 18.5542 2.40868C16.1467 3.52498 13.3509 4.57401 10.924 6.13378C8.37523 8.40117 5.56809 13.7932 6.35858 16.4685C6.13998 19.3939 6.88785 24.3188 6.01469 21.4652C5.14152 18.6115 4.3459 13.9841 6.92784 8.87667Z"
                fill="url(#paint1_linear_2_350)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2_350"
                x="4.34701"
                y="1.5773"
                width="15.0354"
                height="21.5754"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.41411"
                  result="effect1_foregroundBlur_2_350"
                />
              </filter>
              <filter
                id="filter1_f_2_350"
                x="3.51879"
                y="0.749076"
                width="16.6919"
                height="23.2318"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.828221"
                  result="effect1_foregroundBlur_2_350"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2_350"
                x1="19.6691"
                y1="11.7041"
                x2="8.86999"
                y2="0.158183"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_350"
                x1="19.6691"
                y1="11.7041"
                x2="8.86999"
                y2="0.158183"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </UnstyledButton>
    )
  )
)
