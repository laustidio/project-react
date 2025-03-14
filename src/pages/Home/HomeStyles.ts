export const homeStyles = {
  home: `max-h-screen 
        w-screen 
        p-8 
        pb-20
        grid 
        grid-col-1 //Only one column in mobiles
        md:grid-cols-2 //In medium screens start opening with 2 columns 
        auto-rows-min //Height based on the content
        gap-5 //Space between containers
        justify-center
        overflow-auto`,

  conteiner: `w-full 
        max-w-2xl 
        h-[400px]
        flex 
        flex-col
        border 
        border-white/20 
        bg-white/10 
        backdrop-blur-lg 
        shadow-xl 
        rounded-xl
        relative 
        `,

  title: `text-2xl 
        font-bold 
        text-white 
        p-6 
        border-b 
        border-white/20 
        bg-black/10 
        shrink-0`, // Fixed title

  containerBody: `flex-1 
        p-6 
        overflow-auto 
        space-y-4`,
};
