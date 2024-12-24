'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Filter } from '@/lib/types'
import { X } from 'lucide-react'

interface FilterDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  filters: Filter[]
  onApplyFilters: (filters: Record<string, any>) => void
}

export function FilterDrawer({ open, onOpenChange, filters, onApplyFilters }: FilterDrawerProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({})

  const handleColorSelect = (color: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      Color: color === prev.Color ? undefined : color
    }))
  }

  const handleSizeSelect = (size: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      Size: size === prev.Size ? undefined : size
    }))
  }

  const handleApply = () => {
    onApplyFilters(selectedFilters)
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="space-y-0 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-normal">FILTERS</SheetTitle>
          </div>
        </SheetHeader>
        
        <div className="space-y-8 py-4">
          {/* Label Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">label</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className={`rounded-full ${
                  selectedFilters.label === 'ISHTAKRI X ABHINAV MISHRA'
                    ? 'bg-black text-white'
                    : ''
                }`}
                onClick={() => setSelectedFilters(prev => ({
                  ...prev,
                  label: 'ISHTAKRI X ABHINAV MISHRA'
                }))}
              >
                ISHTAKRI X ABHINAV MISHRA
              </Button>
            </div>
          </div>

          {/* Color Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">COLOR</h3>
            <div className="grid grid-cols-6 gap-2">
              {['black', 'blue', 'yellow', 'brown', 'green', 'white', 'orange', 'pink', 'lightpink', 'red', 'gray', 'beige', 'gold'].map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`h-8 w-8 rounded-full border ${
                    selectedFilters.Color === color
                      ? 'ring-2 ring-black ring-offset-2'
                      : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">SIZE</h3>
            <div className="flex flex-col gap-2">
              {['36', '37', '38', '39', '40', '41'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`text-left py-2 ${
                    selectedFilters.Size === size
                      ? 'font-medium'
                      : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-black text-white hover:bg-black/90"
          onClick={handleApply}
        >
          APPLY
        </Button>
      </SheetContent>
    </Sheet>
  )
}

