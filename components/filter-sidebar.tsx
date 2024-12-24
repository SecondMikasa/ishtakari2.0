'use client'

import { filters } from "@/lib/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function FilterSidebar() {
  return (
    <aside className="space-y-8">
      <Accordion type="multiple" className="w-full">
        {filters.map((filter) => (
          <AccordionItem key={filter.name} value={filter.name}>
            <AccordionTrigger className="text-lg font-medium">
              {filter.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {filter.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={`${filter.name}-${option}`} />
                    <Label htmlFor={`${filter.name}-${option}`}>
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}

