export const homeStyles = {
  home: `
        grid
        grid-col-1 //Only one column in mobiles
        sm:grid-cols-2
        md:grid-cols-2 //In medium screens start opening with 2 columns
        gap-3 //Space between containers
        p-4
        overflow-auto
        `,

  conteiner:
    ` w-full
        p-4
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
