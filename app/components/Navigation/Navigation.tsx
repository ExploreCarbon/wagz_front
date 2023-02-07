import logo from "../../../public/logo.png";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "@remix-run/react";

export default function Navigation(menu) {
  const [open, setOpen] = useState(false);
  // record the current scroll position
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  // listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      // set the current scroll depth

      setNavbarColor("bg-transparent");
      if (window.scrollY > 80) {
        setNavbarColor("bg-white shadow-md");
      }
    };
    // add the scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    // clean up the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full max-w-[1900px]">
      {menu && (
        <div className={`${navbarColor}  duration-400 transition-all`}>
          {/* Mobile menu */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setOpen}
            >
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
                        className="text-gray-400 -m-2 inline-flex items-center justify-center rounded-md p-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="border-gray-200 space-y-6 border-t py-6 px-4">
                      {menu?.menu?.map((obj) => (
                        <div key={obj.id} className="flow-root">
                          <Link
                            to={obj.path}
                            className="text-gray-900 -m-2 block p-2 font-medium"
                          >
                            {obj.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <header className="relative">
            <nav
              aria-label="Top"
              className="max-w-9xl container mx-auto px-4 lg:px-8"
            >
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center lg:hidden">
                    <button
                      type="button"
                      className="text-gray-400 -ml-2 rounded-md bg-white p-2"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* Logo */}
                  <div className="flex flex-1 justify-center lg:justify-start">
                    <Link to="/" className="flex">
                      <span className="sr-only">Wagz</span>
                      <img className="h-16 w-auto" src={logo} alt="" />
                    </Link>
                  </div>

                  {/* Flyout menus */}
                  <Popover.Group className="hidden lg:block lg:self-stretch">
                    <div className="flex h-full gap-4">
                      {menu?.menu?.map((obj) => (
                        <Link
                          key={obj.id}
                          to={obj.path}
                          className="navigation_link flex items-center"
                          prefetch="intent"
                        >
                          {obj.label}
                        </Link>
                      ))}
                    </div>
                  </Popover.Group>

                  <div className="flex items-center justify-end">
                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                      <button
                        type="button"
                        className="group -m-2 flex items-center p-2"
                      >
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-primary group-hover:text-primary-dark"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-primary group-hover:text-primary-dark">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
}
