import { I18nProviderClient } from "../../../../locales/client"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{margin: 0}}>
        <I18nProviderClient>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  )
}
