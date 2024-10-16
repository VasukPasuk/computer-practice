"use client"
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import NavDrawer from "@/components/custom/NavDrawer";
import {MdMenu} from "react-icons/md";

function ResponsiveNavDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <MdMenu className="text-2xl"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <NavDrawer/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default ResponsiveNavDrawer;