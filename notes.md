Tailwind setup:
1. npm init -y
2. npm install -D tailwindcss postcss autoprefixer vite
3. npx tailwindcss init -p
4. package.json -> "test" -> "dev" and "..." -> "vite"
5. create folder css/tailwind.css
6. npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css
7. npx tailwindcss -i css/tailwind.css -o build/tailwind.css --watch (when you want to custom more built-in style in tailwind, you have to rerun the build command ! (--watch) will auto update new style without rerun the command)
8. npm run dev

Cores:
1. Tailwind is developed following the Mobile First trend
2. Responsive breakpoint in Tailwind: {
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
}
3. If you want a hover effect on a child when moving ur your to its parent, use the class "group" for the parent and the class "group-*:tailwind-class". * can be ["hover", "focus", ...] and in this case, * will be "hover"
4. use before and after like this:
  <div before="" class="before:content-[attr(before)] before:absolute before:...">
  </div>

Tips:
1. you can call directly like text-[#ffa400] in tailwind v.3 (Remember to config content key in tailwind config file)
2. inset-0 means top, left, right, bottom 0
3. bg-current will take the current color based on the text color

