import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },
  indicator: {
    backgroundImage: `linear-gradient(45deg, #c029df 0%, #614FFE 100%)`,
  },
  control: {
    '&::before': {
      display: 'none',
    },
  },
  label: {
    '&, &:hover': {
      '[data-active]': {
        color: theme.white,
      },
    },
  },
}))
