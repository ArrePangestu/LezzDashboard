import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-black">
            <Fragment>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="image/logo.jpg"
                                    alt="lezzlogo"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <a href="#" className='text-white'>Sign in</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Disclosure>
    )
}
