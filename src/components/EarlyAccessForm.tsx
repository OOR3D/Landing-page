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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  email: string
  imvuName: string
  discordTag: string
  isInDiscordServer: boolean
  isImvuCreator: boolean
  imvuStoreLink: string
  imvuPlatform: string
  creationTools: string
  skillLevel: string
  motivation: string
  expectations: string
}

export default function EarlyAccessForm({ onSubmitSuccess }: { onSubmitSuccess?: () => void }) {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    imvuName: '',
    discordTag: '',
    isInDiscordServer: true,
    isImvuCreator: true,
    imvuStoreLink: '',
    imvuPlatform: '',
    creationTools: '',
    skillLevel: '',
    motivation: '',
    expectations: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { toast } = useToast()
  const submitEarlyAccess = useMutation(api.earlyAccess.submitEarlyAccess)

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Valid email required'
    }
    if (formData.isImvuCreator && !formData.imvuName.trim()) {
      newErrors.imvuName = 'IMVU name required'
    }
    if (formData.isInDiscordServer && !formData.discordTag.trim()) {
      newErrors.discordTag = 'Discord tag required'
    }
    if (!formData.isInDiscordServer) {
      newErrors.isInDiscordServer = 'You must be in our Discord server to apply'
    }
    if (!formData.motivation.trim() || formData.motivation.length < 10) {
      newErrors.motivation = 'Tell us your motivation (min 10 characters)'
    }
    if (!formData.expectations.trim() || formData.expectations.length < 10) {
      newErrors.expectations = 'Tell us your expectations (min 10 characters)'
    }
    if (formData.isImvuCreator && !formData.imvuStoreLink.trim()) {
      newErrors.imvuStoreLink = 'IMVU store link is required for creators'
    }
    if (formData.isImvuCreator && !formData.imvuPlatform.trim()) {
      newErrors.imvuPlatform = 'Please select which platform you use'
    }
    if (formData.isImvuCreator && !formData.creationTools.trim()) {
      newErrors.creationTools = 'What software(s) do you usually use to create on imvu?'
    }
    if (formData.isImvuCreator && !formData.skillLevel.trim()) {
      newErrors.skillLevel = 'Please select your skill level'
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

  const handleSelectChange = (name: string, value: string) => {
    if (name === 'isImvuCreator') {
      setFormData((prev) => ({ ...prev, isImvuCreator: value === 'yes' }))
    } else if (name === 'isInDiscordServer') {
      setFormData((prev) => ({ ...prev, isInDiscordServer: value === 'yes' }))
    } else if (name === 'imvuPlatform') {
      setFormData((prev) => ({ ...prev, imvuPlatform: value }))
    } else if (name === 'skillLevel') {
      setFormData((prev) => ({ ...prev, skillLevel: value }))
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
        imvuName: formData.imvuName.trim() || undefined,
        discordTag: formData.discordTag.trim() || undefined,
        isInDiscordServer: formData.isInDiscordServer,
        isImvuCreator: formData.isImvuCreator,
        imvuStoreLink: formData.imvuStoreLink.trim() || undefined,
        imvuPlatform: formData.imvuPlatform || undefined,
        creationTools: formData.creationTools.trim() || undefined,
        skillLevel: formData.skillLevel || undefined,
        motivation: formData.motivation.trim(),
        expectations: formData.expectations.trim(),
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
        isInDiscordServer: true,
        isImvuCreator: true,
        imvuStoreLink: '',
        imvuPlatform: '',
        creationTools: '',
        skillLevel: '',
        motivation: '',
        expectations: '',
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

        {/* Discord Server Membership */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Label htmlFor="isInDiscordServer" className={labelClasses}>
            Are you in the OOR3D Discord server? <span className="text-red-400">*</span>
          </Label>
          <Select onValueChange={(value) => handleSelectChange('isInDiscordServer', value)} value={formData.isInDiscordServer ? 'yes' : 'no'}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-[#0A0C13] border-gray-800">
              <SelectItem value="yes" className="text-white hover:bg-gray-800 cursor-pointer">Yes</SelectItem>
              <SelectItem value="no" className="text-white hover:bg-gray-800 cursor-pointer">No</SelectItem>
            </SelectContent>
          </Select>
          {errors.isInDiscordServer && (
            <p className="text-red-400 text-sm mt-1">{errors.isInDiscordServer}</p>
          )}
          {!formData.isInDiscordServer && (
            <p className="text-red-400 text-sm mt-2">
              You must join our Discord server to apply for early access.{' '}
              <a href="https://discord.gg/oor3d" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Join here
              </a>
            </p>
          )}
        </motion.div>

        {/* Discord Tag - Only shown if user is in Discord server */}
        {formData.isInDiscordServer && (
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
              placeholder="username0000"
              required={formData.isInDiscordServer}
            />
            {errors.discordTag && (
              <p className="text-red-400 text-sm mt-1">{errors.discordTag}</p>
            )}
          </motion.div>
        )}

        {/* IMVU Creator Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.225 }}
        >
          <Label htmlFor="isImvuCreator" className={labelClasses}>
            Do you already create on IMVU? <span className="text-red-400">*</span>
          </Label>
          <Select onValueChange={(value) => handleSelectChange('isImvuCreator', value)} value={formData.isImvuCreator ? 'yes' : 'no'}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-[#0A0C13] border-gray-800">
              <SelectItem value="yes" className="text-white hover:bg-gray-800 cursor-pointer">Yes</SelectItem>
              <SelectItem value="no" className="text-white hover:bg-gray-800 cursor-pointer">No</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* IMVU Name - Only shown if user is a creator */}
        {formData.isImvuCreator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Label htmlFor="imvuName" className={labelClasses}>
              IMVU Username <span className="text-red-400">*</span>
            </Label>
            <Input
              id="imvuName"
              name="imvuName"
              type="text"
              value={formData.imvuName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your IMVU username"
              required={formData.isImvuCreator}
            />
            {errors.imvuName && (
              <p className="text-red-400 text-sm mt-1">{errors.imvuName}</p>
            )}
          </motion.div>
        )}

        {/* IMVU Store Link - Only shown if user is a creator */}
        {formData.isImvuCreator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.275 }}
          >
            <Label htmlFor="imvuStoreLink" className={labelClasses}>
              IMVU Store Link <span className="text-red-400">*</span>
            </Label>
            <Input
              id="imvuStoreLink"
              name="imvuStoreLink"
              type="url"
              value={formData.imvuStoreLink}
              onChange={handleChange}
              className={inputClasses}
              placeholder="https://www.imvu.com/shop/..."
              required={formData.isImvuCreator}
            />
            {errors.imvuStoreLink && (
              <p className="text-red-400 text-sm mt-1">{errors.imvuStoreLink}</p>
            )}
          </motion.div>
        )}

        {/* IMVU Platform - Only shown if user is a creator */}
        {formData.isImvuCreator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Label htmlFor="imvuPlatform" className={labelClasses}>
              What do you use to upload the products you create? <span className="text-red-400">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange('imvuPlatform', value)} value={formData.imvuPlatform}>
              <SelectTrigger className={inputClasses}>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0C13] border-gray-800">
                <SelectItem value="IMVU Classic" className="text-white hover:bg-gray-800 cursor-pointer">IMVU Classic</SelectItem>
                <SelectItem value="IMVU Studio" className="text-white hover:bg-gray-800 cursor-pointer">IMVU Studio</SelectItem>
                <SelectItem value="Both" className="text-white hover:bg-gray-800 cursor-pointer">Both</SelectItem>
              </SelectContent>
            </Select>
            {errors.imvuPlatform && (
              <p className="text-red-400 text-sm mt-1">{errors.imvuPlatform}</p>
            )}
          </motion.div>
        )}

        {/* Creation Tools - Only shown if user is a creator */}
        {formData.isImvuCreator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.325 }}
          >
            <Label htmlFor="creationTools" className={labelClasses}>
              What apps/tools do you use to create? <span className="text-red-400">*</span>
            </Label>
            <Input
              id="creationTools"
              name="creationTools"
              type="text"
              value={formData.creationTools}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g., Photoshop, Blender, Maya, 3ds Max..."
              required={formData.isImvuCreator}
            />
            {errors.creationTools && (
              <p className="text-red-400 text-sm mt-1">{errors.creationTools}</p>
            )}
          </motion.div>
        )}

        {/* Skill Level - Only shown if user is a creator */}
        {formData.isImvuCreator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Label htmlFor="skillLevel" className={labelClasses}>
              How would you consider yourself in terms of creation skills? <span className="text-red-400">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange('skillLevel', value)} value={formData.skillLevel}>
              <SelectTrigger className={inputClasses}>
                <SelectValue placeholder="Select your skill level" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0C13] border-gray-800">
                <SelectItem value="beginner" className="text-white hover:bg-gray-800 cursor-pointer">Beginner</SelectItem>
                <SelectItem value="intermediate" className="text-white hover:bg-gray-800 cursor-pointer">Intermediate</SelectItem>
                <SelectItem value="advanced" className="text-white hover:bg-gray-800 cursor-pointer">Advanced</SelectItem>
                <SelectItem value="expert" className="text-white hover:bg-gray-800 cursor-pointer">Expert/Professional</SelectItem>
              </SelectContent>
            </Select>
            {errors.skillLevel && (
              <p className="text-red-400 text-sm mt-1">{errors.skillLevel}</p>
            )}
          </motion.div>
        )}

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.375 }}
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

        {/* Expectations */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.425 }}
        >
          <Label htmlFor="expectations" className={labelClasses}>
            What are you expecting from this early access? <span className="text-red-400">*</span>
          </Label>
          <Textarea
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleChange}
            className={`${inputClasses} min-h-[100px] resize-none`}
            placeholder="Tell us what you're hoping to achieve or experience..."
            required
          />
          {errors.expectations && (
            <p className="text-red-400 text-sm mt-1">{errors.expectations}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.475 }}
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
