
export default function Projects() {


    interface Project {
        name: string;
        description: string;
        image_path: string;
        deployed_url: string;
        github_url: string;
        key_techs: string[];
    }
    
    
    const projects : Project[] =[
        {
            name:'PDF-Chat Saas',
            description:"Interactive Discussion with Pdf using Gen-AI , *Under Development",
            deployed_url:"NA",
            github_url:"https://github.com/sahiltambe18/pdf-buddy",
            key_techs:['NextJS',"Google GenAI",'tRPC','Postgresql'],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1717393579/vdkfgsrvihow3b14bd1j.png"
        },
        {
            name:'video-chat-app',
            description:"one to one video calling website",
            deployed_url:"https://video-chat-sahil.onrender.com/",
            github_url:"https://github.com/sahiltambe18/video-chat-app",
            key_techs:['ReactJS',"Socket.io",'Peerjs'],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184199/video-chat_t90kla.png"
        },
        {
            name:'google-search-clone',
            description:"google search , images , videos clone",
            deployed_url:"https://google-clone-sahil.onrender.com/",
            github_url:"https://github.com/sahiltambe18/google-home-page/",
            key_techs:['ReactJS',"Google APIs"],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/google-clone_xlotn8.png"
        },
        {
            name:'E-commerce-Website',
            description:"fully SSR E-commerce website",
            deployed_url:"https://sahil-ecommerce-website.onrender.com/",
            github_url:"https://github.com/sahiltambe18/Ecommers-website",
            key_techs:['ExpressJs','mongoDB','stripe'],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696263017/ecommerce_xobyjw.png"
        },
        {
            name:'React-dashboard',
            description:"react product analysis dashboard ",
            deployed_url:"https://dashboard-ui-sahil.onrender.com/",
            github_url:"https://github.com/sahiltambe18/dashboard",
            key_techs:['ReactJS',"Tailwind CSS"],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/dashboard_jipiya.png"
        },
        {
            name:'food-ordering website UI',
            description:"food-ordering website UI",
            deployed_url:"https://food-app-ui.onrender.com/",
            github_url:"https://github.com/sahiltambe18/food-ordering-app/",
            key_techs:['ReactJS',"CSS modules"],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184199/food-ui_nayd0a.png"
        },
        {
            name:'Tab-saver-extension',
            description:"chrome extension for saving tabs and urls",
            deployed_url:"NA",
            github_url:"https://github.com/sahiltambe18/tab-saver",
            key_techs:["javascript"],
            image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/chrome-extn_lnfedd.png"
        },
    ]

  return (
    <div>Projects</div>
  )
}
