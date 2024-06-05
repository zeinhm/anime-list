const StaticJumbotron: React.FC = () => {
  return (
    <div className="bg-[url('/images/attack-on-titan.jpg')] bg-cover bg-center rounded-2xl w-full h-[400px]">
      <div className="w-full h-full bg-cover rounded-lg">
        <div className="w-[300px] max-w-[100%] h-full flex flex-col bg-darken-horizontal justify-end p-8 gap-4 relative">
          <div className="text-4xl font-bold text-red-600">進撃の巨人</div>
          <div className="text-2xl">Attack On Titan</div>
          <div className="px-2 py-1 border border-gray-400 bg-black max-w-fit rounded-full text-xs">
            Story
          </div>
          <div className="text-xs text-ellipsis line-clamp-6">
            Gabi Braun and Falco Grice have been training their entire lives to
            inherit one of the seven Titans under Marley&apos;s control and aid
            their nation in eradicating the Eldians on Paradis. However, just as
            all seems well for the two cadets, their peace is suddenly shaken by
            the arrival of Eren Yeager and the remaining members of the Survey
            Corps.\n\nHaving finally reached the Yeager family basement and
            learned about the dark history surrounding the Titans, the Survey
            Corps has at long last found the answer they so desperately fought
            to uncover. With the truth now in their hands, the group set out for
            the world beyond the walls.\n\nIn Shingeki no Kyojin: The Final
            Season, two utterly different worlds collide as each party pursues
            its own agenda in the long-awaited conclusion to Paradis&apos; fight
            for freedom.\n\n[Written by MAL Rewrite]
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticJumbotron;
