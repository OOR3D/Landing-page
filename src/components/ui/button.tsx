'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Inject icon hover styles on the client only, inside a React effect to prevent hydration issues
function useButtonIconStyles() {
  React.useEffect(() => {
    if (typeof document !== 'undefined' && !document.head.querySelector('style[data-button-icon-hover]')) {
      const style = document.createElement('style')
      style.textContent = `
        .button-default-icon-hover img {
          transition: filter 0.3s ease;
        }
        .button-default-icon-hover:hover img,
        .button-default-icon-hover:active img {
          filter: brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(1deg) brightness(97%) contrast(111%);
        }
        .button-default-with-blur {
          transition: backdrop-filter 0.3s ease;
          z-index: 1;
        }
        .button-default-with-blur:hover {
          backdrop-filter: blur(8px);
        }
        .button-default-with-blur:disabled:has(.animate-spin) {
          backdrop-filter: blur(8px);
        }
        .button-outline-with-blur {
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
        }
        .button-outline-with-blur:hover {
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
        }
      `
      style.setAttribute('data-button-icon-hover', 'true')
      document.head.appendChild(style)
    }
  }, [])
}

const buttonVariants = cva(
  'inline-flex items-center rounded-full justify-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not(.animate-spin)]:size-4 [&_svg]:shrink-0 [&_img]:transition-all [&_img]:duration-300 cursor-pointer group focus:outline-none focus-visible:outline-none relative',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:text-primary active:text-primary border border-primary hover:bg-primary/20 active:bg-primary/20 disabled:text-foreground disabled:border-white/20 disabled:bg-[#D9D9D91A] button-default-icon-hover button-default-with-blur',
        outline: '!transition-[background-color,border-color,box-shadow,color] border border-input/20 text-[#fdfcff] hover:bg-transparent hover:border-white/40 hover:text-white active:bg-transparent active:border-white/40 active:text-white duration-300 ease-out disabled:opacity-50 disabled:text-foreground disabled:border-white/20 disabled:bg-[#D9D9D91A] button-outline-with-blur backdrop-blur-md',
        // Adding custom red variant to match landing page design but using the button structure
        red: 'bg-[#FE0101] text-white hover:text-[#FE0101] hover:bg-[#FE0101]/20 border border-transparent hover:border-[#FE0101] active:bg-[#FE0101]/20 active:border-[#FE0101] button-default-with-blur',
      },
      size: {
        default: 'h-10 px-4 py-2 w-[254px]',
        sm: 'h-10 px-4 sm:px-8 py-2 w-full sm:w-max',
        xs: 'h-8 px-3 py-1.5 text-xs w-max',
        icon: 'h-10 w-10',
        lg: 'h-12 px-8 py-4 text-lg w-auto', // Added lg for landing page
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
    
    // Inject icon hover styles on mount to avoid hydration mismatch
    useButtonIconStyles()
    
    // Add blur styles for outline variant (only backdrop blur, let className handle background color)
    const blurStyles = variant === 'outline' ? {
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    } : {}
    
    // When asChild is true, we need to wrap everything in a single element
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          data-sound="true"
          disabled={disabled || isLoading}
          style={{
            ...blurStyles,
            ...(props.style || {}),
          }}
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
        style={{
          ...blurStyles,
          ...(props.style || {}),
        }}
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
