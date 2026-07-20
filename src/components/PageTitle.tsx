'use client'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

interface PageTitleProps {
    heading: string
    text: string
    path?: string
    linkText: string
}

const PageTitle = ({ heading, text, path = "/shop", linkText }: PageTitleProps) => {
    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold text-slate-800">{heading}</h2>
            <div className="flex items-center gap-3 mt-1">
                <p className="text-slate-500">{text}</p>
                <Link href={path} className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
                    {linkText} <ArrowRightIcon size={14} />
                </Link>
            </div>
        </div>
    )
}

export default PageTitle