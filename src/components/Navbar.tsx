import NavLink from "./NavLink.tsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Menu, X} from "lucide-react";

const Navbar = () => {
    return (
        <>
            <div className="w-full fixed hidden md:flex flex-row py-5 px-12 items-center gap-40 border-b border-b-black">
                <div className="w-1/3">
                    <img src="/fox.png" alt="fox icon" className="w-10 h-10"/>
                </div>

                <div className="w-1/3 flex flex-row justify-center gap-8">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#tech">Technologies</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </div>

                <div className="w-1/3 flex flex-row items-center justify-center gap-4">
                    <img src="/theme.png" alt="theme toggle" className="w-10 h-10"/>
                    <p>EN</p>
                </div>
            </div>

            <div className="md:hidden">
                <Disclosure as="div" className="relative border-b border-b-black flex flex-row justify-between px-5 py-2 items-center">
                    <div className="w-1/3">
                        <img src="/fox.png" alt="fox icon" className="w-7 h-7"/>
                    </div>
                    <DisclosureButton className="cursor-pointer m-2">
                        {({open}) => open ? <X /> : <Menu />}
                    </DisclosureButton>
                    <DisclosurePanel className="absolute top-full left-0 w-full bg-white border-b border-b-black">
                        {({close}) => (
                            <div className="flex flex-col text-center gap-1" onClick={() => close()}>
                                <NavLink href="#about">About</NavLink>
                                <NavLink href="#skills">Skills</NavLink>
                                <NavLink href="#projects">Projects</NavLink>
                                <NavLink href="#tech">Technologies</NavLink>
                                <NavLink href="#contacts">Contacts</NavLink>
                            </div>)}
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    )
}

export default Navbar;