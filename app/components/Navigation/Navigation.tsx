import logo from "../../../public/logo.png";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	ShoppingBagIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
	pages: [
		{ name: "Company", href: "#" },
		{ name: "Stores", href: "#" },
	],
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex px-4 pt-5 pb-2">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								<div className="space-y-6 border-t border-gray-200 py-6 px-4">
									{navigation.pages.map((page) => (
										<div key={page.name} className="flow-root">
											<a
												href={page.href}
												className="-m-2 block p-2 font-medium text-gray-900"
											>
												{page.name}
											</a>
										</div>
									))}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative bg-white shadow-md">
				<nav
					aria-label="Top"
					className="container mx-auto max-w-9xl px-4 sm:px-6 lg:px-16"
				>
					<div className="">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center lg:hidden">
								<button
									type="button"
									className="-ml-2 rounded-md bg-white p-2 text-gray-400"
									onClick={() => setOpen(true)}
								>
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							{/* Logo */}
							<div className="flex-1 flex justify-center lg:justify-start">
								<a href="/" className="flex">
									<span className="sr-only">Wagz</span>
									<img className="h-16 w-auto" src={logo} alt="" />
								</a>
							</div>

							{/* Flyout menus */}
							<Popover.Group className="hidden lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									{navigation.pages.map((page) => (
										<a
											key={page.name}
											href={page.href}
											className="flex items-center navigation_link"
										>
											{page.name}
										</a>
									))}
								</div>
							</Popover.Group>

							<div className="flex items-center justify-end">
								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<a href="#" className="group -m-2 flex items-center p-2">
										<ShoppingBagIcon
											className="h-6 w-6 flex-shrink-0 text-primary group-hover:text-primary-dark"
											aria-hidden="true"
										/>
										<span className="ml-2 text-sm font-medium text-primary group-hover:text-primary-dark">
											0
										</span>
										<span className="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
