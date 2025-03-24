import Link from 'next/link';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DrawerNavitionLeft({ isOpen, onClose }: DrawerProps) {
    return (
        <div >
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-0 transition-opacity ${isOpen ? 'opacity-25' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
            <div className={`fixed top-0 left-0 w-64 h-full z-1 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full' }`}
                onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside the drawer */}
                
                <div className="p-4">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        Close
                    </button>
                </div>
                <nav className="mt-4">
                    <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                        Home
                    </Link>
                    <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                        Products
                    </Link>
                    <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                        About
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}