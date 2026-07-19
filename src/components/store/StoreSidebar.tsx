'use client'
import { usePathname } from "next/navigation"
import { HomeIcon, LayoutListIcon, SquarePenIcon, SquarePlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const StoreSidebar = () => {

    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            router.replace("/");
            router.refresh(); // Refreshes the app so Navbar/Auth state updates
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

    const sidebarLinks = [
        { name: 'Dashboard', href: '/store', icon: HomeIcon },
        { name: 'Add Product', href: '/store/add-product', icon: SquarePlusIcon },
        { name: 'Manage Product', href: '/store/manage-product', icon: SquarePenIcon },
        { name: 'Orders', href: '/store/orders', icon: LayoutListIcon },
    ]



    return (
        <div className="inline-flex h-full flex-col gap-5 items-center border-r border-slate-200 sm:min-w-60">

            <div className="max-sm:mt-6">
                {
                    sidebarLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={`relative flex items-center gap-3 text-slate-500 hover:bg-slate-50 p-2.5 transition ${pathname === link.href && 'bg-slate-100 sm:text-slate-600'}`}>
                            <link.icon size={18} className="sm:ml-5" />
                            <p className="max-sm:hidden">{link.name}</p>
                            {pathname === link.href && <span className="absolute bg-green-500 right-0 top-1.5 bottom-1.5 w-1 sm:w-1.5 rounded-l"></span>}
                        </Link>
                    ))
                }
                <button
                    onClick={handleLogout}
                    className=" w-full px-4 py-2 mt-4 bg-red-500 text-white hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default StoreSidebar