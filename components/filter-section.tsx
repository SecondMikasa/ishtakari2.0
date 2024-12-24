'use client'

import { useState } from 'react'
import { Filter } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'

interface FilterSectionProps {
  filters: Filter[]
  onFilterChange: (filters: Record<string, any>) => void
}

export function FilterSection({ filters, onFilterChange }: FilterSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({})

  const handleFilterChange = (name: string, value: any) => {
    const newFilters = { ...activeFilters, [name]: value }
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="space-y-8">
      {filters.map((filter) => (
        <div key={filter.name} className="space-y-4">
          <h3 className="font-semibold">{filter.name}</h3>
          {filter.type === 'select' && (
            <RadioGroup
              onValueChange={(value) => handleFilterChange(filter.name, value)}
              className="flex flex-wrap gap-2"
            >
              {filter.options?.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${filter.name}-${option}`} />
                  <Label htmlFor={`${filter.name}-${option}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
          {filter.type === 'range' && filter.range && (
            <div className="space-y-2">
              <Slider
                min={filter.range.min}
                max={filter.range.max}
                step={100}
                onValueChange={(value) => handleFilterChange(filter.name, value)}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹{filter.range.min}</span>
                <span>₹{filter.range.max}</span>
              </div>
            </div>
          )}
          {filter.type === 'color' && (
            <div className="flex flex-wrap gap-2">
              {filter.options?.map((color) => (
                <Button
                  key={color}
                  variant="outline"
                  className="w-8 h-8 p-0 rounded-full"
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleFilterChange(filter.name, color)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
      <Button 
        onClick={() => {
          setActiveFilters({})
          onFilterChange({})
        }}
        variant="outline"
      >
        Clear Filters
      </Button>
    </div>
  )
}

