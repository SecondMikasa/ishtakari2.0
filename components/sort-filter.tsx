'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterDrawer } from "@/components/filter-drawer"
import { Filter } from "@/lib/types"

interface SortFilterProps {
  filters: Filter[]
  onSortChange: (value: string) => void
  onFilterChange: (filters: Record<string, any>) => void
}

export function SortFilter({ filters, onSortChange, onFilterChange }: SortFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="flex justify-between items-center mb-6">
      <Button variant="outline" onClick={() => setIsFilterOpen(true)}>
        Filter
      </Button>
      <Select onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="name-asc">Name: A to Z</SelectItem>
          <SelectItem value="name-desc">Name: Z to A</SelectItem>
        </SelectContent>
      </Select>
      <FilterDrawer
        open={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        filters={filters}
        onApplyFilters={onFilterChange}
      />
    </div>
  )
}

