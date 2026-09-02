import type { ToolCategory } from "../data/toolData";

type ToolCardProps = {
  category: ToolCategory;
};

export default function ToolCard({ category }: ToolCardProps) {
  const CategoryIcon = category.icon;

  return (
    <div
      className={`
        group
        rounded-2xl
        p-[1.5px]
        ${category.gradient}
        ${category.glow}
        transition-all
        duration-500
      `}
    >
      <div className="h-full rounded-[15px] bg-[#080b0f]/95 p-6 md:p-7">

        {/* Header */}
        <div className="flex items-start justify-between mb-7">

          <div className="flex items-center gap-4">

            <div
              className={`
                w-12 h-12
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                flex items-center justify-center
                ${category.accent}
                group-hover:bg-white/[0.06]
                transition-all
                duration-300
              `}
            >
              <CategoryIcon className="text-xl" />
            </div>

            <div>
              <p
                className={`
                  text-[10px]
                  tracking-[0.3em]
                  uppercase
                  ${category.accent}
                  mb-1
                `}
              >
                {category.number}
              </p>

              <h2 className="text-lg md:text-xl font-semibold text-white">
                {category.title}
              </h2>
            </div>

          </div>

          <span className={`hidden sm:block text-xs ${category.accent} font-mono`}>
            {category.code}
          </span>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.07] mb-5" />

        {/* Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {category.tools.map((tool) => {

            const ToolIcon = tool.icon;

            return (
              <div
                key={tool.name}
                className="
                  group/tool
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  hover:bg-white/[0.05]
                  hover:border-white/15
                  transition-all
                  duration-300
                "
              >

                <ToolIcon
                  className={`
                    text-lg
                    ${category.accent}
                    opacity-80
                    group-hover/tool:opacity-100
                    transition-opacity
                  `}
                />

                <span
                  className="
                    text-sm
                    text-gray-400
                    group-hover/tool:text-white
                    transition-colors
                  "
                >
                  {tool.name}
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}