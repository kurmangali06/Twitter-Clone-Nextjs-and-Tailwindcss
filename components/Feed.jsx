import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Kurmagali Kussainov",
      username: "grozaabotov",
      userImage: "https://sun9-66.userapi.com/impf/c856136/v856136123/a2d35/0ik-LMKxfpE.jpg?size=453x604&quality=96&sign=da3fdc05d52a7d43b2649982ff0f5906&type=album",
      img: "https://images.unsplash.com/photo-1664303162716-3c8fcc7e8682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text:"nice view!",
      timestamp: "2 hours ago"    
    },
    {
      id: "2",
      name: "Kurmagali Kussainov",
      username: "grozaabotov",
      userImage: "https://sun9-66.userapi.com/impf/c856136/v856136123/a2d35/0ik-LMKxfpE.jpg?size=453x604&quality=96&sign=da3fdc05d52a7d43b2649982ff0f5906&type=album",
      img: "https://images.unsplash.com/photo-1664337143723-f612a8d68408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      text:"wow!",
      timestamp: "2 day ago"    
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm: ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5"/>
        </div>
      </div>
      <Input/>
      {
        posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))
      }
    </div>
  )
}

export default Feed