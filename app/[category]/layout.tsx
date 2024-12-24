import { SiteHeader } from "@/components/site-header"

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

