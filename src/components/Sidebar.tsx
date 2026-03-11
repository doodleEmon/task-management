import Link from "next/link";

const SidebarComp = () => {
  return (
    <div>
      <ul className="flex flex-col gap-3 mt-2 p-2">
        <Link href={'/'}><li className="bg-gray-700 p-2 font-bold rounded">Tasks</li></Link>
        <Link href={'/users'}><li className="bg-gray-700 p-2 font-bold rounded">Users</li></Link>
      </ul>
    </div>
  )
}

export default SidebarComp;
