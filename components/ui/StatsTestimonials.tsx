export interface Props {
  leftSide: {
    title: string;
    description?: string;
    blockquote?: string;
  };
  rightSide: {
    items?: {
      label: string;
      description: string;
    }[];
  };
}

export default function StatsTestimonials({ leftSide, rightSide }: Props) {
  if (!leftSide && !rightSide) return null;

  return (
    <div class="max-w-[90%] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div class="lg:col-span-5 lg:col-start-1">
          <div class="mb-8">
            <h2 class="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
              {leftSide.title}
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              {leftSide.description}
            </p>
          </div>

          {leftSide.blockquote && (
            <blockquote class="relative">
              <svg
                class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div class="relative z-10">
                <p class="text-xl italic text-gray-800 dark:text-white">
                  {leftSide.blockquote}
                </p>
              </div>
            </blockquote>
          )}
        </div>

        <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div class="space-y-6 sm:space-y-8">
            <ul class="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
              {rightSide.items?.map((item) => (
                <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    {item.label}
                  </div>
                  <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
