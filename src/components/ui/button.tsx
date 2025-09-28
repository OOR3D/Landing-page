'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Add CSS for icon hover effects - only for default variant buttons
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    .button-default-icon-hover img,
    .button-default-icon-hover svg {
      transition: filter 0.3s ease;
    }
    .button-default-icon-hover:hover img,
    .button-default-icon-hover:hover svg {
      filter: brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(1deg) brightness(97%) contrast(111%);
    }
  `
  if (!document.head.querySelector('style[data-button-icon-hover]')) {
    style.setAttribute('data-button-icon-hover', 'true')
    document.head.appendChild(style)
  }
}

const buttonVariants = cva(
  'inline-flex items-center rounded-full justify-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_img]:transition-all [&_img]:duration-300 cursor-pointer group',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:text-primary border border-primary hover:bg-primary/20 disabled:text-foreground disabled:border-white/20 disabled:bg-[#D9D9D91A] button-default-icon-hover',
        outline: 'border border-input/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-md transition-all duration-300 ease-out disabled:text-foreground disabled:border-white/20 disabled:bg-[#D9D9D91A]',
      },
      size: {
        default: 'h-10 px-4 py-2 w-[254px]',
        sm: 'h-10 px-4 sm:px-8 py-2 w-full sm:w-max',
        lg: 'h-12 px-6 py-3 text-lg w-max',
        xs: 'h-8 px-3 py-1.5 text-xs w-max',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    // When asChild is true, we need to wrap everything in a single element
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          data-sound="true"
          disabled={disabled || isLoading}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-sound="true"
        disabled={disabled || isLoading}
        // Prevent focus-scroll jumps in nested scroll containers
        onMouseDown={(e: React.MouseEvent) => {
          // Only blur if this is NOT a submit button to avoid interfering with form submission
          const button = e.currentTarget as HTMLButtonElement;
          if (button.type !== 'submit') {
            // If this button is inside a scrollable container, avoid it becoming focused anchor
            // This stops browsers from auto-scrolling the nearest container to reveal the focus target
            try { button.blur?.() } catch {}
          }
        }}
        {...props}
      >
        {isLoading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
export default class Input {}


