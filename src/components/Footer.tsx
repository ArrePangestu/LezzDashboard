import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Disclosure as="nav" className="bg-black">
            <Fragment>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                            <p className="text-white">Copyright &copy; {currentYear} lezzform.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        </Disclosure>
    )
}
