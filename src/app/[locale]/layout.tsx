
import React, { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.scss'
import Header from '@/Components/Header/page'
import { I18nProviderClient } from '../../../locales/client'
import { useI18n } from '../../../locales/client'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Головна',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: 
  { children: React.ReactNode,  
}) {
 
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/favicon-tea-leaf.png" />
      </head>
      <body className={inter.className}>
        <I18nProviderClient>
          <Header />
          {children}
        </I18nProviderClient>
      </body>
    </html>
  )
}