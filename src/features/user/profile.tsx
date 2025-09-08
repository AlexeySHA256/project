"use client"
import { userStore, useUserStore } from "./store"

export function UserProfile() {
  const user = useUserStore(state => state.user)
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const formData = new FormData(e.currentTarget)
    const username = String(formData.get("name"))
    if (!username) return
    userStore().setName(username)
  }
  return (
    <div className="mt-5 flex items-center justify-center w-full h-full">
      {user ?
        <section className="flex flex-col items-center gap-3">
          <h1 className="text-6xl font-black">Hello, {user.name}</h1>
          <button className="bg-red-500 rounded-lg p-3" onClick={userStore().logout}>Logout</button>
        </section>
        : (
          <form onSubmit={handleSubmit} className="flex gap-5">
            <input name="name" className="bg-white rounded-lg text-black px-3" placeholder="Enter your name" />
            <button className="bg-green-500 rounded-lg p-3">Save</button>
          </form>
        )
      }
    </div>
  )
}
