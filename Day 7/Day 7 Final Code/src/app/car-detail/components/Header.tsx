"use client"
import Link from "next/link";
import { Bell, Heart, Search, Settings, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import car from "./car";

export default function Header() {
    const [cartItems, setCartItems] = useState<{ name: string }[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Function to add item to cart
    const addToCart = (item: { name: string; }) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold text-primary">
                    MORENT
                </Link>

                {/* Search */}
                <div className="hidden md:block relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search something here"
                        className="w-[400px] pl-9 pr-4"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Link href= "/cart"> <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button></Link> 
                    <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>

                    {/* Cart Button with Dropdown */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => addToCart(car)}
                        >
                            <ShoppingCart className="h-6 w-6" />
                        </Button>
                        {/* Cart Dropdown */}
                        {isCartOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                                <h3 className="font-bold">Cart Items</h3>
                                {cartItems.length > 0 ? (
                                    <ul>
                                        {cartItems.map((item, index) => (
                                            <li key={index} className="border-b py-2">
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">Cart is empty</p>
                                )}
                            </div>
                        )}
                    </div>

                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Image
                            src="/Profil.png?height=2000&width=2000"
                            alt="Sports car"
                            width={2000}
                            height={2000}
                        />
                    </Button>
                </div>
            </div>
        </header>
    );
}