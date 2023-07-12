import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import SearchBar from '@theme/SearchBar'
import Link from '@docusaurus/Link'
import clsx from 'clsx'

function useNavbarItems() {
  return useThemeConfig().navbar.items
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar()
  const items = useNavbarItems()

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-end">
        <Link href="/" className="flex items-end">
          {/* have to render both light and dark mode icons and hide with css because of useColorMode rehydration issues */}
          {/* https://github.com/facebook/docusaurus/issues/7986 */}
          <img
            src={`/img/icons/webrpc-composite-dark.svg`}
            className="mr-3 dark:block hidden"
          />
          <img
            src={`/img/icons/webrpc-composite-light.svg`}
            className="mr-3 dark:hidden block"
          />
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        {items.map((item, index) => {
          const children = (
            <>
              {/* have to render both light and dark mode icons and hide with css because of useColorMode rehydration issues */}
              {/* https://github.com/facebook/docusaurus/issues/7986 */}
              <img
                className="dark:block hidden"
                alt={`${item.label} logo`}
                src={`/img/icons/${item.label}-icon-dark.svg`}
              />
              <img
                className="dark:hidden block"
                alt={`${item.label} logo`}
                src={`/img/icons/${item.label}-icon-light.svg`}
              />
            </>
          )

          const className = clsx(
            'hover:opacity-50 items-center',
            'mobile-nav:flex hidden'
          )

          if (item.href.startsWith('/')) {
            return (
              <Link key={index} className={className} href={item.href}>
                {children}
              </Link>
            )
          }

          return (
            <a
              key={index}
              className={className}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          )
        })}
        <NavbarColorModeToggle className="mobile-nav:block hidden" />
        <SearchBar />
        <button
          className="shrink-0 border-0 bg-transparent p-0 pr-1 cursor-pointer mobile-nav:hidden block"
          onClick={mobileSidebar.toggle}
        >
          <svg
            className="dark:fill-[#d9d9d9] fill-[#cac8b6]"
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.865723" width="16" height="1" />
            <rect y="7.86572" width="16" height="1" />
          </svg>
        </button>
      </div>
    </div>
  )
}
