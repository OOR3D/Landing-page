"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { GradientButton } from '@/components/ui/gradient-button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  email: string
  imvuName: string
  discordTag: string
  motivation: string
  socialLink: string
  notes: string
}

export default function EarlyAccessForm({ onSubmitSuccess }: { onSubmitSuccess?: () => void }) {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    imvuName: '',
    discordTag: '',
    motivation: '',
    socialLink: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { toast } = useToast()
  const submitEarlyAccess = useMutation(api.earlyAccess.submitEarlyAccess)

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Valid email required'
    }
    if (!formData.imvuName.trim()) {
      newErrors.imvuName = 'IMVU name required'
    }
    if (!formData.discordTag.trim()) {
      newErrors.discordTag = 'Discord tag required'
    }
    if (!formData.motivation.trim() || formData.motivation.length < 10) {
      newErrors.motivation = 'Tell us your motivation (min 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      await submitEarlyAccess({
        email: formData.email.trim().toLowerCase(),
        imvuName: formData.imvuName.trim(),
        discordTag: formData.discordTag.trim(),
        motivation: formData.motivation.trim(),
        socialLink: formData.socialLink.trim() || '',
        notes: formData.notes.trim() || '',
      })

      setSubmitSuccess(true)
      localStorage.setItem("oor3d_early_access_submitted", "true")

      toast({
        title: "Application Submitted! 📝",
        description: "Thank you for your belief in OOR3D™!",
      })

      // Call the callback if provided
      onSubmitSuccess?.()

      // Reset form
      setFormData({
        email: '',
        imvuName: '',
        discordTag: '',
        motivation: '',
        socialLink: '',
        notes: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while submitting your request'
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'bg-[#0A0C13] border border-gray-800 focus:border-2 focus:border-red-400 focus-visible:ring-0 rounded-xl text-white placeholder:text-gray-500'
  const labelClasses = 'text-sm font-medium text-gray-300 mb-2'

  // Show success state
  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto space-y-8"
      >
        {/* Success Message */}
        <div className="text-center py-12 px-6 bg-[#0a0c13] rounded-2xl border border-gray-700/50 backdrop-blur-xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-6xl mb-4">✓</div>
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Application Received
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Thank you for submitting your early access application. Our team will review your submission and we'll notify you if you made it to early access.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Label htmlFor="email" className={labelClasses}>
            Email Address <span className="text-red-400">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="your@email.com"
            required
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </motion.div>

        {/* IMVU Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Label htmlFor="imvuName" className={labelClasses}>
            IMVU Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="imvuName"
            name="imvuName"
            type="text"
            value={formData.imvuName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your IMVU username"
            required
          />
          {errors.imvuName && (
            <p className="text-red-400 text-sm mt-1">{errors.imvuName}</p>
          )}
        </motion.div>

        {/* Discord Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Label htmlFor="discordTag" className={labelClasses}>
            Discord Tag <span className="text-red-400">*</span>
          </Label>
          <Input
            id="discordTag"
            name="discordTag"
            type="text"
            value={formData.discordTag}
            onChange={handleChange}
            className={inputClasses}
            placeholder="username#0000"
            required
          />
          {errors.discordTag && (
            <p className="text-red-400 text-sm mt-1">{errors.discordTag}</p>
          )}
        </motion.div>

        {/* Social Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Label htmlFor="socialLink" className={labelClasses}>
            Social Link <span className="text-gray-500">(optional)</span>
          </Label>
          <Input
            id="socialLink"
            name="socialLink"
            type="url"
            value={formData.socialLink}
            onChange={handleChange}
            className={inputClasses}
            placeholder="https://twitter.com/yourhandle"
          />
        </motion.div>

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Label htmlFor="motivation" className={labelClasses}>
            Why do you want early access? Be as descriptive as possible <span className="text-red-400">*</span>
          </Label>
          <Textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className={`${inputClasses} min-h-[100px] resize-none`}
            placeholder="Tell us why you're interested in OOR3D..."
            required
          />
          {errors.motivation && (
            <p className="text-red-400 text-sm mt-1">{errors.motivation}</p>
          )}
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Label htmlFor="notes" className={labelClasses}>
            Additional Notes <span className="text-gray-500">(optional)</span>
          </Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className={`${inputClasses} min-h-[80px] resize-none`}
            placeholder="Anything else you'd like us to know?"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-4"
        >
          <GradientButton
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg"
          >
            {isSubmitting ? 'Adding...' : 'Add me to the waiting list'}
          </GradientButton>
        </motion.div>
      </form>
    </motion.div>
  )
}
