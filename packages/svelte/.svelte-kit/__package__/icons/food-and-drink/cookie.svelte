<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 13v.01M12 17v.01M12 12v.01M16 14v.01M11 8v.01m2.148-4.534 2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296Q19.78 14.328 19.5 15q-.282.684-.66 2.216a3 3 0 0 1-1.624 1.623q-1.572.394-2.216.661-.712.295-1.852 1.024a3 3 0 0 1-2.296 0Q9.65 19.77 9 19.5q-.707-.292-2.216-.66a3 3 0 0 1-1.623-1.624q-.397-1.577-.66-2.216-.299-.718-1.025-1.852a3 3 0 0 1 0-2.296Q4.196 9.736 4.5 9q.258-.62.66-2.216a3 3 0 0 1 1.624-1.623Q8.332 4.777 9 4.5q.688-.285 1.852-1.024a3 3 0 0 1 2.296 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
